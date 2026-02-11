"use client";

import { useReducer, useState, useMemo, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import type { Stat, CharacterData } from "@/data/types";
import { heroClasses } from "@/data/classes";
import { ancestries } from "@/data/ancestries";
import { backgrounds } from "@/data/backgrounds";
import {
  calculateSecondaryStats,
  getEffectiveStats,
  getAbilityPoolPicksNeeded,
  getExpectedStatIncreaseCount,
  getHitDieSize,
} from "@/lib/character-rules";
import { StepClass } from "./step-class";
import { StepLevel } from "./step-level";
import { StepStats } from "./step-stats";
import { StepAncestry } from "./step-ancestry";
import { StepBackground } from "./step-background";
import { StepSkills } from "./step-skills";
import { StepSubclass } from "./step-subclass";
import { StepLevelChoices } from "./step-level-choices";
import { StepEquipment } from "./step-equipment";
import { StepLanguages } from "./step-languages";
import { StepSummary } from "./step-summary";
import { StepHpRoll } from "./step-hp-roll";
import { StepSkillsLevelUp } from "./step-skills-levelup";

export type CharacterDraft = {
  classId: string | null;
  level: number;
  statArrayType: string | null;
  stats: Record<Stat, number> | null;
  ancestryId: string | null;
  backgroundId: string | null;
  bonusSkillPoints: Record<string, number>;
  equipmentChoice: "starting-gear" | "gold" | null;
  equipment: string[];
  goldRemaining: number;
  languages: string[];
  name: string;
  height: string;
  weight: string;
  adventuringMotivation: string;
  // Level-up fields
  subclassId: string | null;
  statIncreases: Array<{ level: number; stat: Stat; type: "key" | "secondary" }>;
  capstoneStatIncreases: [Stat, Stat] | null;
  abilityPoolPicks: Array<{ level: number; abilityIndex: number }>;
  epicBoon: string;
  hpRolls: Record<number, number>;
  levelUpNewSkillId: string | null;
  levelUpMoveFromSkillId: string | null;
  levelUpMoveToSkillId: string | null;
};

type Action =
  | { type: "SET_CLASS"; classId: string }
  | { type: "SET_LEVEL"; level: number }
  | { type: "SET_STATS"; statArrayType: string; stats: Record<Stat, number> }
  | { type: "SET_ANCESTRY"; ancestryId: string }
  | { type: "SET_BACKGROUND"; backgroundId: string }
  | { type: "SET_SKILLS"; bonusSkillPoints: Record<string, number> }
  | {
      type: "SET_EQUIPMENT";
      equipmentChoice: "starting-gear" | "gold";
      equipment: string[];
      goldRemaining: number;
    }
  | { type: "SET_LANGUAGES"; languages: string[] }
  | {
      type: "SET_DETAILS";
      name: string;
      height: string;
      weight: string;
      adventuringMotivation: string;
    }
  | { type: "SET_SUBCLASS"; subclassId: string }
  | { type: "SET_STAT_INCREASES"; statIncreases: Array<{ level: number; stat: Stat; type: "key" | "secondary" }> }
  | { type: "SET_ABILITY_POOL_PICKS"; abilityPoolPicks: Array<{ level: number; abilityIndex: number }> }
  | { type: "SET_CAPSTONE_STATS"; capstoneStatIncreases: [Stat, Stat] }
  | { type: "SET_EPIC_BOON"; epicBoon: string }
  | { type: "SET_HP_ROLL"; level: number; result: number }
  | { type: "SET_LEVELUP_SKILLS"; newSkillId: string | null; moveFromSkillId: string | null; moveToSkillId: string | null }
  | { type: "LOAD_CHARACTER"; draft: CharacterDraft }
  | { type: "RESET" };

const initialDraft: CharacterDraft = {
  classId: null,
  level: 1,
  statArrayType: null,
  stats: null,
  ancestryId: null,
  backgroundId: null,
  bonusSkillPoints: {},
  equipmentChoice: null,
  equipment: [],
  goldRemaining: 50,
  languages: [],
  name: "",
  height: "",
  weight: "",
  adventuringMotivation: "",
  subclassId: null,
  statIncreases: [],
  capstoneStatIncreases: null,
  abilityPoolPicks: [],
  epicBoon: "",
  hpRolls: {},
  levelUpNewSkillId: null,
  levelUpMoveFromSkillId: null,
  levelUpMoveToSkillId: null,
};

function draftReducer(state: CharacterDraft, action: Action): CharacterDraft {
  switch (action.type) {
    case "SET_CLASS":
      return {
        ...state,
        classId: action.classId,
        level: 1,
        equipmentChoice: null,
        equipment: [],
        goldRemaining: 50,
        subclassId: null,
        statIncreases: [],
        capstoneStatIncreases: null,
        abilityPoolPicks: [],
        epicBoon: "",
        hpRolls: {},
      };
    case "SET_LEVEL":
      return {
        ...state,
        level: action.level,
        subclassId: action.level < 3 ? null : state.subclassId,
        statIncreases: [],
        capstoneStatIncreases: null,
        abilityPoolPicks: [],
        epicBoon: "",
        hpRolls: {},
      };
    case "SET_STATS":
      return {
        ...state,
        statArrayType: action.statArrayType,
        stats: action.stats,
        backgroundId: null,
        bonusSkillPoints: {},
        languages: [],
      };
    case "SET_ANCESTRY":
      return {
        ...state,
        ancestryId: action.ancestryId,
        languages: [],
      };
    case "SET_BACKGROUND":
      return { ...state, backgroundId: action.backgroundId };
    case "SET_SKILLS":
      return { ...state, bonusSkillPoints: action.bonusSkillPoints };
    case "SET_EQUIPMENT":
      return {
        ...state,
        equipmentChoice: action.equipmentChoice,
        equipment: action.equipment,
        goldRemaining: action.goldRemaining,
      };
    case "SET_LANGUAGES":
      return { ...state, languages: action.languages };
    case "SET_DETAILS":
      return {
        ...state,
        name: action.name,
        height: action.height,
        weight: action.weight,
        adventuringMotivation: action.adventuringMotivation,
      };
    case "SET_SUBCLASS":
      return { ...state, subclassId: action.subclassId };
    case "SET_STAT_INCREASES":
      return { ...state, statIncreases: action.statIncreases };
    case "SET_ABILITY_POOL_PICKS":
      return { ...state, abilityPoolPicks: action.abilityPoolPicks };
    case "SET_CAPSTONE_STATS":
      return { ...state, capstoneStatIncreases: action.capstoneStatIncreases };
    case "SET_EPIC_BOON":
      return { ...state, epicBoon: action.epicBoon };
    case "SET_HP_ROLL":
      return { ...state, hpRolls: { ...state.hpRolls, [action.level]: action.result } };
    case "SET_LEVELUP_SKILLS":
      return {
        ...state,
        levelUpNewSkillId: action.newSkillId,
        levelUpMoveFromSkillId: action.moveFromSkillId,
        levelUpMoveToSkillId: action.moveToSkillId,
      };
    case "LOAD_CHARACTER":
      return action.draft;
    case "RESET":
      return initialDraft;
    default:
      return state;
  }
}

type StepKey =
  | "stepClass"
  | "stepLevel"
  | "stepStats"
  | "stepAncestry"
  | "stepBackground"
  | "stepSkills"
  | "stepSubclass"
  | "stepLevelChoices"
  | "stepEquipment"
  | "stepLanguages"
  | "stepHpRoll"
  | "stepSkillsLevelUp"
  | "stepSummary";

function getActiveSteps(level: number, mode: BuilderMode): StepKey[] {
  if (mode === "levelup") {
    const steps: StepKey[] = ["stepHpRoll"];
    if (level === 3) steps.push("stepSubclass");
    if (level >= 2) steps.push("stepLevelChoices");
    steps.push("stepSkillsLevelUp", "stepSummary");
    return steps;
  }

  const steps: StepKey[] = [
    "stepClass",
    "stepLevel",
    "stepStats",
    "stepAncestry",
    "stepBackground",
    "stepSkills",
  ];

  if (level >= 3) steps.push("stepSubclass");
  if (level >= 2) steps.push("stepLevelChoices");
  if (level >= 2) steps.push("stepHpRoll");

  steps.push("stepEquipment", "stepLanguages", "stepSummary");
  return steps;
}

export type BuilderMode = "create" | "edit" | "levelup";

type Props = {
  locale: string;
  characterId?: string;
  mode?: BuilderMode;
  initialData?: CharacterData;
};

export function CharacterBuilder({ locale, characterId, mode = "create", initialData }: Props) {
  const t = useTranslations("builder");
  const router = useRouter();
  const [draft, dispatch] = useReducer(draftReducer, initialDraft);
  const [currentStep, setCurrentStep] = useState(0);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(mode === "create");

  // Load existing character for edit/levelup
  useEffect(() => {
    if (!initialData || loaded) return;

    const loadedDraft: CharacterDraft = {
      classId: initialData.classId,
      level: mode === "levelup" ? (initialData.level ?? 1) + 1 : (initialData.level ?? 1),
      statArrayType: initialData.statArrayType,
      stats: initialData.stats,
      ancestryId: initialData.ancestryId,
      backgroundId: initialData.backgroundId,
      bonusSkillPoints: initialData.bonusSkillPoints,
      equipmentChoice: initialData.equipmentChoice,
      equipment: initialData.equipment,
      goldRemaining: initialData.goldRemaining,
      languages: initialData.languages,
      name: initialData.name,
      height: initialData.height ?? "",
      weight: initialData.weight ?? "",
      adventuringMotivation: initialData.adventuringMotivation ?? "",
      subclassId: initialData.subclassId ?? null,
      statIncreases: initialData.statIncreases ?? [],
      capstoneStatIncreases: initialData.capstoneStatIncreases ?? null,
      abilityPoolPicks: initialData.abilityPoolPicks ?? [],
      epicBoon: initialData.epicBoon ?? "",
      hpRolls: {},
      levelUpNewSkillId: null,
      levelUpMoveFromSkillId: null,
      levelUpMoveToSkillId: null,
    };

    dispatch({ type: "LOAD_CHARACTER", draft: loadedDraft });
    setLoaded(true);
  }, [initialData, loaded, mode]);

  const classData = draft.classId
    ? heroClasses.find((c) => c.id === draft.classId) ?? null
    : null;
  const ancestryData = draft.ancestryId
    ? ancestries.find((a) => a.id === draft.ancestryId) ?? null
    : null;

  const activeSteps = useMemo(() => getActiveSteps(draft.level, mode), [draft.level, mode]);

  // Clamp currentStep when activeSteps shrinks (e.g., level reduced removes steps)
  useEffect(() => {
    if (currentStep >= activeSteps.length) {
      setCurrentStep(activeSteps.length - 1);
    }
  }, [activeSteps.length, currentStep]);

  const isStepValid = useCallback(
    (stepIndex: number): boolean => {
      const stepKey = activeSteps[stepIndex];
      if (!stepKey) return false;

      switch (stepKey) {
        case "stepClass":
          return draft.classId !== null;
        case "stepLevel":
          return draft.level >= 1 && draft.level <= 20;
        case "stepStats":
          return draft.statArrayType !== null && draft.stats !== null;
        case "stepAncestry":
          return draft.ancestryId !== null;
        case "stepBackground":
          return draft.backgroundId !== null;
        case "stepSkills":
          return true;
        case "stepHpRoll": {
          if (!classData) return false;
          const dieSize = getHitDieSize(classData.hitDie);
          const requiredLevels = mode === "levelup"
            ? [draft.level]
            : Array.from({ length: draft.level - 1 }, (_, i) => i + 2);
          return requiredLevels.every(
            (lvl) => draft.hpRolls[lvl] !== undefined && draft.hpRolls[lvl] >= 1 && draft.hpRolls[lvl] <= dieSize
          );
        }
        case "stepSkillsLevelUp":
          return draft.levelUpNewSkillId !== null &&
            (draft.levelUpMoveFromSkillId === null) === (draft.levelUpMoveToSkillId === null);
        case "stepSubclass":
          return draft.subclassId !== null;
        case "stepLevelChoices": {
          if (!classData) return false;
          const expectedStats = getExpectedStatIncreaseCount(draft.level);
          const expectedPicks = getAbilityPoolPicksNeeded(classData, draft.level);
          const hasStats = draft.statIncreases.length === expectedStats;
          const hasPicks = draft.abilityPoolPicks.length === expectedPicks;
          const hasCapstone = draft.level === 20 ? draft.capstoneStatIncreases !== null : true;
          return hasStats && hasPicks && hasCapstone;
        }
        case "stepEquipment":
          return draft.equipmentChoice !== null;
        case "stepLanguages":
          return true;
        case "stepSummary":
          return mode === "levelup" || draft.name.trim().length > 0;
        default:
          return false;
      }
    },
    [activeSteps, draft, classData, mode]
  );

  function handleNext() {
    if (isStepValid(currentStep) && currentStep < activeSteps.length - 1) {
      setCurrentStep((s) => s + 1);
    }
  }

  function handleBack() {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
    }
  }

  async function handleSave() {
    if (!classData || !ancestryData || !draft.stats) return;

    setSaving(true);
    setError(null);

    // Compute effective stats (base + stat increases + capstone)
    const effectiveStats = getEffectiveStats(draft.stats, draft.statIncreases, draft.capstoneStatIncreases);
    const secondary = calculateSecondaryStats(classData, ancestryData, effectiveStats, draft.level);

    // Merge levelup skill changes into bonusSkillPoints
    let finalBonusSkillPoints = draft.bonusSkillPoints;
    if (mode === "levelup") {
      finalBonusSkillPoints = { ...draft.bonusSkillPoints };
      if (draft.levelUpNewSkillId) {
        finalBonusSkillPoints[draft.levelUpNewSkillId] = (finalBonusSkillPoints[draft.levelUpNewSkillId] ?? 0) + 1;
      }
      if (draft.levelUpMoveFromSkillId && draft.levelUpMoveToSkillId) {
        finalBonusSkillPoints[draft.levelUpMoveFromSkillId] = (finalBonusSkillPoints[draft.levelUpMoveFromSkillId] ?? 0) - 1;
        if (finalBonusSkillPoints[draft.levelUpMoveFromSkillId] <= 0) {
          delete finalBonusSkillPoints[draft.levelUpMoveFromSkillId];
        }
        finalBonusSkillPoints[draft.levelUpMoveToSkillId] = (finalBonusSkillPoints[draft.levelUpMoveToSkillId] ?? 0) + 1;
      }
    }

    const characterData: CharacterData = {
      name: draft.name.trim(),
      level: draft.level,
      height: draft.height || undefined,
      weight: draft.weight || undefined,
      adventuringMotivation: draft.adventuringMotivation || undefined,
      classId: draft.classId!,
      ancestryId: draft.ancestryId!,
      backgroundId: draft.backgroundId!,
      statArrayType: draft.statArrayType as "standard" | "balanced" | "min-max",
      stats: draft.stats,
      bonusSkillPoints: finalBonusSkillPoints,
      equipmentChoice: draft.equipmentChoice!,
      equipment: draft.equipment,
      goldRemaining: draft.goldRemaining,
      languages: draft.languages,
      ...secondary,
      // Level-up fields
      subclassId: draft.subclassId ?? undefined,
      statIncreases: draft.statIncreases.length > 0 ? draft.statIncreases : undefined,
      capstoneStatIncreases: draft.capstoneStatIncreases ?? undefined,
      abilityPoolPicks: draft.abilityPoolPicks.length > 0 ? draft.abilityPoolPicks : undefined,
      epicBoon: draft.epicBoon || undefined,
    };

    // Override HP with actual rolls
    const rollTotal = Object.values(draft.hpRolls).reduce((sum, v) => sum + v, 0);
    if (mode === "levelup" && initialData && rollTotal > 0) {
      characterData.hp = initialData.hp + rollTotal;
    } else if (mode !== "levelup" && draft.level > 1 && rollTotal > 0) {
      characterData.hp = classData.startingHp + rollTotal;
    }

    try {
      let url = "/api/characters";
      let method = "POST";

      if (characterId && (mode === "edit" || mode === "levelup")) {
        url = `/api/characters/${characterId}`;
        method = "PATCH";
      }

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(characterData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to save");
      }

      const result = await res.json();
      const targetId = characterId ?? result.id;
      router.push(`/${locale}/characters/${targetId}`);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : t("savingError"));
      setSaving(false);
    }
  }

  const title = mode === "edit"
    ? t("editTitle")
    : mode === "levelup"
      ? t("levelUpTitle", { level: draft.level })
      : t("title");

  const currentStepKey = activeSteps[currentStep];

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      <h1 className="mb-6 text-2xl font-bold text-foreground">{title}</h1>

      {/* Step indicator */}
      <div className="mb-8 flex gap-1">
        {activeSteps.map((key, i) => (
          <div key={key} className="flex-1">
            <div
              className={`h-1.5 rounded-full transition-colors ${
                i < currentStep
                  ? "bg-accent"
                  : i === currentStep
                    ? "bg-accent/70"
                    : "bg-border"
              }`}
            />
            <p
              className={`mt-1 text-center text-xs ${
                i === currentStep ? "font-medium text-accent" : "text-muted"
              }`}
            >
              {t(key)}
            </p>
          </div>
        ))}
      </div>

      {/* Step content */}
      <div className="mb-6">
        {currentStepKey === "stepClass" && (
          <StepClass
            locale={locale}
            selectedClassId={draft.classId}
            onSelect={(classId) => dispatch({ type: "SET_CLASS", classId })}
          />
        )}
        {currentStepKey === "stepLevel" && classData && (
          <StepLevel
            locale={locale}
            draft={draft}
            classData={classData}
            onUpdate={(level) => dispatch({ type: "SET_LEVEL", level })}
          />
        )}
        {currentStepKey === "stepStats" && classData && (
          <StepStats
            locale={locale}
            classData={classData}
            statArrayType={draft.statArrayType}
            stats={draft.stats}
            onUpdate={(statArrayType, stats) =>
              dispatch({ type: "SET_STATS", statArrayType, stats })
            }
          />
        )}
        {currentStepKey === "stepAncestry" && (
          <StepAncestry
            locale={locale}
            selectedAncestryId={draft.ancestryId}
            onSelect={(ancestryId) =>
              dispatch({ type: "SET_ANCESTRY", ancestryId })
            }
          />
        )}
        {currentStepKey === "stepBackground" && draft.stats && (
          <StepBackground
            locale={locale}
            stats={draft.stats}
            selectedBackgroundId={draft.backgroundId}
            onSelect={(backgroundId) =>
              dispatch({ type: "SET_BACKGROUND", backgroundId })
            }
          />
        )}
        {currentStepKey === "stepSkills" && draft.stats && (
          <StepSkills
            locale={locale}
            stats={draft.stats}
            level={draft.level}
            bonusSkillPoints={draft.bonusSkillPoints}
            onUpdate={(bonusSkillPoints) =>
              dispatch({ type: "SET_SKILLS", bonusSkillPoints })
            }
          />
        )}
        {currentStepKey === "stepHpRoll" && classData && (
          <StepHpRoll
            classData={classData}
            levels={
              mode === "levelup"
                ? [draft.level]
                : Array.from({ length: draft.level - 1 }, (_, i) => i + 2)
            }
            hpRolls={draft.hpRolls}
            onUpdate={(level, result) => dispatch({ type: "SET_HP_ROLL", level, result })}
          />
        )}
        {currentStepKey === "stepSkillsLevelUp" && draft.stats && (
          <StepSkillsLevelUp
            locale={locale}
            stats={draft.stats}
            bonusSkillPoints={draft.bonusSkillPoints}
            newSkillId={draft.levelUpNewSkillId}
            moveFromSkillId={draft.levelUpMoveFromSkillId}
            moveToSkillId={draft.levelUpMoveToSkillId}
            onUpdate={(newSkillId, moveFromSkillId, moveToSkillId) =>
              dispatch({ type: "SET_LEVELUP_SKILLS", newSkillId, moveFromSkillId, moveToSkillId })
            }
          />
        )}
        {currentStepKey === "stepSubclass" && classData && (
          <StepSubclass
            locale={locale}
            draft={draft}
            classData={classData}
            onSelect={(subclassId) =>
              dispatch({ type: "SET_SUBCLASS", subclassId })
            }
          />
        )}
        {currentStepKey === "stepLevelChoices" && classData && (
          <StepLevelChoices
            locale={locale}
            draft={draft}
            classData={classData}
            onUpdateStatIncreases={(statIncreases) =>
              dispatch({ type: "SET_STAT_INCREASES", statIncreases })
            }
            onUpdateAbilityPoolPicks={(abilityPoolPicks) =>
              dispatch({ type: "SET_ABILITY_POOL_PICKS", abilityPoolPicks })
            }
            onUpdateCapstoneStats={(capstoneStatIncreases) =>
              dispatch({ type: "SET_CAPSTONE_STATS", capstoneStatIncreases })
            }
            onUpdateEpicBoon={(epicBoon) =>
              dispatch({ type: "SET_EPIC_BOON", epicBoon })
            }
          />
        )}
        {currentStepKey === "stepEquipment" && classData && draft.stats && (
          <StepEquipment
            locale={locale}
            classData={classData}
            stats={draft.stats}
            equipmentChoice={draft.equipmentChoice}
            equipment={draft.equipment}
            goldRemaining={draft.goldRemaining}
            onUpdate={(equipmentChoice, equipment, goldRemaining) =>
              dispatch({
                type: "SET_EQUIPMENT",
                equipmentChoice,
                equipment,
                goldRemaining,
              })
            }
          />
        )}
        {currentStepKey === "stepLanguages" && draft.stats && ancestryData && (
          <StepLanguages
            locale={locale}
            stats={draft.stats}
            ancestryData={ancestryData}
            selectedLanguages={draft.languages}
            onUpdate={(languages) =>
              dispatch({ type: "SET_LANGUAGES", languages })
            }
          />
        )}
        {currentStepKey === "stepSummary" && (
          <StepSummary
            locale={locale}
            draft={draft}
            mode={mode}
            initialData={initialData}
            onUpdateDetails={(name, height, weight, adventuringMotivation) =>
              dispatch({
                type: "SET_DETAILS",
                name,
                height: height ?? "",
                weight: weight ?? "",
                adventuringMotivation: adventuringMotivation ?? "",
              })
            }
            onSave={handleSave}
          />
        )}
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center justify-between border-t border-border pt-4">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className="rounded-md px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground disabled:opacity-30"
        >
          {t("back")}
        </button>

        {error && <p className="text-sm text-red-500">{error}</p>}

        {currentStep < activeSteps.length - 1 ? (
          <button
            onClick={handleNext}
            disabled={!isStepValid(currentStep)}
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent/90 disabled:opacity-50"
          >
            {t("next")}
          </button>
        ) : (
          <button
            onClick={handleSave}
            disabled={saving || !isStepValid(currentStep)}
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent/90 disabled:opacity-50"
          >
            {saving ? t("saving") : t("save")}
          </button>
        )}
      </div>
    </div>
  );
}
