# Astro + Tailwind Rebuild Plan (3 B2B SaaS Sites)

## Parent Company Context

These three sites operate under **DelegateML** — the umbrella parent company. The DelegateML brand should be subtly present across all sites to establish unified credibility while allowing each product to maintain distinct positioning.

**Brand Assets Available:**
- `web/DelegateML Logo Master.svg` — Full logo with text
- `web/DelegateML Logo No Text.svg` — Icon-only version for favicon, footer, or subtle branding

## Goals
- Rebuild all three sites from scratch using a modern Astro + Tailwind stack.
- Deliver a minimal, professional visual style suitable for B2B SaaS buyers.
- Convey technical competence through clean information architecture, polished UX, and subtle motion.
- Keep hosting compatible with GitHub Pages via GitHub Actions.
- Maintain DelegateML parent company presence for brand cohesion.

## Reference Materials

### Available Skills (in `skills/`)
Two skill files guide implementation:

1. **`skills/frontend-design/SKILL.md`** — Guidelines for creating distinctive, production-grade frontend interfaces
   - Typography, color, motion, and spatial composition principles
   - Anti-generic design patterns (avoid "AI slop" aesthetics)
   - Bold aesthetic direction guidance (don't take this too much to heart - we're making B2B SaaS sites which are relatively conservative)

2. **`skills/b2b-saas-site/SKILL.md`** — B2B SaaS marketing site patterns
   - Design tokens (colors, spacing, typography scale)
   - Section playbooks (Hero, Features, Pricing, Testimonials, CTA, Footer)
   - Conversion hierarchy and trust signals
   - Anti-patterns checklist

### Site Content Materials (in `teams/`)
Each site has a dedicated team folder with comprehensive content and strategy materials:

**`teams/data-reconciliation/`** — Ad platform data reconciliation for marketing agencies
- `landing-page-copy.md` — Hero headlines, feature bullets, FAQ, CTAs
- `PHASE1.md` — Sensor deployment strategy (UK-based, GBP)
- `distribution.md` — LinkedIn search strings, communities, channels
- `outreach-templates.md` — Connection requests, cold email, forum replies
- `prospects.md` — Target accounts and fit criteria
- `site/` — Current static landing page (skeleton to redesign)

**`teams/esg-reporting/`** — Monthly ESG reporting for UK mid-market companies
- `landing-page-copy.md` — Headlines, monthly pack deliverables, FAQ
- `PHASE1.md` — Phase 1 sensor plan (UK-first, GBP)
- `ORIENTATION.md` — ESG domain context and positioning
- `distribution.md` — LinkedIn search strings for sustainability/compliance roles
- `outreach-templates.md` — Value-first outreach copy
- `prospects.md` — Target company list
- `index.html` + `styles.css` — Current skeleton site

**`teams/proposal-desk/`** — Proposal/SOW drafting for boutique agencies/studios
- `landing-page-copy.md` — Hero, feature bullets, scope-risk positioning
- `PHASE1.md` — Sensor strategy (UK-based, GMT/BST)
- `distribution.md` — Agency owner targeting, communities
- `outreach-templates.md` — QA pass offer templates
- `prospects.md` — Agency prospect list

## Deliverable 1 — Foundation & Project Setup
**Outcome:** A production-ready Astro workspace with shared styling and deployment baseline.

### Scope
- Create a new Astro project structure for:
  - `data-reconciliation` — Stop wasting Fridays reconciling ad data (Meta/Shopify/GA4)
  - `esg-reporting` — Monthly ESG reporting, done for you (UK mid-market)
  - `proposal-desk` — Proposal + SOW drafting desk for boutique agencies
- **Current skeleton sites exist in:** `web/data-reconciliation/`, `web/esg-reporting/`, `web/proposal-desk/` — redesign these from scratch
- **Geographic default:** All sites are UK-based (GBP, Europe/London timezone) unless otherwise specified
- Install and configure Tailwind CSS.
- Establish shared design tokens (color, typography, spacing, radii, shadows, motion timings).
- Define shared layout primitives and utility classes for consistent page composition.
- Set up environment-aware base path handling for GitHub Pages subpaths.

### Acceptance Criteria
- Local dev runs with one command.
- All three sites build successfully with consistent styles.
- Shared tokens and base components are used by all three sites.

## Deliverable 2 — Design System & UX Patterns
**Outcome:** Reusable visual system that feels sleek, trustworthy, and technically sharp.

**Design Guidance:** Consult `skills/frontend-design/SKILL.md` for bold aesthetic direction and `skills/b2b-saas-site/SKILL.md` for B2B conversion patterns and design tokens. Apply DelegateML parent branding subtly (logo in footer, optional minimal header mention).

### Scope
- Implement reusable components:
  - Header / nav
  - Hero section
  - Feature grid
  - Credibility block (logos/testimonials/metrics placeholders)
  - CTA strip + footer
