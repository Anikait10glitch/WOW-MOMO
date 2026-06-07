'use client';

import { useEffect, useRef, useState } from 'react';
import { BRANDS } from '@/lib/brands';
import DishBadges, { Chili } from '@/components/Badges';
import { useReveal } from '@/hooks/useReveal';

function BrandLogo({ brand }) {
  const [broken, setBroken] = useState(false);
  if (broken) return <div className="h-full w-full" style={{ backgroundColor: brand.color }} />;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={brand.logo} alt={brand.name} loading="lazy" decoding="async" className="h-full w-full object-cover" onError={() => setBroken(true)} />;
}

function LegendDot({ color }) {
  return <span className="inline-flex h-4 w-4 items-center justify-center rounded-sm border-2 bg-white" style={{ borderColor: color }}><span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} /></span>;
}

export default function MenuContent() {
  const root = useRef(null);
  useReveal(root);
  const [activeId, setActiveId] = useState(BRANDS[0].id);

  // Highlight the brand currently in view in the sticky nav.
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveId(e.target.id); }),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    BRANDS.forEach((b) => { const el = document.getElementById(b.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <main ref={root} className="bg-brand-cream">
      {/* Hero */}
      <section className="px-4 sm:px-8 pt-40 pb-8 text-center">
        <span data-reveal className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">The Menu</span>
        <h1 data-reveal className="mt-3 font-display text-5xl sm:text-7xl md:text-8xl font-semibold uppercase leading-[0.9] tracking-tighter text-brand-charcoal">Eat the Wow!</h1>
        <p data-reveal className="mx-auto mt-6 max-w-2xl text-brand-ink/70">Momos, Chindian, fried chicken and kulfi — veg, non-veg and spice levels marked on every dish.</p>
        {/* Legend */}
        <div data-reveal className="mt-7 flex flex-wrap items-center justify-center gap-5 text-xs uppercase tracking-wide text-brand-ink/60">
          <span className="flex items-center gap-2"><LegendDot color="#1E8E3E" /> Veg</span>
          <span className="flex items-center gap-2"><LegendDot color="#C8102E" /> Non-veg</span>
          <span className="flex items-center gap-2"><Chili size={16} /> Spicy</span>
        </div>
      </section>

      {/* Brand jump nav (sticky, with active highlight) */}
      <div className="sticky top-24 z-30 mb-4 flex justify-center px-4">
        <div className="flex gap-2 rounded-full bg-white/90 backdrop-blur px-2 py-2 shadow-lg">
          {BRANDS.map((b) => (
            <a key={b.id} href={`#${b.id}`} className={`rounded-full px-4 py-2 font-display text-xs sm:text-sm font-semibold uppercase tracking-wide transition-colors ${activeId === b.id ? 'bg-brand-red text-white' : 'text-brand-ink/70 hover:bg-brand-cream'}`}>
              {b.name.replace('Wow! ', '')}
            </a>
          ))}
        </div>
      </div>

      {/* Per-brand sections (alternating background) */}
      {BRANDS.map((brand, bi) => (
        <section key={brand.id} id={brand.id} className={`px-4 sm:px-8 py-16 scroll-mt-36 ${bi % 2 ? 'bg-white' : ''}`}>
          <div className="mx-auto max-w-7xl">
            <div data-reveal className="mb-10 flex items-center gap-4 border-b-2 pb-5" style={{ borderColor: `${brand.color}40` }}>
              <span className="h-14 w-14 sm:h-16 sm:w-16 shrink-0 overflow-hidden rounded-full shadow-md" style={{ boxShadow: `0 0 0 3px ${brand.color}` }}>
                <BrandLogo brand={brand} />
              </span>
              <h2 className="font-display text-4xl sm:text-6xl font-semibold uppercase tracking-tighter text-brand-charcoal">{brand.name}</h2>
              <span className="ml-auto hidden sm:block font-display text-sm font-semibold uppercase tracking-widest" style={{ color: brand.color }}>{brand.menu.length} dishes</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
              {brand.menu.map((item) => (
                <div data-reveal key={item.name} className="group">
                  <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-2xl bg-black/5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.img} alt={item.name} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <DishBadges veg={item.veg} spicy={item.spicy} />
                  </div>
                  <div className="flex items-baseline justify-between gap-3 border-b border-dashed border-black/20 pb-2">
                    <h3 className="font-display text-lg font-semibold uppercase leading-tight text-brand-charcoal group-hover:text-brand-red transition-colors">{item.name}</h3>
                    <span className="shrink-0 text-sm font-semibold">{item.price}</span>
                  </div>
                  <p className="mt-2 text-xs text-brand-ink/70">{item.desc}</p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-brand-ink/60">{item.kcal} kcal · P {item.p} · C {item.c} · F {item.f}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-brand-orangered px-4 sm:px-8 py-20 text-center">
        <h2 className="font-display text-4xl sm:text-6xl font-semibold uppercase tracking-tighter text-white">Hungry yet?</h2>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://woweats.co.in" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-white px-8 py-3 font-display text-sm font-semibold uppercase tracking-wider text-brand-red shadow-xl hover:bg-brand-yellow hover:text-brand-ink transition-all">Order Online</a>
        </div>
      </section>
    </main>
  );
}
