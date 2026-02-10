---
title: 'PDF Print Options — Field Visibility Toggles'
slug: 'pdf-print-options'
created: '2026-02-10'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack: ['Next.js 16 (App Router)', 'React 19', 'Tailwind CSS v4', 'pdf-lib', 'next-intl', 'Drizzle ORM + Turso']
files_to_modify: ['src/components/characters/character-detail.tsx', 'src/app/api/characters/[id]/pdf/route.ts', 'src/messages/en.json', 'src/messages/fr.json']
code_patterns: ['Client components with "use client"', 'useTranslations() for i18n', 'window.open() for PDF export with query params', 'pdf-lib drawText/drawCentered at hardcoded coordinates', 'Tailwind utility classes for styling']
test_patterns: ['No test files found for character features']
---

# Tech-Spec: PDF Print Options — Field Visibility Toggles

**Created:** 2026-02-10

## Overview

### Problem Statement

When printing a character sheet PDF, all values are baked in permanently. Players can't erase printed values when things change (HP in combat, leveling up, equipment changes). There's no way to selectively leave fields blank for hand-writing later.

### Solution

Add a "Print Options" modal on the character detail page that shows checkboxes grouped by section. Players toggle which field groups to show/hide before generating the PDF. Defaults are sensible (all shown by default). State is ephemeral (resets on page reload, not saved to DB). Visibility preferences are passed as a `hide` query parameter to the existing PDF API route.

### Scope

**In Scope:**
- Print options UI (modal with grouped checkboxes)
- Passing visibility preferences as query params to the PDF API route
- Conditionally skipping drawText/drawSvgPath calls based on preferences
- Sensible defaults (all shown)
- i18n support (EN/FR labels)

**Out of Scope:**
- Persisting preferences to database
- Per-field granularity (group-level is enough — e.g. "Stats" not "STR individually")
- Modifying the PDF template itself

## Context for Development

### Codebase Patterns

- **Client components**: Use `"use client"` directive, `useTranslations()` from next-intl for i18n
- **PDF export trigger**: `window.open(/api/characters/{id}/pdf?locale={locale})` — already uses query params
- **PDF rendering**: `pdf-lib` with `drawText`/`drawCentered`/`drawSvgPath` at hardcoded x,y coordinates, sections clearly separated with `// ===== SECTION =====` comments
- **Styling**: Tailwind utility classes; modals use standard patterns (fixed overlay + centered card)
- **State**: Local `useState` hooks for ephemeral UI state (no global store for this feature)
- **i18n namespaces**: `characters` for detail page, `builder` for field labels

### Files to Reference

| File | Purpose |
| ---- | ------- |
| `src/components/characters/character-detail.tsx` | Character detail page with PDF export/preview buttons (223 lines) |
| `src/app/api/characters/[id]/pdf/route.ts` | PDF generation API route using pdf-lib (320 lines) |
| `src/app/[locale]/(protected)/characters/[id]/page.tsx` | Server component that renders CharacterDetail |
| `src/messages/en.json` | English i18n strings (`characters` namespace, lines 126-141) |
| `src/messages/fr.json` | French i18n strings (`characters` namespace) |
| `src/data/types.ts` | `CharacterData` type definition |

### Technical Decisions

- **Query param approach**: Pass hidden groups as `?hide=hitPoints,equipment` — no request body needed, URL stays simple, API route already parses query params
- **Preferences are ephemeral**: `useState` in the modal, no DB persistence
- **Field visibility is group-level**: 9 toggle groups mapping to PDF section blocks
- **All groups shown by default**: User opts OUT of fields (unchecks to hide)
- **Modal pattern**: Print options modal replaces direct `window.open()` — user clicks "Export PDF" or "Preview PDF" → modal opens with checkboxes → user confirms export/preview from inside modal

### Field Groups

| Group Key | PDF Fields | Default |
|-----------|-----------|---------|
| `identity` | Name, Ancestry, Class, Level | Show |
| `stats` | STR, DEX, INT, WIL + save triangles | Show |
| `hitPoints` | Max HP, Current HP | Show |
| `hitDice` | Hit Die type, Max count, Current count | Show |
| `combat` | Armor, Initiative, Speed | Show |
| `skills` | All 10 skill values | Show |
| `features` | Ancestry trait, Background, Motivation, Class abilities | Show |
| `equipment` | Inventory items | Show |
| `proficiencies` | Armor/weapon proficiencies + Languages | Show |

## Implementation Plan

### Tasks

