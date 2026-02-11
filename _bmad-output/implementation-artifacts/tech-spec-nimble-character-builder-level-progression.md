---
title: 'Nimble Character Builder — Level 1-20 Progression & Character Editing'
slug: 'nimble-character-builder-level-progression'
created: '2026-02-11'
status: 'completed'
stepsCompleted: [1, 2, 3, 4, 5, 6]
reviewFindings: 15
findingsFixed: 8
findingsSkipped: 7
tech_stack: ['Next.js 16', 'React 19', 'TypeScript', 'Drizzle ORM', 'Turso/libsql', 'pdf-lib', 'next-intl', 'Tailwind CSS v4']
files_to_modify:
  - 'src/data/types.ts'
  - 'src/lib/character-rules.ts'
  - 'src/components/characters/builder/character-builder.tsx'
  - 'src/components/characters/builder/step-class.tsx'
  - 'src/components/characters/builder/step-level.tsx (NEW)'
  - 'src/components/characters/builder/step-stats.tsx'
  - 'src/components/characters/builder/step-ancestry.tsx'
  - 'src/components/characters/builder/step-background.tsx'
  - 'src/components/characters/builder/step-skills.tsx'
  - 'src/components/characters/builder/step-subclass.tsx (NEW)'
  - 'src/components/characters/builder/step-level-choices.tsx (NEW)'
  - 'src/components/characters/builder/step-equipment.tsx'
  - 'src/components/characters/builder/step-languages.tsx'
  - 'src/components/characters/builder/step-summary.tsx'
  - 'src/components/characters/character-detail.tsx'
  - 'src/components/characters/character-list.tsx'
  - 'src/app/api/characters/route.ts'
  - 'src/app/api/characters/[id]/route.ts'
  - 'src/app/api/characters/[id]/pdf/route.ts'
  - 'src/app/[locale]/(protected)/characters/[id]/page.tsx'
  - 'src/messages/en.json'
  - 'src/messages/fr.json'
code_patterns:
  - 'useReducer for wizard state with cascading resets'
  - 'Server Components default, Client Components for interactivity'
  - 'LocalizedString {en, fr} for all game data'
  - 'JSON blob storage for CharacterData in DB'
  - 'Shared validation in character-rules.ts (client + server)'
  - 'Tailwind v4 utility classes for styling'
test_patterns: ['No testing framework configured — manual verification']
---

# Tech-Spec: Nimble Character Builder — Level 1-20 Progression & Character Editing

**Created:** 2026-02-11

## Overview

### Problem Statement

The character builder currently only supports level 1 creation. Players need to create characters at any level (1-20) and level up existing characters, with all the class-specific progression mechanics that the Nimble RPG system requires.

### Solution

Expand the character builder to support level selection at creation time (start at level 1 OR jump to any specific level), add a level-up flow for existing characters, and enable character editing. Each level-up involves class-specific choices including subclass selection, ability pool picks, stat increases, spell tier unlocks, and more.

### Scope

**In Scope:**
- Level selection during character creation (create at level 1 OR any specific level up to 20)
- Level-up flow for existing characters (step-by-step progression)
- Character editing (modify existing character data)
- Per-level mechanics from the Nimble rules:
  - Subclass selection at level 3 (all classes), with subclass features at L7, L11, L15
  - Key Stat increases (+1) at levels 4, 8, 12, 16, 20
  - Secondary Stat increases (+1) at levels 5, 9, 13, 17
  - Level 20 capstone: +1 to any 2 stats
  - HP progression: hit dice count = level
  - Ability pool picks at class-specific levels (Savage Arsenal, Underhanded Abilities, Martial Master, Sacred Decrees, Spellshaper, Chimeric Boons, etc.)
  - Spell tier unlocks for casters (T1→L2 through T9→L18)
  - Mana pool scaling per level
  - Epic Boon at level 19
- PDF generation reflecting all level-dependent data
- i18n support (EN/FR) for all new UI

**Out of Scope:**
- Multiclassing (optional rule, GM discretion)
- Spell selection/preparation management (individual spell picks)
- Party sharing / GM view
- Character import/export

## Context for Development

### Codebase Patterns

