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

      <div className="rounded-lg border border-border bg-surface p-5 text-center">
        <h2 className="text-lg font-semibold text-foreground">
          {t("characterSheetTitle")}
        </h2>
        <p className="mt-1 text-sm text-muted">{t("characterSheetDesc")}</p>
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          <a
            href="/fiche-de-perso-nimble.pdf"
            download
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover hover:text-accent"
          >
            <DownloadIcon />
            {t("characterSheetFr")}
          </a>
          <a
            href="/nimble-character-sheet.pdf"
            download
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover hover:text-accent"
          >
            <DownloadIcon />
            {t("characterSheetEn")}
          </a>
        </div>
      </div>
    </div>
  );
}

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