- [ ] Task 1: Add i18n keys for print options UI
  - File: `src/messages/en.json`
  - Action: Add keys under `characters` namespace:
    - `printOptions` — modal title ("Print Options")
    - `printOptionsDesc` — modal description ("Choose which sections to include in the PDF.")
    - `showAll` — "Show All" button label
    - `hideAll` — "Hide All" button label
    - `group_identity` — "Identity" (Name, Ancestry, Class, Level)
    - `group_stats` — "Stats & Saves"
    - `group_hitPoints` — "Hit Points"
    - `group_hitDice` — "Hit Dice"
    - `group_combat` — "Combat Stats" (Armor, Initiative, Speed)
    - `group_skills` — "Skills"
    - `group_features` — "Features & Abilities"
    - `group_equipment` — "Equipment"
    - `group_proficiencies` — "Proficiencies & Languages"
  - File: `src/messages/fr.json`
  - Action: Add equivalent French translations:
    - `printOptions` — "Options d'impression"
    - `printOptionsDesc` — "Choisissez les sections à inclure dans le PDF."
    - `showAll` — "Tout afficher"
    - `hideAll` — "Tout masquer"
    - `group_identity` — "Identité"
    - `group_stats` — "Stats & Sauvegardes"
    - `group_hitPoints` — "Points de vie"
    - `group_hitDice` — "Dés de vie"
    - `group_combat` — "Stats de combat"
    - `group_skills` — "Compétences"
    - `group_features` — "Traits & Capacités"
    - `group_equipment` — "Équipement"
    - `group_proficiencies` — "Maîtrises & Langues"

- [ ] Task 2: Create the print options modal in character-detail.tsx
  - File: `src/components/characters/character-detail.tsx`
  - Action:
    1. Add state: `const [showPrintModal, setShowPrintModal] = useState(false)` and `const [hiddenGroups, setHiddenGroups] = useState<Set<string>>(new Set())` — empty set means everything shown
    2. Define the `PDF_GROUPS` array (ordered list of `{ key: string; labelKey: string }`) matching the 9 field groups
    3. Replace the existing `handleExportPdf()` and `handlePreviewPdf()` functions:
       - Old: directly call `window.open(...)`
       - New: set `setShowPrintModal(true)` and store the mode ("export" or "preview") in a ref or state
    4. Add a new `handleConfirmPdf(inline: boolean)` function that:
       - Builds the URL: `/api/characters/${characterId}/pdf?locale=${locale}` + `&inline` if preview + `&hide=${[...hiddenGroups].join(",")}` if any groups hidden
       - Calls `window.open(url, "_blank")`
       - Closes the modal: `setShowPrintModal(false)`
    5. Render the modal (conditionally when `showPrintModal` is true):
       - Fixed overlay (`fixed inset-0 z-50 flex items-center justify-center bg-black/50`)
       - Modal card (`rounded-lg border border-border bg-surface p-6 w-full max-w-md`)
       - Title: `tc("printOptions")`
       - Description: `tc("printOptionsDesc")`
       - "Show All" / "Hide All" buttons (small, text-style) to bulk toggle
       - List of 9 checkboxes, one per group. Checked = shown (not in `hiddenGroups`). Clicking toggles the group key in/out of the set
       - Footer with "Cancel" button (closes modal) and "Export PDF" / "Preview PDF" button (calls `handleConfirmPdf`)
  - Notes: Keep the existing "Preview" and "Export" buttons in the header — they now open the modal instead of directly triggering PDF generation. Add a "Back to Characters" link that remains unchanged.

