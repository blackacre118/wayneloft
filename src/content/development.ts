export const development = {
  meta: {
    title: "The Development",
    description:
      "WAYNE: adaptive reuse of a 586,472 SF two-tower complex at 1200 Sixth Street, Corktown, Detroit, by Blackacre Management.",
  },
  hero: {
    title: ["The", "development."],
    intro:
      "Adaptive reuse of a vacant two-tower office complex into hotel, residential, retail and event use, on a nearly ten-acre assemblage in Corktown.",
  },
  overview: {
    statement:
      "A dark, idle landmark on Sixth Street becomes a working building again — a hotel, homes, a rooftop, a venue and new retail on the surrounding lots. Every system replaced. Every floor reimagined.",
    facts: [
      { k: "Address", v: "1200 Sixth Street, Detroit, MI" },
      { k: "Neighborhood", v: "Corktown" },
      { k: "Developer", v: "Blackacre Management, LLC" },
      { k: "Gross area", v: "586,472 SF" },
      { k: "Site", v: "Nearly 10 acres · 4 parcels" },
      { k: "Zoning", v: "B5 — by right" },
      { k: "Existing condition", v: "Vacant office" },
      { k: "Design", v: "Complete by end of 2026" },
    ],
  },
  towers: {
    items: [
      {
        name: "South Tower",
        spec: "12 floors · 1966",
        body: "Cast-in-place concrete, limestone-toned. Residences, with the activated roof terrace on top.",
      },
      {
        name: "North Tower",
        spec: "22 floors · 1971",
        body: "Dark glass curtain wall. Lobby and amenities, hotel on Levels 3–11, residences above, twelve penthouses at the top, and the Level 23 venue. Beside it, a glass-and-steel pavilion holds the indoor pool, pickleball and tenant amenities.",
      },
    ],
  },
  stacking: {
    title: "Floor by floor.",
    note: "Indicative. There is no Level 13 — numbering runs from 12 to 14 — so the North Tower’s 22 floors top out at Level 23.",
  },
  site: {
    title: ["Nearly ten acres.", "Nothing like it downtown."],
    body: "Four parcels between the Lodge Freeway (M-10) and Brooklyn Street come together as one assemblage of nearly ten acres — a site of a scale found nowhere else in downtown Detroit. The towers, core and glass pavilion stand on the main parcel; Lots A, B and C across Sixth Street hold parking today and future retail and parking structures tomorrow.",
    advantages: [
      { title: "Downtown, next door", body: "Minutes from the core of the city, with its skyline framed from every upper floor." },
      { title: "Corktown", body: "Detroit’s most in-demand neighborhood — its restaurants, bars and momentum at the door." },
      { title: "On the Lodge (M-10)", body: "Frontage along the John C. Lodge Freeway, directly above the main parcel." },
    ],
    parcels: [
      { k: "Main parcel", v: "Towers, core, pavilion · ~2.76 acres · B5" },
      { k: "Lot A", v: "Parking · future retail / structure" },
      { k: "Lot B", v: "Parking · future retail / structure" },
      { k: "Lot C", v: "Parking, EV charging · future retail" },
      { k: "Assemblage", v: "Nearly 10 acres" },
    ],
  },
  program: {
    rows: [
      { use: "Hotel", where: "North Tower, L3–11", size: "~180 keys" },
      { use: "Residences", where: "South Tower & upper North Tower", size: "~300 apartments" },
      { use: "Penthouses (for sale)", where: "Top of North Tower", size: "12 condominiums" },
      { use: "Event venue", where: "Level 23", size: "Full floor, kitchen + bar" },
      { use: "Rooftop", where: "South Tower roof", size: "Activated terrace" },
      { use: "Glass pavilion", where: "Main parcel, beside the North Tower", size: "Indoor pool, pickleball, tenant amenities" },
      { use: "F&B", where: "Building-wide", size: "Shared hotel + residences" },
      { use: "EV charging", where: "Lot C", size: "Charging stations" },
      { use: "Parking & retail", where: "Lots A, B and C", size: "Surface parking now; future retail and parking structures" },
    ],
  },
  sponsor: {
    title: "Blackacre Management.",
    body: "Blackacre Management, LLC is a Michigan-based real estate company focused on adaptive reuse — giving existing buildings a second life rather than replacing them.",
  },
  timeline: {
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
