import type { SpellSchool, Rarity } from "@/data/types";

type BadgeProps = {
  children: React.ReactNode;
  variant?:
    | "default"
    | "fire"
    | "ice"
    | "lightning"
    | "wind"
    | "radiant"
    | "necrotic"
    | "utility"
    | "common"
    | "uncommon"
    | "rare"
    | "very-rare"
    | "legendary";
  className?: string;
};

const variantClasses: Record<string, string> = {
  default: "bg-border text-foreground",
  fire: "bg-fire/20 text-fire",
  ice: "bg-ice/20 text-ice",
  lightning: "bg-lightning/20 text-lightning",
  wind: "bg-wind/20 text-wind",
  radiant: "bg-radiant/20 text-radiant",
  necrotic: "bg-necrotic/20 text-necrotic",
  utility: "bg-utility/20 text-utility",
  common: "bg-[var(--color-rarity-common)]/20 text-[var(--color-rarity-common)]",
  uncommon: "bg-[var(--color-rarity-uncommon)]/20 text-[var(--color-rarity-uncommon)]",
  rare: "bg-[var(--color-rarity-rare)]/20 text-[var(--color-rarity-rare)]",
  "very-rare": "bg-[var(--color-rarity-very-rare)]/20 text-[var(--color-rarity-very-rare)]",
  legendary: "bg-[var(--color-rarity-legendary)]/20 text-[var(--color-rarity-legendary)]",
};

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${variantClasses[variant] || variantClasses.default} ${className}`}
    >
      {children}
    </span>
  );
}

export function schoolBadgeVariant(school: SpellSchool): BadgeProps["variant"] {
  return school;
}

export function rarityBadgeVariant(rarity: Rarity): BadgeProps["variant"] {
  return rarity;
}
