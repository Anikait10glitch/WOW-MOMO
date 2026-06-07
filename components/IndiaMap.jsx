'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { VIEWBOX, STATES, PINS } from '@/lib/indiaMap';

// Accurate India map (real state geometry from @svg-maps/india). City pins are
// projected from latitude/longitude via a least-squares fit (~8px mean error).
const LOCATOR_URL = 'https://restaurants.wowmomo.com';

export default function IndiaMap() {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const pins = ref.current?.querySelectorAll('.wow-pin');
    if (!pins?.length) return;
    const tween = gsap.fromTo(pins, { autoAlpha: 0, y: -16 }, {
      autoAlpha: 1, y: 0, stagger: 0.05, duration: 0.5, ease: 'back.out(1.7)',
      scrollTrigger: { trigger: ref.current, start: 'top 75%' },
    });
    return () => { tween.scrollTrigger?.kill(); tween.kill(); };
  }, []);

  return (
    <section className="bg-brand-cream py-24 px-4 sm:px-8" id="find-us">
      <style>{`
        .wow-pin{transition:transform .2s ease;transform-box:fill-box;transform-origin:center bottom;cursor:pointer}
        .wow-pin:hover{transform:scale(1.2)}
        .wow-lbl{opacity:0;transition:opacity .15s ease;pointer-events:none}
        .wow-pin:hover .wow-lbl{opacity:1}
      `}</style>

      <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">Find Us</span>
          <h2 className="mt-2 font-display text-4xl sm:text-6xl font-semibold uppercase tracking-tight text-brand-charcoal">800+ outlets,<br />35+ cities</h2>
          <p className="mt-4 max-w-md mx-auto lg:mx-0 text-brand-ink/70">From Kolkata to Kochi, there&apos;s a Wow! near you. Hover a pin to see the city.</p>
          <a href={LOCATOR_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-brand-red px-8 py-4 font-display text-sm font-semibold uppercase tracking-widest text-white hover:bg-brand-yellow hover:text-brand-ink transition-colors">
            Locate a Wow!
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>

        <div ref={ref}>
          <svg viewBox={VIEWBOX} className="w-full h-auto max-w-md mx-auto" role="img" aria-label="Map of India showing Wow! Momo cities">
            <g>
              {STATES.map((s) => (
                <path key={s.id} d={s.path} fill="rgba(226,35,26,0.10)" stroke="rgba(226,35,26,0.35)" strokeWidth="0.7" strokeLinejoin="round" />
              ))}
            </g>
            {PINS.map((p) => (
              <g key={p.c} className="wow-pin">
                <title>{p.c}</title>
                <polygon points={`${p.x - 5},${p.y - 13} ${p.x + 5},${p.y - 13} ${p.x},${p.y}`} fill="#161616" />
                <circle cx={p.x} cy={p.y - 18} r="9" fill="#161616" />
                <circle cx={p.x} cy={p.y - 18} r="6" fill="#FFC400" />
                <text x={p.x} y={p.y - 14} textAnchor="middle" fontSize="11" fontWeight="700" fill="#161616" fontFamily="var(--font-display), sans-serif">!</text>
                <g className="wow-lbl">
                  <rect x={p.x - 28} y={p.y - 44} width="56" height="17" rx="4" fill="#161616" />
                  <text x={p.x} y={p.y - 32} textAnchor="middle" fontSize="10" fill="#fff" fontFamily="var(--font-sans), sans-serif">{p.c}</text>
                </g>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
