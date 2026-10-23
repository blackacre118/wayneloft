export const amenities = {
  meta: {
    title: "Amenities",
    description:
      "Food & beverage, the South Tower rooftop, the indoor pool pavilion, the Level 23 venue, fitness and resident spaces at WAYNE, Detroit.",
  },
  hero: {
    eyebrow: "Amenities · Food & beverage",
    title: ["One standard,", "every floor."],
    intro: "One kitchen, one cellar — for guests and residents alike.",
  },
  fnb: {
    label: "(01) 1939 · Pennyworth · The Cave",
    title: ["One kitchen.", "One cellar."],
    body: "1939 is the dining room. Pennyworth is the lobby bar. The Cave is the cellar beneath them both. One program serves the entire building — events in The Manor and dining delivered to hotel rooms and residences. Same kitchen, same cellar, same standard.",
    render: "Render · The kitchen, evening service",
  },
  roof: {
    label: "(02) The Signal · South Tower roof",
    title: ["Thirteen floors up.", "Facing the river."],
    body: "The Signal is the South Tower’s rooftop terrace — open air, the Detroit River on the horizon, and the North Tower rising beside it.",
    render: "Render · The Signal, rooftop at dusk",
  },
  venue: {
    label: "(03) The Manor · Level 23",
    title: ["The top floor,", "for the night."],
    body: "The Manor is a full-floor event venue at the top of the North Tower, with its own kitchen and bar and a direct elevator from the lobby. Dinners, launches, weddings, private evenings.",
    render: "Render · The Manor, evening reception",
    cta: { href: "/amenities?role=events#inquire", label: "Event inquiries" },
  },
  pool: {
    label: "(04) Lazarus · The pool pavilion",
    title: ["Glass, steel,", "and still water."],
    body: "Lazarus is the indoor pool, set in a glass-and-steel pavilion on the north side of the North Tower and connected to it. Great bronze-green trusses carry the glass overhead — a conservatory built for swimming, lit like a lantern after dark.",
    render: "Render · Lazarus, the pool pavilion",
  },
  spaces: {
    label: "(05) Resident & guest spaces",
    items: [
      { k: "The League · L1", v: "Lobby, lounge and fitness" },
      { k: "Lazarus", v: "Indoor pool pavilion, north of the North Tower" },
      { k: "The Study · L2", v: "Resident amenity floor" },
      { k: "Fox", v: "Meeting and conference rooms" },
      { k: "The Garage", v: "Off-site parking" },
    ],
    gallery: ["Render · Resident mail room", "Render · Conference room"],
  },
} as const;
