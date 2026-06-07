'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FMCG } from '@/lib/fmcg';
import DishBadges from '@/components/Badges';

const SHOP_URL = 'https://blinkit.com/brand/Wow!%20Momo';

export default function FmcgCarousel() {
  const trackRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const cards = trackRef.current?.querySelectorAll('[data-fmcg]');
    if (!cards?.length) return;
    const tween = gsap.fromTo(cards, { autoAlpha: 0, y: 40 }, {
      autoAlpha: 1, y: 0, stagger: 0.07, duration: 0.6, ease: 'power2.out',
      scrollTrigger: { trigger: trackRef.current, start: 'top 80%' },
    });
    return () => { tween.scrollTrigger?.kill(); tween.kill(); };
  }, []);

  const scroll = (dir) => trackRef.current?.scrollBy({ left: dir * 280, behavior: 'smooth' });

  return (
    <section className="bg-brand-cream py-24 px-4 sm:px-8" id="shop-at-home">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="text-center sm:text-left">
            <h2 className="font-display text-5xl sm:text-7xl font-semibold uppercase leading-none tracking-tighter text-brand-charcoal">Delivered in minutes</h2>
            <p className="mt-4 text-sm sm:text-base text-brand-ink/70">Order from Blinkit, Zepto, Instamart and Amazon.</p>
          </div>
          <div className="flex justify-center gap-3">
            <button onClick={() => scroll(-1)} aria-label="Scroll left" className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-ink/15 text-brand-charcoal hover:bg-brand-red hover:text-white hover:border-brand-red transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button onClick={() => scroll(1)} aria-label="Scroll right" className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-ink/15 text-brand-charcoal hover:bg-brand-red hover:text-white hover:border-brand-red transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>

        <div ref={trackRef} className="flex gap-6 overflow-x-auto pb-4 snap-x" style={{ scrollbarWidth: 'thin' }}>
          {FMCG.map((p) => (
            <a
              data-fmcg
              key={p.name}
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="snap-start shrink-0 w-[230px] rounded-2xl bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-[280px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.name} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                <DishBadges veg={p.veg} spicy={p.spicy} />
              </div>
              <div className="px-4 py-3">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-display text-sm font-semibold uppercase leading-tight text-brand-charcoal">{p.name}</h3>
                  <span className="shrink-0 text-sm font-semibold text-brand-charcoal">{p.price}</span>
                </div>
                <p className="mt-1.5 text-[11px] font-medium uppercase tracking-wide text-brand-ink/60">{p.kcal} kcal · P {p.p} · C {p.c} · F {p.f}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
