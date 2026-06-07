import Link from 'next/link';

export const metadata = { title: 'Page not found — WOW! Momo' };

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-brand-cream px-4 text-center">
      <span className="font-display text-[7rem] sm:text-[10rem] font-semibold uppercase leading-none tracking-tighter text-brand-red">404</span>
      <h1 className="mt-2 font-display text-3xl sm:text-4xl font-semibold uppercase tracking-tight text-brand-charcoal">This plate is empty</h1>
      <p className="mt-4 max-w-md text-brand-ink/70">We couldn&apos;t find that page — but there&apos;s plenty more to wow you.</p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link href="/" className="rounded-xl bg-brand-red px-8 py-3 font-display text-sm font-semibold uppercase tracking-wider text-white hover:bg-brand-yellow hover:text-brand-ink transition-colors">Back home</Link>
        <Link href="/menu" className="rounded-xl border-2 border-brand-ink/20 px-8 py-3 font-display text-sm font-semibold uppercase tracking-wider text-brand-ink hover:border-brand-red hover:text-brand-red transition-colors">See the menu</Link>
      </div>
    </main>
  );
}
