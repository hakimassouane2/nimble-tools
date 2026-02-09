import { setRequestLocale, getTranslations } from "next-intl/server";
import { requireAuth } from "@/lib/auth";
import { db } from "@/lib/db";
import { characters } from "@/lib/db/schema";
import { eq, and } from "drizzle-orm";
import { notFound } from "next/navigation";
import type { CharacterData } from "@/data/types";
import { CharacterDetail } from "@/components/characters/character-detail";

type Props = {
  params: Promise<{ locale: string; id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale, id } = await params;
  const t = await getTranslations({ locale, namespace: "characters" });
  const session = await requireAuth(locale);
  const userId = session.user?.id;
  if (!userId) return { title: "Not Found" };

  const character = await db.query.characters.findFirst({
    where: and(
      eq(characters.id, id),
      eq(characters.userId, userId)
    ),
  });

  if (!character) return { title: "Not Found" };
  return { title: character.name };
}

export default async function CharacterDetailPage({ params }: Props) {
  const { locale, id } = await params;
  setRequestLocale(locale);
  const session = await requireAuth(locale);
  const userId = session.user?.id;
  if (!userId) notFound();

  const character = await db.query.characters.findFirst({
    where: and(
      eq(characters.id, id),
      eq(characters.userId, userId)
    ),
  });

  if (!character) notFound();

  const data = JSON.parse(character.data) as CharacterData;

  return (
    <CharacterDetail
      locale={locale}
      characterId={character.id}
      data={data}
      createdAt={character.createdAt?.toISOString() ?? ""}
    />
  );
}
