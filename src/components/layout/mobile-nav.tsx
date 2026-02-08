"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

const navLinks = [
  { href: "/", key: "home" },
  { href: "/classes", key: "classes" },
  { href: "/spells", key: "spells" },
  { href: "/equipment", key: "equipment" },
  { href: "/ancestries", key: "ancestries" },
  { href: "/backgrounds", key: "backgrounds" },
  { href: "/conditions", key: "conditions" },
  { href: "/rules", key: "rules" },
  { href: "/search", key: "search" },
] as const;

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("nav");
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="rounded-md p-2 text-muted transition-colors hover:text-foreground"
        aria-label="Menu"
        aria-expanded={open}
      >
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        )}
      </button>

      {open && (
        <>
        <div
          className="fixed inset-0 top-14 z-40"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
        <div className="fixed inset-x-0 top-14 z-50 border-b border-border bg-background p-4" role="dialog" aria-modal="true">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2.5 text-sm transition-colors ${
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href))
                    ? "bg-surface text-accent"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
          </nav>
        </div>
        </>
      )}
    </div>
  );
}
