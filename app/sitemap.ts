import { MetadataRoute } from 'next';
import { locales } from '@/i18n';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sironic.hu';

// Define the static routes of the application
const routes = [
  '',
  'rolunk',
  'szolgaltatasok',
  'termekeink',
  'kapcsolat',
  'arak',
  'minden-cegnek-legyen-informatikusa',
  'blog',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const allRoutes: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    locales.forEach((locale) => {
      const url = route === ''
        ? `${baseUrl}/${locale}`
        : `${baseUrl}/${locale}/${route}`;

      allRoutes.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
      });
    });
  });

  return allRoutes;
}
