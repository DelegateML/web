# Reconciliation Template — How to Use

Use these two CSVs as the “lead magnet” + starting point for a concierge reconciliation pass:
- `reconciliation-template.csv` — normalized export table (one row per date + entity where possible)
- `exceptions-template.csv` — mismatch log you can share with a client/internal team

## Step 1: Define your source of truth
Pick what **must** match for reporting/billing (examples):
- ad platform UI totals
- GA4 conversions
- Shopify orders/revenue
- monthly invoice numbers

Write it down before reconciling so you don’t argue with yourself later.

## Step 2: Standardize timezone + currency
Most “numbers don’t match” cases start here.
- Set the timezone and currency columns explicitly for each source export.
- If your exports come in mixed timezones/currencies, normalize them before comparing totals.

## Step 3: Start with account totals, then drill down
Recommended workflow:
1) Compare **account totals** by day (spend, conversions, revenue).  
2) If mismatched, log the variance in `exceptions-template.csv`.  
3) Drill down to campaign/adset/ad (keep IDs, not just names).

## Step 4: Common mismatch causes (use in your notes)
- timezone or currency differences
- attribution window differences
- tracking/tagging changes; backfilled conversions
- campaign naming drift; missing IDs
- duplicated lines from manual merges
- refunds/returns (Shopify) vs gross revenue (platform)

## What to ask a prospect (fast qualifying)
- “What two sources are you trying to match?”
- “What’s your source of truth for billing/reporting?”
- “Is this a weekly Friday close, or month-end?”
