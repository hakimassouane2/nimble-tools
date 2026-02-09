"use client";

import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";

type SignInButtonProps = {
  className?: string;
};

export function SignInButton({ className }: SignInButtonProps) {
  const t = useTranslations("auth");

  return (
    <button
      onClick={() => signIn()}
      className={`rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-background transition-colors hover:bg-accent/90 ${className ?? ""}`}
    >
      {t("signIn")}
    </button>
  );
}
