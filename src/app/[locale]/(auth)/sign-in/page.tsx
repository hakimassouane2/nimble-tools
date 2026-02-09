import { getTranslations, setRequestLocale } from "next-intl/server";
import { SignInForm } from "./sign-in-form";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations("auth");
  return {
    title: t("signIn"),
  };
}

export default async function SignInPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("auth");

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="w-full max-w-sm rounded-lg border border-border bg-surface p-6">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-foreground">{t("signIn")}</h1>
          <p className="mt-2 text-sm text-muted">{t("signInDescription")}</p>
        </div>

        <SignInForm />

        <p className="mt-4 text-center text-sm text-muted">
          {t("noAccount")}{" "}
          <a href={`/${locale}/sign-up`} className="text-accent hover:underline">
            {t("signUp")}
          </a>
        </p>
      </div>
    </div>
  );
}
