import { setRequestLocale } from "next-intl/server";
import { requireAuth } from "@/lib/auth";
import { CharacterBuilder } from "@/components/characters/builder/character-builder";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function NewCharacterPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  await requireAuth(locale);

  return <CharacterBuilder locale={locale} />;
}
