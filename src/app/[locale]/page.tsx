import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

const sections = [
  { href: "/classes", key: "classes", descKey: "classesDesc" },
  { href: "/spells", key: "spells", descKey: "spellsDesc" },
  { href: "/equipment", key: "equipment", descKey: "equipmentDesc" },
  { href: "/ancestries", key: "ancestries", descKey: "ancestriesDesc" },
  { href: "/backgrounds", key: "backgrounds", descKey: "backgroundsDesc" },
  { href: "/conditions", key: "conditions", descKey: "conditionsDesc" },
  { href: "/rules", key: "rules", descKey: "rulesDesc" },
] as const;

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeContent />;
}

function HomeContent() {
  const t = useTranslations("home");
  const nav = useTranslations("nav");

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-accent">Nimble Tools</h1>
        <p className="mt-2 text-muted">{t("subtitle")}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((s) => (
          <Link
            key={s.key}
            href={s.href}
            className="group rounded-lg border border-border bg-surface p-5 transition-colors hover:bg-surface-hover"
          >
            <h2 className="text-lg font-semibold text-foreground group-hover:text-accent">
              {nav(s.key)}
            </h2>
            <p className="mt-1 text-sm text-muted">{t(s.descKey)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