- [ ] Task 3: Update the PDF API route to parse `hide` param and conditionally skip sections
  - File: `src/app/api/characters/[id]/pdf/route.ts`
  - Action:
    1. After `const locale = url.searchParams.get("locale") || "en";` (line 57), add:
       ```typescript
       const hideParam = url.searchParams.get("hide") || "";
       const hiddenGroups = new Set(hideParam.split(",").filter(Boolean));
       ```
    2. Wrap each PDF section in a conditional check. The mapping:
       - `// ===== HEADER ROW =====` (lines 117-125) → `if (!hiddenGroups.has("identity"))`
       - `// ===== PRIMARY STATS =====` (lines 128-137) → `if (!hiddenGroups.has("stats"))`
       - `// ===== SAVE TRIANGLES =====` (lines 140-154) → `if (!hiddenGroups.has("stats"))` (same group as stats)
       - `// ===== COMBAT STATS =====` — split into sub-sections:
         - Armor value (line 158-166) → `if (!hiddenGroups.has("combat"))`
         - Hit Points MAX + CURRENT (lines 169-171) → `if (!hiddenGroups.has("hitPoints"))`
         - Hit Dice type + MAX + CURRENT (lines 174-179) → `if (!hiddenGroups.has("hitDice"))`
         - Initiative + Speed (lines 182-185) → `if (!hiddenGroups.has("combat"))`
       - `// ===== SKILL VALUES =====` (lines 188-197) → `if (!hiddenGroups.has("skills"))`
       - `// ===== FEATURES SECTION =====` (lines 200-251) → `if (!hiddenGroups.has("features"))`
       - `// ===== INVENTORY =====` (lines 254-277) → `if (!hiddenGroups.has("equipment"))`
       - `// ===== PROFICIENCIES =====` (lines 280-299) → `if (!hiddenGroups.has("proficiencies"))`
    3. No changes to the PDF save/response logic — the template PDF still renders as-is, just with fewer overlaid values
  - Notes: The armor value computation (lines 158-165) can remain even if hidden — just skip the `drawCentered` call. Keep the code clean by wrapping the smallest possible blocks.

### Acceptance Criteria

- [ ] AC 1: Given a user is on the character detail page, when they click "Export PDF" or "Preview PDF", then a modal appears with 9 labeled checkboxes (all checked by default), a description, and "Cancel" / confirm buttons.

- [ ] AC 2: Given the print options modal is open with all checkboxes checked, when the user clicks "Export PDF", then a PDF is generated with all fields populated (identical to current behavior).

- [ ] AC 3: Given the print options modal is open and the user unchecks "Hit Points", when they click "Export PDF", then the generated PDF has no Max HP or Current HP values drawn — the template boxes remain empty.

- [ ] AC 4: Given the print options modal is open and the user unchecks multiple groups (e.g. "Skills", "Equipment", "Hit Points"), when they click "Preview PDF", then the PDF opens inline in a new tab with those sections blank.

- [ ] AC 5: Given the print options modal is open, when the user clicks "Hide All", then all 9 checkboxes become unchecked. When they click "Show All", all 9 checkboxes become checked again.

- [ ] AC 6: Given the user is viewing the page in French (locale=fr), when they open the print options modal, then all labels appear in French ("Options d'impression", "Points de vie", "Équipement", etc.).

- [ ] AC 7: Given the user generates a PDF with `?hide=identity,stats,hitPoints,hitDice,combat,skills,features,equipment,proficiencies` (all hidden), then the PDF is a blank template with no overlaid text — just the original template PDF.

- [ ] AC 8: Given the user closes the modal and reopens it, then all checkboxes are still in their previous state (state persists during the page session). Given the user navigates away and comes back, then all checkboxes are reset to checked (ephemeral state).

## Additional Context

### Dependencies

- No new npm dependencies needed
- Relies on existing `pdf-lib`, `next-intl`, React/Next.js
- No database changes required
- No API contract changes beyond the new optional `hide` query param (backward compatible — omitting `hide` produces the same PDF as before)

### Testing Strategy

**Manual testing steps:**
1. Navigate to a character detail page
2. Click "Export PDF" → verify modal appears with 9 checkboxes all checked
3. Click "Export PDF" in modal with all checked → verify PDF is identical to current behavior
4. Uncheck "Hit Points" and "Equipment" → export → verify those sections are blank on the PDF
5. Click "Hide All" → verify all unchecked → click "Show All" → verify all checked
6. Click "Cancel" → verify modal closes, no PDF generated
7. Click "Preview PDF" → verify modal appears, confirm → PDF opens inline
8. Switch to French locale → verify all modal labels are in French
9. Test the API directly: `GET /api/characters/{id}/pdf?locale=en&hide=stats,equipment` → verify only those sections are blank
10. Test backward compatibility: `GET /api/characters/{id}/pdf?locale=en` (no hide param) → verify full PDF generated

### Notes

- **Backward compatible**: The `hide` query param is optional. Existing bookmarks/links to the PDF route continue working unchanged.
- **No template modification**: The official `nimble-character-sheet.pdf` template is untouched — we only skip overlaying text on it.
- **Future consideration**: If users later want to persist their preferences, the architecture supports it — just save the `hiddenGroups` set to the character's data in DB and load it as the default state in the modal. Out of scope for now.
- **Edge case**: If someone manually crafts a URL with invalid group keys in `hide` (e.g. `?hide=foo,bar`), they are simply ignored since `hiddenGroups.has("foo")` returns true but no PDF section maps to "foo". No error handling needed.
