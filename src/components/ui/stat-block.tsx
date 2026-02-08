import type { HeroClass } from "@/data/types";
import { t, tStat, complexityDiamonds } from "@/lib/utils";

type StatBlockProps = {
  heroClass: HeroClass;
  locale: string;
  labels: {
    complexity: string;
    keyStats: string;
    hitDie: string;
    startingHp: string;
    strong: string;
    weak: string;
    armorProf: string;
    weaponProf: string;
  };
};

export function StatBlock({ heroClass, locale, labels }: StatBlockProps) {
  return (
    <div className="grid grid-cols-2 gap-3 rounded-lg border border-border bg-surface p-4 text-sm sm:grid-cols-3">
      <div>
        <span className="text-muted">{labels.complexity}</span>
        <p className="font-medium">{complexityDiamonds(heroClass.complexity)}</p>
      </div>
      <div>
        <span className="text-muted">{labels.keyStats}</span>
        <p className="font-medium">
          {heroClass.keyStats.map((s) => tStat(s, locale)).join(" / ")}
        </p>
      </div>
      <div>
        <span className="text-muted">{labels.hitDie}</span>
        <p className="font-medium">{heroClass.hitDie}</p>
      </div>
      <div>
        <span className="text-muted">{labels.startingHp}</span>
        <p className="font-medium">{heroClass.startingHp}</p>
      </div>
      <div>
        <span className="text-muted">{labels.strong}</span>
        <p className="font-medium">{tStat(heroClass.saves.strong, locale)}</p>
      </div>
      <div>
        <span className="text-muted">{labels.weak}</span>
        <p className="font-medium">{tStat(heroClass.saves.weak, locale)}</p>
      </div>
      <div className="col-span-2 sm:col-span-3">
        <span className="text-muted">{labels.armorProf}</span>
        <p className="font-medium">
          {heroClass.armorProficiency.map((a) => t(a, locale)).join(", ")}
        </p>
      </div>
      <div className="col-span-2 sm:col-span-3">
        <span className="text-muted">{labels.weaponProf}</span>
        <p className="font-medium">
          {heroClass.weaponProficiency.map((w) => t(w, locale)).join(", ")}
        </p>
      </div>
    </div>
  );
}
