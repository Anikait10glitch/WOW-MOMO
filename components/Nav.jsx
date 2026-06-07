'use client';

import { useState } from 'react';
import Link from 'next/link';

// Floating pill nav. Background uses /public/nav-bg.png (yellow swirl); logo uses
// /public/wow-logo.png. Both fall back gracefully if the file isn't present yet.
const LINKS = [
  { label: 'Story', href: '/story' },
  { label: 'Menu', href: '/menu' },
  { label: 'Find Us', href: '/locations' },
  { label: 'Catering', href: '/catering' },
  { label: 'Contact', href: '/contact' },
  { label: 'Franchise', href: 'https://www.wowmomo.com/franchise-form/', external: true },
  { label: 'Horeca', href: 'https://wowhoreca.com/', external: true },
];

const ORDER_URL = 'https://woweats.co.in';
const NAV_BG = { backgroundColor: '#FFC400', backgroundImage: 'url(/nav-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' };

function NavLink({ l, onClick }) {
  const cls = 'font-display text-sm font-medium uppercase tracking-wider text-brand-ink/80 hover:text-brand-red transition-colors whitespace-nowrap';
  if (l.external) return <a href={l.href} target="_blank" rel="noopener noreferrer" className={cls} onClick={onClick}>{l.label}</a>;
  return <Link href={l.href} className={cls} onClick={onClick}>{l.label}</Link>;
}

function Logo() {
  const [broken, setBroken] = useState(false);
  if (broken) {
    return <span className="font-display text-2xl font-semibold uppercase tracking-tighter text-brand-ink">WOW! <span className="text-brand-red">Momo</span></span>;
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/wow-logo.png" alt="WOW! Momo" loading="eager" decoding="async" className="h-[52px] md:h-[63px] w-auto object-contain" onError={() => setBroken(true)} />;
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <nav style={NAV_BG} className="flex w-full max-w-6xl items-center justify-center md:justify-between rounded-2xl px-6 py-2 shadow-2xl relative">
          <button
            className="md:hidden absolute top-1/2 left-6 -translate-y-1/2 z-[102] p-2 text-brand-ink hover:text-brand-red transition-colors"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>

          <Link href="/" className="inline-flex items-center" aria-label="WOW! Momo home">
            <Logo />
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-7">
            {LINKS.map((l) => <NavLink key={l.label} l={l} />)}
          </div>

          <div className="hidden md:flex items-center">
            <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-brand-red px-5 py-2 font-display text-xs font-semibold uppercase tracking-wide text-white shadow-lg hover:bg-brand-yellow hover:text-brand-ink transition-colors">
              Order Online
            </a>
          </div>
        </nav>
      </header>

      <div
        className={`md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-all duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setOpen(false)}
      />

      <div className={`md:hidden fixed top-0 left-0 h-screen w-[80%] max-w-[320px] bg-white z-[101] flex flex-col transition-all duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between border-b border-gray-200 p-6">
          <span className="font-display text-2xl font-semibold uppercase tracking-tight text-brand-red">Menu</span>
          <button className="p-2 text-brand-ink hover:text-brand-red" aria-label="Close menu" onClick={() => setOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div className="flex flex-col border-b border-gray-200 py-2">
          {LINKS.map((l) => (
            <div key={l.label} className="flex items-center justify-between px-6 py-4">
              <NavLink l={l} onClick={() => setOpen(false)} />
            </div>
          ))}
        </div>
        <div className="px-6 py-8 mt-auto">
          <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center rounded-lg bg-brand-red py-3 font-display text-xs font-semibold uppercase tracking-wide text-white shadow-lg hover:bg-brand-yellow hover:text-brand-ink transition-colors">
            Order Online
          </a>
        </div>
      </div>
    </>
  );
}
