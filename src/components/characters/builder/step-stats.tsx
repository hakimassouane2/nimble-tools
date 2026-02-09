"use client";

import { useState, useCallback, useRef } from "react";
import { useTranslations } from "next-intl";
import type { Stat, HeroClass } from "@/data/types";
import { statArrayOptions } from "@/data/stat-arrays";
import { t as tl, tStat } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const STATS: Stat[] = ["STR", "DEX", "INT", "WIL"];

type Props = {
  locale: string;
  classData: HeroClass;
  statArrayType: string | null;
  stats: Record<Stat, number> | null;
  onUpdate: (statArrayType: string, stats: Record<Stat, number>) => void;
};

export function StepStats({
  locale,
  classData,
  statArrayType,
  stats,
  onUpdate,
}: Props) {
  const t = useTranslations("builder");

  const [selectedArray, setSelectedArray] = useState(statArrayType ?? "");
  const [assignments, setAssignments] = useState<Record<Stat, string>>(() => {
    if (stats) {
      const result: Record<Stat, string> = { STR: "", DEX: "", INT: "", WIL: "" };
      for (const s of STATS) {
        result[s] = String(stats[s]);
      }
      return result;
    }
    return { STR: "", DEX: "", INT: "", WIL: "" };
  });

  const arrayOption = statArrayOptions.find((o) => o.id === selectedArray);

  // When array changes, reset assignments
  function handleArraySelect(id: string) {
    setSelectedArray(id);
    setAssignments({ STR: "", DEX: "", INT: "", WIL: "" });
  }

  // Keep a stable ref to onUpdate to avoid stale closures
  const onUpdateRef = useRef(onUpdate);
  onUpdateRef.current = onUpdate;

  const tryNotifyParent = useCallback(
    (next: Record<Stat, string>, arrId: string) => {
      const opt = statArrayOptions.find((o) => o.id === arrId);
      if (!opt) return;
      const allAssigned = STATS.every((s) => next[s] !== "");
      if (!allAssigned) return;

      const assignedValues = STATS.map((s) => Number(next[s]));
      const expectedSorted = [...opt.values].sort((a, b) => b - a);
      const assignedSorted = [...assignedValues].sort((a, b) => b - a);
      const isValid = expectedSorted.every((v, i) => v === assignedSorted[i]);

      if (isValid) {
        const statsRecord = {} as Record<Stat, number>;
        for (const s of STATS) {
          statsRecord[s] = Number(next[s]);
        }
        onUpdateRef.current(arrId, statsRecord);
      }
    },
    []
  );

  function handleStatAssign(stat: Stat, value: string) {
    setAssignments((prev) => {
      const next = { ...prev, [stat]: value };
      tryNotifyParent(next, selectedArray);
      return next;
    });
  }

  // Available values for a given stat dropdown
  function getAvailableValues(stat: Stat): number[] {
    if (!arrayOption) return [];
    const currentVal = assignments[stat];
    const otherUsed = STATS.filter((s) => s !== stat)
      .map((s) => assignments[s])
      .filter((v) => v !== "");

    // Count how many times each value appears in the array
    const available: number[] = [];
    const valueCounts = new Map<number, number>();
    for (const v of arrayOption.values) {
      valueCounts.set(v, (valueCounts.get(v) ?? 0) + 1);
    }
    for (const v of otherUsed) {
      const num = Number(v);
      const count = valueCounts.get(num) ?? 0;
      if (count > 0) valueCounts.set(num, count - 1);
    }

    for (const [val, count] of valueCounts) {
      if (count > 0 || String(val) === currentVal) {
        if (!available.includes(val)) available.push(val);
      }
    }
    return available.sort((a, b) => b - a);
  }

  return (
    <div>
      <h2 className="mb-1 text-lg font-semibold text-foreground">
        {t("statArrayTitle")}
      </h2>
      <p className="mb-4 text-sm text-muted">{t("statArrayDesc")}</p>

      {/* Array selection */}
      <div className="mb-6 grid gap-3 sm:grid-cols-3">
        {statArrayOptions.map((opt) => (
          <button
            key={opt.id}
            onClick={() => handleArraySelect(opt.id)}
            className={`rounded-lg border p-3 text-left transition-colors ${
              selectedArray === opt.id
                ? "border-accent bg-accent/10"
                : "border-border bg-surface hover:bg-surface-hover"
            }`}
          >
            <h3 className="mb-1 font-semibold text-foreground">
              {tl(opt.name, locale)}
            </h3>
            <div className="flex gap-2">
              {opt.values.map((v, i) => (
                <span
                  key={i}
                  className={`rounded px-2 py-0.5 text-sm font-mono ${
                    v > 0
                      ? "bg-green-500/10 text-green-400"
                      : v < 0
                        ? "bg-red-500/10 text-red-400"
                        : "bg-border text-muted"
                  }`}
                >
                  {v > 0 ? `+${v}` : v}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>

      {/* Stat assignment */}
      {arrayOption && (
        <div>
          <h3 className="mb-3 font-medium text-foreground">
            {t("assignStats")}
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {STATS.map((stat) => {
              const isKeyStat = classData.keyStats.includes(stat);
              const availableVals = getAvailableValues(stat);

              return (
                <div
                  key={stat}
                  className="flex items-center gap-3 rounded-lg border border-border bg-surface p-3"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground">
                        {tStat(stat, locale)}
                      </span>
                      {isKeyStat && (
                        <Badge variant="default">
                          {t("keyStatHint")}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <select
                    value={assignments[stat]}
                    onChange={(e) => handleStatAssign(stat, e.target.value)}
                    className="rounded-md border border-border bg-background px-3 py-1.5 text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  >
                    <option value="">—</option>
                    {availableVals.map((v) => (
                      <option key={v} value={String(v)}>
                        {v > 0 ? `+${v}` : v}
                      </option>
                    ))}
                  </select>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
