"use client";

import { useTranslations } from "next-intl";
import type { Stat } from "@/data/types";
import { backgrounds } from "@/data/backgrounds";
import { getAvailableBackgrounds } from "@/lib/character-rules";
import { t as tl, tStat } from "@/lib/utils";

type Props = {
  locale: string;
  stats: Record<Stat, number>;
  selectedBackgroundId: string | null;
  onSelect: (backgroundId: string) => void;
};

export function StepBackground({
  locale,
  stats,
  selectedBackgroundId,
  onSelect,
}: Props) {
  const t = useTranslations("builder");

  const available = getAvailableBackgrounds(backgrounds, stats);
  const availableIds = new Set(available.map((b) => b.id));

  return (
    <div>
      <h2 className="mb-1 text-lg font-semibold text-foreground">
        {t("selectBackground")}
      </h2>
      <p className="mb-4 text-sm text-muted">{t("selectBackgroundDesc")}</p>

      <div className="grid gap-3 sm:grid-cols-2">
        {backgrounds.map((bg) => {
          const isAvailable = availableIds.has(bg.id);
          const selected = selectedBackgroundId === bg.id;

          return (
            <button
              key={bg.id}
              onClick={() => isAvailable && onSelect(bg.id)}
              disabled={!isAvailable}
              className={`rounded-lg border p-4 text-left transition-colors ${
                selected
                  ? "border-accent bg-accent/10"
                  : isAvailable
                    ? "border-border bg-surface hover:bg-surface-hover"
                    : "cursor-not-allowed border-border/50 bg-surface/50 opacity-50"
              }`}
            >
              <h3 className="mb-1 font-semibold text-foreground">
                {tl(bg.name, locale)}
              </h3>
              <p className="mb-2 line-clamp-2 text-xs text-muted">
                {tl(bg.description, locale)}
              </p>
              {bg.requirement && (
                <p
                  className={`text-xs ${
                    isAvailable ? "text-accent" : "text-red-400"
                  }`}
                >
                  {t("requirementNotMet", {
                    stat: tStat(bg.requirement.stat, locale),
                    value: bg.requirement.maxValue,
                  })}
                </p>
              )}
              {bg.effects.length > 0 && (
                <ul className="mt-2 space-y-0.5">
                  {bg.effects.map((effect, i) => (
                    <li key={i} className="text-xs text-muted">
                      • {tl(effect, locale)}
                    </li>
                  ))}
                </ul>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
