/**
 * Schematic site plan, built in code to match the stacking plan.
 * Not to scale: shows parcel relationships around Sixth, Abbott, Howard, Porter and Brooklyn Streets.
 */
const STREET = "fill-[#0d1426]";
const STREET_TEXT = "fill-muted text-[13px] uppercase tracking-[0.2em]";
const LOT = "fill-ink/[0.04] stroke-ink/30";
const LOT_TEXT = "fill-ink text-[17px] font-light";
const LOT_SUB = "fill-muted text-[11px] uppercase tracking-[0.2em]";

function Parcel({
  x,
  y,
  w,
  h,
  name,
  sub,
  main = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  name: string;
  sub: string;
  main?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        className={main ? "fill-ink/[0.06] stroke-fire" : LOT}
        strokeWidth={1}
        strokeDasharray={main ? undefined : "4 4"}
      />
      <text x={x + 18} y={y + 32} className={LOT_TEXT}>
        {name}
      </text>
      <text x={x + 18} y={y + 52} className={LOT_SUB}>
        {sub}
      </text>
    </g>
  );
}

export function SitePlan() {
  return (
    <figure>
      <svg
        viewBox="0 0 1000 620"
        role="img"
        aria-labelledby="siteplan-title siteplan-desc"
        className="h-auto w-full bg-navy font-sans"
      >
        <title id="siteplan-title">WAYNE site plan (schematic)</title>
        <desc id="siteplan-desc">
          The main parcel with the North Tower, South Tower and pool pavilion sits on the north side of Sixth Street,
          with the North Lot to its west. South of Sixth Street, Lot A lies between Porter and Abbott Streets, Lot B
          between Abbott and Howard Streets, and Lot C east of Howard Street along Brooklyn Street.
        </desc>

        {/* Streets */}
        <rect x="0" y="300" width="1000" height="44" className={STREET} />
        <text x="24" y="327" className={STREET_TEXT}>Sixth St</text>
        <rect x="24" y="344" width="34" height="276" className={STREET} />
        <text x="46" y="600" transform="rotate(-90 46 600)" className={STREET_TEXT}>Porter St</text>
        <rect x="350" y="344" width="34" height="276" className={STREET} />
        <text x="372" y="600" transform="rotate(-90 372 600)" className={STREET_TEXT}>Abbott St</text>
        <rect x="676" y="344" width="34" height="276" className={STREET} />
        <text x="698" y="600" transform="rotate(-90 698 600)" className={STREET_TEXT}>Howard St</text>
        <rect x="710" y="500" width="290" height="40" className={STREET} />
        <text x="732" y="525" className={STREET_TEXT}>Brooklyn St</text>

        {/* North of Sixth */}
        <Parcel x={60} y={70} w={250} h={214} name="North Lot" sub="Planned retail" />
        <Parcel x={326} y={40} w={420} h={244} name="Main parcel" sub="~2.76 acres · B5" main />

        {/* Buildings on the main parcel; the pool pavilion is connected to the North Tower's north side */}
        <rect x="470" y="86" width="96" height="34" className="fill-transparent stroke-fire/70" strokeDasharray="3 3" />
        <text x="578" y="108" className={LOT_SUB}>Pool pavilion</text>
        <rect x="470" y="124" width="96" height="144" className="fill-[#1b2236] stroke-ink/40" />
        <text x="518" y="196" textAnchor="middle" className="fill-ink text-[12px] uppercase tracking-[0.18em]">North</text>
        <text x="518" y="212" textAnchor="middle" className="fill-muted text-[11px] tracking-[0.1em]">22 fl</text>
        <rect x="580" y="148" width="146" height="120" className="fill-ink/40 stroke-ink/50" />
        <text x="653" y="206" textAnchor="middle" className="fill-night text-[12px] uppercase tracking-[0.18em]">South</text>
        <text x="653" y="222" textAnchor="middle" className="fill-night/80 text-[11px] tracking-[0.1em]">12 fl</text>

        {/* South of Sixth */}
        <Parcel x={74} y={360} w={260} h={240} name="Lot A" sub="Planned retail" />
        <Parcel x={400} y={360} w={260} h={240} name="Lot B" sub="Planned retail" />
        <Parcel x={726} y={360} w={250} h={124} name="Lot C" sub="Planned retail" />

        {/* North arrow */}
        <g transform="translate(940 70)" className="stroke-muted" fill="none">
          <path d="M0 22 L0 -14 M-7 -6 L0 -14 L7 -6" strokeWidth="1.2" />
          <text x="0" y="40" textAnchor="middle" className="fill-muted stroke-none text-[12px] tracking-[0.2em]">N</text>
        </g>
      </svg>
      <figcaption className="mt-4 text-xs text-muted">Schematic — not to scale.</figcaption>
    </figure>
  );
}
