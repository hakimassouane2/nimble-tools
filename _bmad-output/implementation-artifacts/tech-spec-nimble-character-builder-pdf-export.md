---
title: 'Nimble Character Builder & PDF Export'
slug: 'nimble-character-builder-pdf-export'
created: '2026-02-09'
status: 'review-complete'
stepsCompleted: [1, 2, 3, 4, 5, 6]
tech_stack:
  - Next.js 16 (App Router)
  - TypeScript
  - next-intl (i18n)
  - Tailwind CSS v4
  - Drizzle ORM + Turso (libsql)
  - NextAuth 5 (JWT sessions, credentials provider)
  - pdf-lib (PDF overlay)
files_to_modify:
  - src/lib/db/schema.ts
  - src/data/types.ts
  - src/data/stat-arrays.ts (new)
  - src/lib/character-rules.ts (new)
  - src/app/api/characters/route.ts (new)
  - src/app/api/characters/[id]/route.ts (new)
  - src/app/api/characters/[id]/pdf/route.ts (new)
  - src/app/[locale]/(protected)/characters/page.tsx (new)
  - src/app/[locale]/(protected)/characters/new/page.tsx (new)
  - src/app/[locale]/(protected)/characters/[id]/page.tsx (new)
  - src/components/characters/builder/ (new directory)
  - src/messages/en.json
  - src/messages/fr.json
code_patterns:
  - Server Components by default, Client Components for interactivity
  - Route groups for organization — (protected) for auth-required pages
  - Client components use "use client" directive, manual useState for forms
  - FormData API + fetch for API calls, no form library
  - Drizzle ORM queries (db.query, db.insert, db.update, db.delete)
  - next-intl useTranslations() client-side, getTranslations() server-side
  - t() helper from src/lib/utils.ts for LocalizedString game data
  - Variant-based Tailwind component styling
  - requireAuth(locale) for protected server pages
  - drizzle-kit push:turso for migrations
test_patterns:
  - No formal test framework — manual verification checklist
---

# Tech-Spec: Nimble Character Builder & PDF Export

**Created:** 2026-02-09

## Overview

### Problem Statement

Hakim and his players need a way to create Nimble RPG characters digitally, following the official rules, and export them as filled-in official character sheet PDFs. Currently there's no tool that guides through character creation with rule enforcement and produces a print-ready sheet.

### Solution

Build a multi-step character builder wizard (level 1) integrated into the existing Nimble Tools app. Characters are saved to the database (linked to user accounts) and can be exported as PDFs by overlaying character data onto the official Nimble character sheet PDF using pdf-lib.

### Scope

**In Scope:**
- Multi-step builder wizard (level 1 only): Class → Stats → Ancestry → Background → Skills → Equipment → Languages → Name & Summary
- Strict rule enforcement (valid options only, stat requirements for backgrounds, proficiency filtering, inventory slot limits)
- Database persistence (new `characters` table linked to `users`)
- Character list page (view/manage/delete your characters)
- Character detail view page
- PDF export using pdf-lib overlay on official Nimble character sheet
- Bilingual support (EN/FR) consistent with existing app

**Out of Scope (future):**
- Leveling up (levels 2-20)
- Character editing after creation (v2)
- Spell selection during creation (level 1 casters mostly get cantrips from class — spells are part of class abilities)
- Party sharing / GM view
- Character import
- Adventuring motivation selection (optional field, can be typed in)

## Context for Development

### Codebase Patterns

**Database & Auth:**
- **DB**: Drizzle ORM + Turso (libsql). Connection in `src/lib/db/index.ts`. Schema in `src/lib/db/schema.ts`. Migrations via `drizzle-kit push:turso`.
- **Auth**: NextAuth 5 (beta 30), JWT strategy, credentials provider. Session includes `user.id` and `user.name`. Custom callbacks add `id` to session.
- **Protected pages**: `requireAuth(locale)` in Server Components redirects to sign-in. `useSession()` in Client Components.
- **API routes**: Pattern from `src/app/api/auth/sign-up/route.ts` — `POST` handler, `request.json()` for body, `NextResponse.json()` for responses, try/catch with error handling.

