"use client";

import { useTranslations } from "next-intl";
import type { Stat } from "@/data/types";
import { skills } from "@/data/skills";
import {
  calculateSkillBase,
  getTotalBonusSkillPoints,
} from "@/lib/character-rules";
import { t as tl, tStat } from "@/lib/utils";

const MAX_BONUS_POINTS = 4;

type Props = {
  locale: string;
  stats: Record<Stat, number>;
  bonusSkillPoints: Record<string, number>;
  onUpdate: (points: Record<string, number>) => void;
};

export function StepSkills({ locale, stats, bonusSkillPoints, onUpdate }: Props) {
  const t = useTranslations("builder");

  const base = calculateSkillBase(stats);
  const totalUsed = getTotalBonusSkillPoints(bonusSkillPoints);
  const remaining = MAX_BONUS_POINTS - totalUsed;

  function handleAdd(skillId: string) {
    if (remaining <= 0) return;
    const current = bonusSkillPoints[skillId] ?? 0;
    onUpdate({ ...bonusSkillPoints, [skillId]: current + 1 });
  }

  function handleRemove(skillId: string) {
    const current = bonusSkillPoints[skillId] ?? 0;
    if (current <= 0) return;
    const next = { ...bonusSkillPoints };
    if (current - 1 === 0) {
      delete next[skillId];
    } else {
      next[skillId] = current - 1;
    }
    onUpdate(next);
  }

  return (
    <div>
      <h2 className="mb-1 text-lg font-semibold text-foreground">
        {t("skillsTitle")}
      </h2>
      <p className="mb-2 text-sm text-muted">{t("skillsDesc")}</p>
      <p
        className={`mb-4 text-sm font-medium ${
          remaining === 0 ? "text-accent" : "text-foreground"
        }`}
      >
        {t("pointsRemaining", { count: remaining })}
      </p>

      <div className="space-y-2">
        {skills.map((skill) => {
          const baseVal = base[skill.id] ?? 0;
          const bonus = bonusSkillPoints[skill.id] ?? 0;
          const total = baseVal + bonus;

          return (
            <div
              key={skill.id}
              className="flex items-center gap-3 rounded-lg border border-border bg-surface p-3"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-foreground">
                    {tl(skill.name, locale)}
                  </span>
                  <span className="text-xs text-muted">
                    ({tStat(skill.linkedStat, locale)})
                  </span>
                </div>
                <div className="flex gap-3 text-xs text-muted">
                  <span>
                    {t("base")}: {baseVal}
                  </span>
                  <span>
                    {t("bonus")}: +{bonus}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleRemove(skill.id)}
                  disabled={bonus <= 0}
                  className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-surface-hover disabled:opacity-30"
                >
                  -
                </button>
                <span className="w-6 text-center font-semibold text-foreground">
                  {total}
                </span>
                <button
                  onClick={() => handleAdd(skill.id)}
                  disabled={remaining <= 0}
                  className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-surface-hover disabled:opacity-30"
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
