import { setRequestLocale, getTranslations } from "next-intl/server";
import { requireAuth } from "@/lib/auth";
import { db } from "@/lib/db";
import { characters } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import type { CharacterData } from "@/data/types";
import { CharacterList } from "@/components/characters/character-list";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "characters" });
  return { title: t("title") };
}

export default async function CharactersPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const session = await requireAuth(locale);
  const userId = session.user?.id;
  if (!userId) return null;

  const userCharacters = await db.query.characters.findMany({
    where: eq(characters.userId, userId),
  });

  const characterSummaries = userCharacters.map((c) => {
    const data = JSON.parse(c.data) as CharacterData;
    return {
      id: c.id,
      name: c.name,
      classId: data.classId,
      ancestryId: data.ancestryId,
      level: data.level ?? 1,
      createdAt: c.createdAt?.toISOString() ?? "",
    };
  });

  return <CharacterList locale={locale} characters={characterSummaries} />;
}
