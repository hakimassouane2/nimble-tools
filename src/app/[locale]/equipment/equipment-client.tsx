"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { armor } from "@/data/equipment/armor";
import { meleeWeapons } from "@/data/equipment/melee-weapons";
import { rangedWeapons } from "@/data/equipment/ranged-weapons";
import { adventuringGear } from "@/data/equipment/adventuring-gear";
import { magicalItems, wands } from "@/data/equipment/magical-items";
import { Badge, rarityBadgeVariant } from "@/components/ui/badge";
import { t, tArmorCategory, tWeaponProperty, tRarity, tCost, tDamage } from "@/lib/utils";

type Tab = "armor" | "melee" | "ranged" | "gear" | "magical";

export function EquipmentClient({ locale }: { locale: string }) {
  const [tab, setTab] = useState<Tab>("armor");
  const [query, setQuery] = useState("");
  const te = useTranslations("equipment");
  const tc = useTranslations("common");
  const q = query.toLowerCase();

  const tabs: { key: Tab; label: string }[] = [
    { key: "armor", label: te("armor") },
    { key: "melee", label: te("meleeWeapons") },
    { key: "ranged", label: te("rangedWeapons") },
    { key: "gear", label: te("adventuringGear") },
    { key: "magical", label: te("magicalItems") },
  ];

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={tc("search")}
        className="w-full rounded-lg border border-border bg-surface py-2 pl-3 pr-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
      />

      <div className="flex flex-wrap gap-1.5">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`rounded-full px-3 py-1 text-sm transition-colors ${
              tab === t.key
                ? "bg-accent text-background font-medium"
                : "bg-surface text-muted hover:text-foreground"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "armor" && <ArmorTable locale={locale} query={q} />}
      {tab === "melee" && <MeleeTable locale={locale} query={q} />}
      {tab === "ranged" && <RangedTable locale={locale} query={q} />}
      {tab === "gear" && <GearList locale={locale} query={q} />}
      {tab === "magical" && <MagicalList locale={locale} query={q} />}
    </>
  );
}

function ArmorTable({ locale, query }: { locale: string; query: string }) {
  const te = useTranslations("equipment");
  const tc = useTranslations("common");
  const filtered = armor.filter((a) =>
    t(a.name, locale).toLowerCase().includes(query)
  );
  if (filtered.length === 0) return <NoResults />;

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border text-left text-muted">
            <th className="pb-2 pr-4">{te("name")}</th>
            <th className="pb-2 pr-4">{te("category")}</th>
            <th className="pb-2 pr-4">{te("armorValue")}</th>
            <th className="pb-2 pr-4">{te("strReq")}</th>
            <th className="pb-2">{tc("cost")}</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((a) => (
            <tr key={a.id} className="border-b border-border/50">
              <td className="py-2 pr-4 font-medium text-foreground">
                {t(a.name, locale)}
              </td>
              <td className="py-2 pr-4 capitalize text-muted">{tArmorCategory(a.category, locale)}</td>
              <td className="py-2 pr-4 text-foreground">{a.armorValue}</td>
              <td className="py-2 pr-4 text-muted">
                {a.strReq !== undefined ? a.strReq : "—"}
              </td>
              <td className="py-2 text-muted">{tCost(a.cost, locale)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MeleeTable({ locale, query }: { locale: string; query: string }) {
  const te = useTranslations("equipment");
  const tc = useTranslations("common");
  const filtered = meleeWeapons.filter((w) =>
    t(w.name, locale).toLowerCase().includes(query)
  );
  if (filtered.length === 0) return <NoResults />;

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border text-left text-muted">
            <th className="pb-2 pr-4">{te("name")}</th>
            <th className="pb-2 pr-4">{tc("damage")}</th>
            <th className="pb-2 pr-4">{tc("properties")}</th>
            <th className="pb-2">{tc("cost")}</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((w) => (
            <tr key={w.id} className="border-b border-border/50">
              <td className="py-2 pr-4 font-medium text-foreground">
                {t(w.name, locale)}
              </td>
              <td className="py-2 pr-4 text-foreground">{tDamage(w.damage, locale)}</td>
              <td className="py-2 pr-4">
                <div className="flex flex-wrap gap-1">
                  {w.properties.map((p) => (
                    <Badge key={p} variant="default">
                      {tWeaponProperty(p, locale)}
                    </Badge>
                  ))}
                </div>
              </td>
              <td className="py-2 text-muted">{tCost(w.cost, locale)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RangedTable({ locale, query }: { locale: string; query: string }) {
  const te = useTranslations("equipment");
  const tc = useTranslations("common");
  const filtered = rangedWeapons.filter((w) =>
    t(w.name, locale).toLowerCase().includes(query)
  );
  if (filtered.length === 0) return <NoResults />;

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border text-left text-muted">
            <th className="pb-2 pr-4">{te("name")}</th>
            <th className="pb-2 pr-4">{tc("damage")}</th>
            <th className="pb-2 pr-4">{tc("range")}</th>
            <th className="pb-2 pr-4">{tc("properties")}</th>
            <th className="pb-2">{tc("cost")}</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((w) => (
            <tr key={w.id} className="border-b border-border/50">
              <td className="py-2 pr-4 font-medium text-foreground">
                {t(w.name, locale)}
              </td>
              <td className="py-2 pr-4 text-foreground">{tDamage(w.damage, locale)}</td>
              <td className="py-2 pr-4 text-muted">{w.range}</td>
              <td className="py-2 pr-4">
                <div className="flex flex-wrap gap-1">
                  {w.properties.map((p) => (
                    <Badge key={p} variant="default">
                      {tWeaponProperty(p, locale)}
                    </Badge>
                  ))}
                </div>
              </td>
              <td className="py-2 text-muted">{tCost(w.cost, locale)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function GearList({ locale, query }: { locale: string; query: string }) {
  const filtered = adventuringGear.filter((g) =>
    t(g.name, locale).toLowerCase().includes(query)
  );
  if (filtered.length === 0) return <NoResults />;

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {filtered.map((g) => (
        <div
          key={g.id}
          className="rounded-lg border border-border bg-surface p-4"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-foreground">
              {t(g.name, locale)}
            </h3>
            <span className="text-xs text-muted">{tCost(g.cost, locale)}</span>
          </div>
          <p className="mt-1 text-sm text-muted">
            {t(g.description, locale)}
          </p>
        </div>
      ))}
    </div>
  );
}

function MagicalList({ locale, query }: { locale: string; query: string }) {
  const te = useTranslations("equipment");
  const filteredItems = magicalItems.filter((m) =>
    t(m.name, locale).toLowerCase().includes(query)
  );
  const filteredWands = wands.filter((w) =>
    t(w.name, locale).toLowerCase().includes(query)
  );

  if (filteredItems.length === 0 && filteredWands.length === 0)
    return <NoResults />;

  return (
    <div className="space-y-4">
      {filteredItems.map((m) => (
        <div
          key={m.id}
          className="rounded-lg border border-border bg-surface p-4"
        >
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-foreground">
              {t(m.name, locale)}
            </h3>
            <Badge variant={rarityBadgeVariant(m.rarity)}>{tRarity(m.rarity, locale)}</Badge>
            {m.attunement && <Badge variant="default">{te("attunement")}</Badge>}
          </div>
          <p className="mt-1 text-sm text-muted">
            {t(m.description, locale)}
          </p>
          <p className="mt-1 text-sm text-foreground">
            {t(m.effects, locale)}
          </p>
        </div>
      ))}

      {filteredWands.length > 0 && (
        <>
          <h3 className="text-lg font-semibold text-muted">{te("wands")}</h3>
          {filteredWands.map((w) => (
            <div
              key={w.id}
              className="rounded-lg border border-border bg-surface p-4"
            >
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-foreground">
                  {t(w.name, locale)}
                </h3>
                <Badge variant={rarityBadgeVariant(w.rarity)}>
                  {tRarity(w.rarity, locale)}
                </Badge>
              </div>
              <p className="mt-1 text-sm text-muted">
                {t(w.description, locale)}
              </p>
              <p className="mt-1 text-sm text-foreground">
                {te("charges")}: {w.charges} &mdash; {t(w.rechargeMethod, locale)}
              </p>
              <p className="text-sm text-foreground">
                {te("spell")}: {t(w.spell, locale)}
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

function NoResults() {
  const tc = useTranslations("common");
  return <p className="text-muted">{tc("noResults")}</p>;
}
