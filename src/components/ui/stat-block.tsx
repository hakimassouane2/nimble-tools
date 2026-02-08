import type { HeroClass } from "@/data/types";
import { t } from "@/lib/utils";
import { complexityDiamonds } from "@/lib/utils";

type StatBlockProps = {
  heroClass: HeroClass;
  locale: string;
};

export function StatBlock({ heroClass, locale }: StatBlockProps) {
  return (
    <div className="grid grid-cols-2 gap-3 rounded-lg border border-border bg-surface p-4 text-sm sm:grid-cols-3">
      <div>
        <span className="text-muted">Complexity</span>
        <p className="font-medium">{complexityDiamonds(heroClass.complexity)}</p>
      </div>
      <div>
        <span className="text-muted">Key Stats</span>
        <p className="font-medium">{heroClass.keyStats.join(" / ")}</p>
      </div>
      <div>
        <span className="text-muted">Hit Die</span>
        <p className="font-medium">{heroClass.hitDie}</p>
      </div>
      <div>
        <span className="text-muted">Starting HP</span>
        <p className="font-medium">{heroClass.startingHp}</p>
      </div>
      <div>
        <span className="text-muted">Strong Save</span>
        <p className="font-medium">{heroClass.saves.strong}</p>
      </div>
      <div>
        <span className="text-muted">Weak Save</span>
        <p className="font-medium">{heroClass.saves.weak}</p>
      </div>
      <div className="col-span-2 sm:col-span-3">
        <span className="text-muted">Armor Proficiency</span>
        <p className="font-medium">
          {heroClass.armorProficiency.map((a) => t(a, locale)).join(", ")}
        </p>
      </div>
      <div className="col-span-2 sm:col-span-3">
        <span className="text-muted">Weapon Proficiency</span>
        <p className="font-medium">
          {heroClass.weaponProficiency.map((w) => t(w, locale)).join(", ")}
        </p>
      </div>
    </div>
  );
}
