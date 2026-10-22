# Renderings & placeholders

Every dark striped panel on the site is a placeholder labelled `RENDER · …`. Drop the
finished image into `public/images/` with the filename below, then swap the
`<Placeholder>` for `next/image` (or tell Claude "use lobby-night.jpg for the lobby").
Export at max 2400px wide, compressed JPG; hero images ideally 2880px+.

## Needed renderings

| Filename (suggested)            | Where it appears                          | Brief |
| ------------------------------- | ----------------------------------------- | ----- |
| `lobby-night.jpg`               | /hotel · Arrival (large)                  | Dark lobby, single sculptural red glass chandelier, black-and-white marble checker floor |
| `reception-monolith.jpg`        | /hotel · Arrival (tall)                   | Black marble monolith reception, fire-orange lit edge |
| `hotel-room-night.jpg`          | /hotel · Rooms                            | Guest room, floor-to-ceiling glass, city at night |
| `hotel-bath.jpg`                | /hotel · Rooms                            | Bath, stone and dark glass |
| `hotel-corridor.jpg`            | /hotel · Rooms                            | Corridor, low light |
| `lobby-bar.jpg`                 | / Amenities card · /hotel F&B             | Lobby bar, evening |
| `dining-room.jpg`               | /amenities · F&B                          | Dining room, evening service |
| `rooftop-terrace-dusk.jpg`      | / Amenities card · /amenities Roof        | South Tower roof terrace, river view at dusk |
| `level-23-venue.jpg`            | / Amenities card · /amenities L23         | Full-floor venue set for dinner, city at night |
| `residence-hero-night.jpg`      | /residences hero                          | Residence living room at night, city view |
| `residence-living-evening.jpg`  | / and /residences gallery                 | Living room, evening |
| `residence-kitchen.jpg`         | / and /residences gallery                 | Kitchen detail, stone + brass |
| `residence-balcony-south.jpg`   | / and /residences gallery                 | Balcony, South Tower |
| `residence-bedroom-night.jpg`   | /residences gallery                       | Bedroom, city at night |
| `penthouse-great-room.jpg`      | /residences · Penthouses                  | Great room, panoramic glass |
| `penthouse-arrival.jpg`         | /residences · Penthouses                  | Private arrival |
| `fitness-l1.jpg`                | /amenities · Spaces                       | Fitness, L1 |
| `resident-lounge-l2.jpg`        | /amenities · Spaces                       | Resident lounge, L2 |
| `conference-room.jpg`           | /amenities · Spaces                       | Conference room |
| `site-aerial.jpg` (replace)     | / Development · /development Site         | Licensed aerial with parcels outlined |
| `exterior-night.jpg` (upgrade)  | Heroes, hotel, penthouses                 | Same view at 2880px+; ideally a distinct crown shot for the penthouse section |

## Text placeholders to fill (in `src/content/`)

- `[STATUS]` — project status (home, development)
- `[OPENING YEAR]` — hotel opening (hotel, development timeline)
- `[DATE]` — construction start, residences delivery (development timeline)
- `[RELEASE DATE]` — apartment floor plans / pricing release (residences)
- `[PRICING]` — penthouse pricing line (residences)
- `[CONFIRM LEVELS]` — residences / penthouse split in the North Tower stacking plan (development); the diagram currently shows penthouses on L20–22
- `~180` hotel keys and `~300` apartments — confirm (`src/content/site.ts`, home, hotel, residences, development)
- `[LEGAL CONTACT EMAIL]`, `[PRIVACY CONTACT EMAIL]`, `[EFFECTIVE DATE]` — `src/content/legal.ts`
- All legal copy in `src/content/legal.ts` is **DRAFT — attorney review**

## Environment variables (Vercel)

- `RESEND_API_KEY` — Resend API key
- `INQUIRY_TO` — recipient address(es), comma-separated
- `INQUIRY_FROM` (optional) — defaults to `WAYNE <inquiries@waynelofts.com>`; the domain must be verified in Resend

Without these, the form still succeeds for visitors and inquiries are written to the Vercel function logs.
