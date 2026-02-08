import { getTranslations, setRequestLocale } from "next-intl/server";
import { ancestries } from "@/data/ancestries";
import { AncestriesClient } from "./ancestries-client";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function AncestriesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const ta = await getTranslations("ancestries");

  const common = ancestries.filter((a) => a.category === "common");
  const exotic = ancestries.filter((a) => a.category === "exotic");

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">
        {ta("title")}
      </h1>
      <AncestriesClient common={common} exotic={exotic} locale={locale} />
    </div>
  );
}