- Add subtle, performance-safe animations:
  - Soft fade/slide on section entry
  - Micro-interactions on buttons/cards
  - Reduced-motion accessibility fallback
- Create responsive behavior across mobile, tablet, and desktop breakpoints.

### Acceptance Criteria
- Components are consistent across all three sites.
- Motion remains subtle and professional (no distracting transitions).
- Lighthouse accessibility and performance are not degraded by animation choices.

## Deliverable 3 — Content Architecture & Page Buildout
**Outcome:** Three distinct, polished marketing pages with strong B2B messaging.

**Content Source:** All copy and messaging should be pulled from the respective `teams/{site-name}/landing-page-copy.md` files. Each site has detailed headlines, subheads, feature bullets, FAQs, and CTAs already drafted.

### Scope
- Define page narrative for each site:
  - Problem → solution → capabilities → trust → CTA
- Build per-site pages using shared components plus targeted content sections.
- Rewrite copy for clarity, specificity, and business outcomes.
- Include clear CTAs (book call, request sample, contact).

### Acceptance Criteria
- Each page has unique positioning while retaining shared brand quality.
- Messaging is concise, scannable, and conversion-oriented.
- CTAs are above the fold and repeated at logical points.

## Deliverable 4 — Quality, SEO, and Analytics Baseline
**Outcome:** Production-ready pages with strong technical hygiene.

### Scope
- Add metadata defaults (title templates, descriptions, social tags).
- Ensure semantic HTML, keyboard navigability, and focus visibility.
- Optimize images/assets and enforce lightweight bundles.
- Add optional analytics integration hooks (off by default unless configured).

### Acceptance Criteria
- Pages pass a11y sanity checks (landmarks, labels, contrast, focus).
- Core Web Vitals posture is strong for static pages.
- SEO metadata is present and correct on all pages.

## Deliverable 5 — GitHub Pages Deployment & Ops
**Outcome:** Reliable CI/CD for publishing each site to GitHub Pages.

### Scope
- Create/update GitHub Actions workflows to build and deploy all three sites.
- Ensure each site deploys from the correct output path.
- Add deployment docs (how to publish, rollback, and update content).
- Remove/retire outdated hosting artifacts from the current static setup.

### Acceptance Criteria
- Push to `main` triggers successful deploy workflow(s).
- All three published URLs resolve and render correctly.
- Repository docs clearly describe ownership and maintenance steps.

## Deliverable 6 — Final Polish & Handoff
**Outcome:** Team can confidently maintain and iterate after launch.

### Scope
- Final pass on spacing, typography rhythm, and responsive edge cases.
- QA checklist for links, forms/CTAs, and content integrity.
- Handoff notes with component usage patterns and content edit instructions.

### Acceptance Criteria
- No obvious visual regressions across common viewport sizes.
- Team can update copy/sections without touching core styling logic.
- Documentation is sufficient for routine updates.

## Proposed Implementation Sequence
1. Foundation setup (Astro + Tailwind + shared tokens)
2. Design system components + motion patterns
3. Build all three pages with revised copy and structure
4. SEO/a11y/performance hardening
5. GitHub Actions deployment setup
6. QA, polish, and handoff docs

## Risks & Mitigations
- **Risk:** Over-designing and losing "minimal" direction  
  **Mitigation:** Lock a restrained visual system early and enforce component reuse.
- **Risk:** Content quality lags behind implementation  
  **Mitigation:** Draft final copy before full page assembly.
- **Risk:** GitHub Pages path issues for multi-site output  
  **Mitigation:** Validate base paths in preview and production before launch.

## Implementation Notes for Agents

### Before You Start
1. **Read the skills first:**
   - `skills/frontend-design/SKILL.md` — for bold, distinctive design direction
   - `skills/b2b-saas-site/SKILL.md` — for B2B SaaS patterns and design tokens

2. **Study the content materials:**
   - Each site has a `teams/{site}/landing-page-copy.md` with full copy already drafted
   - Use this copy as the source of truth — don't invent new messaging

3. **Note the context:**
   - **Parent company:** DelegateML (use logos from `web/` folder)
   - **Geographic default:** UK-based (GBP, Europe/London timezone)
   - **All three sites:** are being rebuilt from skeleton versions in `web/{site}/`

### Site Summaries for Quick Reference

| Site | Target | Core Value Prop | Key CTA |
|------|--------|-----------------|---------|
| **data-reconciliation** | Marketing agencies, in-house growth teams | Stop reconciling ad data every Friday | Get free template / Book sanity check |
| **esg-reporting** | UK mid-market sustainability/compliance teams | Monthly ESG reporting pack, done for you | Get missing inputs checklist / Book 10 min |
| **proposal-desk** | Boutique agencies/studios | Proposal + SOW drafting/QA desk | Free QA pass / Book call |

