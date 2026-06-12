# ClearBooks

Placeholder landing page for [ClearBooks]([https://clearbooks.ca](https://clear-books-peach.vercel.app/)) — an AI-first financial clarity tool for solopreneurs, gig workers, and small business owners.

This repo currently contains **only the marketing site**. The product (Plaid bank connection, AI chat, auto-categorization, monthly reports, Stripe billing) is scoped separately and not built yet.

Built with [Next.js](https://nextjs.org) (App Router), Tailwind CSS, and shadcn-style UI components.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
| --- | --- |
| `/` | Landing page with waitlist form |
| `/privacy` | Privacy policy (required for Plaid / Stripe) |
| `/terms` | Terms of service |

## What's on the landing page

- Hero + product overview mockup
- **Chat mode** vs **Report mode** (core product vision from scope doc)
- Problem / How it works (Plaid connect → agent categorizes → ask or receive reports)
- Features, AI insights, export, audience, trust sections
- Waitlist signup form
- Footer with newsletter + legal links

## Not built yet (V1 scope)

Per the product scope, Layer 1 features come next:

- Plaid bank connection
- Auto-categorization
- AI chat interface
- User accounts + Stripe billing ($40/month)

The waitlist form and newsletter signup are stubbed locally — wire them to an API or email service when ready.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build
