'use client';

export default function Error({ reset }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-brand-cream px-4 text-center">
      <span className="font-display text-6xl sm:text-8xl font-semibold uppercase leading-none tracking-tighter text-brand-red">Oops!</span>
      <h1 className="mt-3 font-display text-2xl sm:text-3xl font-semibold uppercase tracking-tight text-brand-charcoal">Something went wrong</h1>
      <p className="mt-4 max-w-md text-brand-ink/70">A momo got stuck in the steamer. Try again in a moment.</p>
      <button onClick={() => reset()} className="mt-8 rounded-xl bg-brand-red px-8 py-3 font-display text-sm font-semibold uppercase tracking-wider text-white hover:bg-brand-yellow hover:text-brand-ink transition-colors">Try again</button>
    </main>
  );
}