- Server Components by default; Client Components ("use client") only for interactive UI
- `useReducer` for multi-step wizard state management with smart cascading resets
- Character data stored as JSON blob in `characters.data` column — flexible for extension without DB migration
- Game data as TypeScript constants in `src/data/` — all 11 classes already have complete level 1-20 ability progressions
- Bilingual support via `LocalizedString` (en/fr) and `next-intl` for UI strings
- Validation logic shared in `src/lib/character-rules.ts` (client + server)
- PDF generation uses `pdf-lib` to overlay onto official Nimble character sheet PDF
- No testing framework configured — manual verification via spot-checks

### Files to Reference

| File | Purpose | Level 1-20 Impact |
| ---- | ------- | ----------------- |
| `src/data/types.ts:239` | `CharacterData` type — `level: 1` hardcoded | Change to `level: number` (1-20), add level-up fields |
| `src/data/types.ts:169-174` | `ClassAbility` type — already has `level: number` | No change needed |
| `src/data/types.ts:182-188` | `Subclass` type — features already level-gated | No change needed |
| `src/data/types.ts:195-199` | `AbilityPool` type — `selectAtLevels: number[]` | No change needed |
| `src/data/types.ts:201-219` | `HeroClass` type — abilities[], subclasses[], abilityPool? | No change needed |
| `src/lib/character-rules.ts:84-104` | `calculateSecondaryStats()` — HP/hitDice hardcoded | Add `level` param, scale HP and hitDiceCount |
| `src/lib/character-rules.ts:156-232` | `validateCharacter()` — no level validation | Add level + level-up choices validation |
| `src/components/characters/builder/character-builder.tsx:20-35` | `CharacterDraft` type — no level field | Add level + level-up choice fields |
| `src/components/characters/builder/character-builder.tsx:37-57` | Reducer actions — no SET_LEVEL | Add new actions |
| `src/components/characters/builder/character-builder.tsx:134-143` | `STEP_KEYS` — 8 steps | Add 3 new steps (level, subclass, level-choices) |
| `src/components/characters/builder/character-builder.tsx:205` | Save flow — `level: 1` hardcoded | Use `draft.level` |
| `src/components/characters/character-detail.tsx:195-206` | Abilities display — `level === 1` filter | Filter to `level <= data.level` |
| `src/app/api/characters/[id]/pdf/route.ts:246-260` | PDF abilities — `level === 1` filter | Filter to `level <= data.level` |
| `src/app/api/characters/route.ts:68` | Create API — calls `validateCharacter()` | Validation cascades from updated rules |
| `src/lib/db/schema.ts` | Characters table — JSON blob storage | No schema change needed |
| `src/data/classes/*.ts` | All 11 classes with full L1-20 progressions | No change needed |
| `src/messages/en.json` / `fr.json` | UI translation strings | Add new keys for level-up UI |

### Technical Decisions

1. **No DB migration needed** — CharacterData is a JSON blob; adding level-up fields is pure TypeScript type evolution
2. **HP calculation**: `startingHp + (level - 1) * hitDieSize` using max hit die value per level (not rolls — consistent with digital tooling and simpler UX)
3. **Level-up data structure** — Store per-level choices as arrays in CharacterData: `statIncreases`, `subclassId`, `abilityPoolPicks`
4. **Backward compatibility** — Existing level 1 characters missing new fields default gracefully (level=1, empty arrays, no subclass)
5. **Ability pool selections are NOT auto-granted** — Player must choose from the pool at specific levels
6. **Subclass features are auto-granted** — Once a subclass is chosen at L3, features at L7/11/15 are automatic
7. **Stat increase pattern is universal**: Key Stats at L4/8/12/16/20, Secondary Stats at L5/9/13/17, L20 capstone +1 to any 2 stats
8. **Conditional wizard steps** — Subclass step only shown if level >= 3; level-up choices step only shown if level >= 2
9. **Level-up flow reuses the builder** — "Level Up" loads the character into the builder at `currentLevel + 1`, pre-filling all existing choices and only showing the new level's choices
10. **Character editing** — "Edit" loads the full character into the builder, allowing re-selection of any step. Changing level resets downstream level-dependent choices.

### Nimble Leveling Rules Reference

