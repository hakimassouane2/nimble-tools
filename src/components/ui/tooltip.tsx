"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

type TooltipProps = {
  content: string;
  children: React.ReactNode;
};

export function Tooltip({ content, children }: TooltipProps) {
  const [show, setShow] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0, above: true });
  const ref = useRef<HTMLSpanElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleEnter = useCallback(() => {
    if (!content || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const above = rect.top > 120;
    setCoords({
      x: rect.left + rect.width / 2,
      y: above ? rect.top - 8 : rect.bottom + 8,
      above,
    });
    setShow(true);
  }, [content]);

  if (!content) return <>{children}</>;

  return (
    <span
      ref={ref}
      className="inline-flex"
      onMouseEnter={handleEnter}
      onMouseLeave={() => setShow(false)}
      onFocus={handleEnter}
      onBlur={() => setShow(false)}
      tabIndex={0}
    >
      {children}
      {show &&
        mounted &&
        createPortal(
          <span
            role="tooltip"
            style={{
              position: "fixed",
              left: coords.x,
              top: coords.above ? coords.y : undefined,
              bottom: coords.above ? undefined : `calc(100vh - ${coords.y}px)`,
              transform: coords.above
                ? "translate(-50%, -100%)"
                : "translate(-50%, 0)",
            }}
            className="z-[99999] w-56 rounded-lg border border-border bg-background px-3 py-2 text-xs leading-relaxed text-foreground shadow-lg pointer-events-none"
          >
            {content}
          </span>,
          document.body,
        )}
    </span>
  );
}
