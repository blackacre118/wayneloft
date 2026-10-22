# Renderings & photos

**To add a photo:** upload it to `public/images/` with the exact filename below (`.jpg`, `.jpeg`,
`.png` or `.webp`). The next deploy swaps it in automatically wherever that slot appears; no code
change. Mapping lives in `src/content/renders.ts`. Ideal size: 2400px wide (2880px+ for full-screen
heroes), under ~3 MB.

| Filename | Appears on |
| --- | --- |
| `residences-hero` | Residences · hero (full screen) |
| `residence-living` | Home residences (large) · Residences gallery |
| `residence-kitchen` | Home residences · Residences gallery |
| `residence-balcony` | Home residences · Residences gallery |
| `residence-bedroom` | Residences gallery (wide) |
| `penthouse-great-room` | Residences · penthouses |
| `penthouse-arrival` | Residences · penthouses |
| `lobby` | Hotel · arrival (red chandelier, checker floor) |
| `reception` | Hotel · arrival (black marble, lit edge) |
| `hotel-room` | Hotel · rooms |
| `hotel-bath` | Hotel · rooms |
| `hotel-corridor` | Hotel · rooms |
| `pennyworth-bar` | Home amenities card · Hotel F&B |
| `dining-1939` | Amenities · F&B |
| `signal-rooftop` | Home amenities card · Amenities roof |
| `manor-level-23` | Home amenities card · Amenities venue |
| `league-fitness` | Amenities · spaces |
| `study-lounge` | Amenities · spaces |
| `fox-conference` | Amenities · spaces |

To replace the two existing photos, upload a new file with the same name: `exterior-night.jpg`
(home hero, hotel split, penthouse sections, page heroes) or `site-aerial.jpg` (development).

## Text placeholders

All filled as of the owner's update (status, dates, pricing, level numbering, legal contact and effective date).
Legal copy in `src/content/legal.ts` is still **DRAFT — attorney review**. Penthouse floors in the stacking
plan are shown on L20–22 (indicative).

## Environment variables (Vercel)

- `RESEND_API_KEY` — Resend API key
- `INQUIRY_TO` — recipient address(es), comma-separated
- `INQUIRY_FROM` (optional) — defaults to `WAYNE <inquiries@waynelofts.com>`; the domain must be verified in Resend

Without these, the form still succeeds for visitors and inquiries are written to the Vercel function logs.