**Universal Stat Increases (all classes):**
- Levels 4, 8, 12, 16, 20: +1 to one Key Stat (from class keyStats)
- Levels 5, 9, 13, 17: +1 to one Secondary Stat (the 2 stats NOT in keyStats)
- Level 20 capstone: additional +1 to any 2 stats

**Subclass System (all classes):**
- Selection at Level 3 (2 options per class)
- Auto-granted features at Levels 3, 7, 11, 15

**HP Progression:**
- Level 1: `classData.startingHp`
- Each subsequent level: +hitDieSize (e.g., Berserker +12, Mage +6)
- Hit dice count = character level

**Spell Tier Unlocks (caster classes: Mage, Oathsworn, Shadowmancer, Shepherd, Songweaver, Stormshifter):**
- T1→L2, T2→L4, T3→L6, T4→L8, T5→L10, T6→L12, T7→L14, T8→L16, T9→L18

**Mana Pool Formulas (per class):**
- Mage: INT×3 + level
- Oathsworn: WIL + level
- Shadowmancer: INT + DEX + 2×level
- Shepherd: WIL×3 + level
- Songweaver: INT×3 + level
- Stormshifter: WIL×3 + level

**Ability Pool Picks (class-specific — player chooses from pool):**
- Berserker (Savage Arsenal): levels [4, 6, 8, 10, 12, 14, 16] — 7 picks
- Cheat (Underhanded Abilities): levels [4, 6, 8, 10, 12, 14, 16, 18] — 8 picks
- Commander (Fit for Any Battlefield): levels [6, 8, 10, 12, 16] — 5+ picks
- Hunter (Thrill of the Hunt): levels [1, 4, 6, 8, 12, 14] — 6 picks
- Mage (Spellshaper): levels [4, 9, 13] — 3 picks (2 at L4, then +1)
- Oathsworn (Sacred Decrees): levels [3, 6, 9, 12, 14, 16] — 6 picks
- Shepherd (Sacred Graces): levels [5, 9, 13] — 4 picks (2 at L5, then +1)
- Songweaver (Lyrical Weaponry): levels [4, 9, 13, 17] — 4 picks
- Stormshifter (Chimeric Boons): levels [6, 9, 12, 17] — 5 picks (2 at L6, then +1)
- Zephyr (Martial Master): levels [4, 6, 8, 10, 12, 14, 16, 18] — 8 picks