**UI & Components:**
- **Form pattern**: Client Components with `"use client"`, `useState` for error/loading, no form library. `fetch()` for API calls. `router.push()` + `router.refresh()` after success.
- **Input class**: `"mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-foreground placeholder-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"`
- **Button class**: `"rounded-md bg-accent px-4 py-2 font-medium text-background transition-colors hover:bg-accent/90 disabled:opacity-50"`
- **Card class**: `"rounded-lg border border-border bg-surface p-4 transition-colors hover:bg-surface-hover"`
- **Server/Client split**: Page files are Server Components. Interactive parts are separate Client Components.
- **Route groups**: `(auth)` used for auth pages. Will use `(protected)` for character pages.

**i18n:**
- **UI strings**: `src/messages/en.json` / `fr.json`, accessed via `useTranslations("section")` or `getTranslations("section")`.
- **Game data**: `LocalizedString` type, rendered via `t(obj, locale)` helper from `src/lib/utils.ts`.
- **Stat translation**: `tStat(stat, locale)` helper.

**Game Data (in `src/data/`):**
- **Classes** (11): `HeroClass` — `keyStats`, `hitDie`, `startingHp`, `saves`, `armorProficiency`, `weaponProficiency`, `startingGear`, `abilities`, `subclasses`, `abilityPool`.
- **Ancestries** (20+): Common (6) + Exotic (14+). `size`, `category`, `trait`, `modifiers` (speed, armor, languages, other).
- **Backgrounds** (20+): Some have `requirement: { stat: Stat, maxValue: number }`.
- **Skills** (10): Linked to stats — STR: Might; DEX: Finesse, Stealth; INT: Arcana, Examination, Lore; WIL: Influence, Insight, Naturecraft, Perception.
- **Equipment**: Armor (`armorValue`, `strReq`), Melee/Ranged Weapons (`damage`, `properties`), Adventuring Gear, Magical Items.
- **Stat arrays**: NOT yet defined as code — must be created. Standard (+2,+2,+0,-1), Balanced (+2,+1,+1,+0), Min-Max (+3,+1,-1,-1).

**Builder Step Order Rationale:**
The official rules order is Class → Ancestry & Background → Fill Sheet. However, backgrounds have stat requirements (e.g., "Req. 0 or negative INT"). For strict enforcement, the builder reorders slightly: stats are assigned BEFORE background selection so requirements can be validated in real-time. Final order:
1. Class → 2. Stat Array & Assignment → 3. Ancestry → 4. Background → 5. Skills → 6. Equipment → 7. Languages → 8. Name & Summary

### Files to Reference

| File | Purpose |
| ---- | ------- |
| `src/lib/db/schema.ts` | Current DB schema (users table) — add characters table |
| `src/lib/db/index.ts` | Drizzle DB connection (`import { db }`) |
| `src/lib/auth.ts` | `requireAuth()`, `getSession()`, `auth()` |
| `src/lib/utils.ts` | `t()`, `tStat()`, `tDamage()` helpers |
| `src/data/types.ts` | All TypeScript interfaces |
| `src/data/classes/index.ts` | All 11 classes barrel export |
| `src/data/ancestries.ts` | All ancestries |
| `src/data/backgrounds.ts` | All backgrounds with requirements |
| `src/data/skills.ts` | All 10 skills with stat links |
| `src/data/equipment/index.ts` | All equipment barrel export |
| `src/app/[locale]/layout.tsx` | Root layout with AuthProvider |
| `src/app/[locale]/(auth)/sign-in/sign-in-form.tsx` | Form pattern reference |
| `src/app/api/auth/sign-up/route.ts` | API route pattern reference |
| `src/components/ui/card.tsx` | Card component reference |
| `src/components/ui/badge.tsx` | Badge component reference |
| `src/messages/en.json` | UI strings |
| `drizzle.config.ts` | Drizzle config |
| `Markdowns/Nimble - Core rules.md` | Character creation rules (pg. 18-21) |

### Technical Decisions

- **pdf-lib** for PDF generation — pure JS, no native dependencies, works in Next.js API routes. Loads existing PDF and overlays text at mapped coordinates.
- **JSON blob storage** — `characters` table stores the full character state as a JSON `data` column. This is extensible (leveling, editing) without schema migrations. Indexed fields (`user_id`, `name`) are separate columns for queries.
- **`useReducer` for wizard state** — complex multi-step form with interdependent state (stats affect background filtering, ancestry affects languages, etc.). `useReducer` with a `CharacterDraft` type provides predictable state transitions.
- **Shared validation in `src/lib/character-rules.ts`** — pure functions for rule enforcement. Used client-side for real-time UX feedback and server-side in the API route for security. Includes: stat array validation, background requirement checks, skill point limits, equipment proficiency filtering, inventory slot calculation.
- **Route structure** — `src/app/[locale]/(protected)/characters/` using a `(protected)` route group. All pages under this group call `requireAuth()`. Routes: `/characters` (list), `/characters/new` (builder), `/characters/[id]` (detail + PDF export).
- **Equipment choice simplification** — "Starting gear" option auto-populates from `HeroClass.startingGear`. "50gp" option provides a shopping UI filtered by class proficiencies with cost and inventory slot tracking.

