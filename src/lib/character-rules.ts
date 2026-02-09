import type {
  Stat,
  HeroClass,
  Ancestry,
  Background,
  Skill,
  CharacterData,
} from "@/data/types";
import { statArrayOptions } from "@/data/stat-arrays";
import { skills } from "@/data/skills";
import { heroClasses } from "@/data/classes";
import { ancestries } from "@/data/ancestries";
import { backgrounds } from "@/data/backgrounds";

const STATS: Stat[] = ["STR", "DEX", "INT", "WIL"];
const MAX_BONUS_SKILL_POINTS = 4;
const BASE_SPEED = 6;
const BASE_WOUNDS = 6;
const BASE_INVENTORY_SLOTS = 10;

export function validateStatArray(
  stats: Record<Stat, number>,
  arrayType: string
): boolean {
  const option = statArrayOptions.find((o) => o.id === arrayType);
  if (!option) return false;

  const assigned = STATS.map((s) => stats[s]);
  const sorted = [...assigned].sort((a, b) => b - a);
  const expected = [...option.values].sort((a, b) => b - a);

  if (sorted.length !== expected.length) return false;
  return sorted.every((v, i) => v === expected[i]);
}

export function getAvailableBackgrounds(
  allBackgrounds: Background[],
  stats: Record<Stat, number>
): Background[] {
  return allBackgrounds.filter((bg) => {
    if (!bg.requirement) return true;
    const statValue = stats[bg.requirement.stat];
    return statValue <= bg.requirement.maxValue;
  });
}

export function calculateSkillBase(
  stats: Record<Stat, number>
): Record<string, number> {
  const base: Record<string, number> = {};
  for (const skill of skills) {
    const statValue = stats[skill.linkedStat];
    base[skill.id] = Math.max(0, statValue);
  }
  return base;
}

export function validateSkillPoints(
  bonusPoints: Record<string, number>,
  maxPoints: number = MAX_BONUS_SKILL_POINTS
): boolean {
  const total = Object.values(bonusPoints).reduce((sum, v) => sum + v, 0);
  return total <= maxPoints && Object.values(bonusPoints).every((v) => v >= 0);
}

export function getTotalBonusSkillPoints(
  bonusPoints: Record<string, number>
): number {
  return Object.values(bonusPoints).reduce((sum, v) => sum + v, 0);
}

export type SecondaryStats = {
  hp: number;
  hitDie: string;
  hitDiceCount: number;
  initiative: number;
  speed: number;
  maxWounds: number;
  inventorySlots: number;
  armorValue: string;
  saves: { strong: Stat; weak: Stat };
};

export function calculateSecondaryStats(
  classData: HeroClass,
  ancestryData: Ancestry,
  stats: Record<Stat, number>
): SecondaryStats {
  const speed = BASE_SPEED + (ancestryData.modifiers.speed ?? 0);
  const maxWounds = BASE_WOUNDS;
  const inventorySlots = calculateInventorySlots(stats.STR);

  return {
    hp: classData.startingHp,
    hitDie: classData.hitDie,
    hitDiceCount: 1,
    initiative: stats.DEX,
    speed,
    maxWounds,
    inventorySlots,
    armorValue: "2+DEX",
    saves: classData.saves,
  };
}

export function getAvailableLanguages(
  stats: Record<Stat, number>,
  ancestry: Ancestry
): { known: string[]; slots: number } {
  const known: string[] = ["Common"];

  if (ancestry.modifiers.languages && stats.INT >= 0) {
    for (const lang of ancestry.modifiers.languages) {
      known.push(lang.en);
    }
  }

  const slots = Math.max(0, stats.INT);
  return { known, slots };
}

export const ALL_LANGUAGES = [
  { en: "Dwarvish", fr: "Nanique" },
  { en: "Elvish", fr: "Elfique" },
  { en: "Goblin", fr: "Gobelin" },
  { en: "Infernal", fr: "Infernal" },
  { en: "Thieves' Cant", fr: "Argot des voleurs" },
  { en: "Celestial", fr: "Céleste" },
  { en: "Draconic", fr: "Draconique" },
  { en: "Primordial", fr: "Primordial" },
  { en: "Deep Speak", fr: "Langue des profondeurs" },
];

export function calculateInventorySlots(str: number): number {
  return BASE_INVENTORY_SLOTS + str;
}

export function validateEquipment(
  items: string[],
  inventorySlots: number
): boolean {
  return items.length <= inventorySlots;
}

export function parseCostToGold(cost: string): number {
  const match = cost.match(/([\d,]+)\s*(gp|sp|cp)/);
  if (!match) return 0;
  const value = parseInt(match[1].replace(/,/g, ""), 10);
  const unit = match[2];
  if (unit === "gp") return value;
  if (unit === "sp") return Math.round(value * 10) / 100;
  if (unit === "cp") return Math.round(value) / 100;
  return 0;
}

export function validateCharacter(
  data: CharacterData
): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.name || data.name.trim().length === 0) {
    errors.push("Character name is required.");
  }

  if (data.name && data.name.length > 100) {
    errors.push("Character name is too long.");
  }

  if (data.equipment && data.equipment.length > 20) {
    errors.push("Too many equipment items.");
  }

  if (data.languages && data.languages.length > 15) {
    errors.push("Too many languages.");
  }

  if (data.bonusSkillPoints && Object.keys(data.bonusSkillPoints).length > 10) {
    errors.push("Invalid skill points data.");
  }

  const classData = heroClasses.find((c) => c.id === data.classId);
  if (!classData) {
    errors.push("Invalid class selection.");
  }

  const ancestryData = ancestries.find((a) => a.id === data.ancestryId);
  if (!ancestryData) {
    errors.push("Invalid ancestry selection.");
  }

  const backgroundData = backgrounds.find((b) => b.id === data.backgroundId);
  if (!backgroundData) {
    errors.push("Invalid background selection.");
  }

  if (!validateStatArray(data.stats, data.statArrayType)) {
    errors.push("Invalid stat array assignment.");
  }

  if (backgroundData?.requirement) {
    const statValue = data.stats[backgroundData.requirement.stat];
    if (statValue > backgroundData.requirement.maxValue) {
      errors.push(
        `Background requires ${backgroundData.requirement.stat} ${backgroundData.requirement.maxValue} or lower.`
      );
    }
  }

  if (!validateSkillPoints(data.bonusSkillPoints)) {
    errors.push("Invalid skill point distribution.");
  }

  if (
    data.equipmentChoice !== "starting-gear" &&
    data.equipmentChoice !== "gold"
  ) {
    errors.push("Invalid equipment choice.");
  }

  if (data.equipmentChoice === "gold" && data.goldRemaining < 0) {
    errors.push("Not enough gold for selected equipment.");
  }

  if (data.equipmentChoice === "gold" && data.stats) {
    const slots = calculateInventorySlots(data.stats.STR);
    if (!validateEquipment(data.equipment, slots)) {
      errors.push("Equipment exceeds inventory slots.");
    }
  }

  return { valid: errors.length === 0, errors };
}
