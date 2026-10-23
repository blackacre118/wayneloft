# Renderings & photos

**To add a photo:** upload it to `public/images/` with the exact filename below (`.jpg`, `.jpeg`,
`.png` or `.webp`). The next deploy swaps it in automatically wherever that slot appears; no code
change. Mapping lives in `src/content/renders.ts`. Ideal size: 2400px wide (2880px+ for full-screen
heroes), under ~3 MB.

| Filename | Appears on |
| --- | --- |
| `whole-night` | Home hero — re-export at 2880px+ wide |
| `whole-day` | Development hero · home development teaser — re-export at 2880px+ wide |
| `exterior-dusk` | Residences hero |
| `exterior-night` | Residences penthouse section |
| `tower-night` | Home penthouse section |
| `lobby-lounge` | Hotel hero · home hotel section |
| `rooftop-aerial` | Amenities hero |
| `reception` | Hotel · arrival (large) |
| `lobby` | Hotel · arrival (tall) |
| `hotel-living` | Hotel · rooms (large) |
| `hotel-bath` | Hotel · rooms |
| `hotel-bed` | Hotel · rooms |
| `hotel-suite-bath` | Hotel · rooms (wide) |
| `kitchen` | Hotel F&B · Amenities F&B |
| `pennyworth-lounge` | Home amenities card |
| `signal-rooftop` | Home amenities card · Amenities roof |
| `manor-bar` | Home amenities card |
| `manor-venue` | Amenities · venue |
| `residence-living` | Home residences · Residences gallery |
| `penthouse-great-room` | Residences · penthouses |
| `league-pool` | Amenities · spaces |
| `mail-room` | Amenities · spaces |
| `residence-kitchen` | Home + Residences gallery — still needed |
| `residence-balcony` | Home + Residences gallery — still needed |
| `residence-bedroom` | Residences gallery — still needed |
| `penthouse-arrival` | Residences · penthouses — still needed |
| `fox-conference` | Amenities · spaces — still needed |

To replace the two existing photos, upload a new file with the same name: `exterior-night.jpg`
(home hero, hotel split, penthouse sections, page heroes) (the development site section is a code-drawn plan, `src/components/SitePlan.tsx`; the old aerial is in `design/photos-unused/`).

## Text placeholders

All filled as of the owner's update (status, dates, pricing, level numbering, legal contact and effective date).
Legal copy in `src/content/legal.ts` is still **DRAFT — attorney review**. Penthouse floors in the stacking
plan are shown on L20–22 (indicative).

## Environment variables (Vercel)

- `RESEND_API_KEY` — Resend API key
- `INQUIRY_TO` — recipient address(es), comma-separated
- `INQUIRY_FROM` (optional) — defaults to `WAYNE <inquiries@waynelofts.com>`; the domain must be verified in Resend

Without these, the form still succeeds for visitors and inquiries are written to the Vercel function logs.
