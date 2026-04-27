"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { allSpells } from "@/data/spells";
import type { Spell, SpellSchool } from "@/data/types";
import { Badge, schoolBadgeVariant } from "@/components/ui/badge";
import { t } from "@/lib/utils";

const schools: SpellSchool[] = [
  "fire",
  "ice",
  "lightning",
  "wind",
  "radiant",
  "necrotic",
  "utility",
];

export function SpellsClient({ locale }: { locale: string }) {
  const [query, setQuery] = useState("");
  const [school, setSchool] = useState<SpellSchool | "">("");
  const [tier, setTier] = useState<number | "">("");
  const [expanded, setExpanded] = useState<string | null>(null);
  const tc = useTranslations("common");
  const ts = useTranslations("spells");
  const q = query.toLowerCase();

  const filtered = allSpells.filter((s) => {
    if (q && !t(s.name, locale).toLowerCase().includes(q)) return false;
    if (school && s.school !== school) return false;
    if (tier !== "" && s.tier !== tier) return false;
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
            onClick={() => setSchool("")}
            className={`rounded-full px-3 py-1 text-sm transition-colors ${
              !school
                ? "bg-accent text-background font-medium"
                : "bg-surface text-muted hover:text-foreground"
            }`}
          >
            {tc("all")}
          </button>
          {schools.map((s) => (
            <button
              key={s}
              onClick={() => setSchool(s)}
              className={`rounded-full px-3 py-1 text-sm transition-colors ${
                school === s
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
            onClick={() => setTier("")}
            className={`rounded-full px-3 py-1 text-sm transition-colors ${
              tier === ""
                ? "bg-accent text-background font-medium"
                : "bg-surface text-muted hover:text-foreground"
            }`}
          >
            {tc("all")}
          </button>
          {tiers.map((ti) => (
            <button
              key={ti}
              onClick={() => setTier(ti)}
              className={`rounded-full px-3 py-1 text-sm transition-colors ${
                tier === ti
                  ? "bg-accent text-background font-medium"
                  : "bg-surface text-muted hover:text-foreground"
              }`}
            >
              {ti === 0 ? tc("cantrip") : `T${ti}`}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 && (
        <p className="text-muted">{tc("noResults")}</p>
      )}

      <div className="space-y-2">
        {filtered.map((spell) => (
          <SpellCard
            key={spell.id}
            spell={spell}
            locale={locale}
            isExpanded={expanded === spell.id}
            onToggle={() =>
              setExpanded(expanded === spell.id ? null : spell.id)
            }
          />
        ))}
      </div>
    </>
  );
}

function SpellCard({
  spell,
  locale,
  isExpanded,
  onToggle,
}: {
  spell: Spell;
  locale: string;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const ts = useTranslations("spells");
  const tc = useTranslations("common");

  return (
    <div className="rounded-lg border border-border bg-surface p-4">
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between text-left"
        aria-expanded={isExpanded}
      >
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-semibold text-foreground">
            {t(spell.name, locale)}
          </h3>
          <Badge variant={schoolBadgeVariant(spell.school)}>
            {ts(`schools.${spell.school}`)}
          </Badge>
          <Badge variant="default">
            {spell.tier === 0 ? tc("cantrip") : `T${spell.tier}`}
          </Badge>
          {spell.concentration && (
            <Badge variant="default">{ts("concentration")}</Badge>
          )}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`mt-0.5 shrink-0 text-muted transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
        <span>
          {ts("castingTime")}:{" "}
          {spell.castingTime === 0
            ? "Special"
            : `${spell.castingTime} action${spell.castingTime > 1 ? "s" : ""}`}
        </span>
        <span>
          {tc("range")}: {t(spell.range, locale)}
        </span>
        {spell.damage && (
          <span>
            {tc("damage")}: {t(spell.damage, locale)}
          </span>
        )}
      </div>

      {isExpanded && (
        <div className="mt-3 space-y-2 border-t border-border/50 pt-3 text-sm">
          <p className="text-foreground">{t(spell.effects, locale)}</p>
          {spell.saveType && (
            <p className="text-muted">
              {ts("saveType")}: {spell.saveType}
            </p>
          )}
          {spell.upcast && (
            <p className="text-muted">
              {ts("upcast")}: {t(spell.upcast, locale)}
            </p>
          )}
          {spell.classRestriction && (
            <p className="text-muted">
              {ts("classRestriction")}: {t(spell.classRestriction, locale)}
            </p>
          )}
          {spell.damageType && (
            <p className="text-muted">
              {tc("damage")}: {t(spell.damageType, locale)}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
