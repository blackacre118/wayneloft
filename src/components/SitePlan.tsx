/**
 * Site plan, drawn in code from the 2025 ALTA/NSPS survey (Nowak & Fraus, N910-01) and oriented like it:
 * the John C. Lodge Freeway (M-10) along the top, Sixth Street across the middle.
 * Four parcels: the main parcel (towers, core, glass pavilion) and Lots A, B and C.
 * Schematic: proportions follow the survey, but it is not a scaled drawing.
 */
const KEY = {
  north: { label: "North Tower · 23 levels", fill: "#7086c4" },
  south: { label: "South Tower · 12 levels", fill: "#ddd5c5" },
  core: { label: "Elevator & utility core", fill: "#e2673f" },
  pavilion: { label: "Glass pavilion · pool, pickleball, tenant amenities", fill: "#79c2a8" },
  ev: { label: "EV charging", fill: "#e9bd4f" },
} as const;

const STREET = "fill-[#1e2840]";
const STREET_TEXT = "fill-ink/70 text-[14px] uppercase tracking-[0.2em]";
const LOT_TEXT = "fill-ink text-[24px] font-light";
const LOT_SUB = "fill-ink/65 text-[12px] uppercase tracking-[0.18em]";
const BUILDING_TEXT = "text-[12px] font-medium uppercase tracking-[0.14em]";

function Lot({ x, y, w, h, name, sub }: { x: number; y: number; w: number; h: number; name: string; sub: string[] }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} className="fill-ink/[0.07] stroke-ink/50" strokeWidth={1.2} strokeDasharray="6 5" />
      <text x={x + 20} y={y + 40} className={LOT_TEXT}>
        {name}
      </text>
      {sub.map((line, i) => (
        <text key={line} x={x + 20} y={y + 64 + i * 18} className={LOT_SUB}>
          {line}
        </text>
      ))}
    </g>
  );
}

