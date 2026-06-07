import Link from 'next/link';
import BrandMenu from '@/components/BrandMenu';
import FmcgCarousel from '@/components/FmcgCarousel';
import IndiaMap from '@/components/IndiaMap';

const FAQ = [
  { q: 'Where can I order Wow!?', a: 'Order on our app, or via Swiggy and Zomato. Use “Order Online” up top to start.' },
  { q: 'Can I buy Wow! products from the supermarket?', a: 'Yes — our Wow! @Home range is on Blinkit, Zepto, Instamart, Amazon and leading stores.' },
  { q: 'Do you cater events and bulk orders?', a: 'We do. Head to the Catering page or our Events & Bulk Orders enquiry.' },
  { q: 'How do I open a Wow! franchise?', a: 'Tell us about yourself on the Franchise form and our team will reach out.' },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-brand-orangered pt-32 pb-20 text-center">
        <div className="relative z-10 flex flex-col items-center px-4">
          <h1 className="font-display text-[3.2rem] sm:text-[5.5rem] md:text-[7.5rem] font-semibold uppercase leading-[0.9] tracking-tighter text-white drop-shadow-2xl">
            India&apos;s Favourite<br />Desi Chinese
          </h1>

          {/* TODO: replace placeholder with hero food photography */}
          <div className="relative mt-8 mb-16 w-full max-w-3xl">
            <div className="mx-auto flex h-[300px] sm:h-[450px] w-full items-center justify-center rotate-[-2deg] rounded-[2.5rem] border-4 border-white/10 bg-black/10 shadow-2xl">
              <span className="font-display text-lg uppercase tracking-wide text-white/70">Hero image — TODO</span>
            </div>
            <div className="absolute -bottom-6 right-4 sm:right-10 z-20 animate-bounce-slow">
              <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full border-4 border-brand-charcoal bg-brand-yellow text-brand-ink shadow-xl">
                <span className="text-xs font-semibold uppercase tracking-tighter">Loved by</span>
                <span className="font-display text-2xl font-semibold">India</span>
              </div>
            </div>
          </div>

          <div className="relative z-20 flex flex-col sm:flex-row gap-4">
            <a href="https://woweats.co.in" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-white px-8 py-3 font-display text-sm font-semibold uppercase tracking-wider text-brand-red shadow-xl hover:bg-brand-yellow hover:text-brand-ink transition-all">
              Order Online
            </a>
            <Link href="/menu" className="rounded-xl border-2 border-white/30 bg-white px-8 py-3 font-display text-sm font-semibold uppercase tracking-wider text-brand-ink hover:bg-brand-yellow hover:text-brand-ink hover:border-brand-yellow transition-all">
              View Menu
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full leading-none">
          <svg className="block h-[96px] w-full sm:h-24" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ color: '#F7F4EB' }}>
            <path fill="currentColor" d="M0,128 C450,384 900,256 1440,32 L1440,320 L0,320 Z" />
          </svg>
        </div>
      </section>

      <BrandMenu />
      <FmcgCarousel />
      <IndiaMap />

      {/* FAQ */}
      <section className="bg-brand-cream py-24 px-4 sm:px-8" id="faq">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center font-display text-4xl font-semibold uppercase tracking-tight">Frequently asked</h2>
          <div className="space-y-4">
            {FAQ.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-black/10 bg-brand-red p-6 text-white [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold uppercase">{f.q}</h3>
                  <span className="shrink-0 text-white text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-white/90">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
