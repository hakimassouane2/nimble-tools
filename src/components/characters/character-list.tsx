"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { heroClasses } from "@/data/classes";
import { ancestries } from "@/data/ancestries";
import { t as tl } from "@/lib/utils";
import { Link } from "@/i18n/navigation";

type CharacterSummary = {
  id: string;
  name: string;
  classId: string;
  ancestryId: string;
  level: number;
  createdAt: string;
};

type Props = {
  locale: string;
  characters: CharacterSummary[];
};

export function CharacterList({ locale, characters }: Props) {
  const t = useTranslations("characters");
  const router = useRouter();
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleDelete(id: string) {
    if (!confirm(t("confirmDelete"))) return;

    setDeletingId(id);
    setError(null);
    try {
      const res = await fetch(`/api/characters/${id}`, { method: "DELETE" });
      if (res.ok) {
        router.refresh();
      } else {
        const data = await res.json().catch(() => null);
        setError(data?.error || t("deleteError"));
      }
    } catch {
      setError(t("deleteError"));
    } finally {
      setDeletingId(null);
    }
  }

  function getClassName(classId: string): string {
    const cls = heroClasses.find((c) => c.id === classId);
    return cls ? tl(cls.name, locale) : classId;
  }

  function getAncestryName(ancestryId: string): string {
    const ancestry = ancestries.find((a) => a.id === ancestryId);
    return ancestry ? tl(ancestry.name, locale) : ancestryId;
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">{t("title")}</h1>
        <Link
          href="/characters/new"
          className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent/90"
        >
          {t("createNew")}
        </Link>
      </div>

      {error && (
        <p className="mb-4 rounded-md bg-red-500/10 px-4 py-2 text-sm text-red-500">
          {error}
        </p>
      )}

      {characters.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-surface py-16">
          <p className="mb-4 text-muted">{t("noCharacters")}</p>
          <Link
            href="/characters/new"
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent/90"
          >
            {t("createFirst")}
          </Link>
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {characters.map((char) => (
            <div
              key={char.id}
              className="rounded-lg border border-border bg-surface p-4 transition-colors hover:bg-surface-hover"
            >
              <Link href={`/characters/${char.id}`}>
                <h3 className="font-semibold text-foreground">{char.name}</h3>
                <p className="text-sm text-muted">
                  {t("level", { level: char.level ?? 1 })}{" "}
                  {getClassName(char.classId)} · {getAncestryName(char.ancestryId)}
                </p>
                {char.createdAt && (
                  <p className="mt-1 text-xs text-muted">
                    {t("createdAt", {
                      date: new Date(char.createdAt).toLocaleDateString(
                        locale === "fr" ? "fr-CA" : "en-US"
                      ),
                    })}
                  </p>
                )}
              </Link>
              <div className="mt-3 flex gap-2">
                <Link
                  href={`/characters/${char.id}`}
                  className="rounded-md border border-border px-3 py-1 text-xs font-medium text-muted transition-colors hover:text-foreground"
                >
                  {t("viewDetails")}
                </Link>
                <button
                  onClick={() => handleDelete(char.id)}
                  disabled={deletingId === char.id}
                  className="rounded-md border border-border px-3 py-1 text-xs font-medium text-red-400 transition-colors hover:bg-red-500/10 disabled:opacity-50"
                >
                  {deletingId === char.id ? t("deleting") : t("delete")}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
