/**
 * Floor-by-floor stacking diagram, built in code. Drawn as seen from Sixth Street:
 * North Tower on the left, South Tower on the right, joined by a ~14-storey core.
 * North Tower: 22 floors numbered 1–12, 14–23 (no 13); Level 23 is the venue. Drawn at 2/3 the South Tower's width.
 * South Tower: 12 floors + roof terrace.
 * Basement: one level running under both towers and the core.
 */
type Use =
  | "lobby"
  | "amenity"
  | "hotel"
  | "residences"
  | "penthouses"
  | "venue"
  | "roof"
  | "basement"
  | "core";

const USES: Record<Use, { label: string; cls: string }> = {
  venue: { label: "Event venue", cls: "bg-fire/80" },
  penthouses: { label: "Penthouses (12, for sale)", cls: "bg-ink/85" },
  residences: { label: "Residences", cls: "bg-ink/40" },
  hotel: { label: "Hotel", cls: "bg-[#2a3552]" },
  amenity: { label: "Amenity", cls: "bg-[#1a2238]" },
  lobby: { label: "Lobby & fitness", cls: "bg-[#141a2b]" },
  roof: { label: "Roof terrace", cls: "border border-dashed border-fire/70 bg-transparent" },
  core: {
    label: "Elevator & mechanical core",
    cls: "bg-[repeating-linear-gradient(135deg,#343a4c_0_5px,#252a38_5px_10px)]",
  },
  basement: { label: "Basement · F&B, back of house", cls: "bg-[#3a302c]" },
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
const CORE_STOREYS = 14;

/*
 * Layout: [labels | North bars] [core] [South bars | labels].
 * Both tower columns start from a 2.5rem basis (the label column: w-7 + gap-3) and share the
 * remaining width 2:3, so the North Tower's bars are exactly 2/3 the South Tower's.
 * Row height and gap are CSS variables so the core can be sized in storeys.
 */
const ROW_GAP = 3;

function floorTag(level: number, use: Use) {
  if (use === "roof") return "RF";
  if (use === "basement") return "B1";
  return `L${level}`;
}

function Floor({ level, use, labelSide = "left" }: { level: number; use: Use; labelSide?: "left" | "right" }) {
  const tag = floorTag(level, use);
  return (
    <li
      className={`flex items-center gap-3 ${labelSide === "right" ? "flex-row-reverse" : ""}`}
      aria-label={`${tag}: ${USES[use].label}`}
    >
      <span
        className={`w-7 shrink-0 text-[10px] tabular-nums tracking-[0.1em] text-muted ${
          labelSide === "right" ? "text-left" : "text-right"
        }`}
      >
        {tag}
      </span>
      <span className={`h-(--row) flex-1 ${USES[use].cls}`} />
    </li>
  );
}

export function StackingPlan({ note }: { note: string }) {
  const legend: Use[] = ["venue", "penthouses", "residences", "hotel", "amenity", "lobby", "roof", "core", "basement"];
  const coreHeight = `calc(var(--row) * ${CORE_STOREYS} + ${(CORE_STOREYS - 1) * ROW_GAP}px)`;
  return (
    <figure className="[--core:1.5rem] [--row:14px] md:[--core:2.5rem] md:[--row:18px]">
      <div className="flex items-end">
        <ol aria-label="North Tower" className="flex min-w-0 flex-[2_1_2.5rem] flex-col" style={{ gap: ROW_GAP }}>
          {north.map((l) => (
            <Floor key={l} level={l} use={northUse(l)} />
          ))}
        </ol>
        <div
          role="img"
          aria-label={`Elevator and mechanical core, about ${CORE_STOREYS} storeys, connecting the towers`}
          className={`w-(--core) shrink-0 ${USES.core.cls}`}
          style={{ height: coreHeight }}
        />
        <ol aria-label="South Tower" className="flex min-w-0 flex-[3_1_2.5rem] flex-col" style={{ gap: ROW_GAP }}>
          {south.map((l) => (
            <Floor key={l} level={l} use={southUse(l)} labelSide="right" />
          ))}
        </ol>
      </div>
      {/* The basement runs under both towers and the core: from the North Tower's left bar edge to the South Tower's right. */}
      <ol aria-label="Basement, under both towers" className="pr-10" style={{ marginTop: ROW_GAP }}>
        <Floor level={0} use="basement" />
      </ol>
      <div className="flex">
        <p className="label mt-5 min-w-0 flex-[2_1_2.5rem] pl-10 text-muted">North Tower · 1971</p>
        <div className="w-(--core) shrink-0" />
        <p className="label mt-5 min-w-0 flex-[3_1_2.5rem] pr-10 text-muted">South Tower · 1966</p>
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
