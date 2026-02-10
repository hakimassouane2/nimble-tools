"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

function FranceFlag() {
  return (
    <svg
      width="22"
      height="16"
      viewBox="0 0 900 600"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="rounded-sm shadow-sm"
      aria-hidden="true"
    >
      <rect width="900" height="600" fill="#fff" />
      <rect width="300" height="600" fill="#002654" />
      <rect x="600" width="300" height="600" fill="#CE1126" />
    </svg>
  );
}

function UKFlag() {
  return (
    <svg
      width="22"
      height="16"
      viewBox="0 0 60 30"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="rounded-sm shadow-sm"
      aria-hidden="true"
    >
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,3 L54,30 M60,27 L6,0" stroke="#C8102E" strokeWidth="2" />
      <path d="M0,27 L54,0 M60,3 L6,30" stroke="#C8102E" strokeWidth="2" />
      <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

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
      className="rounded-md p-2 text-muted transition-opacity hover:opacity-80"
      aria-label={locale === "en" ? "Passer au français" : "Switch to English"}
    >
      {locale === "en" ? <FranceFlag /> : <UKFlag />}
    </button>
  );
}
