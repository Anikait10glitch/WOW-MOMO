import ContactContent from '@/components/ContactContent';
import { SITE_URL, SITE_NAME } from '@/lib/site';

const TITLE = 'Contact — WOW! Momo';
const DESC = 'Questions, feedback, franchise or corporate tie-ups? Get in touch with the Wow! Momo team.';

export const metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: `${SITE_URL}/contact`,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'WOW! Momo' }],
  },
  twitter: { title: TITLE, description: DESC, images: ['/og.jpg'] },
};

const BREADCRUMB = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: SITE_NAME, item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SITE_URL}/contact` },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <ContactContent />
    </>
  );
}
