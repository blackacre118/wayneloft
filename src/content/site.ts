export const site = {
  name: "WAYNE",
  url: "https://www.waynelofts.com",
  address: "1200 Sixth Street",
  city: "Detroit, Michigan",
  neighborhood: "Corktown",
  developer: "Blackacre Management, LLC",
  description:
    "WAYNE — a hotel, residences and twelve private penthouses at 1200 Sixth Street, Corktown, Detroit. A Blackacre development.",
  nav: [
    { href: "/hotel", label: "Hotel" },
    { href: "/residences", label: "Residences" },
    { href: "/residences#penthouses", label: "Penthouses" },
    { href: "/amenities", label: "Amenities" },
    { href: "/development", label: "Development" },
  ],
  footerLinks: [
    { href: "/legal", label: "Disclosures" },
    { href: "/privacy", label: "Privacy" },
  ],
} as const;

/** Headline figures. Hotel keys and apartments are approximate — confirm with owner. */
export const stats = [
  { value: "586K", label: "Square feet" },
  { value: "L23", label: "Top floor" },
  { value: "~180", label: "Hotel keys" },
  { value: "~300", label: "Residences" },
  { value: "12", label: "Penthouses" },
] as const;
