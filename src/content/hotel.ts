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
    title: ["One red light", "in a dark room."],
    body: "The lobby is kept low and quiet. A single sculptural chandelier in red glass hangs over a black-and-white marble floor. Reception is one block of black marble, its edge lit in fire orange. Nothing else asks for your attention.",
    render: "Render · Lobby, red glass chandelier, checker marble floor",
    render2: "Render · Black marble reception, lit edge",
  },
  rooms: {
    label: "(02) Rooms",
    title: ["The city,", "floor to ceiling."],
    body: "Nine floors of the North Tower, behind its original dark glass curtain wall. Quiet corridors, low light, and rooms framed by the skyline.",
    gallery: [
      "Render · Guest room, night view",
      "Render · Bath, stone and dark glass",
      "Render · Corridor, low light",
    ],
  },
  levels: {
    label: "(03) The first two levels",
    items: [
      { k: "L1", v: "Lobby, lounge and fitness" },
      { k: "L2", v: "Hotel and resident amenity, conference rooms" },
      { k: "L3–11", v: "Guest rooms · approximately 180 keys" },
      { k: "L23", v: "Event venue, direct elevator from the lobby" },
    ],
  },
  dining: {
    label: "(04) Food & beverage",
    title: ["Lobby bar to", "room service."],
    body: "One kitchen and one cellar serve the hotel and the residences — the lobby bar, the dining room, events on Level 23 and in-room dining.",
    render: "Render · Lobby bar, evening",
    cta: { href: "/amenities", label: "The F&B program" },
  },
  operator: {
    label: "(05) Operator",
    title: "Operator inquiries.",
    body: "The hotel operator for WAYNE has not yet been announced. Hotel groups and operators are invited to request the brief.",
    cta: { href: "/hotel?role=operator#inquire", label: "Request the hotel brief" },
  },
} as const;
