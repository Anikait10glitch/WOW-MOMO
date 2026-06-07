'use client';

import { useRef, useState } from 'react';
import { useReveal } from '@/hooks/useReveal';

const STATS = [
  { n: '5,000+', l: 'Events catered' },
  { n: '4', l: 'Brands to mix' },
  { n: '35+', l: 'Cities served' },
];

const BOXES = ['Momo Platter', 'Chindian Feast Box', 'Mixed Wow! Box'];
const CATERS = [{ n: 'Momos', c: '#E2231A' }, { n: 'Chindian', c: '#F2851F' }, { n: 'Fried Chicken', c: '#E0A400' }, { n: 'Kulfi', c: '#E6157E' }];

// NOTE: form is presentational — wire onSubmit to the real lead destination
// (email/CRM) when available. For now it shows a confirmation state.
const inputCls = 'w-full rounded-xl border border-brand-ink/15 bg-white px-4 py-3 text-sm text-brand-ink focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20';
const labelCls = 'mb-1.5 block font-display text-xs font-semibold uppercase tracking-wide text-brand-ink/70';

export default function CateringContent() {
  const root = useRef(null);
  useReveal(root);
  const [sent, setSent] = useState(false);

  return (
    <main ref={root} className="bg-brand-cream">
      {/* Hero */}
      <section className="px-4 sm:px-8 pt-40 pb-12">
        <div className="mx-auto max-w-6xl">
          <span data-reveal className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">Catering · Events · Bulk Orders</span>
          <h1 data-reveal className="mt-3 font-display text-5xl sm:text-7xl md:text-8xl font-semibold uppercase leading-[0.9] tracking-tighter text-brand-charcoal">Wow! your<br />whole party</h1>
          <p data-reveal className="mt-6 max-w-2xl text-lg text-brand-ink/75">From house parties to corporate events, we cater momos, Chindian, chicken and kulfi in bulk — across the country. Tell us what you need and our team will be in touch.</p>
          <div data-reveal className="mt-10 grid grid-cols-3 gap-6 max-w-xl">
            {STATS.map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl sm:text-5xl font-semibold text-brand-red">{s.n}</div>
                <div className="mt-1 text-[11px] sm:text-xs uppercase tracking-widest text-brand-ink/60">{s.l}</div>
              </div>
            ))}
          </div>
          <div data-reveal className="mt-8">
            <span className="font-display text-xs font-semibold uppercase tracking-widest text-brand-ink/50">What we cater</span>
            <div className="mt-3 flex flex-wrap gap-3">
              {CATERS.map((x) => (
                <span key={x.n} className="rounded-full border-2 bg-white px-4 py-1.5 font-display text-sm font-semibold uppercase tracking-wide" style={{ borderColor: x.c, color: x.c }}>{x.n}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section className="px-4 sm:px-8 pb-24">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-3 gap-10">
          {/* Form */}
          <div data-reveal className="lg:col-span-2 rounded-3xl bg-white p-6 sm:p-10 shadow-sm">
            <h2 className="font-display text-3xl font-semibold uppercase text-brand-charcoal">Catering enquiry</h2>
            {sent ? (
              <div role="status" aria-live="polite" className="mt-8 rounded-2xl bg-brand-cream p-8 text-center">
                <p className="font-display text-2xl font-semibold uppercase text-brand-red">Thank you!</p>
                <p className="mt-2 text-sm text-brand-ink/70">Your enquiry is in. Our catering team will get back to you shortly.</p>
              </div>
            ) : (
              <form className="mt-8 space-y-6" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div><label className={labelCls}>First name</label><input required type="text" className={inputCls} /></div>
                  <div><label className={labelCls}>Last name</label><input required type="text" className={inputCls} /></div>
                  <div><label className={labelCls}>Email</label><input required type="email" className={inputCls} /></div>
                  <div><label className={labelCls}>Phone</label><input required type="tel" className={inputCls} /></div>
                  <div><label className={labelCls}>Event date</label><input type="date" className={inputCls} /></div>
                  <div>
                    <label className={labelCls}>Number of guests</label>
                    <select className={inputCls} defaultValue="">
                      <option value="" disabled>- Select -</option>
                      <option>1 - 10</option><option>11 - 25</option><option>26 - 50</option><option>51 - 100</option><option>100+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelCls}>Choose your boxes</label>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {BOXES.map((b) => (
                      <div key={b} className="flex items-center justify-between rounded-xl border border-brand-ink/15 bg-white px-4 py-3">
                        <span className="text-sm text-brand-ink">{b}</span>
                        <input type="number" min="0" placeholder="0" className="w-14 rounded-lg border border-brand-ink/15 px-2 py-1 text-sm" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>Pickup or delivery</label>
                    <select className={inputCls} defaultValue=""><option value="" disabled>- Select -</option><option>Pickup</option><option>Delivery</option></select>
                  </div>
                  <div>
                    <label className={labelCls}>City</label>
                    <select className={inputCls} defaultValue=""><option value="" disabled>- Select -</option><option>Kolkata</option><option>Delhi NCR</option><option>Mumbai</option><option>Bengaluru</option><option>Other</option></select>
                  </div>
                </div>

                <div><label className={labelCls}>Notes for your order</label><textarea rows="3" className={inputCls} /></div>

                <label className="flex items-center gap-3 text-sm text-brand-ink/70">
                  <input type="checkbox" className="h-4 w-4 accent-[#E2231A]" /> Keep me posted on Wow! offers
                </label>

                <button type="submit" className="rounded-xl bg-brand-red px-8 py-3 font-display text-sm font-semibold uppercase tracking-wider text-white hover:bg-brand-yellow hover:text-brand-ink transition-colors">Send enquiry</button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div data-reveal className="rounded-3xl bg-brand-charcoal p-8 text-white">
              <h3 className="font-display text-xl font-semibold uppercase text-brand-yellow">Talk to us</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                <li>events@wowmomo.com</li>
                <li>+91 98361 98361</li>
                <li>Kolkata, India</li>
              </ul>
            </div>
            <div data-reveal className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="font-display text-xl font-semibold uppercase text-brand-charcoal">How it works</h3>
              <ol className="mt-4 space-y-3 text-sm text-brand-ink/70 list-decimal list-inside">
                <li>Send your enquiry with date and guests.</li>
                <li>Our team confirms menu and a quote.</li>
                <li>We deliver the Wow! to your event.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
