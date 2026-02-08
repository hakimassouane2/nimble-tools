---
title: 'Nimble Rules Reference App - MVP'
slug: 'nimble-rules-reference-mvp'
created: '2026-02-08'
status: 'implementation-complete'
stepsCompleted: [1, 2, 3, 4]
tech_stack:
  - Next.js 15 (App Router)
  - TypeScript
  - next-intl (i18n)
  - Tailwind CSS v4
  - Vercel
files_to_modify: []
code_patterns:
  - Server Components by default
  - Client Components only for interactive elements (search, filters, language toggle)
  - Static TypeScript data files with inline EN/FR translations
  - next-intl middleware for locale-based routing (/en/..., /fr/...)
  - Flat data exports per domain (classes, spells, equipment, etc.)
test_patterns: []
---

# Tech-Spec: Nimble Rules Reference App - MVP

**Created:** 2026-02-08

## Overview

### Problem Statement

Hakim and his players need a quick, bilingual (English/French) reference tool for Nimble RPG rules — classes, ancestries, spells, equipment, conditions — without flipping through PDFs or physical books during game sessions. Currently there is no digital tool tailored to Nimble RPG for fast rule lookups at the table.

### Solution

Build a Next.js web app that presents all Nimble RPG rules content in a browsable, searchable, bilingual (EN/FR) format. Rules data is stored as static TypeScript data files in the repo — no database needed for MVP. The app is deployed on Vercel for easy link sharing with players. The architecture is designed to support future features (character sheets, initiative tracker, NPC reference) and a database layer (SQLite via Turso or Supabase) when persistent user data is needed.

### Scope

**In Scope:**
- Next.js App Router project scaffold with TypeScript
- i18n architecture (EN/FR) with easy language switching, using next-intl
- Rules reference pages: classes + subclasses, ancestries, backgrounds, spells (by school), equipment/weapons/armor, conditions
- Search and filter functionality across all rules content
- Responsive design optimized for phones and tablets (used at the game table)
- Static TypeScript data files for all Nimble rules content (sourced from the 4 Nimble books)
- Vercel deployment configuration
- Tailwind CSS for styling

**Out of Scope (post-MVP):**
- Character sheets / character creation wizard
- Initiative / combat tracker
- NPC / monster custom reference builder
- Authentication / user accounts / role-based access
- Dice roller
- Session notes / campaign journal
- Party dashboard
- Database (SQLite, Supabase, or otherwise) — not needed until user-generated data exists

## Context for Development

### Codebase Patterns

- **Confirmed Clean Slate** — repo has only .gitignore, README, and BMAD workflow files. No legacy constraints.
- **Server Components by default** — all reference pages are static read-only content; no client-side state needed for display.
- **Client Components only for interactivity** — search input, filter dropdowns, language toggle, mobile nav.
- **Data as code** — all Nimble rules content lives as typed TypeScript constants, organized by domain (classes, spells, equipment, etc.). Inline EN/FR translations within data objects for maintainability — no separate translation files for content.
- **UI string translations** — separate `messages/en.json` and `messages/fr.json` files for UI chrome (nav labels, buttons, filter labels, etc.) via next-intl.
- **i18n routing** — locale prefix in URL (`/en/classes/berserker`, `/fr/classes/berserker`) via next-intl middleware.
- **No over-engineering** — personal-use tool. No complex state management, no design system, no testing infrastructure for MVP.
- **AI-manageable** — all config, data, and deployment via CLI. No dashboard dependencies.

### Project Structure

