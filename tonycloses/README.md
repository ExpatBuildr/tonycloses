# TonyCloses.com

Astro static site. All copy lives in `src/data/site.ts`: edit text there, not in components.

## Commands

```
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview
```

## Deploy to Cloudflare Pages

**Option A: Git (auto-deploys on push)**
- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`
- Node version: 22 (set by `.node-version`)

**Option B: Direct Upload**
- Run `npm run build`, then zip the *contents* of `dist/` (so `index.html` is at the zip root), and upload.

## Common edits

- Booking link / email / meta tags: `site` in `src/data/site.ts`
- Social links: `socials` in the same file
- Hero photo: replace `src/assets/hero.jpg`; headshot: `src/assets/headshot.jpg`
- Share card (Twitter/LinkedIn): `public/og.jpg` (1200x630)
- Testimonial / Loom: not built yet; add a component once you have the quote and link
