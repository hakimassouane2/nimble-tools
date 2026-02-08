import { getTranslations, setRequestLocale } from "next-intl/server";
import { conditions } from "@/data/conditions";
import { t } from "@/lib/utils";
import { ConditionsClient } from "./conditions-client";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ConditionsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const nav = await getTranslations("conditions");

  const major = conditions.filter((c) => !c.minor);
  const minor = conditions.filter((c) => c.minor);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">
        {nav("title")}
      </h1>
      <ConditionsClient
        major={major}
        minor={minor}
        locale={locale}
      />
    </div>
  );
}
