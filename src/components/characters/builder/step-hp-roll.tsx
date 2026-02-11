"use client";

import { useTranslations } from "next-intl";
import type { HeroClass } from "@/data/types";
import { getHitDieSize } from "@/lib/character-rules";

type Props = {
  classData: HeroClass;
  levels: number[];
  hpRolls: Record<number, number>;
  onUpdate: (level: number, result: number) => void;
};

export function StepHpRoll({ classData, levels, hpRolls, onUpdate }: Props) {
  const t = useTranslations("builder");
  const dieSize = getHitDieSize(classData.hitDie);

  const rollTotal = levels.reduce((sum, lvl) => sum + (hpRolls[lvl] ?? 0), 0);

  return (
    <div>
      <h2 className="mb-1 text-lg font-semibold text-foreground">
        {t("hpRollTitle")}
      </h2>
      <p className="mb-4 text-sm text-muted">
        {t("hpRollDesc", { die: `d${dieSize}` })}
      </p>

      <div className="mx-auto max-w-sm space-y-4">
        {levels.map((lvl) => (
          <div
            key={lvl}
            className="rounded-lg border border-border bg-surface p-6 text-center"
          >
            <p className="mb-1 text-sm font-medium text-muted">
              {t("hpRollLevel", { level: lvl })}
            </p>
            <p className="mb-4 text-4xl font-bold text-accent">d{dieSize}</p>

            <label className="mb-2 block text-sm font-medium text-foreground">
              {t("rollResult")}
            </label>
            <input
              type="number"
              min={1}
              max={dieSize}
              value={hpRolls[lvl] ?? ""}
              onChange={(e) => {
                const val = parseInt(e.target.value, 10);
                if (!isNaN(val)) onUpdate(lvl, val);
              }}
              className="mx-auto w-24 rounded-md border border-border bg-background px-3 py-2 text-center text-lg font-bold text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
            <p className="mt-2 text-xs text-muted">
              {t("hpRollRange", { min: 1, max: dieSize })}
            </p>
          </div>
        ))}

        {levels.length > 1 && (
          <div className="rounded-lg border border-accent/30 bg-surface p-4 text-center">
            <p className="text-sm font-medium text-muted">
              {t("hpRollTotal")}
            </p>
            <p className="text-2xl font-bold text-accent">{rollTotal}</p>
          </div>
        )}
      </div>
    </div>
  );
}
