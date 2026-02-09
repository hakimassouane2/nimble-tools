---
title: 'Auth & Database Foundation'
slug: 'auth-database-foundation'
created: '2026-02-09'
status: 'ready-for-implementation'
stepsCompleted: []
tech_stack:
  - Turso (LibSQL/SQLite)
  - Drizzle ORM
  - Auth.js v5 (NextAuth)
  - Next.js 15 (App Router)
files_to_modify:
  - package.json
  - src/app/[locale]/layout.tsx
code_patterns:
  - Schema-as-code with Drizzle
  - Auth.js App Router integration
  - Server-side session checks
  - Protected route middleware
test_patterns: []
---

# Tech-Spec: Auth & Database Foundation

**Created:** 2026-02-09

## Overview

### Problem Statement

The Nimble Tools MVP is a read-only reference app. To enable user-specific features (character sheets, saved builds, custom NPC storage), the app needs:
1. A way to identify users (authentication)
2. A place to store user data (database)

The solution must be **100% AI-manageable** — no manual dashboard interactions during development, CLI/MCP-driven, code-first configuration.

### Solution

Implement a foundation layer using:
- **Turso** (LibSQL/SQLite) as the database — CLI-driven, MCP-compatible, simple
- **Drizzle ORM** for type-safe database access and schema-as-code migrations
- **Auth.js v5** for authentication — pure TypeScript config, no dashboard, NextAuth adapter for Drizzle

This foundation enables all future user-data features while maintaining the AI-first development workflow.

### Scope

**In Scope:**
- Turso database setup and configuration
- Drizzle ORM integration with schema definitions
- Auth.js v5 setup with OAuth providers (GitHub, Google, Discord)
- User and Session database schema
- Protected route pattern (middleware + server-side checks)
- Sign-in / Sign-out UI components
- Environment variable configuration
- Database migration workflow (CLI-based)

**Out of Scope:**
- Character sheet tables (separate spec)
- NPC/Monster tables (separate spec)
- Role-based access control (not needed — all users are equal)
- Email/password auth (OAuth only for simplicity)
- Admin dashboard (not needed)

## Context for Development

### Codebase Patterns

- **Existing MVP** — App is fully functional with i18n, all rules reference pages, search, responsive design
- **Server Components by default** — Auth checks happen server-side
- **Client Components for interactivity** — Sign-in button, user menu
- **No breaking changes** — Auth is additive, all existing pages remain public/readable without login

### Project Structure (New/Modified Files)

```
src/
  app/
    [locale]/
      layout.tsx                    # MODIFY: Add SessionProvider wrapper
      (auth)/
        sign-in/
          page.tsx                  # NEW: Sign-in page with provider buttons
    api/
      auth/
        [...nextauth]/
          route.ts                  # NEW: Auth.js API route handler
  components/
    auth/
      sign-in-button.tsx            # NEW: Client component for sign-in
      user-menu.tsx                 # NEW: Client component showing user + sign-out
      auth-provider.tsx             # NEW: SessionProvider wrapper
  lib/
    auth.ts                         # NEW: Auth.js configuration
    db/
      index.ts                      # NEW: Drizzle client instance
      schema.ts                     # NEW: All table definitions
      migrations/                   # NEW: Generated migration files
  middleware.ts                     # MODIFY: Add auth protection patterns
drizzle.config.ts                   # NEW: Drizzle Kit configuration
.env.local                          # MODIFY: Add auth + DB secrets
```

### Database Schema

```
┌─────────────────────────────────────────────────────────────┐
│                         users                                │
├─────────────────────────────────────────────────────────────┤
│ id              VARCHAR(255)   PRIMARY KEY                  │
│ name            VARCHAR(255)   NULLABLE                     │
│ email           VARCHAR(255)   UNIQUE, NULLABLE             │
│ emailVerified   TIMESTAMP      NULLABLE                     │
│ image           VARCHAR(255)   NULLABLE                     │
│ createdAt       TIMESTAMP      DEFAULT NOW                  │
│ updatedAt       TIMESTAMP      DEFAULT NOW                  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                        accounts                              │
├─────────────────────────────────────────────────────────────┤
│ id                  VARCHAR(255)   PRIMARY KEY              │
│ userId              VARCHAR(255)   FK → users.id            │
│ type                VARCHAR(255)   NOT NULL                 │
│ provider            VARCHAR(255)   NOT NULL                 │
│ providerAccountId   VARCHAR(255)   NOT NULL                 │
│ refresh_token       TEXT           NULLABLE                 │
│ access_token        TEXT           NULLABLE                 │
│ expires_at          INTEGER        NULLABLE                 │
│ token_type          VARCHAR(255)   NULLABLE                 │
│ scope               VARCHAR(255)   NULLABLE                 │
│ id_token            TEXT           NULLABLE                 │
│ session_state       VARCHAR(255)   NULLABLE                 │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                        sessions                              │
├─────────────────────────────────────────────────────────────┤
│ id             VARCHAR(255)   PRIMARY KEY                   │
│ sessionToken   VARCHAR(255)   UNIQUE, NOT NULL              │
│ userId         VARCHAR(255)   FK → users.id                 │
│ expires        TIMESTAMP      NOT NULL                      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                   verificationTokens                         │
├─────────────────────────────────────────────────────────────┤
│ identifier     VARCHAR(255)   NOT NULL                      │
│ token          VARCHAR(255)   NOT NULL                      │
│ expires        TIMESTAMP      NOT NULL                      │
│ PRIMARY KEY (identifier, token)                             │
└─────────────────────────────────────────────────────────────┘
```

