"use client";

import { useState } from "react";
import type { Background } from "@/data/types";
import { t } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

type Props = {
  backgrounds: Background[];
  locale: string;
};

export function BackgroundsClient({ backgrounds, locale }: Props) {
  const [query, setQuery] = useState("");
  const tc = useTranslations("common");
  const q = query.toLowerCase();

  const filtered = backgrounds.filter((b) =>
    t(b.name, locale).toLowerCase().includes(q)
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

      {filtered.length === 0 && (
        <p className="text-muted">{tc("noResults")}</p>
      )}

      <div className="grid gap-3 sm:grid-cols-2">
        {filtered.map((bg) => (
          <div
            key={bg.id}
            className="rounded-lg border border-border bg-surface p-4"
          >
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-foreground">
                {t(bg.name, locale)}
              </h3>
              {bg.requirement && (
                <Badge variant="default">
                  {bg.requirement.stat} ≤ {bg.requirement.maxValue}
                </Badge>
              )}
            </div>
            <p className="mt-1 text-sm text-muted">
              {t(bg.description, locale)}
            </p>
            {bg.effects.length > 0 && (
              <ul className="mt-2 space-y-1">
                {bg.effects.map((effect, i) => (
                  <li key={i} className="text-sm text-foreground">
                    <span className="text-accent mr-1.5">&#8226;</span>
                    {t(effect, locale)}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
