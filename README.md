# WOW! Momo — Unified Website

One Next.js app that merges the six approved template pages into a single, branded site.

## Stack
- **Next.js 14** (App Router) + **React 18**
- **Tailwind CSS 3** with locked Wow design tokens (`tailwind.config.js`)
- Fonts kept from the template: Oswald (display), DM Sans (body), PT Serif (accent)

## Run it
```bash
cd wow-momo-site
npm install
npm run dev      # http://localhost:3000
```
Build: `npm run build && npm start`

## Structure
```
app/
  layout.jsx        Shared Nav + Footer wrap every page
  page.jsx          Home (fully rebranded to Wow)
  menu/             route stub — port from "Menu Page" template
  story/            route stub — port from "About Us" template
  locations/        route stub — port from "Our Locations" template
  catering/         route stub — port from "Catering Page" template
  contact/          route stub — port from "Contact Us" template
components/
  Nav.jsx           Floating pill nav (Order Online → woweats.co.in)
  Footer.jsx        Wow footer (Explore / Business / Contact)
  Marquee.jsx       Scrolling strip
  FmcgCarousel.jsx  Wow! @Home packaged-foods showcase (NEW)
```

## Design tokens (locked)
| Token | Hex | Use |
|-------|-----|-----|
| `brand-red` | #E2231A | primary accent |
| `brand-yellow` | #FFC400 | highlights / badges |
| `brand-charcoal` | #161616 | dark sections |
| `brand-cream` | #F7F4EB | page background |
| `brand-ink` | #0F0F0F | body text |

Swap exact hex in `tailwind.config.js` if the brand sends official codes.

## Status
- **Done:** unified scaffold, shared Nav/Footer, design system, Home page (incl. Wow! @Home FMCG carousel + brands hub).
- **Next:** port Menu, Story, Locations, Catering, Contact from their templates; wire forms to a lead destination; drop in real logos, photography and product data from `WowMomo_Build_Tracker.xlsx`.
- All placeholders are marked `TODO` in the code.
