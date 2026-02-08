import type { ReactNode } from "react";

type CardProps = {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  href?: string;
};

export function Card({ title, subtitle, children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-border bg-surface p-4 transition-colors hover:bg-surface-hover ${className}`}
    >
      {title && (
        <div className="mb-2">
          <h3 className="font-semibold text-foreground">{title}</h3>
          {subtitle && (
            <p className="text-sm text-muted">{subtitle}</p>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
