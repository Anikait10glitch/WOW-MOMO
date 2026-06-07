'use client';

import { useRef } from 'react';
import IndiaMap from '@/components/IndiaMap';
import { useReveal } from '@/hooks/useReveal';

const FORMATS = [
  { name: 'Malls', desc: 'Flagship outlets in India\'s biggest malls.', color: '#E2231A',
    icon: <><rect x="4" y="8" width="16" height="12" /><path d="M4 8l2-4h12l2 4" /><line x1="9" y1="20" x2="9" y2="14" /><line x1="15" y1="20" x2="15" y2="14" /></> },
  { name: 'High Street', desc: 'Neighbourhood favourites on the high street.', color: '#F2851F',
    icon: <><path d="M3 9l1-5h16l1 5" /><path d="M5 9v11h14V9" /><rect x="9" y="13" width="6" height="7" /></> },
  { name: 'Kiosks', desc: 'Grab-and-go counters where it all began.', color: '#E0A400',
    icon: <><path d="M4 10l2-5h12l2 5" /><path d="M5 10v9h14v-9" /><line x1="5" y1="14" x2="19" y2="14" /></> },
  { name: 'Wow! Eats', desc: 'Delivery-first cloud kitchens, made for speed.', color: '#161616',
    icon: <><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /><path d="M5 18H3V7h11v11" /><path d="M14 10h4l3 4v4h-2" /></> },
];

const CITIES = ['Kolkata', 'Delhi NCR', 'Mumbai', 'Bengaluru', 'Hyderabad', 'Chennai', 'Pune', 'Ahmedabad', 'Lucknow', 'Jaipur', 'Indore', 'Guwahati', 'Bhubaneswar', 'Chandigarh', 'Kochi', 'Nagpur'];

export default function LocationsContent() {
  const root = useRef(null);
  useReveal(root);

  return (
    <main ref={root} className="bg-brand-cream">
      {/* Hero */}
      <section className="px-4 sm:px-8 pt-40 pb-8 text-center">
        <span data-reveal className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">Find Us</span>
        <h1 data-reveal className="mt-3 font-display text-5xl sm:text-7xl md:text-8xl font-semibold uppercase leading-[0.9] tracking-tighter text-brand-charcoal">There&apos;s a Wow!<br />near you</h1>
        <p data-reveal className="mx-auto mt-6 max-w-2xl text-brand-ink/70">800+ outlets across 35+ cities, in four formats. Explore the map, then find your nearest.</p>
      </section>

      {/* Interactive India map (reused) */}
      <IndiaMap />

      {/* City chips */}
      <section className="px-4 sm:px-8 pb-8">
        <div data-reveal className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">Cities we Wow</h2>
          <div className="mt-5 flex flex-wrap justify-center gap-2.5">
            {CITIES.map((c) => (
              <span key={c} className="rounded-full border border-brand-ink/15 bg-white px-4 py-1.5 text-sm text-brand-ink/75">{c}</span>
            ))}
            <span className="rounded-full bg-brand-red px-4 py-1.5 text-sm font-semibold text-white">+ many more</span>
          </div>
        </div>
      </section>

      {/* Store formats */}
      <section className="px-4 sm:px-8 py-20 bg-white">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-12 text-center">
            <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">Four formats</span>
            <h2 className="mt-2 font-display text-4xl sm:text-6xl font-semibold uppercase tracking-tighter text-brand-charcoal">However you Wow</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FORMATS.map((f) => (
              <div data-reveal key={f.name} className="rounded-2xl bg-brand-cream p-8 shadow-sm transition-transform hover:-translate-y-1">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl" style={{ backgroundColor: `${f.color}1A` }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={f.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{f.icon}</svg>
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold uppercase text-brand-charcoal">{f.name}</h3>
                <p className="mt-2 text-sm text-brand-ink/70">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-orangered px-4 sm:px-8 py-20 text-center">
        <h2 data-reveal className="font-display text-4xl sm:text-6xl font-semibold uppercase tracking-tighter text-white">Find your nearest Wow!</h2>
        <div data-reveal className="mt-8">
          <a href="https://restaurants.wowmomo.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-display text-sm font-semibold uppercase tracking-widest text-brand-red hover:bg-brand-yellow hover:text-brand-ink transition-colors">
            Open the store locator
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </section>
    </main>
  );
}
