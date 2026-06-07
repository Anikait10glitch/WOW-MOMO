import StoryContent from '@/components/StoryContent';
import { SITE_URL, SITE_NAME } from '@/lib/site';

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

const BREADCRUMB = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: SITE_NAME, item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Our Story', item: `${SITE_URL}/story` },
  ],
};

export default function StoryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <StoryContent />
    </>
  );
}
