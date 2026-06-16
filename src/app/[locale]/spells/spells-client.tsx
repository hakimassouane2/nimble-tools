"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { allSpells } from "@/data/spells";
import type { Spell, SpellSchool } from "@/data/types";
import { Badge, schoolBadgeVariant } from "@/components/ui/badge";
import { RichText } from "@/components/ui/rich-text";
import { t, stripMarkup } from "@/lib/utils";

const schools: SpellSchool[] = [
  "fire",
  "ice",
  "lightning",
  "wind",
  "radiant",
  "necrotic",
];

export function SpellsClient({ locale }: { locale: string }) {
  const [query, setQuery] = useState("");
  const [selectedSchools, setSelectedSchools] = useState<SpellSchool[]>([]);
  const [selectedTiers, setSelectedTiers] = useState<number[]>([]);
  const [utilityOnly, setUtilityOnly] = useState(false);
  const tc = useTranslations("common");
  const ts = useTranslations("spells");
  const q = query.toLowerCase();

  const toggleSchool = (s: SpellSchool) =>
    setSelectedSchools((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  const toggleTier = (ti: number) =>
    setSelectedTiers((prev) =>
      prev.includes(ti) ? prev.filter((x) => x !== ti) : [...prev, ti]
    );

  const filtered = allSpells.filter((s) => {
    if (q && !t(s.name, locale).toLowerCase().includes(q) && !stripMarkup(t(s.effects, locale)).toLowerCase().includes(q)) return false;
    if (selectedSchools.length > 0 && !selectedSchools.includes(s.school))
      return false;
    if (selectedTiers.length > 0 && !selectedTiers.includes(s.tier))
      return false;
    if (utilityOnly && !s.utility) return false;
    return true;
  });

  const tiers = Array.from(new Set(allSpells.map((s) => s.tier))).sort(
    (a, b) => a - b
  );

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={tc("search")}
        className="w-full rounded-lg border border-border bg-surface py-2 pl-3 pr-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
      />

      <div className="space-y-2">
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setSelectedSchools([])}
            className={`rounded-full px-3 py-1 text-sm transition-colors ${
              selectedSchools.length === 0
                ? "bg-accent text-background font-medium"
                : "bg-surface text-muted hover:text-foreground"
            }`}
          >
            {tc("all")}
          </button>
          {schools.map((s) => (
            <button
              key={s}
              onClick={() => toggleSchool(s)}
              className={`rounded-full px-3 py-1 text-sm transition-colors ${
                selectedSchools.includes(s)
                  ? "bg-accent text-background font-medium"
                  : "bg-surface text-muted hover:text-foreground"
              }`}
            >
              {ts(`schools.${s}`)}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setSelectedTiers([])}
            className={`rounded-full px-3 py-1 text-sm transition-colors ${
              selectedTiers.length === 0
                ? "bg-accent text-background font-medium"
                : "bg-surface text-muted hover:text-foreground"
            }`}
          >
            {tc("all")}
          </button>
          {tiers.map((ti) => (
            <button
              key={ti}
              onClick={() => toggleTier(ti)}
              className={`rounded-full px-3 py-1 text-sm transition-colors ${
                selectedTiers.includes(ti)
                  ? "bg-accent text-background font-medium"
                  : "bg-surface text-muted hover:text-foreground"
              }`}
            >
              {ti === 0 ? tc("cantrip") : tc("tierShort", { n: ti })}
            </button>
          ))}
          <span className="mx-1 self-stretch border-l border-border" aria-hidden />
          <button
            onClick={() => setUtilityOnly((v) => !v)}
            aria-pressed={utilityOnly}
            className={`rounded-full px-3 py-1 text-sm transition-colors ${
              utilityOnly
                ? "bg-utility/20 text-utility font-medium"
                : "bg-surface text-muted hover:text-foreground"
            }`}
          >
            {ts("schools.utility")}
          </button>
        </div>
      </div>

      {filtered.length === 0 && (
        <p className="text-muted">{tc("noResults")}</p>
      )}

      <div className="space-y-3">
        {filtered.map((spell) => (
          <SpellCard key={spell.id} spell={spell} locale={locale} />
        ))}
      </div>
    </>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-wrap gap-x-1 text-sm">
      <span className="font-medium text-muted">{label}:</span>
      <span className="text-foreground">{value}</span>
    </div>
  );
}

function SpellCard({ spell, locale }: { spell: Spell; locale: string }) {
  const ts = useTranslations("spells");
  const tc = useTranslations("common");

  return (
    <div className="rounded-lg border border-border bg-surface p-4">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="font-semibold text-foreground">
          {t(spell.name, locale)}
        </h3>
        <Badge variant={schoolBadgeVariant(spell.school)}>
          {ts(`schools.${spell.school}`)}
        </Badge>
        {spell.utility && (
          <Badge variant="utility">{ts("schools.utility")}</Badge>
        )}
        <Badge variant="default">
          {spell.tier === 0 ? tc("cantrip") : tc("tierShort", { n: spell.tier })}
        </Badge>
        {spell.concentration && (
          <Badge variant="default">{ts("concentration")}</Badge>
        )}
        {spell.oncePerWeek && (
          <Badge variant="default">{ts("oncePerWeek")}</Badge>
        )}
        {spell.classRestriction && (
          <Badge variant="default">{t(spell.classRestriction, locale)}</Badge>
        )}
      </div>

      <div className="mt-3 grid grid-cols-1 gap-x-4 gap-y-1 sm:grid-cols-2">
        <MetaRow
          label={ts("castingTime")}
          value={t(spell.castingTime, locale)}
        />
        <MetaRow label={ts("target")} value={t(spell.targetType, locale)} />
        {t(spell.range, locale) && (
          <MetaRow label={tc("range")} value={t(spell.range, locale)} />
        )}
        {spell.damage && (
          <MetaRow label={tc("damage")} value={t(spell.damage, locale)} />
        )}
        {spell.saveType && (
          <MetaRow label={ts("saveType")} value={spell.saveType} />
        )}
        {spell.concentrationDuration && (
          <MetaRow
            label={ts("concentrationDuration")}
            value={t(spell.concentrationDuration, locale)}
          />
        )}
      </div>

      <RichText
        text={t(spell.effects, locale)}
        className="mt-3 block text-sm leading-relaxed text-foreground"
      />

      {spell.highLevels && (
        <div className="mt-3 rounded-md border border-border/50 bg-background/50 p-2 text-sm">
          <span className="font-medium text-muted">{ts("highLevels")}:</span>{" "}
          <RichText text={t(spell.highLevels, locale)} className="text-foreground" />
        </div>
      )}

      {spell.upcast && (
        <div className="mt-2 rounded-md border border-border/50 bg-background/50 p-2 text-sm">
          <span className="font-medium text-muted">{ts("upcast")}:</span>{" "}
          <RichText text={t(spell.upcast, locale)} className="text-foreground" />
        </div>
      )}
    </div>
  );
}
