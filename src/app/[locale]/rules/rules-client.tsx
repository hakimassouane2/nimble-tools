"use client";

import { useState } from "react";
import type { RulesCategory } from "@/data/types";
import { t } from "@/lib/utils";

type Props = {
  rules: RulesCategory[];
  locale: string;
};

export function RulesClient({ rules, locale }: Props) {
  const [openSections, setOpenSections] = useState<Set<string>>(
    new Set(rules.flatMap((r) => r.sections.map((s) => s.id)))
  );

  function toggle(id: string) {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <>
      {/* Table of contents */}
      <nav className="rounded-lg border border-border bg-surface p-4">
        <h2 className="mb-2 text-sm font-semibold text-muted">Contents</h2>
        <ul className="space-y-1">
          {rules.map((cat) => (
            <li key={cat.id}>
              <a
                href={`#${cat.id}`}
                className="text-sm text-accent hover:underline"
              >
                {t(cat.title, locale)}
              </a>
              <ul className="ml-4 space-y-0.5">
                {cat.sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-xs text-muted hover:text-foreground"
                    >
                      {t(s.title, locale)}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>

      {/* Rules content */}
      {rules.map((cat) => (
        <section key={cat.id} id={cat.id} className="space-y-4">
          <h2 className="text-xl font-bold text-accent">
            {t(cat.title, locale)}
          </h2>
          {cat.sections.map((section) => {
            const isOpen = openSections.has(section.id);
            return (
              <div
                key={section.id}
                id={section.id}
                className="rounded-lg border border-border bg-surface"
              >
                <button
                  onClick={() => toggle(section.id)}
                  className="flex w-full items-center justify-between p-4 text-left"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-semibold text-foreground">
                    {t(section.title, locale)}
                  </h3>
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
                    className={`shrink-0 text-muted transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="border-t border-border/50 p-4">
                    <div
                      className="prose prose-sm max-w-none [--tw-prose-body:var(--color-foreground)] [--tw-prose-headings:var(--color-foreground)] [--tw-prose-bold:var(--color-foreground)] [--tw-prose-bullets:var(--color-foreground)] [--tw-prose-counters:var(--color-muted)]"
                      dangerouslySetInnerHTML={{
                        __html: markdownToHtml(t(section.content, locale)),
                      }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </section>
      ))}
    </>
  );
}

/** Minimal markdown-to-HTML for rules content (bold, line breaks, lists). */
function markdownToHtml(md: string): string {
  return md
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n- /g, "\n<li>")
    .replace(/<li>(.*?)(?=\n|$)/g, "<li>$1</li>")
    .replace(/(<li>.*<\/li>\n?)+/g, (m) => `<ul>${m.replace(/\n/g, "")}</ul>`)
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n/g, "<br/>")
    .replace(/^/, "<p>")
    .replace(/$/, "</p>");
}
