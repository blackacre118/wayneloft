export const amenities = {
  meta: {
    title: "Amenities",
    description:
      "Food & beverage, the South Tower rooftop, the Level 23 venue, fitness and resident spaces at WAYNE, Detroit.",
  },
  hero: {
    eyebrow: "Amenities · Food & beverage",
    title: ["One standard,", "every floor."],
    intro: "One kitchen, one cellar — for guests and residents alike.",
  },
  fnb: {
    label: "(01) Food & beverage",
    title: ["One kitchen.", "One cellar."],
    body: "A single food and beverage program serves the entire building: the lobby bar, the dining room, events on Level 23 and dining delivered to hotel rooms and residences. Same kitchen, same cellar, same standard.",
    render: "Render · Dining room, evening service",
  },
  roof: {
    label: "(02) The Roof · South Tower",
    title: ["Thirteen floors up.", "Facing the river."],
    body: "The South Tower roof becomes an activated terrace — open air, the Detroit River on the horizon, and the North Tower rising beside it.",
    render: "Render · Rooftop terrace, river view at dusk",
  },
  venue: {
    label: "(03) Level 23",
    title: ["The top floor,", "for the night."],
    body: "A full-floor event venue at the top of the North Tower, with its own kitchen and bar and a direct elevator from the lobby. Dinners, launches, weddings, private evenings.",
    render: "Render · Level 23 venue set for dinner",
    cta: { href: "/amenities?role=events#inquire", label: "Event inquiries" },
  },
  spaces: {
    label: "(04) Resident & guest spaces",
    items: [
      { k: "L1", v: "Lobby, lounge and fitness" },
      { k: "L2", v: "Resident amenity floor" },
      { k: "Conference", v: "Meeting and conference rooms" },
      { k: "Parking", v: "Off-site parking" },
    ],
    gallery: ["Render · Fitness, L1", "Render · Resident lounge, L2", "Render · Conference room"],
  },
} as const;
