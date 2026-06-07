import { SITE_NAME, SITE_DESC } from '@/lib/site';

export default function manifest() {
  return {
    name: SITE_NAME,
    short_name: 'WOW! Momo',
    description: SITE_DESC,
    start_url: '/',
    display: 'standalone',
    background_color: '#F7F4EB',
    theme_color: '#E2231A',
    icons: [{ src: '/pwa-icon.png', sizes: '256x256', type: 'image/png' }],
  };
}