## Implementation Plan

### Character Data Model

```typescript
// New type in src/data/types.ts
type CharacterData = {
  // Identity
  name: string;
  level: 1;
  height?: string;
  weight?: string;
  adventuringMotivation?: string;

  // Core Choices
  classId: string;
  ancestryId: string;
  backgroundId: string;

  // Stats
  statArrayType: "standard" | "balanced" | "min-max";
  stats: Record<Stat, number>; // e.g. { STR: 2, DEX: 0, INT: -1, WIL: 2 }

  // Skills (additional points beyond stat base)
  bonusSkillPoints: Record<string, number>; // e.g. { stealth: 2, perception: 2 }

  // Equipment
  equipmentChoice: "starting-gear" | "gold";
  equipment: string[]; // item IDs if gold path, or class starting gear descriptions
  goldRemaining: number;

  // Languages
  languages: string[]; // language names

  // Computed (derived from choices but stored for convenience/PDF)
  hp: number;
  hitDie: string;
  hitDiceCount: number;
  initiative: number;
  speed: number;
  maxWounds: number;
  inventorySlots: number;
  armorValue: string;
  saves: { strong: Stat; weak: Stat };
};
```

### Tasks

#### Phase 1: Data & Schema Foundation

- [x] **Task 1: Add stat array data constants**
  - File: `src/data/stat-arrays.ts` (new)
  - Action: Create and export `statArrays` constant defining the three stat array options:
    - `standard`: `{ name: { en: "Standard", fr: "Standard" }, values: [2, 2, 0, -1] }`
    - `balanced`: `{ name: { en: "Balanced", fr: "Équilibré" }, values: [2, 1, 1, 0] }`
    - `min-max`: `{ name: { en: "Min-Max", fr: "Min-Max" }, values: [3, 1, -1, -1] }`
  - Notes: Values are unassigned arrays — the user assigns each value to a stat. Export a `StatArrayOption` type.

- [x] **Task 2: Add CharacterData type definition**
  - File: `src/data/types.ts` (modify)
  - Action: Add `CharacterData` type as defined in the data model above. Add `StatArrayOption` type. Export both.
  - Notes: `CharacterData` is the shape stored in the DB JSON blob and used throughout the builder.

- [x] **Task 3: Add characters table to database schema**
  - File: `src/lib/db/schema.ts` (modify)
  - Action: Add `characters` table:
    ```typescript
    export const characters = sqliteTable("characters", {
      id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
      userId: text("user_id").notNull().references(() => users.id),
      name: text("name").notNull(),
      data: text("data").notNull(), // JSON blob of CharacterData
      createdAt: integer("created_at", { mode: "timestamp_ms" }).$defaultFn(() => new Date()),
      updatedAt: integer("updated_at", { mode: "timestamp_ms" }).$defaultFn(() => new Date()),
    });
    ```
  - Action: Add type exports: `Character`, `NewCharacter`.
  - Action: Run `npx drizzle-kit push` to apply schema to Turso.

- [x] **Task 4: Add i18n strings for character builder**
  - Files: `src/messages/en.json`, `src/messages/fr.json` (modify)
  - Action: Add `"characters"` and `"builder"` sections with all UI strings needed:
    - `characters`: title, noCharacters, createNew, delete, confirmDelete, export, viewDetails, createdAt
    - `builder`: title, steps (class, stats, ancestry, background, skills, equipment, languages, summary), next, back, save, cancel, stepLabels, validation messages, stat array names, equipment choices ("Starting Gear" / "50 Gold"), skill point counter, language selection, name/height/weight labels
  - Notes: FR translations should be provided for all strings. Reference existing `en.json`/`fr.json` structure for key naming conventions.

#### Phase 2: Shared Logic

