import { Fragment } from "react";

/**
 * Rend un sous-ensemble léger de markdown utilisé dans les descriptions de sorts :
 * - `**gras**`
 * - sauts de ligne via `<br>` (ou `<br/>`) et retours chariot. `<br><br>` produit une ligne vide.
 */
export function RichText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const lines = text.split(/<br\s*\/?>|\n/);
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {renderBold(line)}
        </Fragment>
      ))}
    </span>
  );
}

function renderBold(line: string) {
  const parts = line.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    const m = part.match(/^\*\*([^*]+)\*\*$/);
    if (m) return <strong key={i}>{m[1]}</strong>;
    return <Fragment key={i}>{part}</Fragment>;
  });
}
