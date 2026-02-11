import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { characters } from "@/lib/db/schema";
import { eq, count } from "drizzle-orm";
import { validateCharacter } from "@/lib/character-rules";
import type { CharacterData } from "@/data/types";

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userCharacters = await db.query.characters.findMany({
      where: eq(characters.userId, session.user.id),
      columns: {
        id: true,
        name: true,
        data: true,
        createdAt: true,
      },
    });

    const result = userCharacters.map((c) => {
      const data = JSON.parse(c.data) as CharacterData;
      return {
        id: c.id,
        name: c.name,
        classId: data.classId,
        ancestryId: data.ancestryId,
        level: data.level ?? 1,
        createdAt: c.createdAt,
      };
    });

    return NextResponse.json({ characters: result });
  } catch (error) {
    console.error("List characters error:", error);
    return NextResponse.json(
      { error: "Failed to list characters" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const [{ value: charCount }] = await db
      .select({ value: count() })
      .from(characters)
      .where(eq(characters.userId, session.user.id));

    if (charCount >= 50) {
      return NextResponse.json(
        { error: "Maximum of 50 characters reached" },
        { status: 400 }
      );
    }

    const body = (await request.json()) as CharacterData;

    const { valid, errors } = validateCharacter(body);
    if (!valid) {
      return NextResponse.json({ error: errors.join(" ") }, { status: 400 });
    }

    const [inserted] = await db
      .insert(characters)
      .values({
        userId: session.user.id,
        name: body.name,
        data: JSON.stringify(body),
      })
      .returning({ id: characters.id, name: characters.name });

    return NextResponse.json({ id: inserted.id, name: inserted.name });
  } catch (error) {
    console.error("Create character error:", error);
    return NextResponse.json(
      { error: "Failed to create character" },
      { status: 500 }
    );
  }
}
