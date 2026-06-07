'use client';

import { useRef, useState } from 'react';
import { useReveal } from '@/components/useReveal';

const SUBJECTS = ['Feedback', 'Queries', 'Bookings', 'Outdoor Catering', 'Corporate Tie-ups', 'Franchise', 'Others'];

const inputCls = 'w-full rounded-xl border border-brand-ink/15 bg-white px-4 py-3 text-sm text-brand-ink focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20';
const labelCls = 'mb-1.5 block font-display text-xs font-semibold uppercase tracking-wide text-brand-ink/70';

export default function ContactContent() {
  const root = useRef(null);
  useReveal(root);
  const [sent, setSent] = useState(false);

  return (
    <main ref={root} className="bg-brand-cream">
      {/* Hero */}
      <section className="px-4 sm:px-8 pt-40 pb-12 text-center">
        <span data-reveal className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">Get in touch</span>
        <h1 data-reveal className="mt-3 font-display text-5xl sm:text-7xl md:text-8xl font-semibold uppercase leading-[0.9] tracking-tighter text-brand-charcoal">Say hello</h1>
        <p data-reveal className="mx-auto mt-6 max-w-2xl text-brand-ink/70">Questions, feedback, franchise or corporate tie-ups — drop us a line and we&apos;ll get back to you.</p>
      </section>

      <section className="px-4 sm:px-8 pb-24">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-3 gap-10">
          {/* Form */}
          <div data-reveal className="lg:col-span-2 rounded-3xl bg-white p-6 sm:p-10 shadow-sm">
            {sent ? (
              <div role="status" aria-live="polite" className="rounded-2xl bg-brand-cream p-8 text-center">
                <p className="font-display text-2xl font-semibold uppercase text-brand-red">Thanks for writing in!</p>
                <p className="mt-2 text-sm text-brand-ink/70">We&apos;ll get back to you as soon as we can.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div><label className={labelCls}>Your name</label><input required type="text" className={inputCls} /></div>
                  <div><label className={labelCls}>Email</label><input required type="email" className={inputCls} /></div>
                  <div><label className={labelCls}>Phone</label><input type="tel" className={inputCls} /></div>
                  <div><label className={labelCls}>Company (optional)</label><input type="text" className={inputCls} /></div>
                </div>
                <div>
                  <label className={labelCls}>Subject</label>
                  <select className={inputCls} defaultValue="">
                    <option value="" disabled>- Select -</option>
                    {SUBJECTS.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div><label className={labelCls}>Message</label><textarea required rows="5" className={inputCls} /></div>
                <button type="submit" className="rounded-xl bg-brand-red px-8 py-3 font-display text-sm font-semibold uppercase tracking-wider text-white hover:bg-brand-yellow hover:text-brand-ink transition-colors">Send message</button>
              </form>
            )}
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div data-reveal className="rounded-3xl bg-brand-charcoal p-8 text-white">
              <h3 className="font-display text-xl font-semibold uppercase text-brand-yellow">Reach us</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                <li>hello@wowmomo.com</li>
                <li>+91 98361 98361</li>
                <li>Wow! Momo Foods Pvt. Ltd, Kolkata, India</li>
              </ul>
              <div className="mt-6 flex gap-4">
                <a href="https://www.instagram.com/wowmomo/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-brand-red transition-colors">Instagram</a>
                <a href="https://www.facebook.com/WowMomos/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-brand-red transition-colors">Facebook</a>
              </div>
            </div>
            <div data-reveal className="rounded-3xl overflow-hidden shadow-sm bg-white">
              <iframe
                title="Wow! Momo on the map"
                src="https://www.google.com/maps?q=Wow+Momo,+Kolkata&output=embed"
                className="h-56 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