```
src/
  app/
    [locale]/
      layout.tsx              # Root layout with nav, language toggle
      page.tsx                # Home — quick links to all sections
      classes/
        page.tsx              # All classes list
        [classId]/
          page.tsx            # Class detail (abilities, subclasses, progression)
      spells/
        page.tsx              # All spells, filterable by school + tier
      equipment/
        page.tsx              # All equipment, filterable by category
      ancestries/
        page.tsx              # All ancestries (common + exotic)
      backgrounds/
        page.tsx              # All backgrounds
      conditions/
        page.tsx              # Conditions quick-reference
      rules/
        page.tsx              # Core rules reference (combat, resting, etc.)
  data/
    types.ts                  # All TypeScript interfaces
    classes/
      index.ts                # All classes barrel export
      berserker.ts            # One file per class
      cheat.ts
      commander.ts
      hunter.ts
      mage.ts
      oathsworn.ts
      shadowmancer.ts
      shepherd.ts
      songweaver.ts
      stormshifter.ts
      zephyr.ts
    spells/
      index.ts
      fire.ts
      ice.ts
      lightning.ts
      wind.ts
      radiant.ts
      necrotic.ts
      utility.ts
    equipment/
      index.ts
      armor.ts
      melee-weapons.ts
      ranged-weapons.ts
      adventuring-gear.ts
      magical-items.ts
    ancestries.ts
    backgrounds.ts
    conditions.ts
    skills.ts
    rules/
      combat.ts
      resting.ts
      core-mechanics.ts
  components/
    layout/
      nav.tsx
      language-toggle.tsx
      mobile-nav.tsx
    ui/
      card.tsx
      badge.tsx
      stat-block.tsx
      ability-block.tsx
    filters/
      search-input.tsx
      filter-bar.tsx
  lib/
    utils.ts                  # Helper: get localized string from data objects
  messages/
    en.json                   # UI strings (nav, buttons, labels)
    fr.json
  middleware.ts               # next-intl locale routing
  i18n/
    request.ts                # next-intl server config
    routing.ts                # Locale + path config
```

### Nimble Data Model Summary

**Stats (4):** STR, DEX, INT, WIL
- Stat arrays: Standard (+2,+2,+0,–1), Balanced (+2,+1,+1,+0), Min-Max (+3,+1,–1,–1)
- Each class has 2 Key Stats, 1 advantaged save, 1 disadvantaged save

**Skills (10):** Might (STR), Finesse (DEX), Stealth (DEX), Arcana (INT), Examination (INT), Lore (INT), Influence (WIL), Insight (WIL), Naturecraft (WIL), Perception (WIL)

**Classes (11):** Berserker, Cheat, Commander, Hunter, Mage, Oathsworn, Shadowmancer, Shepherd, Songweaver, Stormshifter, Zephyr
- Each has: key stats, hit die, starting HP, saves, armor/weapon proficiency, starting gear
- Each has 2 standard subclasses (chosen at level 3, features at 7, 11, 15)
- 4 extra story-based subclasses: Oathbreaker, Spellblade, Reaver, Beastmaster
- Level progression 1-20 with abilities, stat increases, ability pools
- Complexity rating (1-3 diamonds)

**Spells (7 schools):** Fire, Ice, Lightning, Wind, Radiant, Necrotic, Utility
- Cantrips (free) + Tiers 1-9 (mana cost = tier)
- Fields: name, school, tier, casting time (actions), target type, range/reach, damage, damage type, effects, save DC, concentration, upcast effects, class restrictions

**Equipment:**
- Armor: Cloth, Leather, Mail, Plate, Shields (armor value, STR req, cost)
- Melee Weapons: 15+ (damage dice + stat modifier, properties, cost)
- Ranged Weapons: 7+ (damage, range, properties, cost)
- Key Equipment: Healing potions (3 tiers), torches, lanterns
- Misc Gear: 30+ items (description, cost)
- Magical Items: 4 rarity tiers, unique effects
- Spell Scrolls: priced by tier, single-use
- Wands: reusable, charges, unique recharge methods

**Ancestries:** 6 common + 14+ exotic (name, size, category, trait, modifiers)

**Backgrounds:** 20+ (name, description, effects, optional stat requirements)

**Conditions (16+):** Blinded, Bloodied, Charmed, Dazed, Dying, Frightened, Grappled, Restrained, Hampered, Incapacitated, Invisible, Petrified, Poisoned, Prone, Riding, Slowed, Taunted, Wounded + minor statuses

**Adventuring Motivations:** 15 predefined + custom

### Files to Reference

| File | Purpose |
| ---- | ------- |
| `Markdowns/Nimble - Core rules.md` | Stats, skills, combat, character creation, ancestries, backgrounds, equipment, spells, conditions |
| `Markdowns/Nimble - Heroes.md` | All 11 classes with subclasses, abilities per level |
| `Markdowns/Nimble - Creators Kit.md` | Design philosophy, monster/class creation guidelines |
| `Markdowns/Nimble - Game master's guide.md` | GM tools, monsters, encounter building |

### Technical Decisions

