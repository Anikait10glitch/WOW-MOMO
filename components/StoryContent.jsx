'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const TIMELINE = [
  { year: '2008', title: 'Wow! Momo is born', text: 'Classmates Sagar Daryani and Binod Homagai start out from a small Kolkata kiosk with ₹30,000 — and one idea: serve an experience, not just a momo.' },
  { year: '2015', title: 'The finances get serious', text: 'Shah Miftuar joins as CFO, bringing the discipline to scale a kiosk into a company.' },
  { year: '2018', title: 'A marketing engine', text: 'Murali Krishnan joins as CMO, sharpening the brand that India had already fallen for.' },
  { year: '2019', title: 'Wow! China', text: 'The second brand launches — redefining Chindian with rice bowls, noodles and the flavours India loves.' },
  { year: '2021', title: 'Wow! Chicken', text: 'Crispy fried chicken joins the family, taking on the QSR mainstream head-on.' },
  { year: '2023', title: 'Wow! Kulfi', text: 'A sweet finish — kulfi, falooda and desserts complete the table.' },
  { year: 'Today', title: 'A national favourite', text: '800+ outlets across 35+ cities, five brands, and over a million momos served every single day — all from that one kiosk.' },
];

// Customer-first metrics (not revenue). "Momos a day" sourced from public reporting.
const STATS = [
  { n: '1M+', l: 'Momos served daily' },
  { n: '800+', l: 'Outlets' },
  { n: '35+', l: 'Cities' },
  { n: '5', l: 'Consumer brands' },
];

// Drop real photos into /public/team/ as sagar.jpg, binod.jpg, miftuar.jpg,
// murali.jpg (and founders.jpg for the beginning section). Styled initials
// avatars show until then.
const LEADERS = [
  { initials: 'SD', name: 'Sagar J. Daryani', role: 'Co-founder & CEO', color: '#E2231A', img: '/team/sagar.jpg' },
  { initials: 'BH', name: 'Binod Homagai', role: 'Co-founder', color: '#F2851F', img: '/team/binod.jpg' },
  { initials: 'SM', name: 'Shah Miftuar', role: 'Chief Financial Officer · 2015', color: '#161616', img: '/team/miftuar.jpg' },
  { initials: 'MK', name: 'Murali Krishnan', role: 'Chief Marketing Officer · 2018', color: '#E6157E', img: '/team/murali.jpg' },
];

const COLLAGE = [
  { src: '/menu/momo/chatpata-paneer-panfried.webp', alt: 'Chatpata Paneer Pan-Fried Momo' },
  { src: '/menu/china/chilli-chicken-dry.webp', alt: 'Chilli Chicken Dry' },
  { src: '/menu/chicken/korean-bbq-burger.webp', alt: 'Korean Barbeque Burger' },
  { src: '/menu/kulfi/popsicle-mango.webp', alt: 'Mango Popsicle' },
  { src: '/menu/momo/veg-himalayan-steam.webp', alt: 'Veg Himalayan Steam Momo' },
  { src: '/menu/china/chicken-lollypop.webp', alt: 'Chicken Lollypop' },
];

// Image that falls back to another src if the first is missing.
function ImgFallback({ src, fallback, alt, className }) {
  const [cur, setCur] = useState(src);
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={cur} alt={alt} className={className} loading="lazy" decoding="async" onError={() => cur !== fallback && setCur(fallback)} />;
}

function LeaderCard({ p }) {
  const [broken, setBroken] = useState(false);
  return (
    <div data-reveal className="text-center">
      <div className="relative mx-auto aspect-square w-full max-w-[200px] overflow-hidden rounded-2xl shadow-lg">
        {broken ? (
          <div className="flex h-full w-full items-center justify-center font-display text-4xl font-semibold text-white" style={{ backgroundColor: p.color }}>{p.initials}</div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={p.img} alt={p.name} loading="lazy" decoding="async" className="h-full w-full object-cover" onError={() => setBroken(true)} />
        )}
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold uppercase text-brand-charcoal">{p.name}</h3>
      <p className="mt-1 text-xs uppercase tracking-wide text-brand-ink/55">{p.role}</p>
    </div>
  );
}

