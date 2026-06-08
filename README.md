# WOW! Momo — Website

Marketing site for WOW! Momo, built by IMX Creative Studio. Covers Home, Menu, Our Story, Find Us, Catering, and Contact in a single Next.js app.

---

## Stack

- **Next.js 14** (App Router) + React 18, JavaScript (no TS)
- **Tailwind CSS 3** with design tokens in `tailwind.config.js`
- **GSAP** (+ ScrollTrigger) for motion, **Lenis** for smooth scroll
- **Fonts:** Oswald (display), DM Sans (body), PT Serif (accent) — via Google Fonts `<link>`
- **Static-first:** all routes prerender (`○ Static`); no DB, no server state

---

## Quick Start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all routes static)
npm start        # serve the production build
```

Node 18+ recommended.

---

## Project Structure

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

---

## Design Tokens (`tailwind.config.js`)

| Token            | Hex       | Use                        |
|------------------|-----------|----------------------------|
| `brand-red`      | `#E2231A` | Primary accent             |
| `brand-orangered`| `#E7341A` | Hero background            |
| `brand-yellow`   | `#FFC400` | Highlights, hover          |
| `brand-charcoal` | `#161616` | Dark sections              |
| `brand-cream`    | `#F7F4EB` | Page background            |
| `brand-ink`      | `#0F0F0F` | Body text                  |

---

## Environment Variables

Create a `.env.local` file in the project root for local development. Set the same variables in the Vercel dashboard for production.

| Variable   | Required | Description                                      |
|------------|----------|--------------------------------------------------|
| `SITE_URL` | Yes      | Production domain e.g. `https://wowmomo.com`     |

> `SITE_URL` drives all canonical URLs, Open Graph tags, and the sitemap. Must be set before go-live.

---

## Contributing

`main` is production — it should always be stable and deployable.

```bash
# 1. Create a branch
git checkout -b feature/your-change

# 2. Make changes and commit
git add .
git commit -m "feat: describe your change"

# 3. Push and open a PR
git push origin feature/your-change
```

Open a Pull Request on GitHub → review the diff → merge into `main`. Never commit directly to `main`.

---

## Deploy

**Vercel (recommended):** import the repo → it auto-detects Next.js → Deploy. Set `SITE_URL` and any form/analytics env vars in the Vercel dashboard.

Every push to `main` triggers an automatic redeploy.

---

## Pre-Launch Checklist

Before pointing the real domain at the live site:

- [ ] Add team photos to `public/team/` (`sagar.jpg`, `binod.jpg`, `miftuar.jpg`, `murali.jpg`, `founders.jpg`)
- [ ] Replace hero placeholder block in `app/page.jsx` with the client-supplied hero image
- [ ] Add `public/nav-bg.png` (nav background image)
- [ ] Set `SITE_URL` to the real domain in the Vercel dashboard
- [ ] Wire Catering and Contact forms to a backend or email endpoint
- [ ] Submit sitemap to [Google Search Console](https://search.google.com/search-console) after go-live

---

## Pending / Placeholders

- `public/team/` is empty → leadership/founder cards fall back to initials avatars. Add photos to populate.
- Home hero image is a placeholder block (`app/page.jsx`).
- Nav background falls back to solid yellow until `public/nav-bg.png` is added.
- Forms (Catering, Contact) are not wired to a backend — they show a confirmation state only. Hook up to an email/CRM endpoint.
- `lib/site.js` `SITE_URL` is a placeholder — set to the real domain for correct sitemap/OG/canonical URLs.

---

*Built by [IMX Creative Studio](https://imxstudio.in)*
