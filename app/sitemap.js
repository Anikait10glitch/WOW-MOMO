import { SITE_URL } from '@/lib/site';

const ROUTES = [
  { path: '',           changeFrequency: 'weekly',  priority: 1.0 },
  { path: '/menu',      changeFrequency: 'monthly', priority: 0.9 },
  { path: '/locations', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/story',     changeFrequency: 'yearly',  priority: 0.7 },
  { path: '/catering',  changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact',   changeFrequency: 'yearly',  priority: 0.6 },
];

export default function sitemap() {
  return ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