export function SitePlan() {
  return (
    <figure>
      <div className="snap-row !snap-none md:mx-0 md:block md:overflow-visible md:px-0">
        <svg
          viewBox="0 0 1000 720"
          role="img"
          aria-labelledby="siteplan-title siteplan-desc"
          className="h-auto w-full min-w-[680px] shrink-0 bg-navy font-sans md:min-w-0"
        >
          <title id="siteplan-title">WAYNE site plan: four parcels, nearly 10 acres</title>
          <desc id="siteplan-desc">
            The John C. Lodge Freeway (M-10) runs along the top of the main parcel. On the main parcel, north of Sixth
            Street, sit the glass pavilion, the 23-level North Tower, the elevator and utility core, and the 12-level
            South Tower. South of Sixth Street: Lot A between Porter and Abbott Streets, Lot B between Abbott and Howard
            Streets, and Lot C between Howard Street and West Lafayette Boulevard above Brooklyn Street, with EV
            charging. The lots are surface parking with future retail and parking structures.
          </desc>

          {/* John C. Lodge Freeway (M-10) along the top */}
          <polygon points="0,74 1000,0 1000,40 0,114" className="fill-[#2a3550]" />
          <line x1="440" y1="61.5" x2="1000" y2="20" className="stroke-ink/25" strokeDasharray="14 12" />
          <text x="60" y="100" transform="rotate(-4.25 60 100)" className="fill-ink/80 text-[14px] uppercase tracking-[0.24em]">
            John C. Lodge Fwy · M-10
          </text>

          {/* Streets */}
          <rect x="0" y="300" width="1000" height="42" className={STREET} />
          <text x="80" y="326" className={STREET_TEXT}>Sixth St</text>
          <rect x="18" y="128" width="32" height="592" className={STREET} />
          <text x="40" y="560" transform="rotate(-90 40 560)" className={STREET_TEXT}>Porter St</text>
          <rect x="328" y="342" width="34" height="378" className={STREET} />
          <text x="351" y="640" transform="rotate(-90 351 640)" className={STREET_TEXT}>Abbott St</text>
          <rect x="662" y="40" width="36" height="680" className={STREET} />
          <text x="686" y="640" transform="rotate(-90 686 640)" className={STREET_TEXT}>Howard St</text>
          <rect x="946" y="300" width="40" height="420" className={STREET} />
          <text x="972" y="660" transform="rotate(-90 972 660)" className={STREET_TEXT}>W Lafayette</text>
          <rect x="698" y="672" width="248" height="40" className={STREET} />
          <text x="720" y="698" className={STREET_TEXT}>Brooklyn St</text>

          {/* Main parcel */}
          <polygon points="62,128 650,84 650,290 62,290" className="fill-ink/[0.08] stroke-fire" strokeWidth={1.6} />
          <text x="80" y="164" className="fill-ink text-[22px] font-light">Main parcel</text>
          <text x="80" y="186" className={LOT_SUB}>~2.76 acres · B5</text>

          {/* Buildings */}
          <rect x="176" y="198" width="126" height="76" fill={KEY.pavilion.fill} fillOpacity={0.35} stroke={KEY.pavilion.fill} strokeWidth={1.4} />
          <text x="239" y="232" textAnchor="middle" className={`fill-ink ${BUILDING_TEXT}`}>Glass</text>
          <text x="239" y="249" textAnchor="middle" className={`fill-ink ${BUILDING_TEXT}`}>pavilion</text>

          <rect x="318" y="136" width="74" height="146" fill={KEY.north.fill} />
          <text x="355" y="204" textAnchor="middle" className={`fill-night ${BUILDING_TEXT}`}>North</text>
          <text x="355" y="221" textAnchor="middle" className="fill-night/80 text-[12px]">23</text>

          <rect x="400" y="158" width="40" height="94" fill={KEY.core.fill} />

          <rect x="448" y="134" width="156" height="122" fill={KEY.south.fill} />
          <text x="526" y="192" textAnchor="middle" className={`fill-night ${BUILDING_TEXT}`}>South</text>
          <text x="526" y="209" textAnchor="middle" className="fill-night/75 text-[12px]">12</text>

          {/* South of Sixth Street */}
          <Lot x={62} y={352} w={256} h={308} name="Lot A" sub={["Surface parking", "Future retail / parking"]} />
          <Lot x={372} y={352} w={280} h={308} name="Lot B" sub={["Surface parking", "Future retail / parking"]} />
          <Lot x={710} y={352} w={226} h={310} name="Lot C" sub={["Surface parking", "Future retail / parking"]} />
          <rect x="726" y="522" width="194" height="124" fill={KEY.ev.fill} fillOpacity={0.3} stroke={KEY.ev.fill} strokeWidth={1.4} />
          <text x="823" y="590" textAnchor="middle" className={`fill-ink ${BUILDING_TEXT}`}>EV charging</text>

          {/* North arrow, turned to the survey's bearing (Sixth Street runs N30°W) */}
          <g transform="translate(860 190) rotate(-60)" className="stroke-ink/70" fill="none">
            <path d="M0 26 L0 -18 M-8 -8 L0 -18 L8 -8" strokeWidth="1.4" />
          </g>
          <text x="860" y="240" textAnchor="middle" className="fill-ink/70 text-[13px] tracking-[0.2em]">N</text>
        </svg>
      </div>
      <figcaption className="mt-6">
        <ul className="grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
          <li className="flex items-center gap-3">
            <span aria-hidden className="h-3 w-6 shrink-0 border-[1.5px] border-fire" />
            Main parcel
          </li>
          {Object.values(KEY).map((k) => (
            <li key={k.label} className="flex items-center gap-3">
              <span aria-hidden className="h-3 w-6 shrink-0" style={{ background: k.fill }} />
              {k.label}
            </li>
          ))}
          <li className="flex items-center gap-3">
            <span aria-hidden className="h-3 w-6 shrink-0 border border-dashed border-ink/60" />
            Surface parking · future retail & parking structures
          </li>
        </ul>
        <p className="mt-5 text-xs text-muted">
          Schematic, based on the 2025 ALTA/NSPS survey — not to scale.
          <span className="md:hidden"> Swipe to see the full site.</span>
        </p>
      </figcaption>
    </figure>
  );
}