- **Next.js 15 App Router** — server components by default, i18n routing via middleware, static generation for all pages.
- **next-intl** for i18n — locale prefix routing, message formatting, server + client component support.
- **Inline bilingual data** — each data object contains `en` and `fr` fields rather than separate locale files. Keeps content co-located. UI strings use standard next-intl JSON message files.
- **Tailwind CSS v4** — utility-first, no component library dependency.
- **Static TypeScript data** — no database. Rules content is read-only. Type-safe, AI-editable, zero infrastructure.
- **Vercel** — zero-config for Next.js, free tier sufficient.
- **No test framework for MVP** — personal tool, minimal overhead.
- **FR translation strategy** — EN content populated from source material. FR translations for UI strings done immediately. FR content translations can be added incrementally — data files have `fr` fields that default to empty string (app falls back to `en` when `fr` is empty).

## Implementation Plan

### Tasks

#### Phase 1: Project Scaffold

- [x] **Task 1: Initialize Next.js project**
  - File: `package.json`, `tsconfig.json`, `next.config.ts`, `src/app/layout.tsx`, `src/app/page.tsx`
  - Action: Run `npx create-next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*"` from project root (or equivalent manual setup). Ensure Next.js 15, React 19, TypeScript 5, Tailwind CSS v4 are installed. Remove boilerplate content from default pages.
  - Notes: Use `src/` directory. App Router only. No `pages/` directory.

- [x] **Task 2: Configure next-intl for i18n**
  - Files: `src/middleware.ts`, `src/i18n/routing.ts`, `src/i18n/request.ts`, `src/messages/en.json`, `src/messages/fr.json`, `next.config.ts`
  - Action: Install `next-intl`. Configure middleware to detect locale from URL prefix (`/en`, `/fr`), default to `en`. Set up `routing.ts` with locales `['en', 'fr']` and `defaultLocale: 'en'`. Create `request.ts` for server-side message loading. Create initial `en.json` and `fr.json` with UI strings for nav, common labels, filter labels, page titles. Update `next.config.ts` with next-intl plugin.
  - Notes: Follow next-intl App Router setup guide. All pages will live under `src/app/[locale]/`. Root `/` should redirect to `/en`.

- [x] **Task 3: Set up base layout and global styles**
  - Files: `src/app/[locale]/layout.tsx`, `src/app/globals.css`, `src/lib/utils.ts`
  - Action: Create the root locale layout with `<html lang={locale}>`, Tailwind base styles, dark-friendly color scheme (RPG theme — dark background, warm accents). Create `utils.ts` with a helper function `t(obj: {en: string, fr: string}, locale: string): string` that returns the localized string, falling back to `en` if `fr` is empty. Import and apply global font (system font stack or Inter).
  - Notes: Keep styling minimal but polished enough for comfortable reading at the table. Good contrast, readable font sizes.

#### Phase 2: Type Definitions

- [x] **Task 4: Create all TypeScript interfaces**
  - File: `src/data/types.ts`
  - Action: Define all interfaces based on the Nimble data model. Key types:
    - `LocalizedString`: `{ en: string; fr: string }`
    - `Stat`: `'STR' | 'DEX' | 'INT' | 'WIL'`
    - `Skill`: `{ id: string; name: LocalizedString; linkedStat: Stat; description: LocalizedString }`
    - `Condition`: `{ id: string; name: LocalizedString; description: LocalizedString; effects: LocalizedString[] }`
    - `Ancestry`: `{ id: string; name: LocalizedString; size: Size; category: 'common' | 'exotic'; trait: { name: LocalizedString; description: LocalizedString }; modifiers: AncestryModifiers }`
    - `Background`: `{ id: string; name: LocalizedString; description: LocalizedString; effects: LocalizedString[]; requirement?: { stat: Stat; maxValue: number } }`
    - `Spell`: `{ id: string; name: LocalizedString; school: SpellSchool; tier: number; castingTime: number; targetType: LocalizedString; range: LocalizedString; damage?: LocalizedString; damageType?: LocalizedString; effects: LocalizedString; saveType?: Stat; concentration?: boolean; upcast?: LocalizedString; classRestriction?: string }`
    - `ArmorItem`, `MeleeWeapon`, `RangedWeapon`, `AdventuringGearItem`, `MagicalItem`, `Wand`: equipment types with appropriate fields (name, armor/damage, properties, cost, STR req, rarity, charges, etc.)
    - `HeroClass`: `{ id: string; name: LocalizedString; description: LocalizedString; complexity: 1|2|3; keyStats: [Stat, Stat]; hitDie: string; startingHp: number; saves: { strong: Stat; weak: Stat }; armorProficiency: LocalizedString[]; weaponProficiency: LocalizedString[]; startingGear: LocalizedString[]; abilities: ClassAbility[]; subclasses: Subclass[]; abilityPool?: AbilityPool }`
    - `ClassAbility`: `{ level: number; name: LocalizedString; description: LocalizedString; type: 'core' | 'subclass' | 'stat-increase' | 'capstone' }`
    - `Subclass`: `{ id: string; name: LocalizedString; description: LocalizedString; type: 'standard' | 'story-based'; features: SubclassFeature[] }`
    - `SubclassFeature`: `{ level: number; name: LocalizedString; description: LocalizedString }`
    - `AbilityPool`: `{ name: LocalizedString; selectAtLevels: number[]; abilities: PoolAbility[] }`
    - `PoolAbility`: `{ name: LocalizedString; description: LocalizedString }`
  - Notes: Use `LocalizedString` consistently for all user-facing text. Keep IDs as kebab-case slugs (e.g., `'berserker'`, `'arc-lightning'`). These IDs are used for URL routing and data lookup.