### Design Principles
- Consult skills for typography, color, and motion guidance
- Avoid generic "AI slop" aesthetics (no Inter font, no purple gradients)
- Keep DelegateML branding subtle but present (footer logo, optional header)
- All three sites should feel cohesive but distinct in positioning

---

## Implementation Checklist

**Instructions:** Work through this checklist sequentially. Mark items as `[x]` when completed. If you encounter blockers, note them in the "Blockers" section below before handing off to another agent.

### Phase 1: Foundation (Do First)
- [x] Read both skill files (`skills/frontend-design/SKILL.md`, `skills/b2b-saas-site/SKILL.md`)
- [x] Review all three `teams/{site}/landing-page-copy.md` files to understand content
- [x] Set up Astro project with Tailwind CSS
- [x] Configure shared design tokens (colors, typography, spacing)
- [x] Set up base path handling for GitHub Pages subpaths
- [x] Create shared component directory structure

**Blockers for Phase 1:**
None - Phase 1 completed successfully.

### Phase 2: Design System Components
- [ ] Build Header/Nav component with mobile hamburger
- [ ] Build Hero section component
- [ ] Build Feature grid component
- [ ] Build Testimonials/Credibility component
- [ ] Build CTA strip component
- [ ] Build Footer component with DelegateML branding
- [ ] Add subtle animations (fade/slide on scroll, hover states)
- [ ] Implement reduced-motion accessibility fallback
- [ ] Test responsive breakpoints (mobile, tablet, desktop)

**Blockers for Phase 2:**
<!-- Note any issues encountered here -->

### Phase 3: Site Buildout - Data Reconciliation
- [ ] Read `teams/data-reconciliation/landing-page-copy.md`
- [ ] Create page structure: Problem → Solution → Features → Trust → CTA
- [ ] Implement Hero with headline "Stop reconciling ad data every Friday"
- [ ] Add "How it works" 3-step section
- [ ] Add FAQ section
- [ ] Add final CTA section
- [ ] Verify all CTAs are above the fold and repeated

**Blockers for Data Reconciliation:**
<!-- Note any issues encountered here -->

### Phase 4: Site Buildout - ESG Reporting
- [ ] Read `teams/esg-reporting/landing-page-copy.md`
- [ ] Create page structure: Problem → Solution → Features → Trust → CTA
- [ ] Implement Hero with headline "Monthly ESG reporting, done for you"
- [ ] Add "What you get" monthly pack section
- [ ] Add "How it works" 3-step section
- [ ] Add FAQ section
- [ ] Add final CTA section
- [ ] Verify all CTAs are above the fold and repeated

**Blockers for ESG Reporting:**
<!-- Note any issues encountered here -->

### Phase 5: Site Buildout - Proposal Desk
- [ ] Read `teams/proposal-desk/landing-page-copy.md`
- [ ] Create page structure: Problem → Solution → Features → Trust → CTA
- [ ] Implement Hero with scope-risk reduction messaging
- [ ] Add feature bullets (proposal, SOW, QA promise)
- [ ] Add "How it works" section
- [ ] Add FAQ section
- [ ] Add final CTA section
- [ ] Verify all CTAs are above the fold and repeated

**Blockers for Proposal Desk:**
<!-- Note any issues encountered here -->

### Phase 6: Quality & Polish
- [ ] Add SEO metadata (titles, descriptions, social tags) to all pages
- [ ] Verify semantic HTML and keyboard navigation
- [ ] Check contrast ratios and focus visibility
- [ ] Optimize images (DelegateML logos, any other assets)
- [ ] Run Lighthouse audit for performance
- [ ] Verify a11y compliance
- [ ] Test all links and CTAs
- [ ] Review copy for typos

**Blockers for Quality:**
<!-- Note any issues encountered here -->

### Phase 7: Deployment Setup
- [ ] Create GitHub Actions workflow for building all three sites
- [ ] Configure correct output paths for each site
- [ ] Test deployment to GitHub Pages
- [ ] Verify all three URLs resolve correctly
- [ ] Create deployment documentation
- [ ] Remove/retire old static site artifacts

**Blockers for Deployment:**
<!-- Note any issues encountered here -->

### Phase 8: Final Review & Handoff
- [ ] Final visual QA across viewport sizes
- [ ] Verify DelegateML branding is present but subtle
- [ ] Verify UK/GBP context is clear where appropriate
- [ ] Document component usage patterns
- [ ] Document how to update copy
- [ ] Update this plan with any important notes for future maintainers

**Blockers for Final Review:**
<!-- Note any issues encountered here -->

### Completion Confirmation
- [ ] All three sites are live on GitHub Pages
- [ ] All checklist items above are marked complete
- [ ] No blockers remain
- [ ] Handoff notes are complete

**Handoff Notes:**
<!-- If transferring to another agent, summarize: what's done, what's left, any gotchas -->
