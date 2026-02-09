import { getTranslations, setRequestLocale } from "next-intl/server";
import { SignUpForm } from "./sign-up-form";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations("auth");
  return {
    title: t("signUp"),
  };
}

export default async function SignUpPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("auth");

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="w-full max-w-sm rounded-lg border border-border bg-surface p-6">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-foreground">{t("signUp")}</h1>
          <p className="mt-2 text-sm text-muted">{t("signUpDescription")}</p>
        </div>

        <SignUpForm />

        <p className="mt-4 text-center text-sm text-muted">
          {t("hasAccount")}{" "}
          <a href={`/${locale}/sign-in`} className="text-accent hover:underline">
            {t("signIn")}
          </a>
        </p>
      </div>
    </div>
  );
}