#### Phase 3: Data Files

- [x] **Task 5: Create skills, conditions, and core stats data**
  - Files: `src/data/skills.ts`, `src/data/conditions.ts`
  - Action: Populate all 10 skills with name, linked stat, and description (EN + FR). Populate all 16+ conditions with name, description, and effects (EN + FR). Include minor statuses (Smoldering, Charged, Distracted) marked as `minor: true`.
  - Source: `Markdowns/Nimble - Core rules.md` pages 7-8 (skills), page 11 (conditions).
  - Notes: FR translations can be empty strings initially — app falls back to EN.

- [x] **Task 6: Create ancestries data**
  - File: `src/data/ancestries.ts`
  - Action: Populate all 6 common ancestries (Human, Dwarf, Elf, Halfling, Gnome, Bunbun) and all 14+ exotic ancestries (Dragonborn, Fiendkin, Goblin, Kobold, Orc, Birdfolk, Celestial, Changeling, Crystalborn, Dryad/Shroomling, Half-Giant, Minotaur/Beastfolk, Oozeling/Construct, Planarbeing, Ratfolk, Stoatling, Turtlefolk, Wyrdling). Each with name, size, category, trait (name + description), and modifiers.
  - Source: `Markdowns/Nimble - Core rules.md` pages 22-28.

- [x] **Task 7: Create backgrounds data**
  - File: `src/data/backgrounds.ts`
  - Action: Populate all 20+ backgrounds with name, description, effects/abilities, and stat requirements where applicable. Include both standard backgrounds and specialized backgrounds (with stat requirements).
  - Source: `Markdowns/Nimble - Core rules.md` pages 28-31.

- [x] **Task 8: Create equipment data files**
  - Files: `src/data/equipment/armor.ts`, `src/data/equipment/melee-weapons.ts`, `src/data/equipment/ranged-weapons.ts`, `src/data/equipment/adventuring-gear.ts`, `src/data/equipment/magical-items.ts`, `src/data/equipment/index.ts`
  - Action: Populate each file from source material:
    - `armor.ts`: All Cloth, Leather, Mail, Plate, Shield entries with armor value, STR req, cost. Include armor rules text.
    - `melee-weapons.ts`: All 15+ melee weapons with damage formula, properties (Light, 2-handed, Reach, Thrown, Vicious), cost. Include unarmed strike. Include weapon properties reference.
    - `ranged-weapons.ts`: All 7+ ranged weapons with damage, range, properties (Load, etc.), cost. Include dual-wielding rules.
    - `adventuring-gear.ts`: Healing potions (3 tiers), torches, lanterns, all 30+ misc items with description and cost. Include spell scrolls with pricing table by tier.
    - `magical-items.ts`: All magical items organized by rarity tier. Wands with charges and recharge methods.
    - `index.ts`: Barrel export combining all equipment.
  - Source: `Markdowns/Nimble - Core rules.md` pages 32-43.

