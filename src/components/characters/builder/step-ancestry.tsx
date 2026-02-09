"use client";

import { useTranslations } from "next-intl";
import { ancestries } from "@/data/ancestries";
import { t as tl, tSize } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

type Props = {
  locale: string;
  selectedAncestryId: string | null;
  onSelect: (ancestryId: string) => void;
};

export function StepAncestry({ locale, selectedAncestryId, onSelect }: Props) {
  const t = useTranslations("builder");

  const common = ancestries.filter((a) => a.category === "common");
  const exotic = ancestries.filter((a) => a.category === "exotic");

  function AncestryCard({
    ancestry,
  }: {
    ancestry: (typeof ancestries)[number];
  }) {
    const selected = selectedAncestryId === ancestry.id;
    return (
      <button
        onClick={() => onSelect(ancestry.id)}
        className={`rounded-lg border p-4 text-left transition-colors ${
          selected
            ? "border-accent bg-accent/10"
            : "border-border bg-surface hover:bg-surface-hover"
        }`}
      >
        <div className="mb-1 flex items-center justify-between">
          <h3 className="font-semibold text-foreground">
            {tl(ancestry.name, locale)}
          </h3>
          <Badge>{tSize(ancestry.size, locale)}</Badge>
        </div>
        <p className="mb-1 text-xs font-medium text-accent">
          {tl(ancestry.trait.name, locale)}
        </p>
        <p className="line-clamp-2 text-xs text-muted">
          {tl(ancestry.trait.description, locale)}
        </p>
      </button>
    );
  }

  return (
    <div>
      <h2 className="mb-1 text-lg font-semibold text-foreground">
        {t("selectAncestry")}
      </h2>
      <p className="mb-4 text-sm text-muted">{t("selectAncestryDesc")}</p>

      {/* Common */}
      <h3 className="mb-2 font-medium text-foreground">
        {t("commonAncestries")}
      </h3>
      <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {common.map((a) => (
          <AncestryCard key={a.id} ancestry={a} />
        ))}
      </div>

      {/* Exotic */}
      <h3 className="mb-1 font-medium text-foreground">
        {t("exoticAncestries")}
      </h3>
      <p className="mb-2 text-xs text-muted">{t("exoticNote")}</p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {exotic.map((a) => (
          <AncestryCard key={a.id} ancestry={a} />
        ))}
      </div>
    </div>
  );
}
