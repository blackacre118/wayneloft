/** Dark panel standing in for a rendering. `label` names the rendering file to drop in later. */
export function Placeholder({ label, className = "" }: { label?: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={label ? `Rendering to come: ${label.replace(/^Render · /, "")}` : "Rendering to come"}
      className={`placeholder-panel flex items-end p-5 md:p-6 ${className}`}
    >
      {label ? (
        <span className="relative z-10 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">{label}</span>
      ) : null}
    </div>
  );
}
