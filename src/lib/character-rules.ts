import type {
  Stat,
  HeroClass,
  Ancestry,
  Background,
  Skill,
  CharacterData,
  Subclass,
  SubclassFeature,
  ClassAbility,
  LocalizedString,
} from "@/data/types";
import { statArrayOptions } from "@/data/stat-arrays";
import { skills } from "@/data/skills";
import { heroClasses } from "@/data/classes";
import { ancestries } from "@/data/ancestries";
import { backgrounds } from "@/data/backgrounds";
import { armor as armorData } from "@/data/equipment";

const ALL_STATS: Stat[] = ["STR", "DEX", "INT", "WIL"];
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

  const assigned = ALL_STATS.map((s) => stats[s]);
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

// ─── Class Resource ─────────────────────────────────────────────────────────

export type ClassResource = {
  name: LocalizedString;
  max: number;
  die?: string;
};

type DieStep = { level: number; die: string };

function resolveDie(steps: DieStep[], level: number): string {
  let current = steps[0].die;
  for (const step of steps) {
    if (level >= step.level) current = step.die;
  }
  return current;
}

const FURY_DIE_STEPS: DieStep[] = [
  { level: 1, die: "d4" },
  { level: 6, die: "d6" },
  { level: 9, die: "d8" },
  { level: 13, die: "d10" },
  { level: 17, die: "d12" },
];

const COMBAT_DIE_STEPS: DieStep[] = [
  { level: 1, die: "d6" },
  { level: 5, die: "d8" },
  { level: 9, die: "d10" },
  { level: 13, die: "d12" },
  { level: 17, die: "d20" },
];

export function calculateClassResource(
  classId: string,
  stats: Record<Stat, number>,
  level: number,
): ClassResource | null {
  switch (classId) {
    case "berserker":
      return {
        name: { en: "Fury Dice", fr: "Dés de fureur" },
        max: Math.max(stats.STR, stats.DEX),
        die: resolveDie(FURY_DIE_STEPS, level),
      };
    case "commander":
      return {
        name: { en: "Combat Dice", fr: "Dés de combat" },
        max: stats.STR,
        die: resolveDie(COMBAT_DIE_STEPS, level),
      };
    case "oathsworn":
      return {
        name: { en: "Lay on Hands", fr: "Imposition des mains" },
        max: 5 * level,
      };
    case "shadowmancer":
      return {
        name: { en: "Pilfered Power", fr: "Pouvoir dérobé" },
        max: stats.DEX,
      };
    case "shepherd":
      return {
        name: { en: "Searing Light", fr: "Lumière ardente" },
        max: stats.WIL,
      };
    case "songweaver":
      return {
        name: { en: "Inspiration", fr: "Inspiration" },
        max: 2 * stats.WIL,
      };
    case "stormshifter":
      return {
        name: { en: "Beastshift", fr: "Forme de bête" },
        max: stats.DEX + (level >= 6 ? 1 : 0) + (level >= 9 ? 1 : 0) + (level >= 12 ? 1 : 0),
      };
    case "zephyr":
      return {
        name: { en: "Bursts of Speed", fr: "Fulgurances" },
        max: stats.DEX,
      };
    default:
      return null;
  }
}

// ─── Level-Aware Helpers ────────────────────────────────────────────────────

const KEY_STAT_LEVELS = [4, 8, 12, 16, 20];
const SECONDARY_STAT_LEVELS = [5, 9, 13, 17];

const CASTER_CLASSES: Record<string, (stats: Record<Stat, number>, level: number) => number> = {
  mage: (s, l) => s.INT * 3 + l,
  oathsworn: (s, l) => s.WIL + l,
  shadowmancer: (s, l) => s.INT + s.DEX + 2 * l,
  shepherd: (s, l) => s.WIL * 3 + l,
  songweaver: (s, l) => s.INT * 3 + l,
  stormshifter: (s, l) => s.WIL * 3 + l,
};