These are the standard Auth.js tables. Future specs (character sheets, etc.) will add their own tables with `userId` foreign keys.

### Technical Decisions

- **Turso** — Edge SQLite database. CLI-first (`turso db create`, `turso db shell`). MCP server available. Free tier: 9GB storage, 500M rows read/month — way more than needed.
- **Drizzle ORM** — Type-safe, schema-as-code. Migrations via `drizzle-kit push` (direct push to DB) or `drizzle-kit generate` + `drizzle-kit migrate` (migration files). Push is simpler for dev, migrations for production safety.
- **Auth.js v5** — Latest version with App Router native support. Pure TypeScript config in `src/lib/auth.ts`. No external dashboard. Drizzle adapter handles session/user storage.
- **OAuth Providers** — GitHub + Google + Discord. Players pick whichever they have. One-time setup: register OAuth apps in each provider's developer console, get CLIENT_ID + CLIENT_SECRET, add to `.env.local`.
- **Session Strategy** — Database sessions (not JWT). More secure, revocable, standard for Auth.js + Drizzle.
- **Protected Routes** — Middleware checks for specific paths (future: `/characters/*`). For MVP foundation, all routes remain public — auth is opt-in.
- **No email verification flow** — OAuth handles identity verification. Simplifies setup.

## Implementation Plan

### Tasks

#### Phase 1: Database Setup

- [ ] **Task 1: Create Turso database**
  - Action: Run `turso db create nimble-tools` via CLI. Get connection URL and auth token. Document in `.env.local.example`.
  - Output: Database URL (`libsql://nimble-tools-<username>.turso.io`) and auth token
  - Notes: One-time setup. After this, all DB operations are via Drizzle/CLI.

- [ ] **Task 2: Install and configure Drizzle ORM**
  - Files: `package.json`, `drizzle.config.ts`, `src/lib/db/index.ts`
  - Action:
    - Install: `npm install drizzle-orm @libsql/client`
    - Install dev: `npm install -D drizzle-kit`
    - Create `drizzle.config.ts` with Turso connection (reads from env vars)
    - Create `src/lib/db/index.ts` — Drizzle client instance using `@libsql/client`
  - Notes: Use `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN` env vars.

- [ ] **Task 3: Define Auth.js database schema**
  - File: `src/lib/db/schema.ts`
  - Action: Define all 4 Auth.js tables (users, accounts, sessions, verificationTokens) using Drizzle schema syntax. Export all tables. Use `text` for IDs (Auth.js uses cuid/uuid strings).
  - Notes: Follow Auth.js Drizzle adapter schema exactly. See: https://authjs.dev/getting-started/adapters/drizzle

- [ ] **Task 4: Push schema to Turso**
  - Action: Run `npx drizzle-kit push` to sync schema to database. Verify tables exist via `turso db shell nimble-tools` → `.tables`.
  - Notes: For dev, `push` is faster than migrations. Production can use `generate` + `migrate` if needed.

#### Phase 2: Authentication Setup

- [ ] **Task 5: Install Auth.js and Drizzle adapter**
  - File: `package.json`
  - Action: Install `npm install next-auth@beta @auth/drizzle-adapter`
  - Notes: Auth.js v5 is still in beta but stable for production. The `@beta` tag is required.

- [ ] **Task 6: Configure Auth.js**
  - File: `src/lib/auth.ts`
  - Action: Create Auth.js configuration with:
    - Drizzle adapter connected to Turso
    - GitHub, Google, and Discord OAuth providers
    - Session strategy: "database"
    - Callbacks for session handling (include user.id in session)
    - Pages config pointing to custom sign-in page
  - Notes: All provider credentials come from env vars: `AUTH_GITHUB_ID`, `AUTH_GITHUB_SECRET`, etc.

