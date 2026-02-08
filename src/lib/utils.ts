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
