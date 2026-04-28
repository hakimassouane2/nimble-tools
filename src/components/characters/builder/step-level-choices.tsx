"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import type { Stat, HeroClass } from "@/data/types";
import type { CharacterDraft } from "./character-builder";
import { t as tl, tStat } from "@/lib/utils";
import {
  getStatIncreaseAtLevel,
  getAbilitiesAtLevel,
  getEffectiveStats,
  getAbilityPoolPicksAtLevel,
} from "@/lib/character-rules";

type Props = {
  locale: string;
  draft: CharacterDraft;
  classData: HeroClass;
  onUpdateStatIncreases: (
    statIncreases: Array<{ level: number; stat: Stat; type: "key" | "secondary" }>
  ) => void;
  onUpdateAbilityPoolPicks: (
    abilityPoolPicks: Array<{ level: number; abilityIndex: number }>
  ) => void;
  onUpdateCapstoneStats: (capstoneStatIncreases: [Stat, Stat]) => void;
  onUpdateEpicBoon: (epicBoon: string) => void;
};

const ALL_STATS: Stat[] = ["STR", "DEX", "INT", "WIL"];

export function StepLevelChoices({
  locale,
  draft,
  classData,
  onUpdateStatIncreases,
  onUpdateAbilityPoolPicks,
  onUpdateCapstoneStats,
  onUpdateEpicBoon,
}: Props) {
  const t = useTranslations("builder");
  const [expandedLevels, setExpandedLevels] = useState<Set<number>>(
    () => new Set(Array.from({ length: draft.level - 1 }, (_, i) => i + 2))
  );

  function toggleLevel(level: number) {
    setExpandedLevels((prev) => {
      const next = new Set(prev);
      if (next.has(level)) next.delete(level);
      else next.add(level);
      return next;
    });
  }

  // Get the current stat increase for a specific level
  function getStatForLevel(level: number): Stat | null {
    const found = draft.statIncreases.find((inc) => inc.level === level);
    return found?.stat ?? null;
  }

  // Update a stat increase for a specific level
  function handleStatChange(level: number, stat: Stat, type: "key" | "secondary") {
    const updated = draft.statIncreases.filter((inc) => inc.level !== level);
    updated.push({ level, stat, type });
    updated.sort((a, b) => a.level - b.level);
    onUpdateStatIncreases(updated);
  }

  // Get pool picks for a specific level
  function getPoolPicksForLevel(level: number): number[] {
    return draft.abilityPoolPicks
      .filter((p) => p.level === level)
      .map((p) => p.abilityIndex);
  }

  // Toggle a pool pick at a specific level (respects per-level pick count)
  function handlePoolPickToggle(level: number, abilityIndex: number, maxPicks: number) {
    const picksAtLevel = getPoolPicksForLevel(level);
    const isPicked = picksAtLevel.includes(abilityIndex);

    let updated: typeof draft.abilityPoolPicks;
    if (isPicked) {
      updated = draft.abilityPoolPicks.filter(
        (p) => !(p.level === level && p.abilityIndex === abilityIndex)
      );
    } else if (picksAtLevel.length < maxPicks) {
      updated = [...draft.abilityPoolPicks, { level, abilityIndex }];
    } else {
      // Full at this level: replace the oldest pick at this level
      const others = draft.abilityPoolPicks.filter(
        (p) => !(p.level === level && p.abilityIndex === picksAtLevel[0])
      );
      updated = [...others, { level, abilityIndex }];
    }
    updated.sort((a, b) => a.level - b.level);
    onUpdateAbilityPoolPicks(updated);
  }

  // All picked pool ability indices (to prevent duplicates)
  const pickedIndices = new Set(draft.abilityPoolPicks.map((p) => p.abilityIndex));

  // Compute running effective stats up to a given level
  function getRunningStats(upToLevel: number): Record<Stat, number> {
    if (!draft.stats) return { STR: 0, DEX: 0, INT: 0, WIL: 0 };
    const relevantIncreases = draft.statIncreases.filter((inc) => inc.level <= upToLevel);
    let result = getEffectiveStats(draft.stats, relevantIncreases);
    // Add capstone if level 20 and upToLevel is 20
    if (upToLevel >= 20 && draft.capstoneStatIncreases) {
      result = { ...result };
      result[draft.capstoneStatIncreases[0]] += 1;
      result[draft.capstoneStatIncreases[1]] += 1;
    }
    return result;
  }

  return (
    <div>
      <h2 className="mb-1 text-lg font-semibold text-foreground">
        {t("levelChoicesTitle")}
      </h2>
      <p className="mb-4 text-sm text-muted">{t("levelChoicesDesc")}</p>

      {/* Running stat totals */}
      {draft.stats && (
        <div className="mb-4 grid grid-cols-4 gap-2">
          {ALL_STATS.map((stat) => {
            const base = draft.stats![stat];
            const effective = getRunningStats(draft.level)[stat];
            const diff = effective - base;
            return (
              <div
                key={stat}
                className="rounded-lg border border-border bg-surface p-2 text-center"
              >
                <p className="text-xs text-muted">{tStat(stat, locale)}</p>
                <p className="text-lg font-bold text-foreground">
                  {effective > 0 ? `+${effective}` : effective}
                </p>
                {diff > 0 && (
                  <p className="text-xs text-accent">+{diff}</p>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Per-level sections */}
      <div className="space-y-2">
        {Array.from({ length: draft.level - 1 }, (_, i) => i + 2).map((level) => {
          const statInc = getStatIncreaseAtLevel(level, classData);
          const autoAbilities = getAbilitiesAtLevel(classData, level);
          const isPoolLevel = classData.abilityPool?.selectAtLevels.includes(level) ?? false;
          const isExpanded = expandedLevels.has(level);
          const hasChoices = statInc !== null || isPoolLevel || level === 19 || level === 20;

          return (
            <div
              key={level}
              className="rounded-lg border border-border bg-surface"
            >
              <button
                onClick={() => toggleLevel(level)}
                className="flex w-full items-center justify-between p-3 text-left"
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium text-accent">{t("levelAbbr")} {level}</span>
                  {hasChoices && (
                    <span className="rounded bg-accent/20 px-1.5 py-0.5 text-xs text-accent">
                      {t("choicesRequired")}
                    </span>
                  )}
                  {!hasChoices && autoAbilities.length > 0 && (
                    <span className="text-xs text-muted">
                      {autoAbilities.map((a) => tl(a.name, locale)).join(", ")}
                    </span>
                  )}
                </div>
                <span className="text-muted">{isExpanded ? "−" : "+"}</span>
              </button>

              {isExpanded && (
                <div className="border-t border-border p-3 space-y-3">
                  {/* Auto-granted abilities */}
                  {autoAbilities.length > 0 && (
                    <div>
                      <p className="mb-1 text-xs font-medium text-muted">
                        {t("autoGrantedAbilities")}
                      </p>
                      {autoAbilities.map((ability, i) => (
                        <div key={i} className="mb-1">
                          <p className="text-sm font-medium text-foreground">
                            {tl(ability.name, locale)}
                          </p>
                          <p className="text-xs text-muted">
                            {tl(ability.description, locale)}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Stat increase selector */}
                  {statInc && (
                    <div>
                      <p className="mb-1 text-xs font-medium text-muted">
                        {statInc.type === "key"
                          ? t("keyStatIncrease")
                          : t("secondaryStatIncrease")}
                        {" (+1)"}
                      </p>
                      <div className="flex gap-2">
                        {statInc.options.map((stat) => {
                          const selected = getStatForLevel(level) === stat;
                          return (
                            <button
                              key={stat}
                              onClick={() =>
                                handleStatChange(level, stat, statInc.type as "key" | "secondary")
                              }
                              className={`rounded-md border px-3 py-1.5 text-sm font-medium transition-colors ${
                                selected
                                  ? "border-accent bg-accent/10 text-accent"
                                  : "border-border text-foreground hover:bg-surface-hover"
                              }`}
                            >
                              {tStat(stat, locale)}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Ability pool pick */}
                  {isPoolLevel && classData.abilityPool && (() => {
                    const maxPicks = getAbilityPoolPicksAtLevel(classData, level);
                    const picksAtLevel = getPoolPicksForLevel(level);
                    return (
                      <div>
                        <p className="mb-1 text-xs font-medium text-muted">
                          {tl(classData.abilityPool!.name, locale)}
                          {maxPicks > 1 && (
                            <span className="ml-2 text-xs text-accent">
                              ({picksAtLevel.length}/{maxPicks})
                            </span>
                          )}
                        </p>
                        <div className="space-y-1">
                          {classData.abilityPool!.abilities.map((ability, idx) => {
                            const isSelected = picksAtLevel.includes(idx);
                            const isTaken =
                              !isSelected && pickedIndices.has(idx);

                            return (
                              <button
                                key={idx}
                                onClick={() => handlePoolPickToggle(level, idx, maxPicks)}
                                disabled={isTaken}
                                className={`w-full rounded-md border p-2 text-left text-sm transition-colors ${
                                  isSelected
                                    ? "border-accent bg-accent/10"
                                    : isTaken
                                      ? "border-border opacity-40"
                                      : "border-border hover:bg-surface-hover"
                                }`}
                              >
                                <p className="font-medium text-foreground">
                                  {tl(ability.name, locale)}
                                  {isTaken && (
                                    <span className="ml-2 text-xs text-muted">
                                      ({t("alreadyPicked")})
                                    </span>
                                  )}
                                </p>
                                <p className="text-xs text-muted">
                                  {tl(ability.description, locale)}
                                </p>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })()}

                  {/* Epic Boon at level 19 */}
                  {level === 19 && (
                    <div>
                      <p className="mb-1 text-xs font-medium text-muted">
                        {t("epicBoon")}
                      </p>
                      <textarea
                        value={draft.epicBoon}
                        onChange={(e) => onUpdateEpicBoon(e.target.value)}
                        placeholder={t("epicBoonPlaceholder")}
                        className="w-full rounded-md border border-border bg-background p-2 text-sm text-foreground placeholder:text-muted"
                        rows={2}
                      />
                    </div>
                  )}

                  {/* Capstone at level 20 */}
                  {level === 20 && (
                    <div>
                      <p className="mb-1 text-xs font-medium text-muted">
                        {t("capstoneBonus")}
                      </p>
                      <p className="mb-2 text-xs text-muted">
                        {t("capstoneDesc")}
                      </p>
                      <div className="flex gap-4">
                        {[0, 1].map((idx) => (
                          <div key={idx}>
                            <p className="mb-1 text-xs text-muted">
                              {t("capstone")} {idx + 1}
                            </p>
                            <div className="flex gap-1">
                              {ALL_STATS.map((stat) => {
                                const selected =
                                  draft.capstoneStatIncreases?.[idx] === stat;
                                return (
                                  <button
                                    key={stat}
                                    onClick={() => {
                                      const current =
                                        draft.capstoneStatIncreases ?? [
                                          "STR" as Stat,
                                          "STR" as Stat,
                                        ];
                                      const updated = [...current] as [Stat, Stat];
                                      updated[idx] = stat;
                                      onUpdateCapstoneStats(updated);
                                    }}
                                    className={`rounded-md border px-2 py-1 text-xs font-medium transition-colors ${
                                      selected
                                        ? "border-accent bg-accent/10 text-accent"
                                        : "border-border text-foreground hover:bg-surface-hover"
                                    }`}
                                  >
                                    {tStat(stat, locale)}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* No choices indicator */}
                  {!hasChoices && autoAbilities.length === 0 && (
                    <p className="text-xs text-muted">{t("noChoicesNeeded")}</p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
