import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { characters } from "@/lib/db/schema";
import { eq, and } from "drizzle-orm";

type RouteParams = { params: Promise<{ id: string }> };

export async function GET(_request: Request, { params }: RouteParams) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    const character = await db.query.characters.findFirst({
      where: and(
        eq(characters.id, id),
        eq(characters.userId, session.user.id)
      ),
    });

    if (!character) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json({
      id: character.id,
      name: character.name,
      data: JSON.parse(character.data),
      createdAt: character.createdAt,
    });
  } catch (error) {
    console.error("Get character error:", error);
    return NextResponse.json(
      { error: "Failed to get character" },
      { status: 500 }
    );
  }
}

export async function DELETE(_request: Request, { params }: RouteParams) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    const character = await db.query.characters.findFirst({
      where: and(
        eq(characters.id, id),
        eq(characters.userId, session.user.id)
      ),
    });

    if (!character) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    await db
      .delete(characters)
      .where(
        and(eq(characters.id, id), eq(characters.userId, session.user.id))
      );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete character error:", error);
    return NextResponse.json(
      { error: "Failed to delete character" },
      { status: 500 }
    );
  }
}
