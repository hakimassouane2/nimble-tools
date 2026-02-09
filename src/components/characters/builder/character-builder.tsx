"use client";

import { useReducer, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import type { Stat, CharacterData } from "@/data/types";
import { heroClasses } from "@/data/classes";
import { ancestries } from "@/data/ancestries";
import { backgrounds } from "@/data/backgrounds";
import { calculateSecondaryStats } from "@/lib/character-rules";
import { StepClass } from "./step-class";
import { StepStats } from "./step-stats";
import { StepAncestry } from "./step-ancestry";
import { StepBackground } from "./step-background";
import { StepSkills } from "./step-skills";
import { StepEquipment } from "./step-equipment";
import { StepLanguages } from "./step-languages";
import { StepSummary } from "./step-summary";

export type CharacterDraft = {
  classId: string | null;
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
};

type Action =
  | { type: "SET_CLASS"; classId: string }
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
  | { type: "RESET" };

const initialDraft: CharacterDraft = {
  classId: null,
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
};

function draftReducer(state: CharacterDraft, action: Action): CharacterDraft {
  switch (action.type) {
    case "SET_CLASS":
      return {
        ...state,
        classId: action.classId,
        // Reset equipment when class changes (starting gear depends on class)
        equipmentChoice: null,
        equipment: [],
        goldRemaining: 50,
      };
    case "SET_STATS":
      return {
        ...state,
        statArrayType: action.statArrayType,
        stats: action.stats,
        // Clear background if it no longer qualifies
        backgroundId: null,
        // Reset skills since base values may change
        bonusSkillPoints: {},
        // Reset languages since INT may change
        languages: [],
      };
    case "SET_ANCESTRY":
      return {
        ...state,
        ancestryId: action.ancestryId,
        // Reset languages since ancestry affects known languages
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
    case "RESET":
      return initialDraft;
    default:
      return state;
  }
}

const STEP_KEYS = [
  "stepClass",
  "stepStats",
  "stepAncestry",
  "stepBackground",
  "stepSkills",
  "stepEquipment",
  "stepLanguages",
  "stepSummary",
] as const;

function isStepValid(step: number, draft: CharacterDraft): boolean {
  switch (step) {
    case 0:
      return draft.classId !== null;
    case 1:
      return draft.statArrayType !== null && draft.stats !== null;
    case 2:
      return draft.ancestryId !== null;
    case 3:
      return draft.backgroundId !== null;
    case 4:
      return true; // skill points are optional (default to 0)
    case 5:
      return draft.equipmentChoice !== null;
    case 6:
      return true; // languages auto-populated
    case 7:
      return draft.name.trim().length > 0;
    default:
      return false;
  }
}

export function CharacterBuilder({ locale }: { locale: string }) {
  const t = useTranslations("builder");
  const router = useRouter();
  const [draft, dispatch] = useReducer(draftReducer, initialDraft);
  const [currentStep, setCurrentStep] = useState(0);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const classData = draft.classId
    ? heroClasses.find((c) => c.id === draft.classId) ?? null
    : null;
  const ancestryData = draft.ancestryId
    ? ancestries.find((a) => a.id === draft.ancestryId) ?? null
    : null;

  function handleNext() {
    if (isStepValid(currentStep, draft) && currentStep < STEP_KEYS.length - 1) {
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

    const secondary = calculateSecondaryStats(classData, ancestryData, draft.stats);

    const characterData: CharacterData = {
      name: draft.name.trim(),
      level: 1,
      height: draft.height || undefined,
      weight: draft.weight || undefined,
      adventuringMotivation: draft.adventuringMotivation || undefined,
      classId: draft.classId!,
      ancestryId: draft.ancestryId!,
      backgroundId: draft.backgroundId!,
      statArrayType: draft.statArrayType as "standard" | "balanced" | "min-max",
      stats: draft.stats,
      bonusSkillPoints: draft.bonusSkillPoints,
      equipmentChoice: draft.equipmentChoice!,
      equipment: draft.equipment,
      goldRemaining: draft.goldRemaining,
      languages: draft.languages,
      ...secondary,
    };

    try {
      const res = await fetch("/api/characters", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(characterData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to save");
      }

      const { id } = await res.json();
      router.push(`/${locale}/characters/${id}`);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : t("savingError"));
      setSaving(false);
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      <h1 className="mb-6 text-2xl font-bold text-foreground">{t("title")}</h1>

      {/* Step indicator */}
      <div className="mb-8 flex gap-1">
        {STEP_KEYS.map((key, i) => (
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
        {currentStep === 0 && (
          <StepClass
            locale={locale}
            selectedClassId={draft.classId}
            onSelect={(classId) => dispatch({ type: "SET_CLASS", classId })}
          />
        )}
        {currentStep === 1 && classData && (
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
        {currentStep === 2 && (
          <StepAncestry
            locale={locale}
            selectedAncestryId={draft.ancestryId}
            onSelect={(ancestryId) =>
              dispatch({ type: "SET_ANCESTRY", ancestryId })
            }
          />
        )}
        {currentStep === 3 && draft.stats && (
          <StepBackground
            locale={locale}
            stats={draft.stats}
            selectedBackgroundId={draft.backgroundId}
            onSelect={(backgroundId) =>
              dispatch({ type: "SET_BACKGROUND", backgroundId })
            }
          />
        )}
        {currentStep === 4 && draft.stats && (
          <StepSkills
            locale={locale}
            stats={draft.stats}
            bonusSkillPoints={draft.bonusSkillPoints}
            onUpdate={(bonusSkillPoints) =>
              dispatch({ type: "SET_SKILLS", bonusSkillPoints })
            }
          />
        )}
        {currentStep === 5 && classData && draft.stats && (
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
        {currentStep === 6 && draft.stats && ancestryData && (
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
        {currentStep === 7 && (
          <StepSummary
            locale={locale}
            draft={draft}
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

        {currentStep < STEP_KEYS.length - 1 ? (
          <button
            onClick={handleNext}
            disabled={!isStepValid(currentStep, draft)}
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent/90 disabled:opacity-50"
          >
            {t("next")}
          </button>
        ) : (
          <button
            onClick={handleSave}
            disabled={saving || !isStepValid(currentStep, draft)}
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent/90 disabled:opacity-50"
          >
            {saving ? t("saving") : t("save")}
          </button>
        )}
      </div>
    </div>
  );
}
