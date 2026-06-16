"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { allSpells } from "@/data/spells";
import { conditions } from "@/data/conditions";
import { ancestries } from "@/data/ancestries";
import { backgrounds } from "@/data/backgrounds";
import {
  armor,
  meleeWeapons,
  rangedWeapons,
  adventuringGear,
  magicalItems,
} from "@/data/equipment";
import { allRules } from "@/data/rules";
import { heroClasses } from "@/data/classes";
import { t, tArmorCategory, stripMarkup } from "@/lib/utils";

type SearchResult = {
  title: string;
  description: string;
  href: string;
  category: string;
};

export function SearchClient({ locale }: { locale: string }) {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState(initialQuery);
  const nav = useTranslations("nav");
  const tc = useTranslations("common");

  useEffect(() => {
    const q = searchParams.get("q") || "";
    setQuery(q);
    setDebouncedQuery(q);
  }, [searchParams]);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 200);
    return () => clearTimeout(timer);
  }, [query]);

  const q = debouncedQuery.toLowerCase().trim();
  const results: SearchResult[] = q ? search(q, locale) : [];

  const grouped = results.reduce<Record<string, SearchResult[]>>(
    (acc, r) => {
      if (!acc[r.category]) acc[r.category] = [];
      if (acc[r.category].length < 5) acc[r.category].push(r);
      return acc;
    },
    {}
  );

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={tc("searchPlaceholder")}
        className="w-full rounded-lg border border-border bg-surface py-2 pl-3 pr-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
        autoFocus
      />

      {q && results.length === 0 && (
        <p className="text-muted">{tc("noResults")}</p>
      )}

      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} className="space-y-2">
          <h2 className="text-sm font-semibold text-muted uppercase tracking-wide">
            {category}
          </h2>
          {items.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="block rounded-lg border border-border bg-surface p-3 transition-colors hover:bg-surface-hover"
            >
              <p className="font-medium text-foreground">{item.title}</p>
              <p className="mt-0.5 text-xs text-muted line-clamp-2">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      ))}
    </>
  );
}

function tCategory(key: string, locale: string): string {
  if (locale !== "fr") return key;
  const map: Record<string, string> = {
    Classes: "Classes",
    Spells: "Sorts",
    Conditions: "Conditions",
    Ancestries: "Ascendances",
    Backgrounds: "Historiques",
    Equipment: "Équipement",
    Rules: "Règles",
  };
  return map[key] ?? key;
}

function search(q: string, locale: string): SearchResult[] {
  const results: SearchResult[] = [];

  // Classes
  for (const hc of heroClasses) {
    if (
      t(hc.name, locale).toLowerCase().includes(q) ||
      t(hc.description, locale).toLowerCase().includes(q)
    ) {
      results.push({
        title: t(hc.name, locale),
        description: t(hc.description, locale),
        href: `/classes/${hc.id}`,
        category: tCategory("Classes", locale),
      });
    }
  }

  // Spells
  for (const spell of allSpells) {
    if (
      t(spell.name, locale).toLowerCase().includes(q) ||
      t(spell.effects, locale).toLowerCase().includes(q)
    ) {
      results.push({
        title: t(spell.name, locale),
        description: stripMarkup(t(spell.effects, locale)),
        href: "/spells",
        category: tCategory("Spells", locale),
      });
    }
  }

  // Conditions
  for (const c of conditions) {
    if (
      t(c.name, locale).toLowerCase().includes(q) ||
      t(c.description, locale).toLowerCase().includes(q)
    ) {
      results.push({
        title: t(c.name, locale),
        description: t(c.description, locale),
        href: "/conditions",
        category: tCategory("Conditions", locale),
      });
    }
  }

  // Ancestries
  for (const a of ancestries) {
    if (
      t(a.name, locale).toLowerCase().includes(q) ||
      t(a.trait.description, locale).toLowerCase().includes(q)
    ) {
      results.push({
        title: t(a.name, locale),
        description: t(a.trait.description, locale),
        href: "/ancestries",
        category: tCategory("Ancestries", locale),
      });
    }
  }

  // Backgrounds
  for (const b of backgrounds) {
    if (
      t(b.name, locale).toLowerCase().includes(q) ||
      t(b.description, locale).toLowerCase().includes(q)
    ) {
      results.push({
        title: t(b.name, locale),
        description: t(b.description, locale),
        href: "/backgrounds",
        category: tCategory("Backgrounds", locale),
      });
    }
  }

  // Equipment
  const allEquip = [
    ...armor.map((a) => ({
      name: t(a.name, locale),
      desc: a.description ? t(a.description, locale) : tArmorCategory(a.category, locale),
    })),
    ...meleeWeapons.map((w) => ({
      name: t(w.name, locale),
      desc: w.description ? t(w.description, locale) : w.damage,
    })),
    ...rangedWeapons.map((w) => ({
      name: t(w.name, locale),
      desc: w.description ? t(w.description, locale) : w.damage,
    })),
    ...adventuringGear.map((g) => ({
      name: t(g.name, locale),
      desc: t(g.description, locale),
    })),
    ...magicalItems.map((m) => ({
      name: t(m.name, locale),
      desc: t(m.description, locale),
    })),
  ];
  for (const e of allEquip) {
    if (e.name.toLowerCase().includes(q) || e.desc.toLowerCase().includes(q)) {
      results.push({
        title: e.name,
        description: e.desc,
        href: "/equipment",
        category: tCategory("Equipment", locale),
      });
    }
  }

  // Rules
  for (const cat of allRules) {
    for (const section of cat.sections) {
      if (
        t(section.title, locale).toLowerCase().includes(q) ||
        t(section.content, locale).toLowerCase().includes(q)
      ) {
        results.push({
          title: t(section.title, locale),
          description: t(section.content, locale).slice(0, 150) + "...",
          href: "/rules",
          category: tCategory("Rules", locale),
        });
      }
    }
  }

  return results;
}
