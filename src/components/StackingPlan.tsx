/**
 * Floor-by-floor stacking diagram, built in code.
 * North Tower: 22 floors numbered 1–12, 14–23 (no 13); Level 23 is the venue.
 * South Tower: 12 floors + roof terrace.
 */
type Use = "lobby" | "amenity" | "hotel" | "residences" | "penthouses" | "venue" | "roof";

const USES: Record<Use, { label: string; cls: string }> = {
  venue: { label: "Event venue", cls: "bg-fire/80" },
  penthouses: { label: "Penthouses (12, for sale)", cls: "bg-ink/85" },
  residences: { label: "Residences", cls: "bg-ink/40" },
  hotel: { label: "Hotel", cls: "bg-[#2a3552]" },
  amenity: { label: "Amenity", cls: "bg-[#1a2238]" },
  lobby: { label: "Lobby & fitness", cls: "bg-[#141a2b]" },
  roof: { label: "Roof terrace", cls: "border border-dashed border-fire/70 bg-transparent" },
};

// Indicative split of upper North Tower floors.
function northUse(level: number): Use {
  if (level === 23) return "venue";
  if (level >= 20) return "penthouses";
  if (level >= 12) return "residences";
  if (level >= 3) return "hotel";
  if (level === 2) return "amenity";
  return "lobby";
}

function southUse(level: number): Use {
  if (level === 13) return "roof";
  if (level >= 3) return "residences";
  if (level === 2) return "amenity";
  return "lobby";
}

const north = Array.from({ length: 23 }, (_, i) => 23 - i).filter((l) => l !== 13);
const south = Array.from({ length: 13 }, (_, i) => 13 - i);

function Floor({ level, use }: { level: number; use: Use }) {
  return (
    <li className="flex items-center gap-3" aria-label={`Level ${level}: ${USES[use].label}`}>
      <span className="w-7 shrink-0 text-right text-[10px] tabular-nums tracking-[0.1em] text-muted">
        {use === "roof" ? "RF" : `L${level}`}
      </span>
      <span className={`h-[14px] flex-1 md:h-[18px] ${USES[use].cls}`} />
    </li>
  );
}

export function StackingPlan({ note }: { note: string }) {
  const legend: Use[] = ["venue", "penthouses", "residences", "hotel", "amenity", "lobby", "roof"];
  return (
    <figure>
      <div className="grid grid-cols-2 items-end gap-6 md:gap-10">
        <div>
          <ol className="flex flex-col gap-[3px]">
            {south.map((l) => (
              <Floor key={l} level={l} use={southUse(l)} />
            ))}
          </ol>
          <p className="label mt-5 pl-10 text-muted">South Tower · 1966</p>
        </div>
        <div>
          <ol className="flex flex-col gap-[3px]">
            {north.map((l) => (
              <Floor key={l} level={l} use={northUse(l)} />
            ))}
          </ol>
          <p className="label mt-5 pl-10 text-muted">North Tower · 1971</p>
        </div>
      </div>
      <figcaption className="mt-12 border-t border-line pt-8">
        <ul className="grid grid-cols-1 gap-x-8 gap-y-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
          {legend.map((u) => (
            <li key={u} className="flex items-center gap-3">
              <span aria-hidden className={`h-3 w-6 shrink-0 ${USES[u].cls}`} />
              {USES[u].label}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs leading-relaxed text-muted">{note}</p>
      </figcaption>
    </figure>
  );
}
