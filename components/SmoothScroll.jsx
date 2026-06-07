'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Lenis smooth scrolling, wired into GSAP ScrollTrigger so scroll-driven
// animations stay in sync. Respects prefers-reduced-motion.
export default function SmoothScroll({ children }) {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    gsap.registerPlugin(ScrollTrigger);
    // Lighter, rawer smoothing (~30%) so the page feels responsive, not floaty.
    const lenis = new Lenis({ lerp: 0.2, wheelMultiplier: 1, smoothWheel: true });

    lenis.on('scroll', ScrollTrigger.update);
    const raf = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return children;
}