- [x] **Task 9: Create spell data files**
  - Files: `src/data/spells/fire.ts`, `src/data/spells/ice.ts`, `src/data/spells/lightning.ts`, `src/data/spells/wind.ts`, `src/data/spells/radiant.ts`, `src/data/spells/necrotic.ts`, `src/data/spells/utility.ts`, `src/data/spells/index.ts`
  - Action: Populate each spell school file with all spells from cantrips through tier 9. Each spell includes: name, tier, casting time (in actions), target type, range/reach, damage (if any), damage type, effects description, save type (if any), concentration flag, upcast description, class restriction (if any). `index.ts` barrel exports all spells and provides helper functions (`getSpellsBySchool`, `getSpellsByTier`).
  - Source: `Markdowns/Nimble - Core rules.md` pages 44-53.
  - Notes: Some spells are class-exclusive (e.g., Shepherd-only, Shadowmancer-only) — capture this in `classRestriction` field.

- [x] **Task 10: Create class data files**
  - Files: `src/data/classes/berserker.ts`, `src/data/classes/cheat.ts`, `src/data/classes/commander.ts`, `src/data/classes/hunter.ts`, `src/data/classes/mage.ts`, `src/data/classes/oathsworn.ts`, `src/data/classes/shadowmancer.ts`, `src/data/classes/shepherd.ts`, `src/data/classes/songweaver.ts`, `src/data/classes/stormshifter.ts`, `src/data/classes/zephyr.ts`, `src/data/classes/index.ts`
  - Action: For each class file, populate:
    - Header: id, name, description, complexity (1-3), key stats, hit die, starting HP, saves, armor/weapon proficiency, starting gear
    - Abilities: Full level 1-20 progression with all abilities at each level (name, description, type)
    - Subclasses: 2 standard subclasses with features at levels 3, 7, 11, 15
    - Ability Pool: if the class has one (e.g., Berserker's Savage Arsenal), list all selectable abilities with descriptions and the levels at which selections happen
    - Story-based subclasses: Oathbreaker (Oathsworn), Spellblade (Commander), Reaver (Shadowmancer), Beastmaster (Hunter) — include in their respective class files
    - `index.ts`: Barrel export all classes, provide `getClassById(id)` helper.
  - Source: `Markdowns/Nimble - Heroes.md` (entire document).
  - Notes: This is the largest data task. Each class has 20 levels of abilities + 2 subclasses + ability pool. Thoroughness is critical — a dev agent implementing this must read the full Heroes document for each class.

- [x] **Task 11: Create core rules content data**
  - Files: `src/data/rules/combat.ts`, `src/data/rules/resting.ts`, `src/data/rules/core-mechanics.ts`
  - Action: Structure key rules as localized content blocks:
    - `combat.ts`: Actions (Attack, Cast Spell, Move, Assess), Reactions (Defend, Interpose, Opportunity Attack, Help), initiative rules, turn order, rushed attacks, crits, monster armor (None/Medium/Heavy), minions.
    - `resting.ts`: Field Rests (Catch Breath, Make Camp), Safe Rests, downtime activities, lodging, hit dice recovery.
    - `core-mechanics.ts`: Skill checks & saves (DC scale), advantage/disadvantage, HP & dying & wounds & death, speed & range, concentration, cover & hiding, grappling, size categories, inventory slots.
  - Source: `Markdowns/Nimble - Core rules.md` pages 6-17.
  - Notes: Structure as arrays of `{ id, title: LocalizedString, content: LocalizedString }` sections for easy rendering.

#### Phase 4: UI Components

- [x] **Task 12: Create layout components**
  - Files: `src/components/layout/nav.tsx`, `src/components/layout/language-toggle.tsx`, `src/components/layout/mobile-nav.tsx`
  - Action:
    - `nav.tsx`: Top navigation bar with app title ("Nimble Tools"), section links (Classes, Spells, Equipment, Ancestries, Backgrounds, Conditions, Rules). Desktop horizontal nav, hides on mobile in favor of hamburger.
    - `language-toggle.tsx`: Client Component. Toggle button/dropdown to switch between EN/FR. Uses next-intl's `useRouter` and `usePathname` to switch locale while preserving current page path.
    - `mobile-nav.tsx`: Client Component. Hamburger menu / slide-out drawer for mobile. Contains same links as nav + language toggle.
  - Notes: Use next-intl's `useTranslations` for all nav labels. Highlight current section in nav.

- [x] **Task 13: Create shared UI components**
  - Files: `src/components/ui/card.tsx`, `src/components/ui/badge.tsx`, `src/components/ui/stat-block.tsx`, `src/components/ui/ability-block.tsx`
  - Action:
    - `card.tsx`: Reusable card container with title, optional subtitle, and children. Used for class cards, ancestry cards, etc.
    - `badge.tsx`: Small label component for tags (complexity diamonds, spell tier, rarity, damage type, etc.). Supports color variants.
    - `stat-block.tsx`: Renders a class or ancestry stat block (key stats, hit die, HP, saves, proficiencies). Compact table/grid format optimized for quick scanning.
    - `ability-block.tsx`: Renders a single ability/feature with name, level indicator, and description. Supports expandable detail for long descriptions.
  - Notes: All components accept localized strings and render based on current locale. Keep them simple — Tailwind utility classes, no complex prop APIs.

- [x] **Task 14: Create filter and search components**
  - Files: `src/components/filters/search-input.tsx`, `src/components/filters/filter-bar.tsx`
  - Action:
    - `search-input.tsx`: Client Component. Text input with search icon. Debounced onChange (300ms). Filters parent page content by matching against name and description fields. Uses `useSearchParams` for URL-based state so search is shareable/bookmarkable.
    - `filter-bar.tsx`: Client Component. Horizontal scrollable row of filter chips/buttons. Accepts filter categories (e.g., spell school, equipment type, ancestry category). Active filters highlighted. Uses `useSearchParams` for URL-based state.
  - Notes: Search is client-side only — all data is already loaded as static imports. No API calls needed.

#### Phase 5: Pages

- [x] **Task 15: Create home page**
  - File: `src/app/[locale]/page.tsx`
  - Action: Landing page with app title, brief description, and grid of section cards linking to each rules section (Classes, Spells, Equipment, Ancestries, Backgrounds, Conditions, Rules). Each card shows section name + count of items (e.g., "Classes — 11", "Spells — 70+"). Include Nimble attribution per 3rd Party Creator License.
  - Notes: Server Component. All text via next-intl messages.

- [x] **Task 16: Create conditions page**
  - File: `src/app/[locale]/conditions/page.tsx`
  - Action: Grid/list of all conditions. Each shows name, description, and bullet-pointed effects. Include minor statuses in a separate "Minor Statuses" section at the bottom. Add search input to filter conditions by name. Quick-scan layout — this is the page players will hit mid-combat.
  - Notes: Server Component with Client Component search wrapper.

- [x] **Task 17: Create ancestries page**
  - File: `src/app/[locale]/ancestries/page.tsx`
  - Action: Display all ancestries grouped by category (Common, Exotic). Each ancestry shows: name, size badge, trait name, trait description, modifiers (speed, armor, etc.), languages. Filter bar with Common/Exotic toggle. Search by name.
  - Notes: Server Component with Client Component filter wrapper.

- [x] **Task 18: Create backgrounds page**
  - File: `src/app/[locale]/backgrounds/page.tsx`
  - Action: List all backgrounds. Each shows: name, description, effects/abilities, stat requirement (if any, displayed as warning badge). Search by name. Optionally filter by "has requirement" / "no requirement".
  - Notes: Server Component with Client Component search wrapper.

- [x] **Task 19: Create equipment page**
  - File: `src/app/[locale]/equipment/page.tsx`
  - Action: Tabbed or filter-bar interface with categories: Armor, Melee Weapons, Ranged Weapons, Adventuring Gear, Magical Items. Each category renders as a table or card grid appropriate to its data shape:
    - Armor: table with columns (Name, Armor Value, STR Req, Cost)
    - Weapons: table with columns (Name, Damage, Properties, Cost)
    - Gear: card list with name, description, cost
    - Magical Items: cards grouped by rarity with name, description, effects
    - Include weapon properties reference as a collapsible section
  - Notes: Server Component with Client Component filter/tab wrapper. Search across all categories.

- [x] **Task 20: Create spells page**
  - File: `src/app/[locale]/spells/page.tsx`
  - Action: All spells displayed in a filterable list/grid. Filter bar with: school (Fire, Ice, Lightning, Wind, Radiant, Necrotic, Utility), tier (Cantrip, 1-9). Each spell card shows: name, school badge (color-coded), tier badge, casting time, range, damage (if any), and brief effect summary. Clicking/tapping a spell expands to show full details (description, upcast, class restriction, save type, concentration). Search by spell name.
  - Notes: Server Component with Client Component filter/search wrapper. Color-code schools: Fire=red, Ice=blue, Lightning=yellow, Wind=green, Radiant=gold, Necrotic=purple, Utility=gray.

- [x] **Task 21: Create classes list and detail pages**
  - Files: `src/app/[locale]/classes/page.tsx`, `src/app/[locale]/classes/[classId]/page.tsx`
  - Action:
    - **List page** (`classes/page.tsx`): Grid of class cards. Each card shows: class name, complexity diamonds, key stats, hit die, brief description (1-2 sentences). Clicking navigates to detail page.
    - **Detail page** (`classes/[classId]/page.tsx`): Full class reference. Sections:
      1. **Header**: Class name, description, complexity
      2. **Stat Block**: Key stats, hit die, starting HP, saves, armor/weapon proficiency, starting gear
      3. **Level Progression**: Collapsible level-by-level breakdown (levels 1-20). Each level shows abilities gained. Ability names are headers, descriptions below.
      4. **Subclasses**: Two standard subclasses, each with features at levels 3/7/11/15. Story-based subclass if applicable.
      5. **Ability Pool**: If the class has one (e.g., Savage Arsenal), list all selectable abilities with descriptions.
    - Use `generateStaticParams` to pre-render all 11 class detail pages.
  - Notes: Detail page is the most content-dense page. Use accordion/collapsible sections to keep it scannable. Ensure level progression is easy to navigate — players will reference specific levels frequently.

- [x] **Task 22: Create core rules page**
  - File: `src/app/[locale]/rules/page.tsx`
  - Action: Structured reference page with collapsible sections: Combat (actions, reactions, initiative, crits, monster armor), Resting (field rests, safe rests, downtime), Core Mechanics (skill checks, advantage/disadvantage, HP/dying/wounds, speed/range, concentration, cover, grappling, size). Table of contents at the top with anchor links. Each section renders its content blocks.
  - Notes: Server Component. Use `@tailwindcss/typography` prose classes for readable long-form content.

#### Phase 6: Search & Deploy

- [x] **Task 23: Add global search functionality**
  - Files: `src/components/layout/nav.tsx` (update), `src/app/[locale]/search/page.tsx` (new)
  - Action: Add a search icon/bar to the nav that navigates to `/[locale]/search?q=<query>`. The search page performs client-side full-text search across ALL data (classes, spells, equipment, ancestries, backgrounds, conditions). Results grouped by section with links to the relevant page. Search matches against name and description fields. Display top 5 results per section.
  - Notes: Client-side search only — import all data statically. For MVP, simple string matching (`.toLowerCase().includes()`) is sufficient. No need for a search library.

- [x] **Task 24: Configure Vercel deployment**
  - Files: `vercel.json` (if needed), `package.json` scripts
  - Action: Ensure `next build` succeeds with no errors. Verify all static pages are generated correctly for both locales. Add Vercel-specific config if needed (likely none required for standard Next.js). Test that locale routing works correctly in production (middleware handles `/en`, `/fr` prefixes, root `/` redirects to `/en`).
  - Notes: Vercel auto-detects Next.js. Main risk is middleware i18n routing — test thoroughly.

### Acceptance Criteria

#### Foundation
- [x] AC 1: Given a fresh clone of the repo, when `npm install && npm run dev` is run, then the app starts without errors on localhost.
- [x] AC 2: Given the app is running, when navigating to `/`, then the user is redirected to `/en` (default locale).
- [x] AC 3: Given the app is running at `/en`, when clicking the language toggle to FR, then the URL changes to `/fr` and all UI strings display in French.
- [x] AC 4: Given the app is at `/fr/classes`, when clicking the language toggle to EN, then the URL changes to `/en/classes` (preserves current page).

#### Content Pages
- [x] AC 5: Given the classes list page, when it loads, then all 11 Nimble classes are displayed with name, complexity, key stats, and description.
- [x] AC 6: Given the class detail page for Berserker (`/en/classes/berserker`), when it loads, then the full level 1-20 progression is displayed with all abilities, both subclasses (Red Mist, Mountainheart), and Savage Arsenal ability pool.
- [x] AC 7: Given the spells page, when filtering by school "Fire", then only Fire spells are shown. When additionally filtering by tier "Cantrip", then only Fire cantrips are shown.
- [x] AC 8: Given the equipment page, when selecting "Melee Weapons" category, then all 15+ melee weapons are displayed with damage, properties, and cost.
- [x] AC 9: Given the ancestries page, when it loads, then common ancestries appear first, followed by exotic. Filtering by "Common" shows only the 6 common ancestries.
- [x] AC 10: Given the backgrounds page, when it loads, then all 20+ backgrounds are displayed with name, description, and effects.
- [x] AC 11: Given the conditions page, when it loads, then all 16+ conditions are displayed with name, description, and effects. Minor statuses appear in a separate section.
- [x] AC 12: Given the rules page, when it loads, then combat, resting, and core mechanics sections are all present with collapsible subsections.

#### Search & Filter
- [x] AC 13: Given any page with a search input, when typing "fire", then results are filtered in real-time to show only items matching "fire" in name or description.
- [x] AC 14: Given the global search page, when searching "heal", then results from spells (Heal, Greater Heal), equipment (Healing Potions), and any matching conditions/classes are displayed grouped by section.

#### Responsive
- [x] AC 15: Given the app loaded on a mobile device (viewport < 768px), when viewing any page, then content is readable without horizontal scrolling, and navigation is accessible via hamburger menu.

#### Data Accuracy
- [x] AC 16: Given any class detail page, when comparing displayed data to `Markdowns/Nimble - Heroes.md`, then all abilities, stats, and subclass features match the source material exactly.
- [x] AC 17: Given any spell entry, when comparing to `Markdowns/Nimble - Core rules.md`, then name, tier, damage, range, and effects match the source material.

## Additional Context

### Dependencies

| Package | Version | Purpose |
| ------- | ------- | ------- |
| next | ^15 | Framework |
| react / react-dom | ^19 | UI runtime |
| next-intl | ^4 | i18n (routing, messages, formatting) |
| tailwindcss | ^4 | Styling |
| @tailwindcss/typography | latest | Prose content styling |
| typescript | ^5 | Type safety |

No other external dependencies required. All data is static. No database, no API, no auth libraries.

### Testing Strategy

No formal test framework for MVP. Manual verification checklist:
- All pages render in both EN and FR without errors
- Language toggle preserves current route when switching
- Search/filter returns correct results on every page
- All 11 class detail pages render complete level progressions
- All spell data matches source material (spot-check 5 spells per school)
- All equipment data matches source material (spot-check each category)
- Responsive layout works on mobile viewport (Chrome DevTools)
- `next build` completes successfully with no type errors
- Vercel preview deployment loads correctly

### Notes

- **Largest risk**: Data entry volume. 11 classes × 20 levels of abilities + subclasses is significant. The dev agent implementing Task 10 should process one class at a time, reading the full source section for each class before populating.
- **FR translations**: EN content is populated from source material for MVP. FR fields exist in all data objects but start as empty strings. The app displays EN as fallback when FR is empty. Full FR translation is a follow-up effort — can be done incrementally per section.
- **Performance**: All data is statically imported. Pages are server-rendered. No runtime API calls. Performance should be excellent out of the box. If the total data bundle gets large, consider code-splitting per page (Next.js dynamic imports).
- **Mobile UX priority**: Players will use this at the table on phones. Font size, tap targets, and collapsible sections are critical. Test on actual mobile devices when possible.
- **Nimble attribution**: Per the Nimble 3rd Party Creator License, include: "Nimble Tools is an independent product published under the Nimble 3rd Party Creator License and is not affiliated with Nimble Co. Nimble © 2025 Nimble Co." — place in the app footer.
- **Future DB addition**: When character sheets land post-MVP, plan is SQLite via Turso + Drizzle ORM (fully CLI-manageable, MCP-compatible) or Supabase (has MCP server + CLI). The static data architecture doesn't conflict — rules data stays as TS files, user data goes to DB.

## Review Notes
- Adversarial review completed
- Findings: 18 total, 8 fixed, 10 skipped (noise/low-priority)
- Resolution approach: auto-fix
- Fixed: Hardcoded locale checks replaced with getTranslations, hardcoded English strings replaced with i18n keys, ARIA attributes added to all collapsible buttons, search debouncing added, error boundary added, OpenGraph metadata added, mobile nav focus management improved, classes added to global search
