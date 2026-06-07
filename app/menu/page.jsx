import MenuContent from '@/components/MenuContent';
import { SITE_URL } from '@/lib/site';

const TITLE = 'Menu — WOW! Momo';
const DESC = 'The full Wow! menu — momos, Chindian, fried chicken and kulfi. Veg, non-veg, spice levels and nutrition for every dish.';

export const metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE_URL}/menu` },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: `${SITE_URL}/menu`,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'WOW! Momo' }],
  },
  twitter: { title: TITLE, description: DESC, images: ['/og.jpg'] },
};

export default function MenuPage() {
  return <MenuContent />;
}
