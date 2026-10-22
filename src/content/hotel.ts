export const hotel = {
  meta: {
    title: "The Hotel",
    description: "Approximately 180 keys on Levels 3–11 of the North Tower at WAYNE, Corktown, Detroit.",
  },
  hero: {
    eyebrow: "The hotel · North Tower · Levels 3–11",
    title: ["Arrive", "after dark."],
    intro: "A hotel that keeps its own hours. Approximately 180 keys above Corktown, opening fall 2028.",
  },
  arrival: {
    label: "(01) Arrival",
    title: ["Black marble.", "Low light."],
    body: "The lobby is kept dark and quiet — black marble, warm brass, light pooled where it’s needed. Reception is a single block of stone with a lit edge. Nothing else asks for your attention.",
    render: "Render · Black marble reception, lit edge",
    render2: "Render · Lobby, evening arrivals",
  },
  rooms: {
    label: "(02) Rooms",
    title: ["The city,", "floor to ceiling."],
    body: "Nine floors of the North Tower, behind its original dark glass curtain wall. Quiet corridors, low light, and rooms framed by the skyline.",
    gallery: [
      "Render · Suite living area, night view",
      "Render · Bath, black marble",
      "Render · Guest room, bed detail",
      "Render · Suite bath, city view",
    ],
  },
  levels: {
    label: "(03) The first two levels",
    items: [
      { k: "L1", v: "Lobby, Pennyworth bar, The League fitness" },
      { k: "L2", v: "The Study, Fox conference rooms" },
      { k: "L3–11", v: "Guest rooms · approximately 180 keys" },
      { k: "L23", v: "The Manor, direct elevator from the lobby" },
    ],
  },
  dining: {
    label: "(04) Food & beverage",
    title: ["Lobby bar to", "room service."],
    body: "1939 in the dining room, Pennyworth at the bar, The Cave below. One kitchen and one cellar serve the hotel and the residences — through to events in The Manor and in-room dining.",
    render: "Render · The kitchen, evening service",
    cta: { href: "/amenities", label: "The F&B program" },
  },
  operator: {
    label: "(05) Operator",
    title: "Operator inquiries.",
    body: "The hotel operator for WAYNE has not yet been announced. Hotel groups and operators are invited to request the brief.",
    cta: { href: "/hotel?role=operator#inquire", label: "Request the hotel brief" },
  },
} as const;