- [ ] **Task 7: Create Auth.js API route**
  - File: `src/app/api/auth/[...nextauth]/route.ts`
  - Action: Export GET and POST handlers from Auth.js config. This handles all `/api/auth/*` routes (sign-in, sign-out, callback, session).
  - Notes: Standard Auth.js App Router pattern.

- [ ] **Task 8: Create auth helper functions**
  - File: `src/lib/auth.ts` (extend)
  - Action: Export helper functions:
    - `auth()` — Server-side session getter (already provided by Auth.js)
    - `getSession()` — Wrapper that returns typed session or null
    - `requireAuth()` — Throws redirect to sign-in if not authenticated (for protected pages)
  - Notes: These helpers are used in Server Components and API routes.

#### Phase 3: Environment Configuration

- [ ] **Task 9: Set up environment variables**
  - Files: `.env.local`, `.env.local.example`
  - Action: Define all required env vars:
    ```
    # Database (Turso)
    TURSO_DATABASE_URL=libsql://...
    TURSO_AUTH_TOKEN=...

    # Auth.js
    AUTH_SECRET=... (generate with: openssl rand -base64 32)
    AUTH_URL=http://localhost:3000

    # OAuth Providers
    AUTH_GITHUB_ID=...
    AUTH_GITHUB_SECRET=...
    AUTH_GOOGLE_ID=...
    AUTH_GOOGLE_SECRET=...
    AUTH_DISCORD_ID=...
    AUTH_DISCORD_SECRET=...
    ```
  - Notes: `.env.local` is gitignored. `.env.local.example` is committed with placeholder values.

- [ ] **Task 10: Document OAuth app registration**
  - File: `README.md` or `docs/oauth-setup.md`
  - Action: Write step-by-step instructions for registering OAuth apps:
    - GitHub: Settings → Developer Settings → OAuth Apps → New
    - Google: Google Cloud Console → APIs → Credentials → OAuth 2.0
    - Discord: Discord Developer Portal → Applications → New → OAuth2
    - Include callback URLs: `http://localhost:3000/api/auth/callback/github` (etc.)
  - Notes: This is the one manual step. Document it clearly so it's done once and never again.

#### Phase 4: UI Components

- [ ] **Task 11: Create SessionProvider wrapper**
  - File: `src/components/auth/auth-provider.tsx`
  - Action: Client Component that wraps children with Auth.js `SessionProvider`. Receives session as prop (fetched server-side in layout).
  - Notes: Required for `useSession` hook in client components.

- [ ] **Task 12: Update root layout with auth**
  - File: `src/app/[locale]/layout.tsx`
  - Action:
    - Import `auth()` from auth config
    - Fetch session server-side in layout
    - Wrap children with `AuthProvider` passing session
    - No visual changes yet — just wiring
  - Notes: Session is now available throughout the app via context.

- [ ] **Task 13: Create sign-in button component**
  - File: `src/components/auth/sign-in-button.tsx`
  - Action: Client Component. Button that triggers sign-in flow. Uses `signIn()` from `next-auth/react`. Accepts optional `provider` prop to go directly to a specific provider, or shows provider selection.
  - Notes: Styled to match existing UI (Tailwind, dark theme).

- [ ] **Task 14: Create user menu component**
  - File: `src/components/auth/user-menu.tsx`
  - Action: Client Component. Shows when user is authenticated:
    - User avatar (from OAuth profile)
    - User name
    - Sign-out button (uses `signOut()` from `next-auth/react`)
    - Dropdown or simple inline display
  - Notes: Uses `useSession()` hook. Shows loading state while session loads.

- [ ] **Task 15: Create sign-in page**
  - File: `src/app/[locale]/(auth)/sign-in/page.tsx`
  - Action: Full-page sign-in UI with:
    - App logo/title
    - "Sign in to save your characters" messaging
    - Three provider buttons (GitHub, Google, Discord)
    - Styled to match app theme
  - Notes: Route group `(auth)` keeps URL clean (`/en/sign-in` not `/en/auth/sign-in`). Use next-intl for all strings.

- [ ] **Task 16: Add auth UI to navigation**
  - Files: `src/components/layout/nav.tsx`, `src/components/layout/mobile-nav.tsx`
  - Action:
    - Add conditional rendering: if session exists, show `UserMenu`; else show `SignInButton`
    - Position in top-right of nav (desktop) and bottom of mobile drawer
  - Notes: Fetch session server-side in nav wrapper, or use client component with `useSession`.

#### Phase 5: Protected Route Pattern

- [ ] **Task 17: Create auth middleware pattern**
  - File: `src/middleware.ts`
  - Action: Extend existing next-intl middleware to include auth checks:
    - Define `protectedRoutes` array (empty for now, future: `['/characters', '/my-npcs']`)
    - If path matches protected route AND no session, redirect to sign-in
    - Preserve locale in redirect (`/en/sign-in?callbackUrl=/en/characters`)
  - Notes: Uses Auth.js `auth()` in middleware (Edge-compatible). For now, no routes are protected — pattern is ready for future use.

