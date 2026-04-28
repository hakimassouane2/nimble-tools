"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import type { Ancestry, Stat } from "@/data/types";
import { skills } from "@/data/skills";
import { calculateSkillBase } from "@/lib/character-rules";
import { t as tl, tStat } from "@/lib/utils";

const MAX_SKILL_TOTAL = 12;

type Props = {
  locale: string;
  stats: Record<Stat, number>;
  ancestry?: Ancestry | null;
  bonusSkillPoints: Record<string, number>;
  newSkillId: string | null;
  moveFromSkillId: string | null;
  moveToSkillId: string | null;
  onUpdate: (
    newSkillId: string | null,
    moveFromSkillId: string | null,
    moveToSkillId: string | null
  ) => void;
};

export function StepSkillsLevelUp({
  locale,
  stats,
  ancestry,
  bonusSkillPoints,
  newSkillId,
  moveFromSkillId,
  moveToSkillId,
  onUpdate,
}: Props) {
  const t = useTranslations("builder");
  const [showMove, setShowMove] = useState(moveFromSkillId !== null);
  const base = calculateSkillBase(stats, ancestry);

  function getOriginalTotal(skillId: string): number {
    return (base[skillId] ?? 0) + (bonusSkillPoints[skillId] ?? 0);
  }

  function getEffectiveTotal(skillId: string): number {
    let total = getOriginalTotal(skillId);
    if (newSkillId === skillId) total += 1;
    if (moveFromSkillId === skillId) total -= 1;
    if (moveToSkillId === skillId) total += 1;
    return total;
  }

  function canPlaceNewPoint(skillId: string): boolean {
    let total = getOriginalTotal(skillId) + 1;
    if (moveFromSkillId === skillId) total -= 1;
    if (moveToSkillId === skillId) total += 1;
    return total <= MAX_SKILL_TOTAL;
  }

  function canMoveFrom(skillId: string): boolean {
    return (bonusSkillPoints[skillId] ?? 0) > 0;
  }

  function canMoveTo(skillId: string): boolean {
    if (skillId === moveFromSkillId) return false;
    let total = getOriginalTotal(skillId) + 1;
    if (newSkillId === skillId) total += 1;
    return total <= MAX_SKILL_TOTAL;
  }

  return (
    <div>
      <h2 className="mb-1 text-lg font-semibold text-foreground">
        {t("skillsLevelUpTitle")}
      </h2>
      <p className="mb-4 text-sm text-muted">{t("skillsLevelUpDesc")}</p>

      {/* New skill point placement */}
      <div className="mb-6">
        <h3 className="mb-2 text-sm font-medium text-accent">
          {t("newSkillPoint")}
        </h3>
        <div className="space-y-2">
          {skills.map((skill) => {
            const selected = newSkillId === skill.id;
            const total = getOriginalTotal(skill.id);
            const canPlace = canPlaceNewPoint(skill.id);

            return (
              <button
                key={skill.id}
                onClick={() =>
                  onUpdate(
                    selected ? null : skill.id,
                    moveFromSkillId,
                    moveToSkillId
                  )
                }
                disabled={!canPlace && !selected}
                className={`flex w-full items-center justify-between rounded-lg border p-3 text-left transition-colors ${
                  selected
                    ? "border-accent bg-accent/10"
                    : !canPlace
                      ? "border-border opacity-40"
                      : "border-border bg-surface hover:bg-surface-hover"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium text-foreground">
                    {tl(skill.name, locale)}
                  </span>
                  <span className="text-xs text-muted">
                    ({tStat(skill.linkedStat, locale)})
                  </span>
                </div>
                <span className="font-semibold text-foreground">
                  {total}
                  {selected && (
                    <span className="ml-1 text-accent">&rarr; {total + 1}</span>
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Optional skill point move */}
      <div>
        <div className="mb-2 flex items-center gap-2">
          <h3 className="text-sm font-medium text-foreground">
            {t("moveSkillPoint")}
          </h3>
          <button
            onClick={() => {
              if (showMove) {
                onUpdate(newSkillId, null, null);
                setShowMove(false);
              } else {
                setShowMove(true);
              }
            }}
            className="text-xs text-accent underline"
          >
            {showMove ? t("cancel") : t("enable")}
          </button>
        </div>

        {showMove && (
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Move from */}
            <div>
              <p className="mb-1 text-xs font-medium text-muted">
                {t("moveFrom")}
              </p>
              <div className="space-y-1">
                {skills
                  .filter((s) => canMoveFrom(s.id))
                  .map((skill) => {
                    const selected = moveFromSkillId === skill.id;
                    return (
                      <button
                        key={skill.id}
                        onClick={() =>
                          onUpdate(
                            newSkillId,
                            selected ? null : skill.id,
                            selected ? null : moveToSkillId === skill.id ? null : moveToSkillId
                          )
                        }
                        className={`w-full rounded-md border p-2 text-left text-sm transition-colors ${
                          selected
                            ? "border-accent bg-accent/10"
                            : "border-border hover:bg-surface-hover"
                        }`}
                      >
                        {tl(skill.name, locale)}{" "}
                        <span className="text-muted">
                          ({bonusSkillPoints[skill.id] ?? 0} {t("bonus")})
                        </span>
                      </button>
                    );
                  })}
                {skills.filter((s) => canMoveFrom(s.id)).length === 0 && (
                  <p className="text-xs text-muted">-</p>
                )}
              </div>
            </div>

            {/* Move to */}
            <div>
              <p className="mb-1 text-xs font-medium text-muted">
                {t("moveTo")}
              </p>
              <div className="space-y-1">
                {skills
                  .filter((s) => canMoveTo(s.id))
                  .map((skill) => {
                    const selected = moveToSkillId === skill.id;
                    const total = getOriginalTotal(skill.id);
                    return (
                      <button
                        key={skill.id}
                        onClick={() =>
                          onUpdate(newSkillId, moveFromSkillId, selected ? null : skill.id)
                        }
                        className={`w-full rounded-md border p-2 text-left text-sm transition-colors ${
                          selected
                            ? "border-accent bg-accent/10"
                            : "border-border hover:bg-surface-hover"
                        }`}
                      >
                        {tl(skill.name, locale)}{" "}
                        <span className="text-muted">({total})</span>
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
