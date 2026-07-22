# Auromous

Marketing and B2B catalog site for **Auromous**, a supplier of herbal cosmetic raw materials — cosmetic clays, botanical hair care actives, and skincare phyto-actives — for private-label and wholesale buyers.

Built with [Next.js](https://nextjs.org) 16 (App Router) and TypeScript, implemented from a Claude Design handoff.

## Getting Started

Requires Node.js 20.9+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other scripts

```bash
npm run build   # production build
npm run start   # serve the production build
npx eslint .     # lint
```

## Project structure

```
src/
  app/
    page.tsx                        # Landing page
    products/page.tsx               # All Products catalog (category grids)
    product/[slug]/page.tsx         # Product detail (dynamic, 42 SKUs)
    product/[slug]/packaging/       # Custom packaging & labeling per product
    become-a-partner/               # Get Custom Quote enquiry form
  components/                       # Navbar, Footer, ProductCarousel, etc.
  lib/products.ts                   # Product catalog data (single source of truth)
public/assets/                      # Product photography, hero imagery, brand assets
```

Each route pairs a `page.tsx` with a co-located CSS Module (`page.module.css`) for styling; shared components follow the same pattern.

## Content model

All 42 products (title, botanical name, category, images, description) live in `src/lib/products.ts`. Product detail and packaging pages are statically generated at build time via `generateStaticParams`.

## Notes

- No `next/image` — plain `<img>` is used throughout so the hand-tuned hover/scale transforms from the design match exactly, and to avoid Next's stricter local-image optimization config surface for this asset set.
- The custom-quote form submits by opening a prefilled `mailto:support@auromous.com` — there's no backend.
