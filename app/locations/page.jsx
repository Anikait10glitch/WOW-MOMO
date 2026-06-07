import LocationsContent from '@/components/LocationsContent';
import { SITE_URL, SITE_NAME } from '@/lib/site';

const TITLE = 'Find Us — WOW! Momo';
const DESC = 'Find your nearest Wow! across 800+ outlets in 35+ Indian cities — malls, high streets, kiosks and Wow! Eats.';

export const metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE_URL}/locations` },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: `${SITE_URL}/locations`,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'WOW! Momo' }],
  },
  twitter: { title: TITLE, description: DESC, images: ['/og.jpg'] },
};

const BREADCRUMB = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: SITE_NAME, item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Find Us', item: `${SITE_URL}/locations` },
  ],
};

export default function LocationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <LocationsContent />
    </>
  );
}
