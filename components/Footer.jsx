import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-20 flex flex-col md:flex-row justify-between gap-12 items-center md:items-start text-center md:text-left">
          <div className="max-w-sm">
            <span className="font-display text-3xl font-semibold uppercase tracking-tighter text-brand-red">WOW! <span className="text-white">Momo</span></span>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              India&apos;s fastest-growing QSR. From the original momo to Chindian, fried chicken and kulfi — and now Wow! @Home on your favourite quick-commerce apps.
            </p>
            <div className="mt-6 flex gap-4 justify-center md:justify-start">
              <a href="https://www.instagram.com/wowmomo/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-brand-red transition-colors">Instagram</a>
              <a href="https://www.facebook.com/WowMomos/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-brand-red transition-colors">Facebook</a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div className="flex flex-col items-center md:items-start">
              <h4 className="mb-4 font-display text-lg font-semibold uppercase tracking-wider text-brand-yellow">Explore</h4>
              <ul className="space-y-3 text-sm text-white/70 flex flex-col items-center md:items-start">
                <li><Link href="/story" className="hover:text-brand-red transition-colors">Our Story</Link></li>
                <li><Link href="/menu" className="hover:text-brand-red transition-colors">Menu</Link></li>
                <li><Link href="/locations" className="hover:text-brand-red transition-colors">Find Us</Link></li>
                <li><Link href="/catering" className="hover:text-brand-red transition-colors">Catering</Link></li>
              </ul>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h4 className="mb-4 font-display text-lg font-semibold uppercase tracking-wider text-brand-yellow">Business</h4>
              <ul className="space-y-3 text-sm text-white/70 flex flex-col items-center md:items-start">
                <li><a href="https://www.wowmomo.com/franchise-form/" className="hover:text-brand-red transition-colors">Franchise</a></li>
                <li><a href="https://www.wowmomo.com/events-and-bulk-orders/" className="hover:text-brand-red transition-colors">Events &amp; Bulk</a></li>
                <li><a href="https://wowhoreca.com/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">HoReCa</a></li>
              </ul>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h4 className="mb-4 font-display text-lg font-semibold uppercase tracking-wider text-brand-yellow">Get in touch</h4>
              <ul className="space-y-3 text-sm text-white/70 flex flex-col items-center md:items-start">
                <li>Kolkata, India</li>
                <li>hello@wowmomo.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs uppercase tracking-widest text-white/60">
          <p>© WOW! Momo Foods Pvt. Ltd, 2026</p>
          <div className="flex gap-6">
            <a href="https://www.wowmomo.com/privacy" className="hover:text-brand-red">Privacy Policy</a>
            <a href="https://www.wowmomo.com/terms-conditions/" className="hover:text-brand-red">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
