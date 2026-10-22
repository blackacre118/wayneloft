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

## Text placeholders

All filled as of the owner's update (status, dates, pricing, level numbering, legal contact and effective date).
Legal copy in `src/content/legal.ts` is still **DRAFT — attorney review**. Penthouse floors in the stacking
plan are shown on L20–22 (indicative).

## Environment variables (Vercel)

- `RESEND_API_KEY` — Resend API key
- `INQUIRY_TO` — recipient address(es), comma-separated
- `INQUIRY_FROM` (optional) — defaults to `WAYNE <inquiries@waynelofts.com>`; the domain must be verified in Resend

Without these, the form still succeeds for visitors and inquiries are written to the Vercel function logs.
