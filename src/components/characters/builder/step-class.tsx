"use client";

import { useTranslations } from "next-intl";
import { heroClasses } from "@/data/classes";
import { t as tl } from "@/lib/utils";
import { complexityDiamonds, tStat } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

type Props = {
  locale: string;
  selectedClassId: string | null;
  onSelect: (classId: string) => void;
};

export function StepClass({ locale, selectedClassId, onSelect }: Props) {
  const t = useTranslations("builder");

  return (
    <div>
      <h2 className="mb-1 text-lg font-semibold text-foreground">
        {t("selectClass")}
      </h2>
      <p className="mb-4 text-sm text-muted">{t("selectClassDesc")}</p>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {heroClasses.map((cls) => (
          <button
            key={cls.id}
            onClick={() => onSelect(cls.id)}
            className={`rounded-lg border p-4 text-left transition-colors ${
              selectedClassId === cls.id
                ? "border-accent bg-accent/10"
                : "border-border bg-surface hover:bg-surface-hover"
            }`}
          >
            <div className="mb-1 flex items-center justify-between">
              <h3 className="font-semibold text-foreground">
                {tl(cls.name, locale)}
              </h3>
              <span className="text-xs text-muted">
                {complexityDiamonds(cls.complexity)}
              </span>
            </div>

            <p className="mb-2 line-clamp-2 text-xs text-muted">
              {tl(cls.description, locale)}
            </p>

            <div className="flex flex-wrap gap-1">
              <Badge>
                {tStat(cls.keyStats[0], locale)}/{tStat(cls.keyStats[1], locale)}
              </Badge>
              <Badge>{cls.hitDie.replace(/^\d+/, "")}</Badge>
              <Badge>HP {cls.startingHp}</Badge>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
