"use client";

import { useState } from "react";
import type { HeroClass } from "@/data/types";
import { t } from "@/lib/utils";
import { AbilityBlock } from "@/components/ui/ability-block";

type Props = {
  heroClass: HeroClass;
  locale: string;
};

export function ClassDetailClient({ heroClass, locale }: Props) {
  const levels = Array.from(
    new Set(heroClass.abilities.map((a) => a.level))
  ).sort((a, b) => a - b);

  const [openLevels, setOpenLevels] = useState<Set<number>>(
    new Set(levels.slice(0, 3))
  );

  function toggleLevel(lv: number) {
    setOpenLevels((prev) => {
      const next = new Set(prev);
      if (next.has(lv)) next.delete(lv);
      else next.add(lv);
      return next;
    });
  }

  return (
    <>
      {/* Level Progression */}
      <section className="space-y-2">
        <h2 className="text-lg font-bold text-foreground">Level Progression</h2>
        {levels.map((lv) => {
          const abilities = heroClass.abilities.filter((a) => a.level === lv);
          const isOpen = openLevels.has(lv);

          return (
            <div
              key={lv}
              className="rounded-lg border border-border bg-surface"
            >
              <button
                onClick={() => toggleLevel(lv)}
                className="flex w-full items-center justify-between p-3 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-foreground">
                  Level {lv}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted">
                    {abilities.length} {abilities.length === 1 ? "ability" : "abilities"}
                  </span>
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
                    className={`shrink-0 text-muted transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </button>
              {isOpen && (
                <div className="space-y-2 border-t border-border/50 p-3">
                  {abilities.map((ability, i) => (
                    <AbilityBlock
                      key={i}
                      ability={ability}
                      locale={locale}
                      defaultExpanded={abilities.length <= 2}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Subclasses */}
      {heroClass.subclasses.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-foreground">Subclasses</h2>
          {heroClass.subclasses.map((sc) => (
            <div
              key={sc.id}
              className="rounded-lg border border-border bg-surface p-4"
            >
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-foreground">
                  {t(sc.name, locale)}
                </h3>
                {sc.type === "story-based" && (
                  <span className="rounded-full bg-necrotic/20 px-2 py-0.5 text-xs font-medium text-necrotic">
                    Story-Based
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-muted">
                {t(sc.description, locale)}
              </p>
              <div className="mt-3 space-y-2">
                {sc.features.map((f, i) => (
                  <div key={i} className="rounded-md border border-border/50 bg-background p-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-accent">
                        Lv {f.level}
                      </span>
                      <span className="font-medium text-foreground">
                        {t(f.name, locale)}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted">
                      {t(f.description, locale)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Ability Pool */}
      {heroClass.abilityPool && (
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-foreground">
            {t(heroClass.abilityPool.name, locale)}
          </h2>
          <p className="text-sm text-muted">
            Select at levels:{" "}
            {heroClass.abilityPool.selectAtLevels.join(", ")}
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {heroClass.abilityPool.abilities.map((a, i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-surface p-3"
              >
                <h4 className="font-medium text-foreground">
                  {t(a.name, locale)}
                </h4>
                <p className="mt-1 text-sm text-muted">
                  {t(a.description, locale)}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