export function getHitDieSize(hitDie: string): number {
  const match = hitDie.match(/\d*d(\d+)/);
  return match ? parseInt(match[1], 10) : 6;
}

export function calculateHp(classData: HeroClass, level: number): number {
  return classData.startingHp + (level - 1) * getHitDieSize(classData.hitDie);
}

export function calculateManaPool(
  classId: string,
  stats: Record<Stat, number>,
  level: number
): number | null {
  const formula = CASTER_CLASSES[classId];
  return formula ? formula(stats, level) : null;
}

export function getMaxSpellTier(level: number): number {
  if (level < 2) return 0;
  return Math.min(Math.floor(level / 2), 9);
}

export function getStatIncreaseAtLevel(
  level: number,
  classData: HeroClass
): { type: "key"; options: Stat[] } | { type: "secondary"; options: Stat[] } | null {
  // Level 20 has both a key stat increase AND a separate capstone (+1 to any 2 stats).
  // The key stat increase is handled here; the capstone is handled separately via capstoneStatIncreases.
  if (KEY_STAT_LEVELS.includes(level)) {
    return { type: "key", options: [...classData.keyStats] };
  }
  if (SECONDARY_STAT_LEVELS.includes(level)) {
    const secondary = ALL_STATS.filter((s) => !classData.keyStats.includes(s));
    return { type: "secondary", options: secondary };
  }
  return null;
}

export function getAbilityPoolPicksAtLevel(classData: HeroClass, level: number): number {
  const pool = classData.abilityPool;
  if (!pool || !pool.selectAtLevels.includes(level)) return 0;
  return pool.picksAtLevel?.[level] ?? 1;
}

export function getAbilityPoolPicksNeeded(classData: HeroClass, level: number): number {
  if (!classData.abilityPool) return 0;
  return classData.abilityPool.selectAtLevels
    .filter((l) => l <= level)
    .reduce((sum, l) => sum + getAbilityPoolPicksAtLevel(classData, l), 0);
}

export function getAbilitiesAtLevel(classData: HeroClass, level: number): ClassAbility[] {
  return classData.abilities.filter((a) => a.level === level && a.type === "core");
}

export function getSubclassFeaturesUpToLevel(subclass: Subclass, level: number): SubclassFeature[] {
  return subclass.features.filter((f) => f.level <= level);
}

export function getEffectiveStats(
  baseStats: Record<Stat, number>,
  statIncreases: Array<{ stat: Stat }>,
  capstoneStatIncreases?: [Stat, Stat] | null
): Record<Stat, number> {
  const result = { ...baseStats };
  for (const inc of statIncreases) {
    result[inc.stat] = (result[inc.stat] ?? 0) + 1;
  }
  if (capstoneStatIncreases) {
    result[capstoneStatIncreases[0]] += 1;
    result[capstoneStatIncreases[1]] += 1;
  }
  return result;
}

