# WOW! Momo — Website

Marketing site for WOW! Momo, built by IMX Creative Studio. Covers Home, Menu, Our Story, Find Us, Catering, and Contact in a single Next.js app.

## Stack

- **Next.js 14** (App Router) + **React 18**, JavaScript (no TS)
- **Tailwind CSS 3** with design tokens in `tailwind.config.js`
- **GSAP** (+ ScrollTrigger) for motion, **Lenis** for smooth scroll
- Fonts: Oswald (display), DM Sans (body), PT Serif (accent) — via Google Fonts `<link>`
- Static-first: all routes prerender (`○ Static`); no DB, no server state

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all routes static)
npm start        # serve the production build
```

Node 18+ recommended.

## Project structure

```
app/
  layout.jsx            Root layout: <Nav>, <SmoothScroll>, <Footer>, <StickyOrder>,
                        metadata (OpenGraph/Twitter), JSON-LD, skip link
  page.jsx              Home (hero, BrandMenu, FmcgCarousel, IndiaMap, FAQ)
  menu|story|locations|catering|contact/page.jsx
                        Each is a thin server component (exports metadata) that
                        renders a matching *Content client component
  sitemap.js robots.js manifest.js      SEO routes
  not-found.jsx error.jsx loading.jsx   Branded states
  icon.png              Favicon source
  globals.css           Tailwind + focus/skip-link/reduced-motion
components/             Nav, Footer, SmoothScroll, StickyOrder, BrandMenu,
                        FmcgCarousel, IndiaMap, Badges, Marquee, *Content
hooks/
  useReveal.js          Scroll-reveal hook used by inner-page content components
lib/
  brands.js             4 brands + full menus (name, img, veg, spicy, price, macros)
  fmcg.js               12 Wow! @Home products
  indiaMap.js           Pre-generated India map (state paths + city pins)
  site.js               Site-wide constants: SITE_URL, ORDER_URL, name, description
public/
  brands/ menu/ home/ team/   images (webp/jpg). team/ holds founder photos (optional)
  wow-logo.png og.jpg pwa-icon.png
```

## Design tokens (`tailwind.config.js`)

| Token | Hex | Use |
|-------|-----|-----|
| `brand-red` | #E2231A | primary accent |
| `brand-orangered` | #E7341A | hero background |
| `brand-yellow` | #FFC400 | highlights, hover |
| `brand-charcoal` | #161616 | dark sections |
| `brand-cream` | #F7F4EB | page background |
| `brand-ink` | #0F0F0F | body text |

## Pending / placeholders

- `public/team/` is empty → leadership/founder cards fall back to initials avatars.
  Add `sagar.jpg`, `binod.jpg`, `miftuar.jpg`, `murali.jpg`, `founders.jpg` to populate.
- Home hero image is a placeholder block (`app/page.jsx`).
- Nav background falls back to solid yellow until `public/nav-bg.png` is added.
- **Forms (Catering, Contact) are not wired to a backend** — they show a confirmation
  state only. Hook up to an email/CRM endpoint.
- `lib/site.js` `SITE_URL` is a placeholder — set to the real domain for correct
  sitemap/OG/canonical URLs.

## Deploy

Vercel (recommended): import the repo → it auto-detects Next.js → Deploy. Set
`SITE_URL` and any form/analytics env vars in the Vercel dashboard.
