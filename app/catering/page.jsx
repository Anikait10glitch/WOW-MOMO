import CateringContent from '@/components/CateringContent';
import { SITE_URL, SITE_NAME } from '@/lib/site';

const TITLE = 'Catering, Events & Bulk Orders — WOW! Momo';
const DESC = 'Wow! for your event — parties, corporate orders and bulk catering across India. Tell us what you need and our team will get back to you.';

export const metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE_URL}/catering` },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: `${SITE_URL}/catering`,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'WOW! Momo' }],
  },
  twitter: { title: TITLE, description: DESC, images: ['/og.jpg'] },
};

const BREADCRUMB = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: SITE_NAME, item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Catering', item: `${SITE_URL}/catering` },
  ],
};

export default function CateringPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <CateringContent />
    </>
  );
}
