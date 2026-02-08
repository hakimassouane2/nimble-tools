import { getTranslations, setRequestLocale } from "next-intl/server";
import { EquipmentClient } from "./equipment-client";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function EquipmentPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const te = await getTranslations("equipment");

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">
        {te("title")}
      </h1>
      <EquipmentClient locale={locale} />
    </div>
  );
}
