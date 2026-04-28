import { ancestries } from "@/data/ancestries";
import { backgrounds } from "@/data/backgrounds";
import { heroClasses } from "@/data/classes";
import {
  adventuringGear,
  armor,
  meleeWeapons,
  rangedWeapons,
} from "@/data/equipment";
import { skills } from "@/data/skills";
import type { CharacterData, LocalizedString } from "@/data/types";
import { auth } from "@/lib/auth";
import {
  ALL_LANGUAGES,
  calculateClassResource,
  calculateSkillBase,
  getEffectiveStats,
} from "@/lib/character-rules";
import { db } from "@/lib/db";
import { characters } from "@/lib/db/schema";
import { t as tl } from "@/lib/utils";
import { and, eq } from "drizzle-orm";
import { NextResponse } from "next/server";

// Skill center X positions (left to right across the skill row)
const SKILL_XS_EN: Record<string, number> = {
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
// FR order: arcanes, discrétion, finesse, influence, intuition, investigation, perception, puissance, savoir, survie
const SKILL_XS_FR: Record<string, number> = {
  arcana: 78,
  stealth: 130,
  finesse: 182,
  influence: 235,
  insight: 287,
  examination: 338,
  perception: 391,
  might: 443,
  lore: 495,
  naturecraft: 547,
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

    const url = new URL(request.url);
    const locale = url.searchParams.get("locale") || "en";
    const hideParam = url.searchParams.get("hide") || "";
    const hiddenGroups = new Set(hideParam.split(",").filter(Boolean));

    // Try to load the official character sheet PDF (FR or EN)
    const pdfFileName =
      locale === "fr"
        ? "fiche-de-perso-nimble.pdf"
        : "nimble-character-sheet.pdf";
    let pdfBytes: ArrayBuffer;
    try {
      const fs = await import("fs/promises");
      const path = await import("path");
      const pdfPath = path.join(process.cwd(), "public", pdfFileName);
      pdfBytes = (await fs.readFile(pdfPath)).buffer as ArrayBuffer;
    } catch {
      return NextResponse.json(
        {
          error: `Character sheet PDF not found. Please add ${pdfFileName} to the public/ directory.`,
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

    // Compute effective stats (base + stat increases + capstone)
    const effectiveStats = data.statIncreases
      ? getEffectiveStats(
          data.stats,
          data.statIncreases,
          data.capstoneStatIncreases,
        )
      : data.stats;

    // Subclass lookup
    const subclass =
      data.subclassId && classInfo
        ? classInfo.subclasses.find((s) => s.id === data.subclassId)
        : null;

    const level = data.level ?? 1;

    // ===== HEADER ROW =====
    if (!hiddenGroups.has("identityName")) {
      drawBold(data.name, 50, 572, 8);
    }
    if (!hiddenGroups.has("identityAncestry")) {
      draw(
        ancestryInfo ? tl(ancestryInfo.name, locale) : data.ancestryId,
        130,
        572,
        8,
      );
    }
    if (!hiddenGroups.has("identityClass")) {
      let classLabel = classInfo ? tl(classInfo.name, locale) : data.classId;
      if (subclass) classLabel += ` (${tl(subclass.name, locale)})`;
      draw(classLabel, 170, 572, 8);
    }
    if (!hiddenGroups.has("identityLevel")) {
      drawBold(String(level), 220, 572, 8);
    }

    // ===== PRIMARY STATS (inside shield shapes) =====
    const statCenterX: Record<string, number> = {
      STR: 79,
      DEX: 131,
      INT: 184,
      WIL: 235.8,
    };
    if (!hiddenGroups.has("stats")) {
      drawCentered(formatStat(effectiveStats.STR), statCenterX.STR, 510, 16);
      drawCentered(formatStat(effectiveStats.DEX), statCenterX.DEX, 510, 16);
      drawCentered(formatStat(effectiveStats.INT), statCenterX.INT, 510, 16);
      drawCentered(formatStat(effectiveStats.WIL), statCenterX.WIL, 510, 16);

      // ===== SAVE TRIANGLES =====
      const upTriangle = "M 0 -7 L -5 0 L 5 0 Z";
      const downTriangle = "M 0 6 L -5 0 L 5 0 Z";

      const green = rgb(0.13, 0.55, 0.13);
      const red = rgb(0.8, 0.15, 0.15);

      const strongX = statCenterX[data.saves.strong];
      if (strongX) {
        page.drawSvgPath(upTriangle, { x: strongX, y: 534, color: green });
      }
      const weakX = statCenterX[data.saves.weak];
      if (weakX) {
        page.drawSvgPath(downTriangle, { x: weakX, y: 464, color: red });
      }
    }

    // ===== CLASS RESOURCE (between stats and armor) =====
    if (!hiddenGroups.has("combatClassResource")) {
      const classResource = calculateClassResource(
        data.classId,
        effectiveStats,
        level,
      );
      if (classResource) {
        const resLabel = tl(classResource.name, locale);
        const resValue = classResource.die
          ? `${classResource.max} (${classResource.die})`
          : String(classResource.max);
        draw(resLabel, 310, 530, 7);
        drawBold(resValue, 310, 518, 9);
      }
    }

    // ===== COMBAT STATS (right side) =====
    if (!hiddenGroups.has("combatArmor")) {
      drawCentered(data.armorValue, 518, 524, 10);
    }

    // Hit Points (MAX + CURRENT)
    if (!hiddenGroups.has("hitPointsMax")) {
      drawCentered(String(data.hp), 576, 529, 12);
    }
    if (!hiddenGroups.has("hitPointsCurrent")) {
      drawCentered(String(data.hp), 576, 475, 12);
    }

    // Hit Dice (DIE TYPE + MAX + CURRENT)
    if (!hiddenGroups.has("hitDiceType")) {
      drawCentered(data.hitDie.substring(1), 636, 555, 10);
    }
    if (!hiddenGroups.has("hitDiceMax")) {
      drawCentered(`${data.hitDiceCount}`, 636, 524, 12);
    }
    if (!hiddenGroups.has("hitDiceCurrent")) {
      drawCentered(String(data.hitDiceCount), 636, 485, 12);
    }

    // Initiative + Speed
    if (!hiddenGroups.has("combatInitiative")) {
      const effectiveInitiative =
        effectiveStats.DEX + (ancestryInfo?.modifiers.initiative ?? 0);
      drawCentered(formatStat(effectiveInitiative), 700, 522, 12);
    }
    if (!hiddenGroups.has("combatSpeed")) {
      drawCentered(String(data.speed), 700, 480, 12);
    }

    // ===== SKILL VALUES =====
    if (!hiddenGroups.has("skills")) {
      const skillXs = locale === "fr" ? SKILL_XS_FR : SKILL_XS_EN;
      const skillBase = calculateSkillBase(effectiveStats, ancestryInfo);
      for (const skill of skills) {
        const base = skillBase[skill.id] ?? 0;
        const bonus = data.bonusSkillPoints[skill.id] ?? 0;
        const total = base + bonus;
        const cx = skillXs[skill.id];
        if (cx) {
          drawCentered(formatStat(total), cx, 407, 10);
        }
      }
    }

    // ===== FEATURES SECTION =====
    // Helper: draw text with auto-shrinking font to fit within maxWidth
    const FEATURE_MAX_WIDTH = 470;
    function drawFit(
      titleText: string,
      descText: string,
      x: number,
      y: number,
      maxSize: number,
      minSize: number,
    ) {
      const fullText = titleText + descText;
      let size = maxSize;
      while (size > minSize) {
        const w =
          boldFont.widthOfTextAtSize(titleText, size) +
          font.widthOfTextAtSize(descText, size);
        if (w <= FEATURE_MAX_WIDTH) break;
        size -= 0.5;
      }
      // If still too wide at minSize, truncate the description
      if (
        boldFont.widthOfTextAtSize(titleText, size) +
          font.widthOfTextAtSize(descText, size) >
        FEATURE_MAX_WIDTH
      ) {
        while (
          descText.length > 3 &&
          boldFont.widthOfTextAtSize(titleText, size) +
            font.widthOfTextAtSize(descText + "...", size) >
            FEATURE_MAX_WIDTH
        ) {
          descText = descText.slice(0, -1);
        }
        descText = descText + "...";
      }
      // Draw bold title then regular description
      drawBold(titleText, x, y, size);
      const titleWidth = boldFont.widthOfTextAtSize(titleText, size);
      draw(descText, x + titleWidth, y, size);
    }

    if (!hiddenGroups.has("features")) {
      // Ancestry - name + trait name + trait description
      if (ancestryInfo) {
        const title = `${tl(ancestryInfo.trait.name, locale)}:`;
        const desc = ` ${tl(ancestryInfo.trait.description, locale)}`;
        drawFit(title, desc, 31, 315, 7, 4.5);
      }

      // Background
      if (backgroundInfo) {
        const effects = backgroundInfo.effects
          .map((e) => tl(e, locale))
          .join(", ");
        const title = `${tl(backgroundInfo.name, locale)}:`;
        const desc = ` ${effects}`;
        drawFit(title, desc, 32, 283, 7, 4.5);
      }

      // Motivation
      if (data.adventuringMotivation) {
        drawFit("", data.adventuringMotivation, 32, 252, 8, 4.5);
      }

      // ===== CLASS ABILITIES (with text wrapping + page 2 overflow) =====
      if (classInfo) {
        const CLASS_FONT_SIZE = 7;
        const CLASS_X = 32;
        const CLASS_LINE_HEIGHT = 15.5;
        const CLASS_MAX_WIDTH = 470;
        const PAGE1_START_Y = 211;
        const PAGE1_MAX_LINES = 13;

        const lvlAbbr = locale === "fr" ? "Niv" : "Lvl";

        // Collect all features into a single list with title/description split
        const combined: Array<{
          level: number;
          title: string;
          description: string;
        }> = [];

        for (const ability of classInfo.abilities.filter(
          (a) => a.level <= level && a.type === "core",
        )) {
          const prefix = level > 1 ? `[${lvlAbbr} ${ability.level}] ` : "";
          combined.push({
            level: ability.level,
            title: `${prefix}${tl(ability.name, locale)}:`,
            description: ` ${tl(ability.description, locale)}`,
          });
        }

        if (subclass) {
          for (const feature of subclass.features.filter(
            (f) => f.level <= level,
          )) {
            combined.push({
              level: feature.level,
              title: `[${lvlAbbr} ${feature.level}] ${tl(feature.name, locale)}:`,
              description: ` ${tl(feature.description, locale)}`,
            });
          }
        }

        if (data.abilityPoolPicks && classInfo.abilityPool) {
          for (const pick of data.abilityPoolPicks) {
            const ability = classInfo.abilityPool.abilities[pick.abilityIndex];
            if (!ability) continue;
            combined.push({
              level: pick.level,
              title: `[${lvlAbbr} ${pick.level}] ${tl(ability.name, locale)}:`,
              description: ` ${tl(ability.description, locale)}`,
            });
          }
        }

        // Sort by level ascending
        combined.sort((a, b) => a.level - b.level);

        // Each render line: bold portion drawn first, then regular portion
        type RenderLine = { bold: string; regular: string };

        // Word-wrap an ability into render lines, with bold title on the first line
        function wrapAbility(title: string, description: string): RenderLine[] {
          const titleWidth = boldFont.widthOfTextAtSize(title, CLASS_FONT_SIZE);
          const remainingWidth = CLASS_MAX_WIDTH - titleWidth;
          const lines: RenderLine[] = [];

          // Try to fit description (or start of it) on the first line after the bold title
          const descWords = description.trim().split(" ");
          let firstLineDesc = "";
          let wordIdx = 0;

          for (; wordIdx < descWords.length; wordIdx++) {
            const test = firstLineDesc
              ? `${firstLineDesc} ${descWords[wordIdx]}`
              : descWords[wordIdx];
            if (
              font.widthOfTextAtSize(` ${test}`, CLASS_FONT_SIZE) <=
              remainingWidth
            ) {
              firstLineDesc = test;
            } else {
              break;
            }
          }

          lines.push({
            bold: title,
            regular: firstLineDesc ? ` ${firstLineDesc}` : "",
          });

          // Wrap remaining description words on subsequent lines (full width, regular only)
          let currentLine = "";
          for (; wordIdx < descWords.length; wordIdx++) {
            const test = currentLine
              ? `${currentLine} ${descWords[wordIdx]}`
              : descWords[wordIdx];
            if (
              font.widthOfTextAtSize(test, CLASS_FONT_SIZE) <= CLASS_MAX_WIDTH
            ) {
              currentLine = test;
            } else {
              if (currentLine) lines.push({ bold: "", regular: currentLine });
              currentLine = descWords[wordIdx];
            }
          }
          if (currentLine) lines.push({ bold: "", regular: currentLine });

          return lines;
        }

        // Pre-compute all render lines
        const allLines: RenderLine[] = [];
        for (const entry of combined) {
          allLines.push(...wrapAbility(entry.title, entry.description));
        }

        // Draw a render line on a given page at position
        function drawRenderLine(
          targetPage: typeof page,
          line: RenderLine,
          x: number,
          y: number,
        ) {
          let xPos = x;
          if (line.bold) {
            targetPage.drawText(line.bold, {
              x: xPos,
              y,
              size: CLASS_FONT_SIZE,
              font: boldFont,
              color: black,
            });
            xPos += boldFont.widthOfTextAtSize(line.bold, CLASS_FONT_SIZE);
          }
          if (line.regular) {
            targetPage.drawText(line.regular, {
              x: xPos,
              y,
              size: CLASS_FONT_SIZE,
              font,
              color: black,
            });
          }
        }

        // Draw lines on page 1
        let lineIndex = 0;
        let classY = PAGE1_START_Y;
        while (lineIndex < allLines.length && lineIndex < PAGE1_MAX_LINES) {
          drawRenderLine(page, allLines[lineIndex], CLASS_X, classY);
          classY -= CLASS_LINE_HEIGHT;
          lineIndex++;
        }

        // If there are remaining lines, write them on the existing page 2 of
        // the template (back of the character sheet) rather than appending a
        // new blank page after it.
        if (lineIndex < allLines.length) {
          const allPages = pdfDoc.getPages();
          const { width, height } = page.getSize();
          const page2 =
            allPages.length > 1 ? allPages[1] : pdfDoc.addPage([width, height]);
          // Baseline of the first row in the page 2 CLASSE table (template is
          // 792x612; first row sits ~56pt below the page top so text lands in
          // the row band rather than floating above it).
          const PAGE2_START_Y = page2.getSize().height - 32;
          let page2Y = PAGE2_START_Y;
          while (lineIndex < allLines.length) {
            drawRenderLine(page2, allLines[lineIndex], CLASS_X, page2Y);
            page2Y -= CLASS_LINE_HEIGHT;
            lineIndex++;
          }
        }
      }
    }

    // ===== INVENTORY =====
    if (!hiddenGroups.has("equipment")) {
      const equipNameMap = new Map<string, LocalizedString>();
      const allItems = [
        ...armor.map((i) => i.name),
        ...meleeWeapons.map((i) => i.name),
        ...rangedWeapons.map((i) => i.name),
        ...adventuringGear.map((i) => i.name),
        ...(classInfo?.startingGear ?? []),
      ];
      for (const name of allItems) {
        equipNameMap.set(name.en, name);
        equipNameMap.set(name.fr, name);
      }

      let invY = 329.5;
      for (let i = 0; i < Math.min(data.equipment.length, 16); i++) {
        const raw = data.equipment[i];
        const found = equipNameMap.get(raw);
        const item = found ? tl(found, locale) : raw;
        draw(item.length > 25 ? item.slice(0, 22) + "..." : item, 540, invY, 7);
        draw("1", 745, invY, 7);
        invY -= 15.7;
      }
    }

    // ===== PROFICIENCIES =====
    if (!hiddenGroups.has("proficiencies")) {
      if (classInfo) {
        draw(
          classInfo.armorProficiency.map((p) => tl(p, locale)).join(", "),
          577,
          69,
          7,
        );
        draw(
          classInfo.weaponProficiency.map((p) => tl(p, locale)).join(", "),
          586,
          54,
          7,
        );
      }
      const translatedLangs = data.languages.map((lang) => {
        if (lang === "Common") return locale === "fr" ? "Commun" : "Common";
        const found = ALL_LANGUAGES.find((l) => l.en === lang);
        return found ? tl(found, locale) : lang;
      });
      draw(translatedLangs.join(", "), 596, 38, 7);
    }

    pdfDoc.setTitle(`${data.name} - PDF`);
    const modifiedPdfBytes = await pdfDoc.save();

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
