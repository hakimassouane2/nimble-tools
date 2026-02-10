"use client";

import { signOut, useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useState, useRef, useEffect } from "react";

export function UserMenu() {
  const { data: session, status } = useSession();
  const t = useTranslations("auth");
  const tNav = useTranslations("nav");
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (status === "loading") {
    return (
      <div className="h-8 w-8 animate-pulse rounded-full bg-surface" />
    );
  }

  if (!session?.user) {
    return null;
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-md p-1 transition-colors hover:bg-surface"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {session.user.image ? (
          <img
            src={session.user.image}
            alt={session.user.name ?? "User"}
            className="h-8 w-8 rounded-full"
          />
        ) : (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-medium text-background">
            {session.user.name?.charAt(0).toUpperCase() ?? "U"}
          </div>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 rounded-md border border-border bg-background py-1 shadow-lg">
          <div className="border-b border-border px-4 py-2">
            <p className="truncate text-sm font-medium capitalize text-foreground">
              {session.user.name}
            </p>
            <p className="truncate text-xs text-muted">
              {session.user.email}
            </p>
          </div>
          <Link
            href="/characters"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 text-sm text-foreground transition-colors hover:bg-surface"
          >
            {tNav("characters")}
          </Link>
          <div className="border-t border-border">
            <button
              onClick={() => signOut()}
              className="w-full px-4 py-2 text-left text-sm text-foreground transition-colors hover:bg-surface"
            >
              {t("signOut")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
