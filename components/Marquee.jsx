import { Fragment } from 'react';

// Scrolling marquee strip carried over from the template.
const WORDS = ['fresh', 'steamed', 'pan-fried', 'saucy', 'wow!'];

export default function Marquee() {
  return (
    <div className="overflow-hidden border-b border-black/5 py-6 bg-brand-cream">
      <div className="flex animate-scroll whitespace-nowrap">
        <div className="flex items-center gap-8 px-4">
          {[...Array(4)].map((_, i) => (
            <Fragment key={i}>
              {WORDS.map((w, j) => (
                <Fragment key={j}>
                  <span className={`font-display text-4xl sm:text-6xl font-semibold uppercase tracking-tight ${j % 2 ? 'text-brand-charcoal' : 'text-brand-red'}`}>{w}</span>
                  <span className="text-2xl text-brand-yellow">●</span>
                </Fragment>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
