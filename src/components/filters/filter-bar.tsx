"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

type FilterOption = {
  value: string;
  label: string;
};

type FilterBarProps = {
  paramKey: string;
  options: FilterOption[];
  allLabel?: string;
};

export function FilterBar({ paramKey, options, allLabel = "All" }: FilterBarProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const active = searchParams.get(paramKey) || "";

  function select(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(paramKey, value);
    } else {
      params.delete(paramKey);
    }
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname);
  }

  return (
    <div className="flex flex-wrap gap-1.5">
      <button
        onClick={() => select("")}
        className={`rounded-full px-3 py-1 text-sm transition-colors ${
          !active
            ? "bg-accent text-background font-medium"
            : "bg-surface text-muted hover:text-foreground"
        }`}
      >
        {allLabel}
      </button>
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => select(opt.value)}
          className={`rounded-full px-3 py-1 text-sm transition-colors ${
            active === opt.value
              ? "bg-accent text-background font-medium"
              : "bg-surface text-muted hover:text-foreground"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
