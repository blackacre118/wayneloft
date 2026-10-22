export function FactList({
  items,
  className = "",
}: {
  items: readonly { k: string; v: string }[];
  className?: string;
}) {
  return (
    <dl className={`border-t border-line ${className}`}>
      {items.map((f) => (
        <div key={f.k} className="flex justify-between gap-6 border-b border-line py-[18px] text-sm">
          <dt className="text-muted">{f.k}</dt>
          <dd className="text-right">{f.v}</dd>
        </div>
      ))}
    </dl>
  );
}
