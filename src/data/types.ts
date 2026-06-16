// ─── Localized String ────────────────────────────────────────────────────────

export type LocalizedString = {
  en: string;
  fr: string;
};

// ─── Core Stats & Skills ─────────────────────────────────────────────────────

export type Stat = "STR" | "DEX" | "INT" | "WIL";

export type StatArray = {
  name: LocalizedString;
  values: Record<Stat, number>;
};

export type StatArrayOption = {
  id: string;
  name: LocalizedString;
  values: number[];
};

export type Skill = {
  id: string;
  name: LocalizedString;
  linkedStat: Stat;
  description: LocalizedString;
};

// ─── Conditions ──────────────────────────────────────────────────────────────

export type Condition = {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  effects: LocalizedString[];
  minor?: boolean;
};

// ─── Ancestries ──────────────────────────────────────────────────────────────

export type Size = "Tiny" | "Small" | "Medium" | "Large" | "Huge";

export type AncestryModifiers = {
  speed?: number;
  armor?: number;
  initiative?: number;
  skillBonusAll?: number;
  skillBonus?: Record<string, number>;
  languages?: LocalizedString[];
  other?: LocalizedString[];
};

export type Ancestry = {
  id: string;
  name: LocalizedString;
  size: Size;
  category: "common" | "exotic";
  trait: {
    name: LocalizedString;
    description: LocalizedString;
  };
  modifiers: AncestryModifiers;
};

// ─── Backgrounds ─────────────────────────────────────────────────────────────

export type Background = {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  effects: LocalizedString[];
  requirement?: {
    stat: Stat;
    maxValue: number;
  };
};

// ─── Spells ──────────────────────────────────────────────────────────────────

export type SpellSchool =
  | "fire"
  | "ice"
  | "lightning"
  | "wind"
  | "radiant"
  | "necrotic";

export type Spell = {
  id: string;
  name: LocalizedString;
  school: SpellSchool;
  /** Sort utilitaire : dimension orthogonale à l'école (un sort utilitaire garde son élément). */
  utility?: boolean;
  tier: number; // 0 = cantrip, 1-9 = spell tiers
  castingTime: LocalizedString;
  targetType: LocalizedString;
  range: LocalizedString;
  damage?: LocalizedString;
  effects: LocalizedString;
  saveType?: Stat;
  concentration?: boolean;
  concentrationDuration?: LocalizedString;
  highLevels?: LocalizedString;
  upcast?: LocalizedString;
  classRestriction?: LocalizedString;
  oncePerWeek?: boolean;
};

// ─── Equipment ───────────────────────────────────────────────────────────────

export type ArmorItem = {
  id: string;
  name: LocalizedString;
  category: "cloth" | "leather" | "mail" | "plate" | "shield";
  armorValue: string;
  strReq?: number;
  cost: string;
  description?: LocalizedString;
};

export type MeleeWeapon = {
  id: string;
  name: LocalizedString;
  damage: string;
  properties: string;
  cost: string;
  description?: LocalizedString;
};

export type RangedWeapon = {
  id: string;
  name: LocalizedString;
  damage: string;
  properties: string;
  cost: string;
  description?: LocalizedString;
};

export type AdventuringGearItem = {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  cost: string;
};

export type Rarity = "common" | "uncommon" | "rare" | "very-rare" | "legendary";

export type MagicalItem = {
  id: string;
  name: LocalizedString;
  rarity: Rarity;
  description: LocalizedString;
  effects: LocalizedString;
  attunement?: boolean;
};

export type Wand = {
  id: string;
  name: LocalizedString;
  rarity: Rarity;
  charges: number;
  rechargeMethod: LocalizedString;
  spell: LocalizedString;
  description: LocalizedString;
};

export type SpellScroll = {
  tier: number;
  cost: string;
};

// ─── Classes ─────────────────────────────────────────────────────────────────

export type ClassAbility = {
  level: number;
  name: LocalizedString;
  description: LocalizedString;
  type: "core" | "subclass" | "stat-increase" | "capstone";
};

export type SubclassFeature = {
  level: number;
  name: LocalizedString;
  description: LocalizedString;
};

export type Subclass = {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  type: "standard" | "story-based";
  features: SubclassFeature[];
};

export type PoolAbility = {
  name: LocalizedString;
  description: LocalizedString;
};

export type AbilityPool = {
  name: LocalizedString;
  selectAtLevels: number[];
  picksAtLevel?: Record<number, number>;
  abilities: PoolAbility[];
};

export type HeroClass = {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  complexity: 1 | 2 | 3;
  keyStats: [Stat, Stat];
  hitDie: string;
  startingHp: number;
  saves: {
    strong: Stat;
    weak: Stat;
  };
  armorProficiency: LocalizedString[];
  weaponProficiency: LocalizedString[];
  startingGear: LocalizedString[];
  abilities: ClassAbility[];
  subclasses: Subclass[];
  abilityPool?: AbilityPool;
};

// ─── Rules Content ───────────────────────────────────────────────────────────

export type RuleSection = {
  id: string;
  title: LocalizedString;
  content: LocalizedString;
};

export type RulesCategory = {
  id: string;
  title: LocalizedString;
  sections: RuleSection[];
};

// ─── Character Data (stored in DB as JSON) ──────────────────────────────────

export type CharacterData = {
  name: string;
  level: number;
  height?: string;
  weight?: string;
  adventuringMotivation?: string;

  classId: string;
  ancestryId: string;
  backgroundId: string;

  statArrayType: "standard" | "balanced" | "min-max";
  stats: Record<Stat, number>;

  bonusSkillPoints: Record<string, number>;

  equipmentChoice: "starting-gear" | "gold";
  equipment: string[];
  goldRemaining: number;

  languages: string[];

  hp: number;
  hitDie: string;
  hitDiceCount: number;
  initiative: number;
  speed: number;
  maxWounds: number;
  inventorySlots: number;
  armorValue: string;
  saves: { strong: Stat; weak: Stat };

  // Level-up fields
  subclassId?: string;
  statIncreases?: Array<{ level: number; stat: Stat; type: "key" | "secondary" }>;
  capstoneStatIncreases?: [Stat, Stat];
  abilityPoolPicks?: Array<{ level: number; abilityIndex: number }>;
  epicBoon?: string;
};
