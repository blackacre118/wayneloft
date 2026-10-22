export function Label({
  children,
  tone = "muted",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "muted" | "fire";
  className?: string;
}) {
  return <p className={`label ${tone === "fire" ? "text-fire" : "text-muted"} ${className}`}>{children}</p>;
}
