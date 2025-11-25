import { MetadataRoute } from 'next';
import { locales } from '@/i18n';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sironic.hu';

// Define all pages that should be in the sitemap
const pages = [
  { path: '', changeFreq: 'weekly' as const, priority: 1.0 },
  { path: 'oktatas', changeFreq: 'monthly' as const, priority: 0.9 },
  { path: 'it-training', changeFreq: 'monthly' as const, priority: 0.9 },
  { path: 'it-schulung', changeFreq: 'monthly' as const, priority: 0.9 },
  { path: 'it-vzdelavanie', changeFreq: 'monthly' as const, priority: 0.9 },
  { path: 'training-it', changeFreq: 'monthly' as const, priority: 0.9 },
  { path: 'szolgaltatasok', changeFreq: 'monthly' as const, priority: 0.8 },
  { path: 'termekeink', changeFreq: 'weekly' as const, priority: 0.7 },
  { path: 'arak', changeFreq: 'weekly' as const, priority: 0.7 },
  { path: 'rolunk', changeFreq: 'monthly' as const, priority: 0.6 },
  { path: 'kapcsolat', changeFreq: 'monthly' as const, priority: 0.8 },
  { path: 'minden-cegnek-legyen-informatikusa', changeFreq: 'monthly' as const, priority: 0.9 },
  { path: 'egyedi-alkalmazas-fejlesztes', changeFreq: 'monthly' as const, priority: 0.9 },
  { path: 'custom-application-development', changeFreq: 'monthly' as const, priority: 0.9 },
  { path: 'individuelle-anwendungsentwicklung', changeFreq: 'monthly' as const, priority: 0.9 },
  { path: 'vyvoj-vlastnych-aplikacii', changeFreq: 'monthly' as const, priority: 0.9 },
  { path: 'dezvoltare-aplicatii-personalizate', changeFreq: 'monthly' as const, priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = [];

  // Generate sitemap entries for each page in each locale
  for (const page of pages) {
    for (const locale of locales) {
      const url = page.path
        ? `${baseUrl}/${locale}/${page.path}`
        : `${baseUrl}/${locale}`;

      sitemap.push({
        url,
        lastModified: new Date(),
        changeFrequency: page.changeFreq,
        priority: page.priority,
      });
    }
  }

  return sitemap;
}
