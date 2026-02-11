"use client";

import { useTranslations } from "next-intl";
import type { HeroClass } from "@/data/types";
import type { CharacterDraft } from "./character-builder";
import { t as tl } from "@/lib/utils";
import { getAbilitiesAtLevel, getStatIncreaseAtLevel } from "@/lib/character-rules";

type Props = {
  locale: string;
  draft: CharacterDraft;
  classData: HeroClass;
  onUpdate: (level: number) => void;
};

export function StepLevel({ locale, draft, classData, onUpdate }: Props) {
  const t = useTranslations("builder");

  function getLevelPreview(level: number): string[] {
    const highlights: string[] = [];
    const abilities = getAbilitiesAtLevel(classData, level);
    for (const a of abilities) {
      highlights.push(tl(a.name, locale));
    }
    const statInc = getStatIncreaseAtLevel(level, classData);
    if (statInc) {
      highlights.push(t(statInc.type === "key" ? "keyStatIncrease" : "secondaryStatIncrease"));
    }
    if (level === 3) {
      highlights.push(t("chooseSubclass"));
    }
    if (level === 7 || level === 11 || level === 15) {
      highlights.push(t("subclassFeature"));
    }
    if (classData.abilityPool) {
      const isPoolLevel = classData.abilityPool.selectAtLevels.includes(level);
      if (isPoolLevel) {
        highlights.push(tl(classData.abilityPool.name, locale));
      }
    }
    if (level === 19) {
      highlights.push(t("epicBoon"));
    }
    if (level === 20) {
      highlights.push(t("capstoneBonus"));
    }
    return highlights;
  }

  return (
    <div>
      <h2 className="mb-1 text-lg font-semibold text-foreground">
        {t("selectLevel")}
      </h2>
      <p className="mb-4 text-sm text-muted">{t("selectLevelDesc")}</p>

      {/* Level selector */}
      <div className="mb-6 flex items-center gap-4">
        <button
          onClick={() => onUpdate(Math.max(1, draft.level - 1))}
          disabled={draft.level <= 1}
          className="rounded-md border border-border px-3 py-2 text-lg font-bold text-foreground transition-colors hover:bg-surface-hover disabled:opacity-30"
        >
          -
        </button>
        <div className="text-center">
          <p className="text-3xl font-bold text-accent">{draft.level}</p>
          <p className="text-xs text-muted">{t("levelLabel")}</p>
        </div>
        <button
          onClick={() => onUpdate(Math.min(20, draft.level + 1))}
          disabled={draft.level >= 20}
          className="rounded-md border border-border px-3 py-2 text-lg font-bold text-foreground transition-colors hover:bg-surface-hover disabled:opacity-30"
        >
          +
        </button>

        <input
          type="range"
          min={1}
          max={20}
          value={draft.level}
          onChange={(e) => onUpdate(parseInt(e.target.value, 10))}
          className="ml-4 flex-1"
        />
      </div>

      {/* Level preview */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted">{t("levelPreview")}</h3>
        <div className="space-y-1 rounded-lg border border-border bg-surface p-3">
          {Array.from({ length: draft.level }, (_, i) => i + 1).map((lvl) => {
            const highlights = getLevelPreview(lvl);
            if (highlights.length === 0 && lvl > 1) return null;
            return (
              <div key={lvl} className="flex gap-2 text-sm">
                <span className="shrink-0 font-medium text-accent">
                  {t("levelAbbr")} {lvl}
                </span>
                <span className="text-foreground">
                  {highlights.length > 0
                    ? highlights.join(", ")
                    : lvl === 1
                      ? t("startingAbilities")
                      : "-"}
                </span>
              </div>
            );
          }).filter(Boolean)}
        </div>
      </div>
    </div>
  );
}
