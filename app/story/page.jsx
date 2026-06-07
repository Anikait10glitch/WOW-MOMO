import StoryContent from '@/components/StoryContent';
import { SITE_URL } from '@/lib/site';

const TITLE = 'Our Story — WOW! Momo';
const DESC = "From a ₹30,000 kiosk in Kolkata to India's fastest-growing QSR — the story of Wow! Momo, its founders, its brands, and the kitchen behind it all.";

export const metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE_URL}/story` },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: `${SITE_URL}/story`,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'WOW! Momo' }],
  },
  twitter: { title: TITLE, description: DESC, images: ['/og.jpg'] },
};

export default function StoryPage() {
  return <StoryContent />;
}
