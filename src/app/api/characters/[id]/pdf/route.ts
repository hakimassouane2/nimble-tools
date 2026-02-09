import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { characters } from "@/lib/db/schema";
import { eq, and } from "drizzle-orm";
import type { CharacterData } from "@/data/types";
import { heroClasses } from "@/data/classes";
import { ancestries } from "@/data/ancestries";
import { backgrounds } from "@/data/backgrounds";
import { skills } from "@/data/skills";
import { calculateSkillBase } from "@/lib/character-rules";

// Skill center X positions (left to right across the skill row)
const SKILL_XS: Record<string, number> = {
  arcana: 78,
  examination: 130,
  finesse: 182,
  influence: 235,
  insight: 287,
  lore: 338,
  might: 391,
  naturecraft: 443,
  perception: 495,
  stealth: 547,
};

type RouteParams = { params: Promise<{ id: string }> };

export async function GET(request: Request, { params }: RouteParams) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    const character = await db.query.characters.findFirst({
      where: and(eq(characters.id, id), eq(characters.userId, session.user.id)),
    });

    if (!character) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const data = JSON.parse(character.data) as CharacterData;

    // Try to load the official character sheet PDF
    let pdfBytes: ArrayBuffer;
    try {
      const fs = await import("fs/promises");
      const path = await import("path");
      const pdfPath = path.join(
        process.cwd(),
        "public",
        "nimble-character-sheet.pdf",
      );
      pdfBytes = (await fs.readFile(pdfPath)).buffer as ArrayBuffer;
    } catch {
      return NextResponse.json(
        {
          error:
            "Official character sheet PDF not found. Please add nimble-character-sheet.pdf to the public/ directory.",
        },
        { status: 503 },
      );
    }

    const { PDFDocument, StandardFonts, rgb } = await import("pdf-lib");

    const pdfDoc = await PDFDocument.load(pdfBytes);
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const page = pdfDoc.getPages()[0];
    const black = rgb(0, 0, 0);

    function draw(text: string, x: number, y: number, size: number) {
      page.drawText(text, { x, y, size, font, color: black });
    }

    function drawBold(text: string, x: number, y: number, size: number) {
      page.drawText(text, { x, y, size, font: boldFont, color: black });
    }

    function drawCentered(text: string, cx: number, cy: number, size: number) {
      const w = boldFont.widthOfTextAtSize(text, size);
      page.drawText(text, {
        x: cx - w / 2,
        y: cy - size / 3,
        size,
        font: boldFont,
        color: black,
      });
    }

    function formatStat(val: number): string {
      return val > 0 ? `+${val}` : String(val);
    }

    // Look up display names
    const classInfo = heroClasses.find((c) => c.id === data.classId);
    const ancestryInfo = ancestries.find((a) => a.id === data.ancestryId);
    const backgroundInfo = backgrounds.find((b) => b.id === data.backgroundId);

    // ===== HEADER ROW =====
    drawBold(data.name, 50, 572, 8);
    draw(ancestryInfo?.name.en ?? data.ancestryId, 130, 572, 8);
    draw(classInfo?.name.en ?? data.classId, 170, 572, 8);
    drawBold(String(data.level), 220, 572, 8);

    // ===== PRIMARY STATS (inside shield shapes) =====
    drawCentered(formatStat(data.stats.STR), 79, 510, 16);
    drawCentered(formatStat(data.stats.DEX), 131, 510, 16);
    drawCentered(formatStat(data.stats.INT), 184, 510, 16);
    drawCentered(formatStat(data.stats.WIL), 235, 510, 16);

    // ===== COMBAT STATS (right side) =====
    // Armor - resolve formula like "2+DEX" to a number
    const armorNumeric = (() => {
      const match = data.armorValue.match(/^(\d+)\+(\w+)$/);
      if (!match) return data.armorValue;
      const base = parseInt(match[1], 10);
      const stat = match[2] as keyof typeof data.stats;
      const statVal = data.stats[stat] ?? 0;
      return String(base + statVal);
    })();
    drawCentered(armorNumeric, 518, 524, 10);

    // Hit Points (MAX)
    drawCentered(String(data.hp), 576, 529, 12);
    // Hit Points (CURRENT = same as MAX for new character)
    drawCentered(String(data.hp), 576, 475, 12);

    // Hit dice (DIE TYPE)
    drawCentered(data.hitDie.substring(1), 636, 555, 10);

    // Hit Dice Count (MAX)
    drawCentered(`${data.hitDiceCount}`, 636, 524, 12);
    // Hit Dice Count (CURRENT)
    drawCentered(String(data.hitDiceCount), 636, 485, 12);

    // Initiative
    drawCentered(formatStat(data.initiative), 700, 522, 12);

    // Speed
    drawCentered(String(data.speed), 700, 480, 12);

    // ===== SKILL VALUES =====
    const skillBase = calculateSkillBase(data.stats);
    for (const skill of skills) {
      const base = skillBase[skill.id] ?? 0;
      const bonus = data.bonusSkillPoints[skill.id] ?? 0;
      const total = base + bonus;
      const cx = SKILL_XS[skill.id];
      if (cx) {
        drawCentered(formatStat(total), cx, 407, 10);
      }
    }

    // ===== FEATURES SECTION =====
    // Ancestry - name + trait name + trait description
    if (ancestryInfo) {
      const traitText = `${ancestryInfo.name.en} — ${ancestryInfo.trait.name.en}: ${ancestryInfo.trait.description.en}`;
      draw(
        traitText.length > 150 ? traitText.slice(0, 147) + "..." : traitText,
        31,
        315,
        7,
      );
    }

    // Background
    if (backgroundInfo) {
      const effects = backgroundInfo.effects.map((e) => e.en).join(", ");
      const bgText = `${backgroundInfo.name.en} — ${effects}`;
      // Truncate if too long for the field
      draw(
        bgText.length > 150 ? bgText.slice(0, 147) + "..." : bgText,
        32,
        283,
        7,
      );
    }

    // Motivation
    if (data.adventuringMotivation) {
      const motiv = data.adventuringMotivation;
      draw(
        motiv.length > 150 ? motiv.slice(0, 147) + "..." : motiv,
        32,
        252,
        8,
      );
    }

    // ===== CLASS ABILITIES =====
    if (classInfo) {
      let classY = 211;
      const level1Abilities = classInfo.abilities.filter((a) => a.level === 1);
      for (const ability of level1Abilities) {
        const text = `${ability.name.en}: ${ability.description.en}`;
        // Truncate long descriptions to fit the column width
        draw(
          text.length > 150 ? text.slice(0, 147) + "..." : text,
          32,
          classY,
          7,
        );
        classY -= 15.5;
      }
    }

    // ===== INVENTORY =====
    let invY = 329.5;
    for (let i = 0; i < Math.min(data.equipment.length, 16); i++) {
      const item = data.equipment[i];
      draw(item.length > 25 ? item.slice(0, 22) + "..." : item, 540, invY, 7);
      draw("1", 745, invY, 7);
      invY -= 15.7;
    }

    // ===== PROFICIENCIES =====
    if (classInfo) {
      draw(classInfo.armorProficiency.map((p) => p.en).join(", "), 577, 69, 7);
      draw(classInfo.weaponProficiency.map((p) => p.en).join(", "), 586, 54, 7);
    }
    draw(data.languages.join(", "), 596, 38, 7);

    // ===== SAVES (in the strong/weak save section) =====
    // Not a dedicated field on the sheet — covered by class abilities

    const modifiedPdfBytes = await pdfDoc.save();

    const url = new URL(request.url);
    const inline = url.searchParams.has("inline");
    const safeName = data.name.replace(/[^a-zA-Z0-9-_ ]/g, "");

    return new Response(Buffer.from(modifiedPdfBytes), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `${inline ? "inline" : "attachment"}; filename="${safeName}.pdf"`,
      },
    });
  } catch (error) {
    console.error("PDF generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 },
    );
  }
}