- [x] **Task 5: Create character rules/validation utility**
  - File: `src/lib/character-rules.ts` (new)
  - Action: Create pure validation functions:
    - `validateStatArray(stats: Record<Stat, number>, arrayType: string): boolean` — verifies the assigned values match the chosen array (correct set of numbers, all 4 stats assigned).
    - `getAvailableBackgrounds(backgrounds: Background[], stats: Record<Stat, number>): Background[]` — filters backgrounds by stat requirements. A background with `requirement: { stat: "INT", maxValue: 0 }` is only available if the character's INT is <= 0.
    - `calculateSkillBase(stats: Record<Stat, number>, skills: Skill[]): Record<string, number>` — computes base skill values from stat bonuses (e.g., STR: 2 → Might: 2).
    - `validateSkillPoints(bonusPoints: Record<string, number>, maxPoints: number): boolean` — ensures total bonus points don't exceed 4.
    - `calculateSecondaryStats(classData: HeroClass, ancestryData: Ancestry, stats: Record<Stat, number>): SecondaryStats` — computes HP, hit die, initiative (DEX), speed (6 + ancestry mods), max wounds (6 + ancestry mods), inventory slots (10 + STR), armor value.
    - `getAvailableLanguages(stats: Record<Stat, number>, ancestry: Ancestry): { known: string[], slots: number }` — Common + ancestry languages are auto-known. Bonus language slots = max(0, INT value).
    - `calculateInventorySlots(str: number): number` — returns 10 + STR.
    - `validateEquipment(items: string[], inventorySlots: number): boolean` — checks items fit in inventory.
    - `validateCharacter(data: CharacterData): { valid: boolean, errors: string[] }` — full validation combining all above checks. Used server-side before saving.
  - Notes: All functions are pure (no side effects, no DB calls). Import game data from `src/data/` as needed for lookups.

#### Phase 3: API Routes

- [x] **Task 6: Create character CRUD API routes**
  - File: `src/app/api/characters/route.ts` (new)
  - Action: Implement two handlers:
    - `GET` — list all characters for the authenticated user. Query `characters` table filtered by `userId` from session. Return `{ characters: Array<{ id, name, classId, ancestryId, createdAt }> }` (summary, not full data blob).
    - `POST` — create a new character. Parse `CharacterData` from request body. Run `validateCharacter()` server-side. If invalid, return 400 with errors. If valid, insert into `characters` table with `userId` from session. Return `{ id, name }`.
  - Auth: Both handlers must verify session via `auth()`. Return 401 if not authenticated.
  - Pattern: Follow `src/app/api/auth/sign-up/route.ts` structure.

- [x] **Task 7: Create character detail and delete API routes**
  - File: `src/app/api/characters/[id]/route.ts` (new)
  - Action: Implement two handlers:
    - `GET` — fetch a single character by ID. Verify the character belongs to the authenticated user. Return full `{ id, name, data: CharacterData, createdAt }`.
    - `DELETE` — delete a character by ID. Verify ownership. Delete from DB. Return `{ success: true }`.
  - Auth: Both handlers must verify session. Return 401 if not authenticated. Return 404 if character not found or doesn't belong to user.

- [x] **Task 8: Create PDF generation API route**
  - File: `src/app/api/characters/[id]/pdf/route.ts` (new)
  - Action: Implement `GET` handler:
    1. Authenticate user, fetch character, verify ownership.
    2. Load official Nimble character sheet PDF from `public/nimble-character-sheet.pdf` using pdf-lib.
    3. Get the first page of the PDF.
    4. Using mapped coordinates (defined as a constant object in this file or a separate mapping file), draw text onto the PDF at the correct positions for: name, class, ancestry, level, stats (STR/DEX/INT/WIL), saves, HP, hit dice, initiative, speed, wounds, skills (all 10 with computed values), equipment list, languages, abilities (from class/ancestry/background), armor value.
    5. Return the modified PDF as a response with `Content-Type: application/pdf` and `Content-Disposition: attachment; filename="{character-name}.pdf"`.
  - Notes: PDF coordinate mapping is a one-time manual task. Hakim needs to provide the official PDF first. Use `PDFDocument.load()`, `page.drawText()` with x/y coordinates, font size, and font. Use pdf-lib's built-in `StandardFonts` (Helvetica) for text overlay.
  - Dependency: Official Nimble character sheet PDF must be placed at `public/nimble-character-sheet.pdf`.

#### Phase 4: Character Builder UI

