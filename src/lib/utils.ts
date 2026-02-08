import type { LocalizedString } from "@/data/types";

/** Returns the localized string for the given locale, falling back to English if the target locale value is empty. */
export function t(obj: LocalizedString, locale: string): string {
  if (locale === "fr" && obj.fr) return obj.fr;
  return obj.en;
}

/** Generates a URL-safe slug from a string. */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Returns complexity as diamond characters (e.g., 2 → "◆◆"). */
export function complexityDiamonds(level: 1 | 2 | 3): string {
  return "◆".repeat(level) + "◇".repeat(3 - level);
}

/** Translate a stat abbreviation for the given locale. */
export function tStat(stat: string, locale: string): string {
  if (locale !== "fr") return stat;
  const map: Record<string, string> = {
    STR: "FOR",
    DEX: "DEX",
    INT: "INT",
    WIL: "VOL",
  };
  return map[stat] ?? stat;
}

/** Translate an armor category for the given locale. */
export function tArmorCategory(category: string, locale: string): string {
  if (locale !== "fr") return category;
  const map: Record<string, string> = {
    cloth: "tissu",
    leather: "cuir",
    mail: "mailles",
    plate: "plaques",
    shield: "bouclier",
  };
  return map[category] ?? category;
}

/** Translate a weapon property for the given locale. */
export function tWeaponProperty(prop: string, locale: string): string {
  if (locale !== "fr") return prop;
  const map: Record<string, string> = {
    Light: "Légère",
    "2-Handed": "2 mains",
    Reach: "Allonge",
    Thrown: "Lancer",
    Vicious: "Vicieux",
    Load: "Rechargement",
    Finesse: "Finesse",
    Versatile: "Polyvalente",
  };
  return map[prop] ?? prop;
}

/** Translate a rarity for the given locale. */
export function tRarity(rarity: string, locale: string): string {
  if (locale !== "fr") return rarity;
  const map: Record<string, string> = {
    common: "commun",
    uncommon: "peu commun",
    rare: "rare",
    "very-rare": "très rare",
    legendary: "légendaire",
  };
  return map[rarity] ?? rarity;
}

/** Translate an ancestry size for the given locale. */
export function tSize(size: string, locale: string): string {
  if (locale !== "fr") return size;
  const map: Record<string, string> = {
    Tiny: "Très petit",
    Small: "Petit",
    Medium: "Moyen",
    Large: "Grand",
    Huge: "Énorme",
  };
  return map[size] ?? size;
}

/** Translate a cost string (gp → po) for the given locale. */
export function tCost(cost: string, locale: string): string {
  if (locale !== "fr") return cost;
  return cost.replace(/\bgp\b/g, "po").replace(/\bsp\b/g, "pa").replace(/\bcp\b/g, "pc");
}

/** Translate a full damage string like "1d6+STR Bludgeoning" for the given locale. */
export function tDamage(damage: string, locale: string): string {
  if (locale !== "fr") return damage;
  let result = damage;
  // Translate stat abbreviations
  result = result.replace(/\bSTR\b/g, "FOR").replace(/\bWIL\b/g, "VOL");
  // Translate damage types (case-insensitive, preserving position)
  const types: Record<string, string> = {
    Bludgeoning: "Contondant",
    Piercing: "Perforant",
    Slashing: "Tranchant",
    "Slashing/Piercing": "Tranchant/Perforant",
    Fire: "Feu",
    Ice: "Glace",
    Lightning: "Foudre",
    Wind: "Vent",
    Radiant: "Radiant",
    Necrotic: "Nécrotique",
    Physical: "Physique",
    Psychic: "Psychique",
  };
  for (const [en, fr] of Object.entries(types)) {
    result = result.replace(new RegExp(`\\b${en}\\b`, "g"), fr);
  }
  // Translate "on hit"
  result = result.replace(/\bon hit\b/gi, "si touché");
  return result;
}

/** Translate a damage type for the given locale. */
export function tDamageType(dtype: string, locale: string): string {
  if (locale !== "fr") return dtype;
  const map: Record<string, string> = {
    bludgeoning: "contondant",
    piercing: "perforant",
    slashing: "tranchant",
    fire: "feu",
    ice: "glace",
    cold: "froid",
    lightning: "foudre",
    wind: "vent",
    radiant: "radiant",
    necrotic: "nécrotique",
    physical: "physique",
    psychic: "psychique",
    true: "vrai",
  };
  return map[dtype.toLowerCase()] ?? dtype;
}
