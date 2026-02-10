"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import type { CharacterData } from "@/data/types";
import { heroClasses } from "@/data/classes";
import { ancestries } from "@/data/ancestries";
import { backgrounds } from "@/data/backgrounds";
import { skills } from "@/data/skills";
import { calculateSkillBase, ALL_LANGUAGES } from "@/lib/character-rules";
import { t as tl, tStat } from "@/lib/utils";
import { Link } from "@/i18n/navigation";

const PDF_GROUPS = [
  { key: "identity", labelKey: "group_identity" },
  { key: "stats", labelKey: "group_stats" },
  { key: "hitPoints", labelKey: "group_hitPoints" },
  { key: "hitDice", labelKey: "group_hitDice" },
  { key: "combat", labelKey: "group_combat" },
  { key: "skills", labelKey: "group_skills" },
  { key: "features", labelKey: "group_features" },
  { key: "equipment", labelKey: "group_equipment" },
  { key: "proficiencies", labelKey: "group_proficiencies" },
] as const;

type Props = {
  locale: string;
  characterId: string;
  data: CharacterData;
  createdAt: string;
};

export function CharacterDetail({ locale, characterId, data }: Props) {
  const t = useTranslations("builder");
  const tc = useTranslations("characters");
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [hiddenGroups, setHiddenGroups] = useState<Set<string>>(new Set());
  const [pdfMode, setPdfMode] = useState<"export" | "preview">("export");

  const classData = heroClasses.find((c) => c.id === data.classId);
  const ancestryData = ancestries.find((a) => a.id === data.ancestryId);
  const backgroundData = backgrounds.find((b) => b.id === data.backgroundId);
  const skillBase = calculateSkillBase(data.stats);

  function handleExportPdf() {
    setPdfMode("export");
    setShowPrintModal(true);
  }

  function handlePreviewPdf() {
    setPdfMode("preview");
    setShowPrintModal(true);
  }

  function handleConfirmPdf() {
    let url = `/api/characters/${characterId}/pdf?locale=${locale}`;
    if (pdfMode === "preview") url += "&inline";
    if (hiddenGroups.size > 0) url += `&hide=${[...hiddenGroups].join(",")}`;
    window.open(url, "_blank");
    setShowPrintModal(false);
  }

  function toggleGroup(key: string) {
    setHiddenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">{data.name}</h1>
          <p className="text-muted">
            {classData && tl(classData.name, locale)} ·{" "}
            {ancestryData && tl(ancestryData.name, locale)} ·{" "}
            {tc("level", { level: data.level })}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handlePreviewPdf}
            className="rounded-md border border-border px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            {tc("preview")}
          </button>
          <button
            onClick={handleExportPdf}
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent/90"
          >
            {tc("export")}
          </button>
          <Link
            href="/characters"
            className="rounded-md border border-border px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            {tc("backToList")}
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        {/* Stats */}
        <div className="grid grid-cols-4 gap-2">
          {(["STR", "DEX", "INT", "WIL"] as const).map((stat) => (
            <div
              key={stat}
              className="rounded-lg border border-border bg-surface p-3 text-center"
            >
              <p className="text-xs text-muted">{tStat(stat, locale)}</p>
              <p className="text-2xl font-bold text-foreground">
                {data.stats[stat] > 0 ? `+${data.stats[stat]}` : data.stats[stat]}
              </p>
            </div>
          ))}
        </div>

        {/* Secondary stats */}
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-7">
          {[
            { label: t("hp"), value: data.hp },
            { label: t("hitDice"), value: `${data.hitDiceCount}${data.hitDie}` },
            { label: t("initiative"), value: data.initiative },
            { label: t("speed"), value: data.speed },
            { label: t("wounds"), value: data.maxWounds },
            { label: t("inventorySlots"), value: data.inventorySlots },
            { label: t("armor"), value: data.armorValue },
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
        <div className="rounded-lg border border-border bg-surface p-4">
          <h3 className="mb-1 text-sm font-medium text-muted">{t("saves")}</h3>
          <p className="text-foreground">
            {t("strong")}: {tStat(data.saves.strong, locale)} | {t("weak")}:{" "}
            {tStat(data.saves.weak, locale)}
          </p>
        </div>

        {/* Background */}
        {backgroundData && (
          <div className="rounded-lg border border-border bg-surface p-4">
            <h3 className="mb-1 text-sm font-medium text-muted">{t("stepBackground")}</h3>
            <p className="font-medium text-foreground">
              {tl(backgroundData.name, locale)}
            </p>
            <ul className="mt-1 space-y-0.5">
              {backgroundData.effects.map((effect, i) => (
                <li key={i} className="text-sm text-muted">
                  • {tl(effect, locale)}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Skills */}
        <div className="rounded-lg border border-border bg-surface p-4">
          <h3 className="mb-2 text-sm font-medium text-muted">{t("skills")}</h3>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
            {skills.map((skill) => {
              const base = skillBase[skill.id] ?? 0;
              const bonus = data.bonusSkillPoints[skill.id] ?? 0;
              const total = base + bonus;
              return (
                <div key={skill.id}>
                  <span className="text-xs text-muted">
                    {tl(skill.name, locale)}
                  </span>
                  <p className="font-semibold text-foreground">{total}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Abilities */}
        {classData && (
          <div className="rounded-lg border border-border bg-surface p-4">
            <h3 className="mb-2 text-sm font-medium text-muted">
              {t("abilities")}
            </h3>
            {classData.abilities
              .filter((a) => a.level === 1)
              .map((ability, i) => (
                <div key={i} className="mb-2">
                  <p className="font-medium text-foreground">
                    {tl(ability.name, locale)}
                  </p>
                  <p className="text-sm text-muted">
                    {tl(ability.description, locale)}
                  </p>
                </div>
              ))}
            {ancestryData && (
              <div className="mt-2 border-t border-border pt-2">
                <p className="font-medium text-foreground">
                  {t("trait")}: {tl(ancestryData.trait.name, locale)}
                </p>
                <p className="text-sm text-muted">
                  {tl(ancestryData.trait.description, locale)}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Equipment */}
        <div className="rounded-lg border border-border bg-surface p-4">
          <h3 className="mb-1 text-sm font-medium text-muted">
            {t("stepEquipment")}
          </h3>
          {data.equipment.length > 0 ? (
            <ul className="space-y-0.5">
              {data.equipment.map((item, i) => (
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
        <div className="rounded-lg border border-border bg-surface p-4">
          <h3 className="mb-1 text-sm font-medium text-muted">
            {t("stepLanguages")}
          </h3>
          <p className="text-foreground">
            {data.languages.length > 0
              ? data.languages
                  .map((lang) => {
                    if (lang === "Common") return locale === "fr" ? "Commun" : "Common";
                    const found = ALL_LANGUAGES.find((l) => l.en === lang);
                    return found ? tl(found, locale) : lang;
                  })
                  .join(", ")
              : locale === "fr" ? "Commun" : "Common"}
          </p>
        </div>
      </div>

      {/* Print Options Modal */}
      {showPrintModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-md rounded-lg border border-border bg-surface p-6">
            <h2 className="text-lg font-bold text-foreground">
              {tc("printOptions")}
            </h2>
            <p className="mt-1 text-sm text-muted">{tc("printOptionsDesc")}</p>

            <div className="mt-3 flex gap-2">
              <button
                onClick={() => setHiddenGroups(new Set())}
                className="text-xs font-medium text-accent hover:underline"
              >
                {tc("showAll")}
              </button>
              <button
                onClick={() =>
                  setHiddenGroups(new Set(PDF_GROUPS.map((g) => g.key)))
                }
                className="text-xs font-medium text-accent hover:underline"
              >
                {tc("hideAll")}
              </button>
            </div>

            <div className="mt-3 space-y-2">
              {PDF_GROUPS.map((group) => (
                <label
                  key={group.key}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <input
                    type="checkbox"
                    checked={!hiddenGroups.has(group.key)}
                    onChange={() => toggleGroup(group.key)}
                    className="rounded border-border"
                  />
                  {tc(group.labelKey)}
                </label>
              ))}
            </div>

            <div className="mt-5 flex justify-end gap-2">
              <button
                onClick={() => setShowPrintModal(false)}
                className="rounded-md border border-border px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {tc("cancel")}
              </button>
              <button
                onClick={handleConfirmPdf}
                className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent/90"
              >
                {pdfMode === "preview" ? tc("preview") : tc("export")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
