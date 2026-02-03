# DelegateML Sites

Monorepo for three B2B SaaS marketing sites under the DelegateML parent company:
- **Data Reconciliation** — Ad platform data reconciliation for marketing agencies
- **ESG Reporting** — Monthly ESG reporting for UK mid-market companies
- **Proposal Desk** — Proposal/SOW drafting for boutique agencies/studios

## Tech Stack
- **Astro** — Static site generator
- **Tailwind CSS** — Utility-first CSS
- **GitHub Pages** — Hosting via GitHub Actions

## Quick Start

```bash
# Install dependencies for all sites
npm install

# Run all sites in development mode (on different ports)
npm run dev

# Or run individual sites:
npm run dev:data       # Data Reconciliation on :4321
npm run dev:esg        # ESG Reporting on :4322  
npm run dev:proposal   # Proposal Desk on :4323

# Build all sites for production
npm run build

# Preview production builds
npm run preview
```

## Development URLs

Each site runs on its own port:
- **Data Reconciliation**: http://localhost:4321
- **ESG Reporting**: http://localhost:4322
- **Proposal Desk**: http://localhost:4323

## Testing

### Option 1: Run all sites simultaneously (recommended)
```bash
npm run dev
```
This uses `concurrently` to start all three dev servers at once.

### Option 2: Run sites individually (3 separate terminals)
```bash
# Terminal 1
npm run dev:data

# Terminal 2
npm run dev:esg

# Terminal 3
npm run dev:proposal
```

### Option 3: Quick build test
```bash
npm run build
# Check dist/ folder for built sites
```

## Deployment

Sites deploy automatically to GitHub Pages via GitHub Actions. Each site is built with its respective base path:
- `/data-reconciliation/`
- `/esg-reporting/`
- `/proposal-desk/`

## Design System

See `packages/shared/` for:
- Global CSS variables (design tokens)
- Shared Astro components (Header, Hero, Features, Footer)
- Tailwind configuration

## Brand Assets

- `DelegateML Logo Master.svg` — Full logo with text
- `DelegateML Logo No Text.svg` — Icon-only version

## License

Proprietary — DelegateML
