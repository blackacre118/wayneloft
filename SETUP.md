# WAYNE website — setup checklist

GitHub holds the code, Claude Code (cloud) edits it from any device, Vercel hosts it, GoDaddy points wayneloft.com at Vercel.

## 1. GitHub — create the repo (5 min)
1. github.com → **New repository** → name `wayneloft` → **Public** → create (no README).
2. On the empty repo page click **uploading an existing file**, drag in everything from this folder (`CLAUDE.md`, `BUILD_PROMPT.md`, `SETUP.md`, `design/`, `public/`) → **Commit changes**.

## 2. Claude Code in the cloud — build and edit from anywhere (10 min)
1. Go to **claude.ai/code** and sign in.
2. Connect GitHub when prompted. Then install the **Claude GitHub App** on your account and give it access to the `wayneloft` repo: github.com/apps/claude/installations/new
3. Keep the **Default** environment (it can install npm packages).
4. Select the `wayneloft` repo below the input box, choose **Accept edits** mode, paste the prompt from `BUILD_PROMPT.md`, press Enter.
5. Claude builds and pushes straight to `main`, which deploys automatically once Vercel is connected.

From then on, edit from your laptop, the Claude desktop app or the **Claude mobile app (Code tab)**: start a session on `wayneloft`, describe the change ("swap the hero for lobby-night.jpg", "add the Q1 status to the development page"), and it goes live on the next push. Sessions keep running if you close the tab.

## 3. Vercel — hosting (10 min)
1. vercel.com → sign up/log in **with GitHub**.
2. **Add New → Project** → import `wayneloft` → framework auto-detects Next.js → **Deploy**.
3. Project → **Settings → Environment Variables**: add `RESEND_API_KEY` (from resend.com, free tier) and `INQUIRY_TO` (the email that receives inquiries) → redeploy.
4. Every push to `main` now deploys automatically.

## 4. Domain — GoDaddy DNS (15 min + propagation)
Do this only after the Vercel site looks right on its `.vercel.app` link.

1. Vercel project → **Settings → Domains** → add `wayneloft.com` and `www.wayneloft.com`. Set `www` to redirect to `wayneloft.com`. Vercel then shows the exact records to add — use its values.
2. GoDaddy → **My Products → wayneloft.com → DNS**.
   - First check **Nameservers**. If they point to Squarespace instead of GoDaddy, either switch them back to GoDaddy's default nameservers or make the edits below in Squarespace's DNS panel instead.
   - **Screenshot every existing record before changing anything.**
3. Remove the Squarespace website records:
   - the `A` records on `@` pointing to Squarespace (198.x addresses)
   - the `www` CNAME pointing to `ext-cust.squarespace.com`
   - any Squarespace verification CNAME
4. Add the Vercel records:
   - `A` · Name `@` · Value: the IP Vercel shows (usually `76.76.21.21`)
   - `CNAME` · Name `www` · Value: the project-specific target Vercel shows
5. **Do not touch MX or TXT records** (email, SPF, DKIM, verifications).
6. Back in Vercel → Domains, wait for both to show **Valid Configuration**. SSL is issued automatically. Usually minutes, occasionally up to 48 hours.
7. Cancel the Squarespace site plan only after wayneloft.com is live on Vercel. Domain registration stays at GoDaddy.

## Still needed from you
- Renderings (list will be in `docs/RENDERINGS.md` after the first build)
- Hotel key and apartment counts (ranges), opening year, inquiry email(s)
- Final legal wording (disclosures, EHO, privacy) from counsel