- [x] **Task 9: Create builder wizard container and state management**
  - Files: `src/app/[locale]/(protected)/characters/new/page.tsx` (new), `src/components/characters/builder/character-builder.tsx` (new)
  - Action for `page.tsx`: Server Component that calls `requireAuth(locale)`, renders `<CharacterBuilder locale={locale} />`.
  - Action for `character-builder.tsx`: Client Component (`"use client"`) that manages the wizard:
    - Define `CharacterDraft` type (partial `CharacterData` that builds up across steps).
    - Use `useReducer` with actions: `SET_CLASS`, `SET_STATS`, `SET_ANCESTRY`, `SET_BACKGROUND`, `SET_SKILLS`, `SET_EQUIPMENT`, `SET_LANGUAGES`, `SET_DETAILS`, `RESET`.
    - Track `currentStep` (0-7) with next/back navigation.
    - Render step indicator (progress bar or numbered steps showing current position).
    - Render the current step component, passing draft state and dispatch.
    - "Next" button validates current step before advancing. "Back" button goes to previous step.
    - Final step shows summary and "Save Character" button that POSTs to `/api/characters`.
    - On success, redirect to `/characters/[id]`.
  - Notes: Each step component is a separate file in `src/components/characters/builder/`.

- [x] **Task 10: Build Step 1 — Class Selection**
  - File: `src/components/characters/builder/step-class.tsx` (new)
  - Action: Client Component. Display all 11 classes as selectable cards in a grid (2-3 columns).
    - Each card shows: class name, complexity diamonds, key stats, hit die, starting HP, brief description.
    - Use existing `Badge` component for complexity.
    - Selecting a class highlights the card (border-accent).
    - Use `t()` helper for localized class names/descriptions.
    - Import classes from `src/data/classes/index.ts`.
  - Props: `locale: string`, `selectedClassId: string | null`, `onSelect: (classId: string) => void`.

- [x] **Task 11: Build Step 2 — Stat Array & Assignment**
  - File: `src/components/characters/builder/step-stats.tsx` (new)
  - Action: Client Component. Two-part step:
    1. **Choose stat array**: Three selectable cards (Standard, Balanced, Min-Max) showing the available values.
    2. **Assign values to stats**: Show the 4 stats (STR, DEX, INT, WIL) with dropdown/selector to assign each array value. Highlight the selected class's key stats with a badge/indicator. Validate that all values are assigned exactly once (no duplicates).
  - Show computed info as values are assigned: "Recommended: put highest values in your key stats (STR, DEX for Berserker)".
  - Props: `locale: string`, `classData: HeroClass`, `statArrayType: string | null`, `stats: Record<Stat, number> | null`, `onUpdate: (arrayType: string, stats: Record<Stat, number>) => void`.
  - Validation: All 4 stats must have a value assigned. Values must match the chosen array.

- [x] **Task 12: Build Step 3 — Ancestry Selection**
  - File: `src/components/characters/builder/step-ancestry.tsx` (new)
  - Action: Client Component. Display ancestries grouped by Common (first) and Exotic (below, with a section header noting "Check with your GM").
    - Each ancestry card shows: name, size badge, trait name, trait description (truncated), modifiers summary.
    - Selecting highlights the card.
    - Import ancestries from `src/data/ancestries.ts`.
  - Props: `locale: string`, `selectedAncestryId: string | null`, `onSelect: (ancestryId: string) => void`.

- [x] **Task 13: Build Step 4 — Background Selection**
  - File: `src/components/characters/builder/step-background.tsx` (new)
  - Action: Client Component. Display backgrounds filtered by stat requirements using `getAvailableBackgrounds()`.
    - Backgrounds with unmet requirements are either hidden or shown grayed out with a tooltip explaining the requirement (e.g., "Requires INT 0 or lower").
    - Each background card shows: name, description, effects list.
    - Import backgrounds from `src/data/backgrounds.ts`.
  - Props: `locale: string`, `stats: Record<Stat, number>`, `selectedBackgroundId: string | null`, `onSelect: (backgroundId: string) => void`.

- [x] **Task 14: Build Step 5 — Skill Points Distribution**
  - File: `src/components/characters/builder/step-skills.tsx` (new)
  - Action: Client Component. Show all 10 skills in a list/grid.
    - Each skill shows: name, linked stat, base value (from stat bonus), and a +/- control to add bonus points.
    - Display counter: "4 points remaining" (decrements as points are assigned).
    - Base skill values computed from stats via `calculateSkillBase()`.
    - Cannot go below base. Maximum 4 bonus points total.
    - Show total skill value (base + bonus) for each skill.
  - Props: `locale: string`, `stats: Record<Stat, number>`, `bonusSkillPoints: Record<string, number>`, `onUpdate: (points: Record<string, number>) => void`.

