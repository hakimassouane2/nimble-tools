import { setRequestLocale } from "next-intl/server";
import { requireAuth } from "@/lib/auth";
import { db } from "@/lib/db";
import { characters } from "@/lib/db/schema";
import { eq, and } from "drizzle-orm";
import type { CharacterData } from "@/data/types";
import { CharacterBuilder } from "@/components/characters/builder/character-builder";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ characterId?: string; mode?: string }>;
};

export default async function NewCharacterPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const { characterId, mode: rawMode } = await searchParams;
  setRequestLocale(locale);
  const session = await requireAuth(locale);

  let initialData: CharacterData | undefined;
  const mode = rawMode === "edit" ? "edit" : rawMode === "levelup" ? "levelup" : "create";

  if (characterId && session.user?.id) {
    const character = await db.query.characters.findFirst({
      where: and(
        eq(characters.id, characterId),
        eq(characters.userId, session.user.id)
      ),
    });
    if (character) {
      try {
        initialData = JSON.parse(character.data) as CharacterData;
      } catch {
        // Corrupted data — fall through to create mode
      }
    }
  }

  return (
    <CharacterBuilder
      locale={locale}
      characterId={characterId}
      mode={mode}
      initialData={initialData}
    />
  );
}
