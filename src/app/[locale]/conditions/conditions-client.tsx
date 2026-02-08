"use client";

import { useState } from "react";
import type { Condition } from "@/data/types";
import { t } from "@/lib/utils";
import { useTranslations } from "next-intl";

type Props = {
  major: Condition[];
  minor: Condition[];
  locale: string;
};

export function ConditionsClient({ major, minor, locale }: Props) {
  const [query, setQuery] = useState("");
  const tc = useTranslations("conditions");
  const common = useTranslations("common");
  const q = query.toLowerCase();

  const filteredMajor = major.filter((c) =>
    t(c.name, locale).toLowerCase().includes(q)
  );
  const filteredMinor = minor.filter((c) =>
    t(c.name, locale).toLowerCase().includes(q)
  );

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={common("search")}
        className="w-full rounded-lg border border-border bg-surface py-2 pl-3 pr-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
      />

      {filteredMajor.length === 0 && filteredMinor.length === 0 && (
        <p className="text-muted">{common("noResults")}</p>
      )}

      <div className="grid gap-3 sm:grid-cols-2">
        {filteredMajor.map((c) => (
          <ConditionCard key={c.id} condition={c} locale={locale} />
        ))}
      </div>

      {filteredMinor.length > 0 && (
        <>
          <h2 className="text-lg font-semibold text-muted">
            {tc("minorStatuses")}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {filteredMinor.map((c) => (
              <ConditionCard key={c.id} condition={c} locale={locale} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

function ConditionCard({
  condition,
  locale,
}: {
  condition: Condition;
  locale: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-surface p-4">
      <h3 className="font-semibold text-foreground">
        {t(condition.name, locale)}
      </h3>
      <p className="mt-1 text-sm text-muted">
        {t(condition.description, locale)}
      </p>
      {condition.effects.length > 0 && (
        <ul className="mt-2 space-y-1">
          {condition.effects.map((effect, i) => (
            <li key={i} className="text-sm text-foreground">
              <span className="text-accent mr-1.5">&#8226;</span>
              {t(effect, locale)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
