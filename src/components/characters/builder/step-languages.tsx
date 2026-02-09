"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import type { Stat, Ancestry } from "@/data/types";
import { getAvailableLanguages, ALL_LANGUAGES } from "@/lib/character-rules";
import { t as tl } from "@/lib/utils";

type Props = {
  locale: string;
  stats: Record<Stat, number>;
  ancestryData: Ancestry;
  selectedLanguages: string[];
  onUpdate: (languages: string[]) => void;
};

export function StepLanguages({
  locale,
  stats,
  ancestryData,
  selectedLanguages,
  onUpdate,
}: Props) {
  const t = useTranslations("builder");

  const { known, slots } = getAvailableLanguages(stats, ancestryData);

  // Auto-set known languages on mount if not already set
  useEffect(() => {
    if (selectedLanguages.length === 0 && known.length > 0) {
      onUpdate([...known]);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Available bonus languages (not already known)
  const bonusOptions = ALL_LANGUAGES.filter(
    (lang) => !known.includes(lang.en)
  );

  const bonusSelected = selectedLanguages.filter(
    (lang) => !known.includes(lang)
  );

  function toggleBonusLanguage(langEn: string) {
    if (bonusSelected.includes(langEn)) {
      // Remove
      onUpdate([...known, ...bonusSelected.filter((l) => l !== langEn)]);
    } else if (bonusSelected.length < slots) {
      // Add
      onUpdate([...known, ...bonusSelected, langEn]);
    }
  }

  return (
    <div>
      <h2 className="mb-1 text-lg font-semibold text-foreground">
        {t("languagesTitle")}
      </h2>
      <p className="mb-4 text-sm text-muted">{t("languagesDesc")}</p>

      {/* Known languages */}
      <h3 className="mb-2 font-medium text-foreground">
        {t("knownLanguages")}
      </h3>
      <div className="mb-4 flex flex-wrap gap-2">
        {known.map((lang) => (
          <span
            key={lang}
            className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent"
          >
            {lang === "Common"
              ? (locale === "fr" ? "Commun" : "Common")
              : (locale === "fr"
                  ? ALL_LANGUAGES.find((l) => l.en === lang)?.fr ?? lang
                  : lang)}
          </span>
        ))}
      </div>

      {/* Bonus languages */}
      {slots > 0 ? (
        <>
          <h3 className="mb-1 font-medium text-foreground">
            {t("bonusLanguages")}
          </h3>
          <p className="mb-3 text-sm text-muted">
            {t("bonusLanguagesDesc", { int: stats.INT, count: slots })}
          </p>
          <div className="flex flex-wrap gap-2">
            {bonusOptions.map((lang) => {
              const selected = bonusSelected.includes(lang.en);
              const canSelect = bonusSelected.length < slots;
              return (
                <button
                  key={lang.en}
                  onClick={() => toggleBonusLanguage(lang.en)}
                  disabled={!selected && !canSelect}
                  className={`rounded-full border px-3 py-1 text-sm font-medium transition-colors ${
                    selected
                      ? "border-accent bg-accent/10 text-accent"
                      : canSelect
                        ? "border-border text-muted hover:border-accent hover:text-foreground"
                        : "border-border/50 text-muted/50 cursor-not-allowed"
                  }`}
                >
                  {tl(lang, locale)}
                </button>
              );
            })}
          </div>
        </>
      ) : (
        <p className="text-sm text-muted">{t("noBonusLanguages")}</p>
      )}
    </div>
  );
}
