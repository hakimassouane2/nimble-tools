"use client";

import { useTranslations } from "next-intl";
import type { HeroClass } from "@/data/types";
import type { CharacterDraft } from "./character-builder";
import { t as tl } from "@/lib/utils";
import { getSubclassFeaturesUpToLevel } from "@/lib/character-rules";
import { Badge } from "@/components/ui/badge";

type Props = {
  locale: string;
  draft: CharacterDraft;
  classData: HeroClass;
  onSelect: (subclassId: string) => void;
};

export function StepSubclass({ locale, draft, classData, onSelect }: Props) {
  const t = useTranslations("builder");

  return (
    <div>
      <h2 className="mb-1 text-lg font-semibold text-foreground">
        {t("selectSubclass")}
      </h2>
      <p className="mb-4 text-sm text-muted">{t("selectSubclassDesc")}</p>

      <div className="grid gap-4 sm:grid-cols-2">
        {classData.subclasses.map((subclass) => {
          const currentFeatures = getSubclassFeaturesUpToLevel(subclass, draft.level);
          const futureFeatures = subclass.features.filter((f) => f.level > draft.level);

          return (
            <button
              key={subclass.id}
              onClick={() => onSelect(subclass.id)}
              className={`rounded-lg border p-4 text-left transition-colors ${
                draft.subclassId === subclass.id
                  ? "border-accent bg-accent/10"
                  : "border-border bg-surface hover:bg-surface-hover"
              }`}
            >
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-semibold text-foreground">
                  {tl(subclass.name, locale)}
                </h3>
                {subclass.type === "story-based" && (
                  <Badge>{t("storyBased")}</Badge>
                )}
              </div>

              <p className="mb-3 text-xs text-muted">
                {tl(subclass.description, locale)}
              </p>

              {/* Current level features */}
              {currentFeatures.length > 0 && (
                <div className="mb-2">
                  <p className="mb-1 text-xs font-medium text-accent">
                    {t("featuresAtLevel")}
                  </p>
                  {currentFeatures.map((feature, i) => (
                    <div key={i} className="mb-1">
                      <p className="text-xs font-medium text-foreground">
                        L{feature.level}: {tl(feature.name, locale)}
                      </p>
                      <p className="text-xs text-muted">
                        {tl(feature.description, locale)}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Future features */}
              {futureFeatures.length > 0 && (
                <div className="opacity-50">
                  <p className="mb-1 text-xs font-medium text-muted">
                    {t("futureFeatures")}
                  </p>
                  {futureFeatures.map((feature, i) => (
                    <p key={i} className="text-xs text-muted">
                      L{feature.level}: {tl(feature.name, locale)}
                    </p>
                  ))}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