export default function StoryContent() {
  const root = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        gsap.fromTo(el, { autoAlpha: 0, y: 36 }, {
          autoAlpha: 1, y: 0, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={root} className="bg-brand-cream">
      {/* Hero */}
      <section className="px-4 sm:px-8 pt-40 pb-20">
        <div className="mx-auto max-w-5xl text-center">
          <span data-reveal className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">Since 2008 · Kolkata</span>
          <h1 data-reveal className="mt-3 font-display text-5xl sm:text-7xl md:text-8xl font-semibold uppercase leading-[0.9] tracking-tighter text-brand-charcoal">
            From one momo<br />to a movement
          </h1>
          <p data-reveal className="mx-auto mt-8 max-w-2xl text-lg text-brand-ink/75">
            Wow! Momo started on 29 August 2008 with two friends, a tiny kiosk, and ₹30,000. The plan was simple: don&apos;t just sell a momo — leave people with one word. <span className="font-semibold text-brand-red">Wow!</span>
          </p>
        </div>
      </section>

      {/* The beginning — founders */}
      <section className="px-4 sm:px-8 py-20 bg-white">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <div data-reveal className="relative">
            <div className="absolute -inset-3 rounded-[2.5rem] bg-brand-yellow/40 -rotate-2" />
            <ImgFallback src="/team/founders.jpg" fallback="/menu/momo/veg-himalayan-steam.webp" alt="Sagar Daryani and Binod Homagai, founders of Wow! Momo" className="relative w-full h-[380px] object-cover rounded-[2rem] shadow-xl" />
            <span className="absolute bottom-5 left-5 rounded-full bg-brand-charcoal/80 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-wide text-white">Sagar &amp; Binod, 2008</span>
          </div>
          <div data-reveal>
            <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">The beginning</span>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl font-semibold uppercase tracking-tight text-brand-charcoal">Two Xaverians, one big idea</h2>
            <p className="mt-5 text-brand-ink/75 leading-relaxed">
              In their final year at St. Xavier&apos;s, Kolkata, Sagar and Binod took the plunge. They believed a momo could be more than a snack — it could be an experience. So they called it Wow! Momo.
            </p>
            <p className="mt-4 text-brand-ink/75 leading-relaxed">
              From Cheese Momos to the legendary MoBurg, relentless innovation turned a single kiosk into a household name — without ever losing the fun.
            </p>
          </div>
        </div>
      </section>

      {/* Founder quote */}
      <section className="px-4 sm:px-8 py-20">
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <span className="font-display text-6xl leading-none text-brand-red">&ldquo;</span>
          <p className="font-serif text-2xl sm:text-3xl leading-snug text-brand-charcoal">
            We never wanted to just sell a momo. We wanted to leave every customer with one word — <span className="text-brand-red">Wow!</span>
          </p>
          <p className="mt-6 font-display text-xs font-semibold uppercase tracking-widest text-brand-ink/60">Sagar Daryani &amp; Binod Homagai · Co-founders</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4 sm:px-8 py-24 bg-white">
        <div className="mx-auto max-w-4xl">
          <div data-reveal className="mb-14 text-center">
            <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">The journey</span>
            <h2 className="mt-2 font-display text-4xl sm:text-6xl font-semibold uppercase tracking-tighter text-brand-charcoal">From one kiosk to a national favourite</h2>
          </div>
          <div className="relative border-l-2 border-brand-red/25 ml-3 sm:ml-6">
            {TIMELINE.map((t) => (
              <div data-reveal key={t.year} className="relative pl-8 sm:pl-12 pb-12 last:pb-0">
                <span className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-brand-red ring-4 ring-white" />
                <span className="font-display text-2xl font-semibold text-brand-red">{t.year}</span>
                <h3 className="mt-1 font-display text-xl font-semibold uppercase text-brand-charcoal">{t.title}</h3>
                <p className="mt-2 text-sm text-brand-ink/70 leading-relaxed max-w-xl">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band — customer-first */}
      <section className="bg-brand-charcoal px-4 sm:px-8 py-16">
        <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((s) => (
            <div data-reveal key={s.l}>
              <div className="font-display text-4xl sm:text-6xl font-semibold text-brand-yellow">{s.n}</div>
              <div className="mt-2 text-xs sm:text-sm uppercase tracking-widest text-white/70">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="px-4 sm:px-8 py-24 bg-white">
        <div className="mx-auto max-w-6xl">
          <div data-reveal className="mb-14 text-center">
            <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">The people</span>
            <h2 className="mt-2 font-display text-4xl sm:text-6xl font-semibold uppercase tracking-tighter text-brand-charcoal">The team behind the Wow</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {LEADERS.map((p) => <LeaderCard key={p.name} p={p} />)}
          </div>
        </div>
      </section>

      {/* Manufacturing & R&D */}
      <section className="px-4 sm:px-8 py-24">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <div data-reveal className="order-2 lg:order-1">
            <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">The kitchen behind it all</span>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl font-semibold uppercase tracking-tight text-brand-charcoal">Ninja chefs &amp; IQF tech</h2>
            <p className="mt-5 text-brand-ink/75 leading-relaxed">
              Our momos are crafted on ultra-modern, Japanese-imported machines using Individual Quick Freezing (IQF) technology that locks in freshness from prep to plate.
            </p>
            <p className="mt-4 text-brand-ink/75 leading-relaxed">
              At a futuristic plant near Greater Noida — home to India&apos;s largest momo R&amp;D centre — automation handles the heavy lifting, with sustainability built into the core.
            </p>
          </div>
          <div data-reveal className="order-1 lg:order-2 relative">
            <div className="absolute -inset-3 rounded-[2.5rem] bg-brand-red/10 rotate-2" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/menu/momo/chicken-cheese-fried.webp" alt="Wow! Momo kitchen" className="relative w-full h-[360px] object-cover rounded-[2rem] shadow-xl" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* Food collage */}
      <section className="px-4 sm:px-8 pb-24">
        <div className="mx-auto max-w-6xl">
          <div data-reveal className="mb-10 text-center">
            <h2 className="font-display text-4xl sm:text-6xl font-semibold uppercase tracking-tighter text-brand-charcoal">Made to make you go Wow!</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {COLLAGE.map((item, i) => (
              <div data-reveal key={item.src} className={`overflow-hidden rounded-2xl ${i % 5 === 0 ? 'row-span-2' : ''}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.src} alt={item.alt} className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-orangered px-4 sm:px-8 py-20 text-center">
        <h2 data-reveal className="font-display text-4xl sm:text-6xl font-semibold uppercase tracking-tighter text-white">Taste the story</h2>
        <div data-reveal className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/menu" className="rounded-xl bg-white px-8 py-3 font-display text-sm font-semibold uppercase tracking-wider text-brand-red shadow-xl hover:bg-brand-yellow hover:text-brand-ink transition-all">
            See the Menu
          </Link>
          <a href="https://woweats.co.in" target="_blank" rel="noopener noreferrer" className="rounded-xl border-2 border-white/40 px-8 py-3 font-display text-sm font-semibold uppercase tracking-wider text-white hover:bg-brand-yellow hover:text-brand-ink hover:border-brand-yellow transition-all">
            Order Online
          </a>
        </div>
      </section>
    </main>
  );
}
