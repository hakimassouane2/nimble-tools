import { getTranslations, setRequestLocale } from "next-intl/server";
import { allRules } from "@/data/rules";
import { RulesClient } from "./rules-client";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function RulesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tr = await getTranslations("rules");

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">
        {tr("title")}
      </h1>
      <RulesClient rules={allRules} locale={locale} />
    </div>
  );
}
