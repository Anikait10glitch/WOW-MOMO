'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { BRANDS } from '@/lib/brands';
import DishBadges from '@/components/Badges';

const AUTO_MS = 30000;

function BrandLogo({ brand }) {
  const [broken, setBroken] = useState(false);
  if (broken) {
    return (
      <div className="flex h-full w-full items-center justify-center text-center" style={{ backgroundColor: brand.color }}>
        <span className="font-display text-sm font-semibold uppercase leading-tight text-white drop-shadow">{brand.name}</span>
      </div>
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={brand.logo} alt={brand.name} loading="eager" decoding="async" className="h-full w-full object-cover" onError={() => setBroken(true)} />;
}

export default function BrandMenu() {
  const [active, setActive] = useState(0);
  const circleRefs = useRef([]);
  const gridRef = useRef(null);
  const busy = useRef(false);

  const brand = BRANDS[active];

  useEffect(() => {
    circleRefs.current.forEach((el, i) => {
      if (el) gsap.to(el, { scale: i === active ? 1.12 : 1, duration: 0.5, ease: 'back.out(2)' });
    });
  }, [active]);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll('[data-card]');
    gsap.set(gridRef.current, { autoAlpha: 1, y: 0 });
    gsap.fromTo(cards, { autoAlpha: 0, y: 24 }, {
      autoAlpha: 1, y: 0, stagger: 0.05, duration: 0.5, ease: 'power2.out',
      onComplete: () => { busy.current = false; },
    });
  }, [active]);

  const selectBrand = (i) => {
    if (i === active || busy.current || !gridRef.current) { if (i !== active) setActive(i); return; }
    busy.current = true;
    gsap.to(gridRef.current, { autoAlpha: 0, y: 8, duration: 0.22, ease: 'power1.in', onComplete: () => setActive(i) });
  };

  useEffect(() => {
    const id = setTimeout(() => selectBrand((active + 1) % BRANDS.length), AUTO_MS);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <section className="bg-brand-cream py-24 px-4 sm:px-8" id="brands">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">One family</span>
          <h2 className="mt-2 font-display text-5xl sm:text-7xl font-semibold uppercase leading-none tracking-tighter text-brand-charcoal">Four ways to Wow!</h2>
        </div>

        {/* Brand circles — pick one, the menu below follows */}
        <div className="mb-16 flex flex-wrap items-start justify-center gap-8 sm:gap-12">
          {BRANDS.map((b, i) => (
            <button
              key={b.id}
              ref={(el) => (circleRefs.current[i] = el)}
              onClick={() => selectBrand(i)}
              className="group flex flex-col items-center gap-3 focus:outline-none"
              aria-pressed={i === active}
              aria-label={`Show ${b.name} menu`}
            >
              <span
                className="block h-24 w-24 sm:h-32 sm:w-32 overflow-hidden rounded-full transition-shadow"
                style={{ boxShadow: i === active ? `0 0 0 4px ${b.color}, 0 12px 28px rgba(0,0,0,0.18)` : '0 6px 16px rgba(0,0,0,0.12)' }}
              >
                <BrandLogo brand={b} />
              </span>
              <span className={`font-display text-sm font-semibold uppercase tracking-wide transition-colors ${i === active ? 'text-brand-red' : 'text-brand-ink/50'}`}>{b.name}</span>
            </button>
          ))}
        </div>

        {/* Menu — full 3-column grid (9 dishes). Momo rows: steam / fried / pan-fried. */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
          {brand.menu.map((item) => (
            <div data-card key={item.name} className="group">
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
  );
}
