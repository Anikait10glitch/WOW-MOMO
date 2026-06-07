'use client';

import { useEffect, useState } from 'react';
import { ORDER_URL } from '@/lib/site';

export default function StickyOrder() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={ORDER_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order online"
      className={`fixed bottom-5 right-5 z-40 rounded-full bg-brand-red px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-white shadow-2xl transition-all duration-300 hover:bg-brand-yellow hover:text-brand-ink ${show ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      Order Now
    </a>
  );
}
