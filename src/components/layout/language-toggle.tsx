"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function toggleLocale() {
    const next = locale === "en" ? "fr" : "en";
    router.replace(pathname, { locale: next });
  }

  return (
    <button
      onClick={toggleLocale}
      className="rounded-md border border-border px-2.5 py-1 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent"
      aria-label={locale === "en" ? "Passer au français" : "Switch to English"}
    >
      {locale === "en" ? "FR" : "EN"}
    </button>
  );
}