- [ ] **Task 18: Create protected page wrapper utility**
  - File: `src/lib/auth.ts` (extend)
  - Action: Add `requireAuth()` function for use in Server Components:
    ```typescript
    export async function requireAuth() {
      const session = await auth();
      if (!session?.user) {
        redirect('/sign-in');
      }
      return session;
    }
    ```
  - Notes: Used in future protected pages: `const session = await requireAuth();`

### Acceptance Criteria

#### Database
- [ ] AC 1: Given Turso CLI is installed, when running `turso db list`, then `nimble-tools` database appears in the list.
- [ ] AC 2: Given the database exists, when running `npx drizzle-kit push`, then all 4 Auth.js tables are created without errors.
- [ ] AC 3: Given the Drizzle client, when importing `db` from `src/lib/db`, then queries can be executed against Turso.

#### Authentication
- [ ] AC 4: Given the app is running, when navigating to `/api/auth/providers`, then JSON response lists GitHub, Google, and Discord providers.
- [ ] AC 5: Given the sign-in page, when clicking "Sign in with GitHub", then user is redirected to GitHub OAuth flow.
- [ ] AC 6: Given successful OAuth callback, when returning to the app, then a new user record exists in the `users` table and a session record exists in `sessions`.
- [ ] AC 7: Given an authenticated session, when calling `auth()` in a Server Component, then the session object contains `user.id`, `user.name`, `user.email`, and `user.image`.

#### UI
- [ ] AC 8: Given no active session, when viewing the nav bar, then a "Sign In" button is visible.
- [ ] AC 9: Given an active session, when viewing the nav bar, then the user's avatar and name are visible with a sign-out option.
- [ ] AC 10: Given the sign-in page at `/en/sign-in`, when switching language to FR, then the page displays at `/fr/sign-in` with French UI strings.
- [ ] AC 11: Given a mobile viewport, when opening the nav drawer while authenticated, then user info and sign-out are accessible.

#### Protected Routes (Pattern Ready)
- [ ] AC 12: Given a protected route is defined in middleware, when an unauthenticated user visits that route, then they are redirected to `/[locale]/sign-in` with the original URL as `callbackUrl`.
- [ ] AC 13: Given successful sign-in with a `callbackUrl`, when OAuth completes, then the user is redirected back to the original protected route.

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| drizzle-orm | ^0.38 | Type-safe ORM |
| @libsql/client | ^0.14 | Turso database driver |
| drizzle-kit | ^0.30 | Schema migrations (dev) |
| next-auth | ^5 (beta) | Authentication |
| @auth/drizzle-adapter | ^1 | Auth.js ↔ Drizzle integration |

## Notes

### One-Time Manual Setup (Before First Dev Session)

1. **Install Turso CLI**: `curl -sSfL https://get.tur.so/install.sh | bash` (or `brew install tursodatabase/tap/turso` on macOS)
2. **Login to Turso**: `turso auth login`
3. **Create database**: `turso db create nimble-tools`
4. **Get credentials**: `turso db show nimble-tools --url` and `turso db tokens create nimble-tools`
5. **Register OAuth apps** (GitHub, Google, Discord) — follow docs in Task 10
6. **Add all secrets to `.env.local`**

After this setup, all development is AI-driven via code changes and CLI commands.

### AI Development Workflow

Once foundation is in place:
- **Schema changes**: Edit `src/lib/db/schema.ts` → run `npx drizzle-kit push`
- **Query data**: Use Drizzle ORM in any Server Component or API route
- **Auth checks**: Use `auth()` or `requireAuth()` helpers
- **No dashboard needed**: Everything is code or CLI

### Future Table Additions

When Character Sheets spec is implemented, add to `schema.ts`:

```typescript
export const characters = sqliteTable('characters', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  classId: text('class_id').notNull(),
  // ... more fields
  createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).default(sql`CURRENT_TIMESTAMP`),
});
```

The `userId` foreign key ensures users only access their own characters.

### Security Considerations

- **OAuth only** — No password storage, no password reset flows, no credential stuffing risk
- **Database sessions** — Revocable, server-validated on every request
- **HTTPS enforced** — Vercel handles this automatically
- **CSRF protection** — Built into Auth.js
- **No sensitive data exposure** — Session only includes id, name, email, image

### Fallback Behavior

- If OAuth provider is unavailable, user sees error on provider's site (not our problem)
- If Turso is unavailable, auth fails gracefully — app remains usable for read-only content (existing MVP functionality)
- Session expiry handled automatically by Auth.js — user re-authenticates transparently
