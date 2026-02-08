import { Suspense } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SearchClient } from "./search-client";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function SearchPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const nav = await getTranslations("nav");

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">
        {nav("search")}
      </h1>
      <Suspense>
        <SearchClient locale={locale} />
      </Suspense>
    </div>
  );
}
