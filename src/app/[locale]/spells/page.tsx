import { getTranslations, setRequestLocale } from "next-intl/server";
import { SpellsClient } from "./spells-client";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function SpellsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const ts = await getTranslations("spells");

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">
        {ts("title")}
      </h1>
      <SpellsClient locale={locale} />
    </div>
  );
}
