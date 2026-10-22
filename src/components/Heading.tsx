/** Render `*word*` segments as muted <em>. */
function inline(line: string) {
  return line.split(/(\*[^*]+\*)/).map((part, i) =>
    part.startsWith("*") && part.endsWith("*") ? <em key={i}>{part.slice(1, -1)}</em> : part,
  );
}

/**
 * Headline with an optional muted (em) final line, per the reference: "Arrive / after dark."
 * Wrap words in *asterisks* to mute them inline instead.
 */
export function Heading({
  lines,
  as: Tag = "h2",
  className = "",
  muted = "last",
}: {
  lines: readonly string[];
  as?: "h1" | "h2" | "h3";
  className?: string;
  /** Which line renders muted: the last one (default), a specific index, or none. */
  muted?: "last" | "none" | number;
}) {
  const mutedIndex = muted === "last" ? lines.length - 1 : muted === "none" ? -1 : muted;
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block">
          {i === mutedIndex && lines.length > 1 ? <em>{line}</em> : inline(line)}
        </span>
      ))}
    </Tag>
  );
}
