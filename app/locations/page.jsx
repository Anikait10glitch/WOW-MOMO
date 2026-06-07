import LocationsContent from '@/components/LocationsContent';
import { SITE_URL } from '@/lib/site';

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

export default function LocationsPage() {
  return <LocationsContent />;
}
