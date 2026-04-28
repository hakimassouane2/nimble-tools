"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import type { CharacterData } from "@/data/types";
import { heroClasses } from "@/data/classes";
import { ancestries } from "@/data/ancestries";
import { backgrounds } from "@/data/backgrounds";
import { skills } from "@/data/skills";
import {
  calculateSkillBase,
  ALL_LANGUAGES,
  getEffectiveStats,
  getSubclassFeaturesUpToLevel,
  calculateManaPool,
  getMaxSpellTier,
  calculateClassResource,
} from "@/lib/character-rules";
import { t as tl, tStat } from "@/lib/utils";
import { Link } from "@/i18n/navigation";

type PdfGroup = {
  key: string;
  labelKey: string;
  items?: { key: string; labelKey: string }[];
};

const PDF_GROUPS: PdfGroup[] = [
  {
    key: "identity",
    labelKey: "group_identity",
    items: [
      { key: "identityName", labelKey: "group_identity_name" },
      { key: "identityAncestry", labelKey: "group_identity_ancestry" },
      { key: "identityClass", labelKey: "group_identity_class" },
      { key: "identityLevel", labelKey: "group_identity_level" },
    ],
  },
  { key: "stats", labelKey: "group_stats" },
  {
    key: "hitPoints",
    labelKey: "group_hitPoints",
    items: [
      { key: "hitPointsMax", labelKey: "group_hitPoints_max" },
      { key: "hitPointsCurrent", labelKey: "group_hitPoints_current" },
    ],
  },
  {
    key: "hitDice",
    labelKey: "group_hitDice",
    items: [
      { key: "hitDiceType", labelKey: "group_hitDice_type" },
      { key: "hitDiceMax", labelKey: "group_hitDice_max" },
      { key: "hitDiceCurrent", labelKey: "group_hitDice_current" },
    ],
  },
  {
    key: "combat",
    labelKey: "group_combat",
    items: [
      { key: "combatClassResource", labelKey: "group_combat_classResource" },
      { key: "combatArmor", labelKey: "group_combat_armor" },
      { key: "combatInitiative", labelKey: "group_combat_initiative" },
      { key: "combatSpeed", labelKey: "group_combat_speed" },
    ],
  },
  { key: "skills", labelKey: "group_skills" },
  { key: "features", labelKey: "group_features" },
  { key: "equipment", labelKey: "group_equipment" },
  { key: "proficiencies", labelKey: "group_proficiencies" },
];

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

  const level = data.level ?? 1;

  // Compute effective stats (base + increases + capstone)
  const effectiveStats = data.statIncreases
    ? getEffectiveStats(data.stats, data.statIncreases, data.capstoneStatIncreases)
    : data.stats;

  const skillBase = calculateSkillBase(effectiveStats, ancestryData);
  const effectiveInitiative = effectiveStats.DEX + (ancestryData?.modifiers.initiative ?? 0);

  // Subclass lookup
  const subclass = data.subclassId && classData
    ? classData.subclasses.find((s) => s.id === data.subclassId)
    : null;

  // Mana pool and spell tier for casters
  const manaPool = calculateManaPool(data.classId, effectiveStats, level);
  const maxSpellTier = manaPool !== null ? getMaxSpellTier(level) : null;

  // Class resource (Fury Dice, Combat Dice, etc.)
  const classResource = calculateClassResource(data.classId, effectiveStats, level);

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

  function toggleItem(key: string) {
    setHiddenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  function toggleGroup(group: PdfGroup) {
    if (!group.items) {
      toggleItem(group.key);
      return;
    }
    const allHidden = group.items.every((item) => hiddenGroups.has(item.key));
    setHiddenGroups((prev) => {
      const next = new Set(prev);
      for (const item of group.items!) {
        if (allHidden) next.delete(item.key);
        else next.add(item.key);
      }
      return next;
    });
  }

  function getGroupCheckedState(group: PdfGroup): "all" | "some" | "none" {
    if (!group.items) return hiddenGroups.has(group.key) ? "none" : "all";
    const hiddenCount = group.items.filter((item) => hiddenGroups.has(item.key)).length;
    if (hiddenCount === 0) return "all";
    if (hiddenCount === group.items.length) return "none";
    return "some";
  }

  function getAllItemKeys(): string[] {
    return PDF_GROUPS.flatMap((g) => g.items ? g.items.map((i) => i.key) : [g.key]);
  }

  // Group abilities by level
  const abilitiesByLevel = new Map<number, NonNullable<typeof classData>["abilities"]>();
  if (classData) {
    for (const ability of classData.abilities.filter((a) => a.level <= level)) {
      const group = abilitiesByLevel.get(ability.level) ?? [];
      group.push(ability);
      abilitiesByLevel.set(ability.level, group);
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">{data.name}</h1>
        <p className="text-muted">
          {classData && tl(classData.name, locale)}
          {subclass && ` (${tl(subclass.name, locale)})`}
          {" · "}
          {ancestryData && tl(ancestryData.name, locale)} ·{" "}
          {tc("level", { level })}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {level < 20 && (
            <Link
              href={`/characters/new?characterId=${characterId}&mode=levelup`}
              className="rounded-md border border-border px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {tc("levelUp")}
            </Link>
          )}
          <Link
            href={`/characters/new?characterId=${characterId}&mode=edit`}
            className="rounded-md border border-border px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            {tc("editCharacter")}
          </Link>
          <button
            onClick={handlePreviewPdf}
            className="rounded-md border border-border px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            {tc("preview")}
          </button>
          <button
            onClick={handleExportPdf}
            className="rounded-md border border-border px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            {tc("export")}
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {/* Stats (effective) */}
        <div className="grid grid-cols-4 gap-2">
          {(["STR", "DEX", "INT", "WIL"] as const).map((stat) => {
            const base = data.stats[stat];
            const effective = effectiveStats[stat];
            const diff = effective - base;
            return (
              <div
                key={stat}
                className="rounded-lg border border-border bg-surface p-3 text-center"
              >
                <p className="text-xs text-muted">{tStat(stat, locale)}</p>
                <p className="text-2xl font-bold text-foreground">
                  {effective > 0 ? `+${effective}` : effective}
                </p>
                {diff > 0 && (
                  <p className="text-xs text-accent">
                    ({base > 0 ? `+${base}` : base} +{diff})
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Secondary stats */}
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-7">
          {[
            { label: t("hp"), value: data.hp },
            { label: t("hitDice"), value: `${data.hitDiceCount}${data.hitDie.replace(/^\d+/, "")}` },
            { label: t("initiative"), value: effectiveInitiative },
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

        {/* Mana Pool & Spell Tier (casters only) */}
        {manaPool !== null && (
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg border border-border bg-surface p-3 text-center">
              <p className="text-xs text-muted">{tc("manaPool")}</p>
              <p className="text-xl font-bold text-foreground">{manaPool}</p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3 text-center">
              <p className="text-xs text-muted">{tc("maxSpellTier")}</p>
              <p className="text-xl font-bold text-foreground">{maxSpellTier}</p>
            </div>
          </div>
        )}

        {/* Class Resource (Fury Dice, Combat Dice, etc.) */}
        {classResource && (
          <div className={`grid gap-2 ${classResource.die ? "grid-cols-2" : "grid-cols-1"}`}>
            <div className="rounded-lg border border-border bg-surface p-3 text-center">
              <p className="text-xs text-muted">{tl(classResource.name, locale)}</p>
              <p className="text-xl font-bold text-foreground">{classResource.max}</p>
            </div>
            {classResource.die && (
              <div className="rounded-lg border border-border bg-surface p-3 text-center">
                <p className="text-xs text-muted">{tc("resourceDie")}</p>
                <p className="text-xl font-bold text-foreground">{classResource.die}</p>
              </div>
            )}
          </div>
        )}

        {/* Saves */}
        <div className="rounded-lg border border-border bg-surface p-4">
          <h3 className="mb-1 text-sm font-medium text-muted">{t("saves")}</h3>
          <p className="text-foreground">
            {t("strong")}: {tStat(data.saves.strong, locale)} | {t("weak")}:{" "}
            {tStat(data.saves.weak, locale)}
          </p>
        </div>

        {/* Subclass Info */}
        {subclass && (
          <div className="rounded-lg border border-border bg-surface p-4">
            <h3 className="mb-1 text-sm font-medium text-muted">{tc("subclass")}</h3>
            <p className="font-medium text-foreground">
              {tl(subclass.name, locale)}
            </p>
            <p className="mb-2 text-sm text-muted">
              {tl(subclass.description, locale)}
            </p>
            {getSubclassFeaturesUpToLevel(subclass, level).map((feature, i) => (
              <div key={i} className="mb-1">
                <p className="text-sm font-medium text-foreground">
                  {locale === "fr" ? "Niv" : "Lvl"} {feature.level}: {tl(feature.name, locale)}
                </p>
                <p className="text-xs text-muted">
                  {tl(feature.description, locale)}
                </p>
              </div>
            ))}
          </div>
        )}

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

        {/* Abilities (grouped by level) */}
        {classData && (
          <div className="rounded-lg border border-border bg-surface p-4">
            <h3 className="mb-2 text-sm font-medium text-muted">
              {t("abilities")}
            </h3>
            {Array.from(abilitiesByLevel.entries())
              .sort(([a], [b]) => a - b)
              .map(([lvl, abilities]) => (
                <div key={lvl} className="mb-3">
                  {level > 1 && (
                    <p className="mb-1 text-xs font-medium text-accent">
                      {tc("level", { level: lvl })}
                    </p>
                  )}
                  {abilities
                    .filter((a) => a.type === "core")
                    .map((ability, i) => (
                      <div key={i} className="mb-1">
                        <p className="font-medium text-foreground">
                          {tl(ability.name, locale)}
                        </p>
                        <p className="text-sm text-muted">
                          {tl(ability.description, locale)}
                        </p>
                      </div>
                    ))}
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

        {/* Ability Pool Picks */}
        {classData?.abilityPool && data.abilityPoolPicks && data.abilityPoolPicks.length > 0 && (
          <div className="rounded-lg border border-border bg-surface p-4">
            <h3 className="mb-2 text-sm font-medium text-muted">
              {tl(classData.abilityPool.name, locale)}
            </h3>
            {data.abilityPoolPicks.map((pick, i) => {
              const ability = classData.abilityPool!.abilities[pick.abilityIndex];
              if (!ability) return null;
              return (
                <div key={i} className="mb-2">
                  <p className="font-medium text-foreground">
                    {tl(ability.name, locale)}
                    <span className="ml-2 text-xs text-muted">{locale === "fr" ? "Niv" : "Lvl"} {pick.level}</span>
                  </p>
                  <p className="text-sm text-muted">
                    {tl(ability.description, locale)}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {/* Epic Boon */}
        {data.epicBoon && (
          <div className="rounded-lg border border-border bg-surface p-4">
            <h3 className="mb-1 text-sm font-medium text-muted">{tc("epicBoonLabel")}</h3>
            <p className="text-foreground">{data.epicBoon}</p>
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
            <p className="text-sm text-muted">-</p>
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
                onClick={() => setHiddenGroups(new Set(getAllItemKeys()))}
                className="text-xs font-medium text-accent hover:underline"
              >
                {tc("hideAll")}
              </button>
            </div>

            <div className="mt-3 space-y-1">
              {PDF_GROUPS.map((group) => {
                const state = getGroupCheckedState(group);
                return (
                  <div key={group.key}>
                    <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <input
                        type="checkbox"
                        checked={state === "all"}
                        ref={(el) => { if (el) el.indeterminate = state === "some"; }}
                        onChange={() => toggleGroup(group)}
                        className="rounded border-border"
                      />
                      {tc(group.labelKey)}
                    </label>
                    {group.items && (
                      <div className="ml-6 mt-0.5 space-y-0.5">
                        {group.items.map((item) => (
                          <label
                            key={item.key}
                            className="flex items-center gap-2 text-sm text-muted"
                          >
                            <input
                              type="checkbox"
                              checked={!hiddenGroups.has(item.key)}
                              onChange={() => toggleItem(item.key)}
                              className="rounded border-border"
                            />
                            {tc(item.labelKey)}
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
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
