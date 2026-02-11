import { getTranslations, setRequestLocale } from "next-intl/server";
import { heroClasses } from "@/data/classes";
import { Link } from "@/i18n/navigation";
import { t, tStat, complexityDiamonds } from "@/lib/utils";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ClassesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tc = await getTranslations("classes");

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">
        {tc("title")}
      </h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {heroClasses.map((hc) => (
          <Link
            key={hc.id}
            href={`/classes/${hc.id}`}
            className="group rounded-lg border border-border bg-surface p-5 transition-colors hover:bg-surface-hover"
          >
            <h2 className="text-lg font-semibold text-foreground group-hover:text-accent">
              {t(hc.name, locale)}
            </h2>
            <div className="mt-1 flex items-center gap-3 text-sm text-muted">
              <span>{complexityDiamonds(hc.complexity)}</span>
              <span>{hc.keyStats.map((s) => tStat(s, locale)).join(" / ")}</span>
              <span>{hc.hitDie.replace(/^\d+/, "")}</span>
            </div>
            <p className="mt-2 text-sm text-muted line-clamp-2">
              {t(hc.description, locale)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
