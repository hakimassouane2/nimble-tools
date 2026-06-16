import type { LocalizedString } from "@/data/types";

/** Returns the localized string for the given locale, falling back to English if the target locale value is empty. */
export function t(obj: LocalizedString, locale: string): string {
  if (locale === "fr" && obj.fr) return obj.fr;
  return obj.en;
}

/** Supprime le balisage léger (`**gras**`, `<br>`) pour obtenir du texte brut (recherche, etc.). */
export function stripMarkup(str: string): string {
  return str
    .replace(/<br\s*\/?>/g, " ")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
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

/**
 * Split a weapon properties string into individual parts for badge display.
 * E.g. "2-handed, Reach 2" -> ["2-handed", "Reach 2"]
 * Parenthetical qualifiers stay attached: "2-handed (Req. 2 STR)" -> ["2-handed (Req. 2 STR)"]
 */
export function splitWeaponProperties(props: string): string[] {
  if (!props) return [];
  // Split on ", " but not inside parentheses
  const parts: string[] = [];
  let depth = 0;
  let current = "";
  for (const ch of props) {
    if (ch === "(") depth++;
    if (ch === ")") depth--;
    if (ch === "," && depth === 0) {
      parts.push(current.trim());
      current = "";
    } else {
      current += ch;
    }
  }
  if (current.trim()) parts.push(current.trim());
  return parts;
}

/** Translate a single weapon property part for the given locale. */
export function tWeaponProperty(prop: string, locale: string): string {
  if (locale !== "fr" || !prop) return prop;
  let result = prop;
  result = result.replace(/\b2-handed\b/gi, "2 mains");
  result = result.replace(/\b1-handed\b/gi, "1 main");
  result = result.replace(/\bLight\b/g, "Légère");
  result = result.replace(/\bThrown\b/g, "Lancer");
  result = result.replace(/\bVicious\b/g, "Vicieux");
  result = result.replace(/\bLoad\b/g, "Rechargement");
  result = result.replace(/\bFinesse\b/g, "Finesse");
  result = result.replace(/\bVersatile\b/g, "Polyvalente");
  result = result.replace(/\bReach\b/g, "Allonge");
  result = result.replace(/\bRange\b/g, "Portée");
  result = result.replace(/\bStack of\b/g, "Lot de");
  result = result.replace(/\bactions\b/g, "actions");
  result = result.replace(/\baction\b/g, "action");
  result = result.replace(/\bSTR\b/g, "FOR");
  return result;
}

/** Get the tooltip description for a single weapon property part. */
export function tWeaponPropertyTooltip(prop: string, locale: string): string {
  const lower = prop.toLowerCase();

  const en: Record<string, string> = {
    "2-handed": "Can be held in a single hand, but must be wielded in 2 hands to attack with it.",
    light: "Heroes may wield 2 Light weapons at the same time. While dual wielding, you may gain advantage on an attack with those weapons, 1/round.",
    reach: "How close an enemy must be to be affected by this attack. If unspecified, Reach 1.",
    range: "Attacks can be made from afar. If any enemy is adjacent to you, your Ranged attacks are made with disadvantage. Add 1 die of disadvantage to gain +2 Range.",
    thrown: "Treat a melee weapon as if it had Range. Once thrown, you no longer have it!",
    vicious: "Roll 1 additional die whenever you roll crit damage.",
    load: "Some weapons require extra actions to load before each shot.",
    stack: "Comes as a bundle. Once all are thrown, you no longer have them!",
  };
  const fr: Record<string, string> = {
    "2-handed": "Peut être tenue d'une main, mais doit être maniée à 2 mains pour attaquer.",
    light: "Les héros peuvent manier 2 armes Légères en même temps. En double, vous pouvez obtenir l'avantage sur une attaque avec ces armes, 1/round.",
    reach: "Distance à laquelle un ennemi doit se trouver pour être affecté par cette attaque. Par défaut, Allonge 1.",
    range: "Les attaques peuvent être faites de loin. Si un ennemi est adjacent, vos attaques à distance subissent le désavantage. Ajoutez 1 dé de désavantage pour +2 Portée.",
    thrown: "Traite une arme de mêlée comme si elle avait une Portée. Une fois lancée, vous ne l'avez plus !",
    vicious: "Lancez 1 dé supplémentaire lorsque vous lancez des dégâts critiques.",
    load: "Certaines armes nécessitent des actions supplémentaires pour recharger avant chaque tir.",
    stack: "Fourni en lot. Une fois toutes lancées, vous ne les avez plus !",
  };

  const map = locale === "fr" ? fr : en;

  // Match the first keyword in the property string
  for (const key of Object.keys(map)) {
    if (lower.includes(key)) return map[key];
  }
  return "";
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
