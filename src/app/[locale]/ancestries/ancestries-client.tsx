"use client";

import { useState } from "react";
import type { Ancestry } from "@/data/types";
import { t, tSize } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

type Props = {
  common: Ancestry[];
  exotic: Ancestry[];
  locale: string;
};

export function AncestriesClient({ common, exotic, locale }: Props) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "common" | "exotic">("all");
  const tc = useTranslations("common");
  const ta = useTranslations("ancestries");
  const q = query.toLowerCase();

  const filterFn = (a: Ancestry) =>
    t(a.name, locale).toLowerCase().includes(q);

  const showCommon = filter !== "exotic";
  const showExotic = filter !== "common";
  const filteredCommon = showCommon ? common.filter(filterFn) : [];
  const filteredExotic = showExotic ? exotic.filter(filterFn) : [];

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
        {(["all", "common", "exotic"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-3 py-1 text-sm transition-colors ${
              filter === f
                ? "bg-accent text-background font-medium"
                : "bg-surface text-muted hover:text-foreground"
            }`}
          >
            {f === "all" ? tc("all") : ta(f)}
          </button>
        ))}
      </div>

      {filteredCommon.length === 0 && filteredExotic.length === 0 && (
        <p className="text-muted">{tc("noResults")}</p>
      )}

      {filteredCommon.length > 0 && (
        <>
          <h2 className="text-lg font-semibold text-muted">{ta("common")}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {filteredCommon.map((a) => (
              <AncestryCard key={a.id} ancestry={a} locale={locale} />
            ))}
          </div>
        </>
      )}

      {filteredExotic.length > 0 && (
        <>
          <h2 className="text-lg font-semibold text-muted">{ta("exotic")}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {filteredExotic.map((a) => (
              <AncestryCard key={a.id} ancestry={a} locale={locale} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

function AncestryCard({
  ancestry,
  locale,
}: {
  ancestry: Ancestry;
  locale: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-surface p-4">
      <div className="flex items-center gap-2">
        <h3 className="font-semibold text-foreground">
          {t(ancestry.name, locale)}
        </h3>
        <Badge variant="default">{tSize(ancestry.size, locale)}</Badge>
      </div>
      <div className="mt-2">
        <p className="text-sm font-medium text-accent">
          {t(ancestry.trait.name, locale)}
        </p>
        <p className="mt-1 text-sm text-muted">
          {t(ancestry.trait.description, locale)}
        </p>
      </div>
      {ancestry.modifiers.speed !== undefined && (
        <p className="mt-2 text-xs text-muted">
          {locale === "fr" ? "Vitesse" : "Speed"} : {ancestry.modifiers.speed}
        </p>
      )}
      {ancestry.modifiers.armor !== undefined && (
        <p className="text-xs text-muted">
          {locale === "fr" ? "Armure" : "Armor"} : +{ancestry.modifiers.armor}
        </p>
      )}
      {ancestry.modifiers.languages && ancestry.modifiers.languages.length > 0 && (
        <p className="text-xs text-muted">
          {locale === "fr" ? "Langues" : "Languages"} : {ancestry.modifiers.languages.map((l) => t(l, locale)).join(", ")}
        </p>
      )}
      {ancestry.modifiers.other && ancestry.modifiers.other.length > 0 && (
        <ul className="mt-1">
          {ancestry.modifiers.other.map((o, i) => (
            <li key={i} className="text-xs text-muted">
              {t(o, locale)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
