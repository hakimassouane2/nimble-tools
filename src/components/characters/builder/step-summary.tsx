"use client";

import { useTranslations } from "next-intl";
import type { CharacterDraft } from "./character-builder";
import { heroClasses } from "@/data/classes";
import { ancestries } from "@/data/ancestries";
import { backgrounds } from "@/data/backgrounds";
import { skills } from "@/data/skills";
import {
  calculateSecondaryStats,
  calculateSkillBase,
  ALL_LANGUAGES,
} from "@/lib/character-rules";
import { t as tl, tStat } from "@/lib/utils";

type Props = {
  locale: string;
  draft: CharacterDraft;
  onUpdateDetails: (
    name: string,
    height?: string,
    weight?: string,
    adventuringMotivation?: string
  ) => void;
  onSave: () => void;
};

export function StepSummary({ locale, draft, onUpdateDetails }: Props) {
  const t = useTranslations("builder");

  const classData = heroClasses.find((c) => c.id === draft.classId);
  const ancestryData = ancestries.find((a) => a.id === draft.ancestryId);
  const backgroundData = backgrounds.find((b) => b.id === draft.backgroundId);

  const secondary =
    classData && ancestryData && draft.stats
      ? calculateSecondaryStats(classData, ancestryData, draft.stats)
      : null;

  const skillBase = draft.stats ? calculateSkillBase(draft.stats) : {};

  const inputClass =
    "mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-foreground placeholder-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold text-foreground">
        {t("summaryTitle")}
      </h2>

      {/* Character details form */}
      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-foreground">
            {t("characterName")} *
          </label>
          <input
            type="text"
            value={draft.name}
            onChange={(e) =>
              onUpdateDetails(
                e.target.value,
                draft.height,
                draft.weight,
                draft.adventuringMotivation
              )
            }
            placeholder={t("characterNamePlaceholder")}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground">
            {t("height")}
          </label>
          <input
            type="text"
            value={draft.height}
            onChange={(e) =>
              onUpdateDetails(
                draft.name,
                e.target.value,
                draft.weight,
                draft.adventuringMotivation
              )
            }
            placeholder={t("heightPlaceholder")}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground">
            {t("weight")}
          </label>
          <input
            type="text"
            value={draft.weight}
            onChange={(e) =>
              onUpdateDetails(
                draft.name,
                draft.height,
                e.target.value,
                draft.adventuringMotivation
              )
            }
            placeholder={t("weightPlaceholder")}
            className={inputClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-foreground">
            {t("adventuringMotivation")}
          </label>
          <textarea
            value={draft.adventuringMotivation}
            onChange={(e) =>
              onUpdateDetails(
                draft.name,
                draft.height,
                draft.weight,
                e.target.value
              )
            }
            placeholder={t("adventuringMotivationPlaceholder")}
            rows={2}
            className={inputClass}
          />
        </div>
      </div>

      {/* Character summary */}
      {classData && ancestryData && backgroundData && secondary && draft.stats && (
        <div className="space-y-4">
          <h3 className="font-semibold text-foreground">
            {t("characterSummary")}
          </h3>

          {/* Class / Ancestry / Background */}
          <div className="grid gap-2 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-xs text-muted">{t("stepClass")}</p>
              <p className="font-medium text-foreground">
                {tl(classData.name, locale)}
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-xs text-muted">{t("stepAncestry")}</p>
              <p className="font-medium text-foreground">
                {tl(ancestryData.name, locale)}
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-xs text-muted">{t("stepBackground")}</p>
              <p className="font-medium text-foreground">
                {tl(backgroundData.name, locale)}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-2">
            {(["STR", "DEX", "INT", "WIL"] as const).map((stat) => (
              <div
                key={stat}
                className="rounded-lg border border-border bg-surface p-3 text-center"
              >
                <p className="text-xs text-muted">{tStat(stat, locale)}</p>
                <p className="text-xl font-bold text-foreground">
                  {draft.stats![stat] > 0
                    ? `+${draft.stats![stat]}`
                    : draft.stats![stat]}
                </p>
              </div>
            ))}
          </div>

          {/* Secondary stats */}
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
            {[
              { label: t("hp"), value: secondary.hp },
              { label: t("hitDice"), value: secondary.hitDie },
              { label: t("initiative"), value: secondary.initiative },
              { label: t("speed"), value: secondary.speed },
              { label: t("wounds"), value: secondary.maxWounds },
              { label: t("inventorySlots"), value: secondary.inventorySlots },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="rounded-lg border border-border bg-surface p-2 text-center"
              >
                <p className="text-xs text-muted">{label}</p>
                <p className="font-semibold text-foreground">{value}</p>
              </div>
            ))}
          </div>

          {/* Saves */}
          <div className="rounded-lg border border-border bg-surface p-3">
            <p className="mb-1 text-xs text-muted">{t("saves")}</p>
            <p className="text-sm text-foreground">
              {t("strong")}: {tStat(secondary.saves.strong, locale)} | {t("weak")}:{" "}
              {tStat(secondary.saves.weak, locale)}
            </p>
          </div>

          {/* Skills */}
          <div className="rounded-lg border border-border bg-surface p-3">
            <p className="mb-2 text-xs text-muted">{t("skills")}</p>
            <div className="grid grid-cols-2 gap-1 sm:grid-cols-5">
              {skills.map((skill) => {
                const base = skillBase[skill.id] ?? 0;
                const bonus = draft.bonusSkillPoints[skill.id] ?? 0;
                return (
                  <div key={skill.id} className="text-sm">
                    <span className="text-muted">
                      {tl(skill.name, locale)}:
                    </span>{" "}
                    <span className="font-medium text-foreground">
                      {base + bonus}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Equipment */}
          <div className="rounded-lg border border-border bg-surface p-3">
            <p className="mb-1 text-xs text-muted">{t("stepEquipment")}</p>
            {draft.equipment.length > 0 ? (
              <ul className="space-y-0.5">
                {draft.equipment.map((item, i) => (
                  <li key={i} className="text-sm text-foreground">
                    • {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted">—</p>
            )}
          </div>

          {/* Languages */}
          <div className="rounded-lg border border-border bg-surface p-3">
            <p className="mb-1 text-xs text-muted">{t("stepLanguages")}</p>
            <p className="text-sm text-foreground">
              {draft.languages.length > 0
                ? draft.languages
                    .map((lang) => {
                      if (lang === "Common") return locale === "fr" ? "Commun" : "Common";
                      const found = ALL_LANGUAGES.find((l) => l.en === lang);
                      return found ? tl(found, locale) : lang;
                    })
                    .join(", ")
                : locale === "fr" ? "Commun" : "Common"}
            </p>
          </div>

          {/* Abilities */}
          <div className="rounded-lg border border-border bg-surface p-3">
            <p className="mb-2 text-xs text-muted">{t("abilities")}</p>
            {classData.abilities
              .filter((a) => a.level === 1)
              .map((ability, i) => (
                <div key={i} className="mb-1">
                  <span className="text-sm font-medium text-foreground">
                    {tl(ability.name, locale)}:
                  </span>{" "}
                  <span className="text-xs text-muted">
                    {tl(ability.description, locale)}
                  </span>
                </div>
              ))}
            <div className="mt-2 border-t border-border pt-2">
              <span className="text-sm font-medium text-foreground">
                {t("trait")}: {tl(ancestryData.trait.name, locale)}
              </span>
              <span className="ml-1 text-xs text-muted">
                — {tl(ancestryData.trait.description, locale)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
