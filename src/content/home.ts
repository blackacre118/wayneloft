export const home = {
  hero: {
    eyebrow: "1200 Sixth Street · Corktown · Detroit",
    title: ["The city’s most", "*private* address."],
    intro:
      "A hotel, residences and twelve private penthouses, rising from two mid-century towers above the river.",
    imageAlt: "The WAYNE towers at night — limestone South Tower lit from below, dark glass North Tower behind",
  },
  building: {
    label: "(01) The building",
    statement:
      "Two towers. One composed silhouette. Built in 1966 and 1971, and now being rebuilt from the inside out — every system replaced, every floor reimagined.",
  },
  hotel: {
    label: "(02) The hotel · Levels 3–11",
    title: ["Arrive", "after dark."],
    body: "Approximately 180 keys across nine floors of the North Tower, with a lobby, lounge and hotel amenities on the first two levels. Quiet corridors, low light, the city framed floor to ceiling.",
    cta: { href: "/hotel", label: "Enter the hotel" },
    imageAlt: "North Tower glass curtain wall at night",
  },
  residences: {
    label: "(03) The residences",
    title: ["A home above", "the noise."],
    body: "Around 300 apartments across the South Tower and the upper North Tower, with the hotel’s service one elevator ride away.",
    cta: { href: "/residences", label: "View the residences" },
  },
  penthouses: {
    label: "(04) The penthouse collection",
    title: ["Twelve.", "Never more."],
    body: "Twelve private residences for sale at the top of the North Tower. Private arrival, panoramic glass, and the kind of quiet that only altitude buys.",
    cta: { href: "/residences?role=penthouse#inquire", label: "Request the collection" },
    imageAlt: "The crown of the North Tower against the night sky",
  },
  amenities: {
    label: "(05) Amenities · Food & beverage",
    title: "One kitchen, one cellar, one standard — for guests and residents alike.",
    items: [
      {
        title: "The Roof",
        body: "An activated terrace thirteen floors up on the South Tower, facing the Detroit River.",
        render: "Render · South Tower rooftop terrace, dusk",
      },
      {
        title: "Dining & Bar",
        body: "A full food and beverage program serving the hotel and the residences, from lobby bar to in-residence dining.",
        render: "Render · Lobby bar, low light",
      },
      {
        title: "Level 23",
        body: "A full-floor venue with its own kitchen and bar, and a direct elevator from the lobby.",
        render: "Render · Level 23 venue, city at night",
      },
    ],
    strip: ["Lobby & fitness · L1", "Resident amenity · L2", "Conference rooms", "Off-site parking"],
    cta: { href: "/amenities", label: "All amenities" },
  },
  development: {
    label: "(06) The development",
    title: "The development.",
    body: "An adaptive reuse of a vacant two-tower office complex into hotel, residential, retail and event use — on a 2.76-acre B5 site in Corktown, with additional outlot parcels planned for retail.",
    facts: [
      { k: "Developer", v: "Blackacre Management" },
      { k: "Gross area", v: "586,472 SF" },
      { k: "Zoning", v: "B5 — by right" },
      { k: "Status", v: "Design complete · [STATUS]" },
    ],
    cta: { href: "/development", label: "For city & lending partners" },
    imageAlt: "Aerial view of the site: the two towers, the North Lot and outlot parcels A, B and C",
  },
  inquire: {
    title: ["Be first", "inside."],
    intro: "Hotel, residences, penthouses, events or the development — tell us who you are and we’ll be in touch.",
  },
} as const;
