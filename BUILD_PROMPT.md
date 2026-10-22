# First prompt for Claude Code

Paste everything below the line into your first Claude Code session (claude.ai/code, with the `wayneloft` repo selected).

---

Build the production website for WAYNE (wayneloft.com) in this repository.

Read `CLAUDE.md` first — it is the standing brief (audience, design tokens, owner decisions, content facts, stack, workflow). Then open `design/design-a-reference.html`: it is the approved homepage design. Match it closely; improve craft, never change the direction.

## Build
1. Scaffold Next.js (App Router, TypeScript, Tailwind, ESLint) in the repo root without deleting `CLAUDE.md`, `design/`, `public/brand/` or `public/images/`.
2. Set up design tokens (colors, Saira + Inter Tight via `next/font`) in Tailwind config and a global stylesheet, exactly as in `CLAUDE.md`.
3. Pages (keep it to these):
   - `/` — Home: the reference design as a scroll story: hero, the building, hotel, residences, penthouses, amenities, development teaser, inquiry.
   - `/hotel` — the hotel: arrival and lobby, rooms, F&B, image-led.
   - `/residences` — apartments and the penthouse collection (for-sale condos get their own section with a private "Request the collection" CTA).
   - `/amenities` — food & beverage program, South Tower rooftop, Level 23 venue, fitness and resident spaces.
   - `/legal`, `/privacy` — penthouse condominium disclosures, Equal Housing Opportunity statement and privacy policy, each marked "DRAFT — attorney review".
   - `/development` — the page for city officials and lenders: project overview, the two towers and stacking plan (a clean floor-by-floor diagram built in code), site and outlot parcels with the aerial image, program summary, sponsor (Blackacre Management), status/timeline placeholders, and a "Request the development brief" form. Credible, clear, numbers as ranges.
4. Shared components: header with logo + nav (transparent over hero, solid on scroll, accessible mobile menu), footer with address, developer credit and disclaimer placeholder, full-bleed image section, split image/text section, stat row, image gallery grid, inquiry form.
5. Inquiry form with a "Who are you?" selector: City / Lender / Hotel operator / Penthouse / Events / Press / Other (no investor option) → `/api/inquire` route handler using Resend (env vars per `CLAUDE.md`), with validation, honeypot spam field and a success state. If env vars are missing, log instead of failing the build.
6. Images: use the two real images in `public/images/`; everywhere else use tasteful dark placeholder panels labelled with what rendering goes there (e.g. "RENDER · LOBBY, RED CHANDELIER"), so I can drop in renderings later by filename. Keep a list of the needed renderings in `docs/RENDERINGS.md`.
7. Copy: write all copy yourself in the brand voice — short, confident, understated luxury. Keep it in `src/content/`. Follow the facts and placeholder rules in `CLAUDE.md` strictly.
8. SEO and polish: metadata per page, Open Graph image (logo on night black), favicon from the logo, sitemap, robots, 404 page in brand.
9. Add `vercel.json` only if needed; redirect `www.wayneloft.com` → `wayneloft.com` is handled in Vercel settings, not code.

## Finish
- Run `npm run build` and `npm run lint`; fix everything.
- Commit and push to `main`.
- List the placeholders I need to fill (`[OPENING YEAR]`, etc.) and the renderings still needed in `docs/RENDERINGS.md`, and summarize what you built in your final message.
