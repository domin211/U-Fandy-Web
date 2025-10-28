import type { MetadataRoute } from 'next';

const routes = [
  '/',
  '/ubytovani',
  '/restaurace',
  '/bowling',
  '/sal',
  '/kariera',
  '/kontakt',
  '/rezervace',
  '/cookies',
  '/zasady-ochrany-osobnich-udaju'
];

export const runtime = 'edge';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.u-fandy.cz';
  const now = new Date();
  return routes.map((route) => ({
    url: `${baseUrl}${route === '/' ? '' : route}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : 0.7
  }));
}
