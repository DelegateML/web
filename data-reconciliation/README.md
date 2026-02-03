# Data Reconciliation — Landing Page (`site/`)

This folder is a minimal, static sensor landing page you can deploy on GitHub Pages (zero budget).

## Quick start
1) Set your contact details in `site/config.js`:
   - `contactEmail`
   - `bookingUrl` (optional)
2) (Optional) Enable analytics:
   - set `enableAnalytics: true`
   - choose Plausible (recommended) or set a GA4 measurement ID

## Deploy on GitHub Pages
This repo includes a GitHub Actions workflow that deploys `site/` automatically on every push to `main`.

1) In GitHub: repo **Settings → Pages**
2) Under **Build and deployment**, set **Source** to **GitHub Actions**
3) Push a change under `site/` (or re-run the workflow from **Actions**)

The published URL will appear on the workflow run under the `github-pages` environment.

## Notes
- Keep the sensor simple: one offer, one CTA, one “awkward pair” focus.
- If you enable GA4, ensure you meet UK/EU consent requirements for your use case.

