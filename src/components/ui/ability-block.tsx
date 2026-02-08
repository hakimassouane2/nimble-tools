"use client";

import { useState } from "react";
import type { ClassAbility } from "@/data/types";
import { t } from "@/lib/utils";

type AbilityBlockProps = {
  ability: ClassAbility;
  locale: string;
  defaultExpanded?: boolean;
};

export function AbilityBlock({
  ability,
  locale,
  defaultExpanded = false,
}: AbilityBlockProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const name = t(ability.name, locale);
  const description = t(ability.description, locale);
  const isLong = description.length > 150;

  const typeColors: Record<string, string> = {
    core: "text-accent",
    subclass: "text-necrotic",
    "stat-increase": "text-wind",
    capstone: "text-radiant",
  };

  return (
    <div className="rounded-md border border-border bg-surface p-3">
      <button
        onClick={() => isLong && setExpanded(!expanded)}
        className={`flex w-full items-start justify-between text-left ${isLong ? "cursor-pointer" : "cursor-default"}`}
        aria-expanded={isLong ? expanded : undefined}
      >
        <div className="flex items-center gap-2">
          <span
            className={`text-xs font-medium ${typeColors[ability.type] || "text-muted"}`}
          >
            {locale === "fr" ? "Niv" : "Lv"} {ability.level}
          </span>
          <span className="font-medium text-foreground">{name}</span>
        </div>
        {isLong && (
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
            className={`mt-0.5 shrink-0 text-muted transition-transform ${expanded ? "rotate-180" : ""}`}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        )}
      </button>
      {(expanded || !isLong) && (
        <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      )}
    </div>
  );
}
