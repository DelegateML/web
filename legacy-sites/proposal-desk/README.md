# Proposal Desk — Landing Page (GitHub Pages)

This folder contains a minimal static landing page for the Phase 1 sensor.

## Configure
Edit `index.html` and set the `CONFIG` values:
- `CONFIG.waitlistEmail` (used for the mailto “Send me the doc” CTA)
- `CONFIG.calendlyUrl` (used for the “Book 10 minutes” CTA)

Optional analytics (set one or both):
- `CONFIG.analytics.plausibleDomain` (Plausible)
- `CONFIG.analytics.gaMeasurementId` (GA4)

## UK/EU note (analytics + consent)
If you enable analytics, `index.html` shows a minimal consent banner and will only load analytics after a visitor clicks “Allow” (stored in `localStorage` as `analytics_consent`).

This is not legal advice — if you publish publicly, you may still want a short privacy notice depending on what you enable and who you target.

## Publish (GitHub Pages)
1) In GitHub: Repo → Settings → Pages
2) Source: “Deploy from a branch”
3) Branch: `main`
4) Folder: `/teams/proposal-desk/site`
