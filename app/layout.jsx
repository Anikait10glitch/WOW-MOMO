import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import StickyOrder from '@/components/StickyOrder';
import { SITE_URL, SITE_NAME, SITE_DESC } from '@/lib/site';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "WOW! Momo — India's Favourite Desi Chinese", template: '%s' },
  description: SITE_DESC,
  applicationName: SITE_NAME,
  openGraph: {
    title: "WOW! Momo — India's Favourite Desi Chinese",
    description: SITE_DESC,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'WOW! Momo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "WOW! Momo — India's Favourite Desi Chinese",
    description: SITE_DESC,
    images: ['/og.jpg'],
    site: '@wowmomo4u',
  },
};

export const viewport = { themeColor: '#E2231A' };

const JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'WOW! Momo',
  url: SITE_URL,
  logo: `${SITE_URL}/pwa-icon.png`,
  image: `${SITE_URL}/og.jpg`,
  description: SITE_DESC,
  servesCuisine: ['Momos', 'Chinese', 'Fried Chicken', 'Desserts'],
  priceRange: '₹₹',
  foundingDate: '2008',
  address: { '@type': 'PostalAddress', addressLocality: 'Kolkata', addressCountry: 'IN' },
  sameAs: ['https://www.instagram.com/wowmomo/', 'https://www.facebook.com/WowMomos/'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&family=PT+Serif:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }} />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Nav />
        <SmoothScroll><div id="main-content">{children}</div></SmoothScroll>
        <Footer />
        <StickyOrder />
      </body>
    </html>
  );
}
