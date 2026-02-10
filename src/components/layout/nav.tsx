"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { LanguageToggle } from "./language-toggle";
import { ThemeToggle } from "./theme-toggle";
import { MobileNav } from "./mobile-nav";
import { SignInButton } from "@/components/auth/sign-in-button";
import { UserMenu } from "@/components/auth/user-menu";
import { useSession } from "next-auth/react";

const navLinks = [
  { href: "/classes", key: "classes" },
  { href: "/spells", key: "spells" },
  { href: "/equipment", key: "equipment" },
  { href: "/ancestries", key: "ancestries" },
  { href: "/backgrounds", key: "backgrounds" },
  { href: "/conditions", key: "conditions" },
  { href: "/rules", key: "rules" },
] as const;

export function Nav() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const { data: session, status } = useSession();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold text-accent">
          {t("home") === "Accueil" ? "Nimble Tools" : "Nimble Tools"}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? "bg-surface text-accent"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/search"
            className="rounded-md p-2 text-muted transition-colors hover:text-foreground"
            aria-label={t("search")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </Link>
          <ThemeToggle />
          <LanguageToggle />
          {/* Auth UI - desktop only, mobile handled in MobileNav */}
          <div className="hidden md:block">
            {status === "loading" ? (
              <div className="h-8 w-8 animate-pulse rounded-full bg-surface" />
            ) : session ? (
              <UserMenu />
            ) : (
              <SignInButton />
            )}
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
