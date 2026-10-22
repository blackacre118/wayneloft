export function StatRow({ stats }: { stats: readonly { value: string; label: string }[] }) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line pt-8 sm:grid-cols-3 lg:grid-cols-5">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col-reverse">
          <dt className="mt-2 text-xs uppercase tracking-[0.2em] text-muted">{s.label}</dt>
          <dd className="font-display text-[clamp(2.25rem,4vw,2.75rem)] font-light leading-none">{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}
