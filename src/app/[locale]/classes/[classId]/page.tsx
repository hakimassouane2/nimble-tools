import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { heroClasses } from "@/data/classes";
import { t } from "@/lib/utils";
import { StatBlock } from "@/components/ui/stat-block";
import { ClassDetailClient } from "./class-detail-client";

type Props = {
  params: Promise<{ locale: string; classId: string }>;
};

export function generateStaticParams() {
  return heroClasses.map((hc) => ({ classId: hc.id }));
}

export default async function ClassDetailPage({ params }: Props) {
  const { locale, classId } = await params;
  setRequestLocale(locale);

  const heroClass = heroClasses.find((hc) => hc.id === classId);
  if (!heroClass) notFound();

  const tc = await getTranslations("classes");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">
          {t(heroClass.name, locale)}
        </h1>
        <p className="mt-2 text-muted">{t(heroClass.description, locale)}</p>
      </div>

      <StatBlock
        heroClass={heroClass}
        locale={locale}
        labels={{
          complexity: tc("complexity"),
          keyStats: tc("keyStats"),
          hitDie: tc("hitDie"),
          startingHp: tc("startingHp"),
          strong: tc("strong"),
          weak: tc("weak"),
          armorProf: tc("armorProf"),
          weaponProf: tc("weaponProf"),
        }}
      />

      <div>
        <h2 className="mb-2 text-sm font-semibold text-muted">{tc("startingGear")}</h2>
        <ul className="space-y-1">
          {heroClass.startingGear.map((g, i) => (
            <li key={i} className="text-sm text-foreground">
              <span className="text-accent mr-1.5">&#8226;</span>
              {t(g, locale)}
            </li>
          ))}
        </ul>
      </div>

      <ClassDetailClient heroClass={heroClass} locale={locale} />
    </div>
  );
}
