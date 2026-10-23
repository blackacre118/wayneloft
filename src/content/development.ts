export const development = {
  meta: {
    title: "The Development",
    description:
      "WAYNE: adaptive reuse of a 586,472 SF two-tower complex at 1200 Sixth Street, Corktown, Detroit, by Blackacre Management.",
  },
  hero: {
    eyebrow: "For city & lending partners",
    title: ["The", "development."],
    intro:
      "Adaptive reuse of a vacant two-tower office complex into hotel, residential, retail and event use, on a 2.76-acre B5 site in Corktown.",
  },
  overview: {
    label: "(01) Overview",
    statement:
      "A dark, idle landmark on Sixth Street becomes a working building again — a hotel, homes, a rooftop, a venue and new retail on the surrounding lots. Every system replaced. Every floor reimagined.",
    facts: [
      { k: "Address", v: "1200 Sixth Street, Detroit, MI" },
      { k: "Neighborhood", v: "Corktown" },
      { k: "Developer", v: "Blackacre Management, LLC" },
      { k: "Gross area", v: "586,472 SF" },
      { k: "Site", v: "~2.76 acres + outlot parcels" },
      { k: "Zoning", v: "B5 — by right" },
      { k: "Existing condition", v: "Vacant office" },
      { k: "Design", v: "Complete by end of 2026" },
    ],
  },
  towers: {
    label: "(02) The two towers",
    items: [
      {
        name: "South Tower",
        spec: "12 floors · 1966",
        body: "Cast-in-place concrete, limestone-toned. Residences, with the activated roof terrace on top.",
      },
      {
        name: "North Tower",
        spec: "22 floors · 1971",
        body: "Dark glass curtain wall. Lobby and amenities, hotel on Levels 3–11, residences above, twelve penthouses at the top, and the Level 23 venue. On its north side, a glass-and-steel pavilion holds the indoor pool.",
      },
    ],
  },
  stacking: {
    label: "(03) Stacking plan",
    title: "Floor by floor.",
    note: "Indicative. There is no Level 13 — numbering runs from 12 to 14 — so the North Tower’s 22 floors top out at Level 23.",
  },
  site: {
    label: "(04) Site & outlots",
    title: ["2.76 acres,", "plus the lots around it."],
    body: "The towers sit on a ~2.76-acre B5 parcel on Sixth Street. The North Lot and Lots A, B and C across Sixth, Abbott and Howard Streets are planned for retail, extending the project into the neighborhood.",
    parcels: [
      { k: "Main parcel", v: "Towers · ~2.76 acres · B5" },
      { k: "North Lot", v: "Planned retail" },
      { k: "Lot A", v: "Planned retail" },
      { k: "Lot B", v: "Planned retail" },
      { k: "Lot C", v: "Planned retail" },
    ],
  },
  program: {
    label: "(05) Program",
    rows: [
      { use: "Hotel", where: "North Tower, L3–11", size: "~180 keys" },
      { use: "Residences", where: "South Tower & upper North Tower", size: "~300 apartments" },
      { use: "Penthouses (for sale)", where: "Top of North Tower", size: "12 condominiums" },
      { use: "Event venue", where: "Level 23", size: "Full floor, kitchen + bar" },
      { use: "Rooftop", where: "South Tower roof", size: "Activated terrace" },
      { use: "Pool pavilion", where: "North of the North Tower, connected", size: "Indoor pool, glass + steel" },
      { use: "F&B", where: "Building-wide", size: "Shared hotel + residences" },
      { use: "Retail", where: "Outlot parcels", size: "Planned" },
    ],
  },
  sponsor: {
    label: "(06) Sponsor",
    title: "Blackacre Management.",
    body: "Blackacre Management, LLC is a Michigan-based real estate company focused on adaptive reuse — giving existing buildings a second life rather than replacing them.",
  },
  timeline: {
    label: "(07) Status & timeline",
    items: [
      { phase: "Design", status: "Complete by end of 2026" },
      { phase: "Entitlements", status: "Q1 2027 · B5, by right" },
      { phase: "Construction start", status: "Summer 2027" },
      { phase: "First residences leasing", status: "Spring 2028" },
      { phase: "Hotel opening", status: "Fall 2028" },
    ],
  },
  inquire: {
    title: ["Request the", "development brief."],
    intro: "For city officials, lenders and hotel operators. Tell us who you are and the brief will follow.",
  },
} as const;
