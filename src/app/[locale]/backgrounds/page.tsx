import { getTranslations, setRequestLocale } from "next-intl/server";
import { backgrounds } from "@/data/backgrounds";
import { BackgroundsClient } from "./backgrounds-client";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function BackgroundsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tb = await getTranslations("backgrounds");

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">
        {tb("title")}
      </h1>
      <BackgroundsClient backgrounds={backgrounds} locale={locale} />
    </div>
  );
}