**Epic Boon:** Level 19 — text entry only (references GM's Guide, no automated selection)

---

## Implementation Plan

### Phase 1: Foundation — Types & Rules (Tasks 1-4)

- [x] **Task 1: Extend CharacterData type with level-up fields**
  - File: `src/data/types.ts`
  - Action: Update `CharacterData` type:
    - Change `level: 1` → `level: number` (1-20)
    - Add `subclassId?: string` — ID of chosen subclass (set at L3+)
    - Add `statIncreases: Array<{ level: number; stat: Stat; type: "key" | "secondary" }>` — tracks each stat increase choice per level
    - Add `capstoneStatIncreases?: [Stat, Stat]` — the two bonus stats at level 20
    - Add `abilityPoolPicks: Array<{ level: number; abilityIndex: number }>` — tracks ability pool selections per level, using the index into `HeroClass.abilityPool.abilities[]`
    - Add `epicBoon?: string` — free-text description of chosen boon at L19
  - Notes: All new fields are optional or have empty-array defaults for backward compatibility with existing L1 characters. Do NOT change any existing HeroClass/ClassAbility/Subclass/AbilityPool types — they already support levels 1-20.

- [x] **Task 2: Add level-aware helper functions to character-rules.ts**
  - File: `src/lib/character-rules.ts`
  - Action: Add the following new functions:
    - `getHitDieSize(hitDie: string): number` — parses "1d12" → 12, "1d6" → 6, etc.
    - `calculateHp(classData: HeroClass, level: number): number` — returns `classData.startingHp + (level - 1) * getHitDieSize(classData.hitDie)`
    - `calculateManaPool(classId: string, stats: Record<Stat, number>, level: number): number | null` — returns mana pool for caster classes using the per-class formulas, or null for non-casters
    - `getMaxSpellTier(level: number): number` — returns highest spell tier available: `Math.floor(level / 2)` capped at 9, returns 0 for level 1
    - `getStatIncreaseAtLevel(level: number, classData: HeroClass): { type: "key"; options: Stat[] } | { type: "secondary"; options: Stat[] } | { type: "capstone" } | null` — returns what stat increase (if any) is available at a given level, with the valid stat options for the class
    - `getAbilityPoolPicksNeeded(classData: HeroClass, level: number): number` — returns how many total pool picks should exist up to and including this level (based on `abilityPool.selectAtLevels`)
    - `getAbilitiesAtLevel(classData: HeroClass, level: number): ClassAbility[]` — returns auto-granted abilities at exactly this level (type "core" only)
    - `getSubclassFeaturesUpToLevel(subclass: Subclass, level: number): SubclassFeature[]` — returns all subclass features at or below given level
    - `getEffectiveStats(baseStats: Record<Stat, number>, statIncreases: Array<{ stat: Stat }>): Record<Stat, number>` — applies all stat increases to base stats
  - Notes: These are pure functions used by both client (builder UI) and server (validation). Keep them side-effect free.

- [x] **Task 3: Update calculateSecondaryStats to be level-aware**
  - File: `src/lib/character-rules.ts`
  - Action: Modify `calculateSecondaryStats()` signature to accept `level: number` parameter (default 1 for backward compat):
    - `hp`: Use `calculateHp(classData, level)` instead of `classData.startingHp`
    - `hitDiceCount`: Use `level` instead of hardcoded `1`
    - Keep all other calculations the same (initiative, speed, wounds, inventory, armor, saves)
  - Notes: The `stats` parameter passed in should already be the effective stats (base + increases). Callers are responsible for computing effective stats first via `getEffectiveStats()`.

- [x] **Task 4: Update validateCharacter for level-aware validation**
  - File: `src/lib/character-rules.ts`
  - Action: Enhance `validateCharacter()` to validate:
    - `level` is integer between 1 and 20
    - If `level >= 3`: `subclassId` must be present and must match one of the class's subclass IDs
    - If `level < 3`: `subclassId` must be absent/undefined
    - `statIncreases` array length matches expected count for this level (count of key stat levels + secondary stat levels up to character level)
    - Each stat increase references a valid stat option (key stat at key levels, secondary at secondary levels)
    - `abilityPoolPicks` count matches `getAbilityPoolPicksNeeded(classData, level)` — only for classes that have an `abilityPool`
    - Each ability pool pick index is within bounds of `abilityPool.abilities[]` and no duplicates
    - If `level === 20`: `capstoneStatIncreases` must be present with exactly 2 stats
    - If `level === 19`: `epicBoon` is optional (free text, no validation needed)
    - HP in saved data matches `calculateHp(classData, level)`
    - hitDiceCount in saved data matches `level`
  - Notes: Validation errors should return specific messages indicating what's wrong for easier debugging.

### Phase 2: Builder Core — State & Navigation (Tasks 5-7)

- [x] **Task 5: Update CharacterDraft and reducer in character-builder.tsx**
  - File: `src/components/characters/builder/character-builder.tsx`
  - Action:
    - Add to `CharacterDraft` type:
      - `level: number` (default: 1)
      - `subclassId: string | null` (default: null)
      - `statIncreases: Array<{ level: number; stat: Stat; type: "key" | "secondary" }>` (default: [])
      - `capstoneStatIncreases: [Stat, Stat] | null` (default: null)
      - `abilityPoolPicks: Array<{ level: number; abilityIndex: number }>` (default: [])
      - `epicBoon: string` (default: "")
    - Add new reducer actions:
      - `SET_LEVEL` — sets level, resets: subclassId, statIncreases, capstoneStatIncreases, abilityPoolPicks, epicBoon (cascading reset since these depend on level)
      - `SET_SUBCLASS` — sets subclassId
      - `SET_STAT_INCREASES` — sets full statIncreases array
      - `SET_ABILITY_POOL_PICKS` — sets full abilityPoolPicks array
      - `SET_CAPSTONE_STATS` — sets capstoneStatIncreases
      - `SET_EPIC_BOON` — sets epicBoon string
    - Cascading reset rule: Changing class → resets level to 1 + all level-dependent fields. Changing level → resets subclass + stat increases + ability picks + capstone + epic boon.
  - Notes: Follow existing reducer pattern. Keep `RESET` action to clear everything.

- [x] **Task 6: Update STEP_KEYS and step navigation for conditional steps**
  - File: `src/components/characters/builder/character-builder.tsx`
  - Action:
    - Change `STEP_KEYS` from static array to dynamic based on draft level:
      ```
      Always shown:
        0: stepClass
        1: stepLevel        (NEW)
        2: stepStats
        3: stepAncestry
        4: stepBackground
        5: stepSkills

      Conditional (level >= 3):
        6: stepSubclass      (NEW)

      Conditional (level >= 2):
        7: stepLevelChoices   (NEW — stat increases + ability pool picks)

      Always shown:
        N-2: stepEquipment
        N-1: stepLanguages
        N:   stepSummary
      ```
    - Implement as a `useMemo` that computes the active steps based on `draft.level`
    - Update step validation function (`isStepComplete`) for new steps:
      - `stepLevel`: `draft.level >= 1 && draft.level <= 20`
      - `stepSubclass`: `draft.subclassId !== null` (only validated when shown)
      - `stepLevelChoices`: validate that all required stat increases and ability pool picks are filled for the target level
    - Update the save flow to include all new fields in the `CharacterData` object sent to the API
    - Use `getEffectiveStats()` to compute final stats before calling `calculateSecondaryStats()`
  - Notes: The step index navigation (next/back) must account for the dynamic step list. Use the computed step array for index lookups, not hardcoded numbers.

- [x] **Task 7: Support edit mode — load existing character into builder**
  - File: `src/components/characters/builder/character-builder.tsx`
  - File: `src/app/[locale]/(protected)/characters/new/page.tsx`
  - Action:
    - Accept an optional `characterId` query parameter (or prop) to load an existing character for editing
    - When `characterId` is present:
      - Fetch the character data from `GET /api/characters/[id]`
      - Populate `CharacterDraft` from the loaded `CharacterData` (reverse mapping)
      - Set a flag `isEditing: boolean` in component state
    - When saving in edit mode:
      - Use `PATCH /api/characters/[id]` (Task 13) instead of `POST /api/characters`
      - Navigate back to character detail page after save
    - For "Level Up" mode (from character detail):
      - Load character, set level to `currentLevel + 1`, pre-fill all existing choices
      - Only the new level's choices need to be made (stat increase, ability pool pick if applicable)
      - Could use a query param like `?mode=levelup` to differentiate
  - Notes: The builder should show a different title when editing ("Edit Character" / "Level Up") vs creating ("New Character"). The i18n keys will be added in Task 16.

### Phase 3: New Builder Step Components (Tasks 8-10)

- [x] **Task 8: Create step-level.tsx — Level Selection Step**
  - File: `src/components/characters/builder/step-level.tsx` (NEW)
  - Action:
    - "use client" component following the same pattern as existing step-*.tsx files
    - Props: `draft: CharacterDraft`, `onUpdate: (action) => void`, `locale: string`
    - UI: Display a level selector (1-20) — either a number input with +/- buttons or a dropdown
    - Show a preview of what the chosen level unlocks:
      - List auto-granted abilities at each level from 1 to selected level (from `classData.abilities`)
      - Highlight decision points: "At level 3, you'll choose a subclass", "At level 4, you'll pick a stat increase and a [Pool Name] ability", etc.
    - Dispatch `SET_LEVEL` action on change
    - Requires `classId` to be set (previous step)
  - Notes: Use `heroClasses.find()` to look up class data. Use `t()` helper for localized ability names. Follow existing Tailwind styling patterns.

- [x] **Task 9: Create step-subclass.tsx — Subclass Selection Step**
  - File: `src/components/characters/builder/step-subclass.tsx` (NEW)
  - Action:
    - "use client" component, same pattern as step-class.tsx (card-based selection)
    - Props: `draft: CharacterDraft`, `onUpdate: (action) => void`, `locale: string`
    - Only rendered when `draft.level >= 3`
    - Display the 2 subclass options for the selected class as cards:
      - Subclass name (localized)
      - Subclass description (localized)
      - Preview of features granted at L3, L7, L11, L15 (show which are available at current level)
    - Dispatch `SET_SUBCLASS` with the selected subclass ID
    - Highlight currently selected subclass
  - Notes: Subclass data is in `classData.subclasses[]`. Each has `id`, `name`, `description`, `features[]` with level-gated entries.

- [x] **Task 10: Create step-level-choices.tsx — Stat Increases & Ability Pool Picks**
  - File: `src/components/characters/builder/step-level-choices.tsx` (NEW)
  - Action:
    - "use client" component, the most complex new step
    - Props: `draft: CharacterDraft`, `onUpdate: (action) => void`, `locale: string`
    - Only rendered when `draft.level >= 2`
    - Display a per-level breakdown from level 2 to `draft.level`, showing for each level:
      - **Auto-granted abilities** (read-only display, no selection needed)
      - **Stat increase selector** (if applicable at this level):
        - Use `getStatIncreaseAtLevel()` to determine type (key/secondary/capstone) and valid options
        - Dropdown or button group to pick which stat gets +1
        - Show running stat totals as selections are made
      - **Ability pool pick** (if applicable at this level):
        - Use `abilityPool.selectAtLevels` to check if this level requires a pick
        - Display pool abilities as selectable cards/list items
        - Already-picked abilities (at other levels) shown as disabled/taken
        - Show ability name + description (localized)
      - **Epic Boon** (level 19 only):
        - Free-text input field for boon description
      - **Level 20 Capstone**:
        - Two stat selectors for the bonus +1 to any 2 stats (can be the same stat or different)
    - Dispatch `SET_STAT_INCREASES` with complete array when any stat selection changes
    - Dispatch `SET_ABILITY_POOL_PICKS` with complete array when any pool pick changes
    - Dispatch `SET_CAPSTONE_STATS` when capstone selections change
    - Dispatch `SET_EPIC_BOON` when boon text changes
  - Notes: This step handles the bulk of the leveling complexity. Consider using collapsible sections per level to keep the UI manageable for high-level characters. Show a "Level X" header for each level section. For levels with no choices, show auto-granted abilities as an informational collapsed section. Use `getEffectiveStats()` to show running stat totals.

### Phase 4: Existing Component Updates (Tasks 11-12)

- [x] **Task 11: Update character-detail.tsx for multi-level display**
  - File: `src/components/characters/character-detail.tsx`
  - Action:
    - Update abilities filter from `.filter((a) => a.level === 1)` to `.filter((a) => a.level <= data.level)`
    - Group displayed abilities by level with headers ("Level 1", "Level 2", etc.)
    - Display subclass info if `data.subclassId` is present:
      - Subclass name
      - Subclass features up to current level (use `getSubclassFeaturesUpToLevel()`)
    - Display ability pool picks if any:
      - Look up selected abilities from `classData.abilityPool.abilities[]` by index
      - Show name + description
    - Display computed effective stats (base stats + all stat increases)
    - Display mana pool for caster classes (use `calculateManaPool()`)
    - Display max spell tier for caster classes (use `getMaxSpellTier()`)
    - Add "Level Up" button — navigates to `/characters/new?characterId={id}&mode=levelup`
      - Only shown if `data.level < 20`
    - Add "Edit" button — navigates to `/characters/new?characterId={id}&mode=edit`
  - Notes: Keep the existing layout structure. Add new sections below the existing ones. The "Level Up" and "Edit" buttons should use the same styling as the existing "Export PDF" button.

- [x] **Task 12: Update character-list.tsx to show character level**
  - File: `src/components/characters/character-list.tsx`
  - Action:
    - Display character level on each card in the list (e.g., "Level 5 Berserker")
    - The `data` field is available as parsed JSON — access `data.level`
    - Handle backward compat: if `data.level` is missing, display "Level 1"
  - Notes: Minor UI update. Follow existing card layout patterns.

### Phase 5: API & PDF Updates (Tasks 13-15)

- [x] **Task 13: Add PATCH endpoint for character updates**
  - File: `src/app/api/characters/[id]/route.ts`
  - Action:
    - Add `PATCH` handler alongside existing `GET` and `DELETE`
    - Authenticate request (same `requireAuth()` pattern)
    - Verify character ownership (same userId check as GET/DELETE)
    - Parse request body as `CharacterData`
    - Run `validateCharacter()` on the full updated data
    - Update the `data` column and `name` column in the DB
    - Update `updatedAt` timestamp
    - Return updated character
  - Notes: The PATCH replaces the entire `data` JSON blob (not a partial merge). The client sends the complete CharacterData. This is consistent with the existing POST pattern.

- [x] **Task 14: Update PDF generation for multi-level characters**
  - File: `src/app/api/characters/[id]/pdf/route.ts`
  - Action:
    - Update abilities filter from `.filter((a) => a.level === 1)` to `.filter((a) => a.level <= data.level)`
    - The PDF has limited space (~16 ability slots). For high-level characters with many abilities, implement a strategy:
      - Priority: Show current level's new abilities + subclass features + ability pool picks
      - If space allows: show earlier level abilities
      - Add a "Level X [ClassName]" label in the level field
    - Add subclass name to the PDF if `data.subclassId` is present (in the class/features area)
    - Update HP value to use the level-scaled HP
    - Update hit dice count to show character level
    - Display mana pool for caster classes (if there's a field on the PDF for it)
    - Display effective stats (base + increases) not just base stats
  - Notes: The official PDF template has fixed space. Test with a level 20 character to see how many abilities fit. May need to truncate or prioritize. The `hide` query parameter system still works — users can hide sections they don't need.

- [x] **Task 15: Update create API validation**
  - File: `src/app/api/characters/route.ts`
  - Action:
    - The existing `validateCharacter()` call will cascade the new validations from Task 4
    - Ensure the POST handler doesn't reject the new fields (it should accept the full CharacterData JSON)
    - No structural changes needed — just verify it passes through the new fields correctly
  - Notes: This is mostly a verification task. The heavy lifting is in `validateCharacter()` from Task 4.

### Phase 6: Internationalization (Task 16)

- [x] **Task 16: Add i18n keys for all new UI elements**
  - File: `src/messages/en.json`
  - File: `src/messages/fr.json`
  - Action: Add translation keys for:
    - **Level step**: "Choose Level", "Level", "Level Preview", "At level {n} you will...", "Choose a subclass", "Choose a stat increase", "Choose a {poolName} ability"
    - **Subclass step**: "Choose Subclass", "Subclass", "Features at this level", "Future features"
    - **Level choices step**: "Level-Up Choices", "Stat Increase", "Key Stat", "Secondary Stat", "Capstone Bonus", "Ability Pool", "Epic Boon", "Describe your boon", "Auto-granted abilities", "No choices needed at this level"
    - **Character detail**: "Level Up", "Edit Character", "Subclass", "Ability Pool Picks", "Mana Pool", "Max Spell Tier", "Effective Stats"
    - **Character list**: "Level {n}"
    - **Builder modes**: "New Character", "Edit Character", "Level Up to {n}"
  - Notes: Follow existing key naming patterns in en.json/fr.json. Group under appropriate namespace (likely `characters` or `builder`).

### Acceptance Criteria

- [x] **AC 1**: Given a user on the character creation page, when they select a class and proceed, then they see a level selector (1-20) and can choose any level before continuing.

- [x] **AC 2**: Given a user creating a level 1 character, when they complete the wizard, then the flow is identical to the current behavior (no subclass step, no level-up choices step, same 8+1 steps).

- [x] **AC 3**: Given a user creating a level 5 Berserker, when they reach the subclass step, then they see "Path of the Red Mist" and "Path of the Mountainheart" as options and must select one.

- [x] **AC 4**: Given a user creating a level 5 Berserker, when they reach the level-up choices step, then they see: stat increase at L4 (choose STR or DEX), stat increase at L5 (choose INT or WIL), and 1 Savage Arsenal pick at L4.

- [x] **AC 5**: Given a user creating a level 8 Mage, when they view the level-up choices, then they see: stat increases at L4, L5, L8, Spellshaper selections (2 at L4), and the correct auto-granted abilities per level listed as read-only.

- [x] **AC 6**: Given a user creating a character at any level, when they save, then the HP equals `startingHp + (level - 1) * hitDieSize` and hitDiceCount equals the level.

- [x] **AC 7**: Given an existing level 3 character, when the user clicks "Level Up" on the detail page, then they are taken to the builder with level set to 4, all existing choices pre-filled, and only the new level 4 choices available to make.

- [x] **AC 8**: Given an existing character, when the user clicks "Edit", then they are taken to the builder with all fields populated from the saved character data, and can modify any step.

- [x] **AC 9**: Given a saved level 10 character, when viewing the character detail page, then abilities from levels 1-10 are displayed grouped by level, subclass features up to L7 are shown, and ability pool picks are listed.

- [x] **AC 10**: Given a level 10 character, when exporting to PDF, then the PDF shows the level-scaled HP, correct hit dice count, effective stats (with increases applied), and abilities up to the current level.

- [x] **AC 11**: Given a level 20 character, when completing the level-up choices, then the capstone stat selector requires exactly 2 stats, and the epic boon text field (L19) is available.

- [x] **AC 12**: Given the app in French locale, when creating/editing a character at any level, then all new UI elements (level selector, subclass cards, level-up choices, ability pool names) display in French.

- [x] **AC 13**: Given an existing level 1 character created before this feature (no new fields in JSON), when viewing the character detail page, then it displays correctly with level shown as 1, no subclass, no ability pool picks — backward compatible.

- [x] **AC 14**: Given a user submitting a character via the API with invalid level-up data (e.g., wrong stat for key increase, duplicate ability pool picks, missing subclass at L3+), when the server validates, then it returns a 400 error with a specific message.

- [x] **AC 15**: Given a caster class (Mage) at level 8, when viewing the character detail, then the mana pool (INT×3 + 8) and max spell tier (4) are displayed correctly.

## Additional Context

### Dependencies

- **No new npm packages needed** — all functionality built with existing stack
- **No database migration needed** — JSON blob storage absorbs type changes
- **Depends on existing data**: All 11 class data files in `src/data/classes/` already contain complete L1-20 ability progressions, subclasses, and ability pools
- **Nimble rulebook reference**: `Markdowns/Nimble - Core rules.md` (pages 18-21 for character creation, leveling rules throughout) and `Markdowns/Nimble - Heroes.md` (complete class progressions)

### Testing Strategy

**Manual verification checklist (no test framework in place):**

1. **Level 1 regression**: Create a level 1 character for 3+ different classes — verify identical behavior to current
2. **Mid-level creation**: Create a level 5 Berserker, level 8 Mage, level 10 Zephyr — verify all choices appear correctly
3. **High-level creation**: Create a level 20 character — verify capstone, epic boon, all stat increases, full ability pool
4. **Level-up flow**: Create a level 1 character, then level up to 2, 3 (subclass), 4 (stat + pool), 5 — verify incremental choices
5. **Edit flow**: Edit an existing character, change level, verify cascading resets work
6. **PDF export**: Export PDF for level 1, 5, 10, 20 characters — verify HP, hit dice, abilities, stats
7. **Backward compat**: View/export existing level 1 characters (pre-migration) — verify no errors
8. **i18n**: Switch to French, repeat creation flow — verify all new text displays in FR
9. **Validation**: Attempt to save characters with invalid level-up data via API — verify 400 errors
10. **Cross-class ability pools**: Verify correct pool picks for classes with different `selectAtLevels` patterns (Berserker 7 picks vs Mage 3 picks vs Hunter starting at L1)

### Notes

- **High-risk item**: The level-up choices step (Task 10) is the most complex component. Consider implementing it with collapsible level sections to keep UX manageable. For a level 20 character, there are ~9 stat increase decisions + up to 8 ability pool picks — that's a lot of choices on one screen.
- **PDF space limitation**: The official Nimble character sheet PDF has fixed space for abilities (~16 slots). High-level characters will exceed this. Strategy: prioritize current-level abilities and subclass features, truncate older abilities with a "..." indicator. Users can use the hide/show toggles to manage what appears.
- **Future consideration**: Spell selection (choosing specific spells known/prepared) is out of scope but would be the natural next feature after this. The mana pool and spell tier calculations added here lay the groundwork.
- **Future consideration**: Multiclassing would require significant refactoring of the level-up flow (choosing a different class per level). The current architecture doesn't prevent it but doesn't support it either.
- **Backward compatibility**: The `validateCharacter()` function needs to handle both old-format characters (level=1, no new fields) and new-format characters gracefully. Default missing fields to safe values (level=1, empty arrays, null subclass).
