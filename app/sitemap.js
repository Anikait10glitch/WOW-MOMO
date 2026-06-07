import { SITE_URL } from '@/lib/site';

export default function sitemap() {
  const routes = ['', '/menu', '/story', '/locations', '/catering', '/contact'];
  return routes.map((r) => ({
    url: `${SITE_URL}${r}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: r === '' ? 1 : 0.8,
  }));
}