export function getExpectedStatIncreaseCount(level: number): number {
  const keyCount = KEY_STAT_LEVELS.filter((l) => l <= level).length;
  const secCount = SECONDARY_STAT_LEVELS.filter((l) => l <= level).length;
  return keyCount + secCount;
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

export function computeArmorValue(equipment: string[], stats: Record<Stat, number>): string {
  let formula = "2+DEX";
  for (const itemName of equipment) {
    const found = armorData.find(
      (a) => a.category !== "shield" && (a.name.en === itemName || a.name.fr === itemName)
    );
    if (found) { formula = found.armorValue; break; }
  }
  const match = formula.match(/^(\d+)\+(\w+)(?:\s*\(max\s*(\d+)\))?$/);
  if (!match) return formula; // flat value like "10"
  const base = parseInt(match[1], 10);
  const stat = match[2] as Stat;
  let statVal = stats[stat] ?? 0;
  if (match[3]) statVal = Math.min(statVal, parseInt(match[3], 10));
  return String(base + statVal);
}

export function calculateSecondaryStats(
  classData: HeroClass,
  ancestryData: Ancestry,
  stats: Record<Stat, number>,
  level: number = 1,
  equipment: string[] = []
): SecondaryStats {
  const speed = BASE_SPEED + (ancestryData.modifiers.speed ?? 0);
  const maxWounds = BASE_WOUNDS;
  const inventorySlots = calculateInventorySlots(stats.STR);

  return {
    hp: calculateHp(classData, level),
    hitDie: classData.hitDie,
    hitDiceCount: level,
    initiative: stats.DEX,
    speed,
    maxWounds,
    inventorySlots,
    armorValue: computeArmorValue(equipment, stats),
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

  // Level validation
  const level = data.level ?? 1;
  if (!Number.isInteger(level) || level < 1 || level > 20) {
    errors.push("Level must be an integer between 1 and 20.");
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

  const maxSkillPoints = MAX_BONUS_SKILL_POINTS + (level - 1);
  if (!validateSkillPoints(data.bonusSkillPoints, maxSkillPoints)) {
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

  // Level-up validation (only when level > 1 and classData exists)
  if (classData && level >= 3) {
    if (!data.subclassId) {
      errors.push("Subclass is required at level 3 or higher.");
    } else {
      const validSubclass = classData.subclasses.find((s) => s.id === data.subclassId);
      if (!validSubclass) {
        errors.push("Invalid subclass selection for this class.");
      }
    }
  }

  if (classData && level < 3 && data.subclassId) {
    errors.push("Subclass should not be selected below level 3.");
  }

  if (classData && level > 1) {
    const expectedStatCount = getExpectedStatIncreaseCount(level);
    const actualStatCount = data.statIncreases?.length ?? 0;
    if (actualStatCount !== expectedStatCount) {
      errors.push(`Expected ${expectedStatCount} stat increases for level ${level}, got ${actualStatCount}.`);
    }

    // Validate each stat increase references valid options
    if (data.statIncreases) {
      for (const inc of data.statIncreases) {
        const incInfo = getStatIncreaseAtLevel(inc.level, classData);
        if (!incInfo) {
          errors.push(`No stat increase expected at level ${inc.level}.`);
        } else if (!incInfo.options.includes(inc.stat)) {
          errors.push(`Invalid stat ${inc.stat} for ${inc.type} increase at level ${inc.level}.`);
        }
      }
    }

    // Validate ability pool picks
    if (classData.abilityPool) {
      const expectedPicks = getAbilityPoolPicksNeeded(classData, level);
      const actualPicks = data.abilityPoolPicks?.length ?? 0;
      if (actualPicks !== expectedPicks) {
        errors.push(`Expected ${expectedPicks} ability pool picks, got ${actualPicks}.`);
      }

      // Check for duplicates and bounds
      if (data.abilityPoolPicks) {
        const indices = data.abilityPoolPicks.map((p) => p.abilityIndex);
        const uniqueIndices = new Set(indices);
        if (uniqueIndices.size !== indices.length) {
          errors.push("Duplicate ability pool picks are not allowed.");
        }
        const maxIndex = classData.abilityPool.abilities.length - 1;
        for (const pick of data.abilityPoolPicks) {
          if (pick.abilityIndex < 0 || pick.abilityIndex > maxIndex) {
            errors.push(`Ability pool pick index ${pick.abilityIndex} is out of bounds.`);
          }
        }
      }
    }
  }

  // Level 20 capstone validation
  if (level === 20) {
    if (!data.capstoneStatIncreases || data.capstoneStatIncreases.length !== 2) {
      errors.push("Level 20 capstone requires exactly 2 stat increases.");
    }
  }

  // Epic boon validation
  if (data.epicBoon && data.epicBoon.length > 500) {
    errors.push("Epic boon description is too long (max 500 characters).");
  }

  return { valid: errors.length === 0, errors };
}
