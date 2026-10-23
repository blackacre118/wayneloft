export const residences = {
  meta: {
    title: "Residences & Penthouses",
    description:
      "Approximately 300 apartments and a collection of twelve for-sale penthouses at WAYNE, 1200 Sixth Street, Detroit.",
  },
  hero: {
    eyebrow: "The residences · South Tower & upper North Tower",
    title: ["A home above", "the noise."],
    intro: "Around 300 apartments, with a hotel’s service one elevator ride away.",
    imageAlt: "The North Tower lit against a stormy night sky",
  },
  apartments: {
    label: "(01) The apartments",
    title: ["Hotel service.", "Your own front door."],
    body: "Apartments across the South Tower and the upper North Tower, each with access to the hotel’s food and beverage program, the resident amenity level and the roof. Floor plans and pricing will be released in spring 2027; first residences lease from spring 2028.",
    gallery: [
      "Render · Residence living room, evening",
      "Render · Kitchen detail, stone + brass",
      "Render · Balcony, South Tower",
    ],
  },
  living: {
    label: "(02) Resident life",
    items: [
      { title: "In-residence dining", body: "The kitchen at 1939 and the cellar below, delivered to your door." },
      { title: "The Study · L2", body: "A full floor set aside for residents, below the hotel floors." },
      { title: "The Signal", body: "The rooftop terrace, thirteen floors up, facing the river." },
      { title: "The League & Lazarus", body: "Fitness on L1, and the indoor pool in its glass pavilion beside the North Tower." },
    ],
  },
  penthouses: {
    label: "(03) The penthouse collection",
    title: ["The view belongs", "to twelve."],
    body: "Twelve condominium residences for sale at the top of the North Tower. Private arrival, panoramic glass, and the kind of quiet only altitude buys. Each is offered privately, by appointment.",
    details: [
      { k: "Residences", v: "12, for sale" },
      { k: "Location", v: "Upper floors, North Tower" },
      { k: "Arrival", v: "Private" },
      { k: "Pricing", v: "From $800 / SF" },
    ],
    gallery: [
      "Render · Penthouse great room, panoramic glass",
      "Render · Penthouse private arrival",
    ],
    cta: { href: "/residences?role=penthouse#inquire", label: "Request the collection" },
    imageAlt: "The crown of the North Tower at night",
  },
  inquire: {
    title: ["Request", "the collection."],
    intro: "Penthouse inquiries are handled privately. Apartment interest lists open ahead of leasing.",
  },
} as const;