- [x] **Task 15: Build Step 6 — Equipment Selection**
  - File: `src/components/characters/builder/step-equipment.tsx` (new)
  - Action: Client Component. Two modes:
    1. **"Starting Gear"**: Display the class's starting gear list (from `HeroClass.startingGear`). Read-only, auto-populated. Simple and quick.
    2. **"50 Gold Pieces"**: Shopping interface. Display equipment categories (Armor, Melee Weapons, Ranged Weapons, Adventuring Gear) as filterable tabs. Each item shows name, relevant stats (damage/armor/description), cost. User clicks to add to inventory. Track: gold remaining (starts at 50), inventory slots used vs max (10+STR). Disable items that cost too much or don't fit. Show running inventory list with remove option.
  - Props: `locale: string`, `classData: HeroClass`, `stats: Record<Stat, number>`, `equipmentChoice: string`, `equipment: string[]`, `goldRemaining: number`, `onUpdate: (choice: string, equipment: string[], gold: number) => void`.
  - Notes: For MVP, "Starting Gear" mode is the simpler path. The "50gp" mode is more complex but important for player choice. Both should be available.

- [x] **Task 16: Build Step 7 — Languages**
  - File: `src/components/characters/builder/step-languages.tsx` (new)
  - Action: Client Component. Display auto-known languages (Common + ancestry languages) as locked chips. If INT > 0, show dropdown/checkboxes for selecting additional languages from the available list (Dwarvish, Elvish, Goblin, Infernal, Thieves' Cant, Celestial, Draconic, Primordial, Deep Speak). Number of picks = INT value.
  - Props: `locale: string`, `stats: Record<Stat, number>`, `ancestryData: Ancestry`, `selectedLanguages: string[]`, `onUpdate: (languages: string[]) => void`.
  - Notes: If INT is 0 or negative, no bonus languages — only Common + ancestry languages. Display a message explaining this.

- [x] **Task 17: Build Step 8 — Name, Details & Summary**
  - File: `src/components/characters/builder/step-summary.tsx` (new)
  - Action: Client Component. Two sections:
    1. **Character Details**: Text inputs for name (required), height (optional), weight (optional), adventuring motivation (optional text area).
    2. **Summary**: Read-only display of all choices made — class, ancestry, background, stats, skills (with totals), equipment, languages, computed secondary stats (HP, hit die, initiative, speed, wounds, armor, inventory slots). Use `calculateSecondaryStats()` to compute and display.
  - "Save Character" button: Assembles the full `CharacterData` object, POSTs to `/api/characters`. Shows loading state. On success, redirects to `/characters/[id]`. On error, shows error message.
  - Props: `locale: string`, `draft: CharacterDraft` (all accumulated state), `onSave: () => void`, `onUpdateDetails: (name: string, height?: string, weight?: string, motivation?: string) => void`.
  - Validation: Name is required. All previous steps must be complete.

#### Phase 5: Character List & Detail Pages

- [x] **Task 18: Create characters list page**
  - File: `src/app/[locale]/(protected)/characters/page.tsx` (new)
  - Action: Server Component. Calls `requireAuth(locale)`. Fetches characters for the user from DB (or via API). Displays:
    - Page title "My Characters".
    - Grid of character cards, each showing: name, class name, ancestry name, creation date. Click navigates to `/characters/[id]`.
    - "Create New Character" button linking to `/characters/new`.
    - Empty state: message + CTA to create first character.
    - Delete button on each card (with confirmation).
  - Notes: Use existing Card component pattern. For delete, use a Client Component wrapper for the confirmation dialog and API call.

- [x] **Task 19: Create character detail page**
  - File: `src/app/[locale]/(protected)/characters/[id]/page.tsx` (new)
  - Action: Server Component. Calls `requireAuth(locale)`. Fetches character by ID, verifies ownership. Displays full character sheet view:
    - Header: name, class, ancestry, level.
    - Stats block: STR, DEX, INT, WIL with values.
    - Saves: advantaged/disadvantaged.
    - Secondary stats: HP, hit dice, initiative, speed, wounds, inventory slots, armor.
    - Skills: all 10 with total values.
    - Abilities: from class (level 1), ancestry trait, background effects.
    - Equipment list.
    - Languages.
    - "Export PDF" button that triggers download from `/api/characters/[id]/pdf`.
    - "Back to Characters" link.
  - Notes: This is essentially a digital character sheet view. Use the stat-block and card components for consistent styling.

#### Phase 6: PDF Export

- [x] **Task 20: Add official Nimble character sheet PDF to project**
  - File: `public/nimble-character-sheet.pdf` (new — provided by Hakim)
  - Action: Hakim places the official PDF in `public/`. Dev verifies it loads correctly with pdf-lib.

- [x] **Task 21: Map PDF coordinates and implement PDF generation**
  - File: `src/app/api/characters/[id]/pdf/route.ts` (already created in Task 8)
  - Action: Open the official PDF in a PDF viewer. For each field on the character sheet, record the x/y coordinates and font size needed. Create a coordinate mapping constant:
    ```typescript
    const PDF_FIELDS = {
      name: { x: 100, y: 700, size: 14 },
      class: { x: 100, y: 680, size: 12 },
      ancestry: { x: 250, y: 680, size: 12 },
      level: { x: 400, y: 700, size: 14 },
      str: { x: 80, y: 620, size: 16 },
      // ... etc for all fields
    } as const;
    ```
  - Notes: Coordinate values are examples — actual values must be determined by inspecting the specific PDF. This is manual one-time work. PDF coordinate system has origin at bottom-left.

#### Phase 7: Navigation Integration

- [x] **Task 22: Add Characters link to navigation**
  - File: `src/components/layout/nav.tsx` (modify)
  - Action: Add "Characters" link to the nav bar, visible only when user is authenticated. Position it prominently (before or after existing nav links). Link to `/[locale]/characters`.
  - File: `src/messages/en.json`, `src/messages/fr.json` (modify)
  - Action: Add `"characters": "Characters"` / `"characters": "Personnages"` to the `nav` section.

### Acceptance Criteria

#### Builder Flow
- [x] AC 1: Given an authenticated user at `/characters/new`, when the page loads, then the character builder wizard displays Step 1 (Class Selection) with all 11 classes shown as cards.
- [x] AC 2: Given the user is on Step 1, when they select a class (e.g., Berserker), then the card is highlighted and the "Next" button becomes enabled.
- [x] AC 3: Given the user is on Step 2 (Stats), when they choose "Standard" array and assign +2 to STR, +2 to DEX, +0 to INT, -1 to WIL, then all 4 stats are assigned, validation passes, and "Next" is enabled.
- [x] AC 4: Given the user is on Step 2, when they try to assign the same value to two stats, then validation prevents it and shows an error.
- [x] AC 5: Given the user is on Step 4 (Background) with INT = -1, when the background list loads, then backgrounds requiring INT 0 or lower (e.g., "So Dumb I'm Smart Sometimes") are available, and no backgrounds with unmet requirements are selectable.
- [x] AC 6: Given the user is on Step 5 (Skills), when they distribute 4 bonus points across skills, then the counter shows "0 remaining" and they cannot add more points.
- [x] AC 7: Given the user is on Step 6 (Equipment) and selects "50 Gold Pieces", when they add items totaling 45gp, then "5 gp remaining" is displayed and items costing more than 5gp are visually disabled.
- [x] AC 8: Given the user is on Step 7 (Languages) with INT = 2, when they see the language selection, then Common is auto-selected (locked) and they can pick 2 additional languages.
- [x] AC 9: Given the user is on Step 8 (Summary) with all steps complete and a name entered, when they click "Save Character", then the character is saved to the database and they are redirected to the character detail page.

#### Character Management
- [x] AC 10: Given an authenticated user with 3 saved characters, when they navigate to `/characters`, then all 3 characters are displayed as cards with name, class, and ancestry.
- [x] AC 11: Given the character list page, when the user clicks "Delete" on a character and confirms, then the character is removed from the database and the list updates.
- [x] AC 12: Given a character detail page, when it loads, then all character information is displayed: name, class, ancestry, stats, skills, equipment, languages, abilities, and secondary stats.

#### PDF Export
- [x] AC 13: Given a character detail page, when the user clicks "Export PDF", then a PDF file downloads with the character's data overlaid on the official Nimble character sheet.
- [x] AC 14: Given the exported PDF, when opened in a PDF viewer, then all text fields (name, class, stats, skills, equipment, etc.) are legible and positioned correctly on the character sheet.

#### Auth & Security
- [x] AC 15: Given an unauthenticated user, when they navigate to `/characters`, then they are redirected to the sign-in page.
- [x] AC 16: Given user A, when they try to access or delete user B's character via API, then a 404 response is returned.

#### i18n
- [x] AC 17: Given the builder in French (`/fr/characters/new`), when navigating through all steps, then all UI labels, step names, validation messages, and game data are displayed in French.

#### Validation
- [x] AC 18: Given a malformed character submission to `POST /api/characters` (e.g., invalid stat array, too many skill points), when the server validates, then a 400 response with specific error messages is returned and no data is saved.

## Additional Context

### Dependencies

| Package | Version | Purpose |
| ------- | ------- | ------- |
| pdf-lib | latest | PDF manipulation — load official sheet, overlay character data |

All other dependencies already in project: Next.js 16, Drizzle ORM, NextAuth 5, next-intl, Tailwind CSS v4, bcryptjs, @libsql/client.

### Testing Strategy

No formal test framework. Manual verification checklist:
- Walk through builder wizard for each class (spot-check 3-4 classes: Berserker, Cheat, Mage, Shepherd)
- Verify stat array assignment prevents duplicate values
- Verify backgrounds with requirements are properly filtered
- Verify skill point distribution enforces 4-point limit
- Verify equipment "50gp" path tracks cost and inventory correctly
- Verify language slots match INT value
- Save a character and verify DB entry contains correct JSON
- Load character detail page and verify all data displays correctly
- Export PDF and verify all fields are positioned and legible
- Test in both EN and FR locales
- Test that unauthenticated users are redirected
- Test that users cannot access other users' characters
- Test on mobile viewport (builder steps should be usable)

### Notes

- **PDF dependency**: The official Nimble character sheet PDF must be provided by Hakim and placed at `public/nimble-character-sheet.pdf`. The PDF coordinate mapping (Task 21) cannot begin until this file is available. All other tasks can proceed independently.
- **PDF coordinate mapping is manual work**: Dev needs to inspect the PDF page dimensions, locate each field's x/y position, and determine appropriate font sizes. This is tedious but one-time. Consider creating a debug mode that draws grid lines on the PDF to aid positioning.
- **Background validation timing**: Since stats are assigned in Step 2 and backgrounds in Step 4, going "Back" to change stats should re-validate the selected background. If the background becomes invalid, clear the selection and alert the user.
- **Equipment complexity**: The "50gp shopping" path is the most complex UI component. Consider shipping "Starting Gear" only for initial MVP and adding the shopping path as a fast follow if time is tight.
- **JSON blob flexibility**: Storing character data as JSON means future features (leveling, editing) don't require DB schema changes — only the `CharacterData` type evolves.
- **Future: Leveling up**: The `CharacterData` type can be extended with `level: number` and arrays for level-up choices (ability pool selections, stat increases, subclass choice at level 3). The builder can be extended with a "Level Up" flow.

## Review Notes

- Adversarial review completed
- Findings: 16 total, 11 fixed, 5 skipped
- Resolution approach: auto-fix
- Fixed findings:
  - F1: Fixed infinite re-render loop in step-stats.tsx (useEffect + onUpdate dependency)
  - F2: Added server-side size limits in validateCharacter (name, equipment, languages, skills)
  - F3: Fixed inconsistent equipment storage (both paths now store display names consistently)
  - F4: Fixed "CommonCommun" French display bug in step-languages.tsx
  - F5: Fixed PDF export to use class/ancestry display names instead of raw IDs
  - F7: Fixed language translation in character-detail.tsx and step-summary.tsx for French
  - F8: Added 50-character-per-user limit in POST /api/characters
  - F9: Fixed floating-point gold calculations with Math.round
  - F10: Replaced non-null assertions with proper null guards in server pages
  - F11: Added equipment count vs inventory slots validation in validateCharacter
  - F13: Added error feedback when character delete fails
- Skipped findings (noise/mitigated/forward-looking):
  - F6: Ancestry languages gated on INT >= 0 (matches Nimble RPG rules per ancestry descriptions)
  - F12: updatedAt only set on INSERT (no UPDATE route yet — forward-looking)
  - F14: setSaving not reset on success (component navigates away — mitigated)
  - F15: Empty deps useEffect in StepLanguages (intentional — wizard unmounts/remounts)
  - F16: No per-skill bonus cap (total cap of 4 is sufficient for level 1)
