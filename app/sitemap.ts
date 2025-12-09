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

  // Define pages with their allowed locales
  // If allowedLocales is undefined, it's allowed for all (e.g. home)
  // But for specific localized routes, we restrict them.
  type Locale = typeof locales[number];

  const routeConfig: Array<{
    path: string;
    changeFreq: 'weekly' | 'monthly';
    priority: number;
    allowedLocales?: Locale[];
  }> = [
      { path: '', changeFreq: 'weekly', priority: 1.0, allowedLocales: [...locales] },

      // HU specific routes
      { path: 'oktatas', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['hu'] },
      { path: 'minden-cegnek-legyen-informatikusa', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['hu'] },
      { path: 'egyedi-alkalmazas-fejlesztes', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['hu'] },
      { path: 'halozat-fejlesztes', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['hu'] },
      { path: 'onsite-jelenlet', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['hu'] },
      { path: 'szerviz-javitas', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['hu'] },
      { path: 'szolgaltatasok', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['hu'] }, // Currently shared but HU name
      { path: 'termekeink', changeFreq: 'weekly', priority: 0.7, allowedLocales: ['hu'] }, // Currently shared but HU name
      { path: 'arak', changeFreq: 'weekly', priority: 0.7, allowedLocales: ['hu'] }, // Currently shared but HU name
      { path: 'rolunk', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['hu'] }, // Currently shared but HU name
      { path: 'kapcsolat', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['hu'] }, // Currently shared but HU name
      { path: 'blog', changeFreq: 'weekly', priority: 0.8, allowedLocales: ['hu'] }, // Currently shared but HU name

      // EN specific routes
      { path: 'it-training', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['en'] },
      { path: 'custom-application-development', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['en'] },
      { path: 'network-optimization', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['en'] },
      { path: 'onsite-presence', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['en'] },
      { path: 'repair-service', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['en'] },
      // Note: The main nav pages (About, Contact, etc) currently use HU paths for EN too in the codebase.
      // Until we create localized routes for them, we must include them for EN/DE/etc using the HU path
      // to avoid them being missing from sitemap, even if the URL is not ideal.
      // However, for the "Landing Pages" which HAVE localized folders, we strictly filter.

      // DE specific routes
      { path: 'it-schulung', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['de'] },
      { path: 'individuelle-anwendungsentwicklung', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['de'] },
      { path: 'netzwerk-optimierung', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['de'] },
      { path: 'onsite-prasenz', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['de'] },
      { path: 'reparatur-service', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['de'] },

      // SK specific routes
      { path: 'it-vzdelavanie', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['sk'] },
      { path: 'vyvoj-vlastnych-aplikacii', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['sk'] },
      { path: 'optimalizacia-siete', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['sk'] },
      { path: 'onsite-pritomnost', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['sk'] },
      { path: 'servisne-sluzby', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['sk'] },


      // RO specific routes
      { path: 'training-it', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['ro'] },
      { path: 'dezvoltare-aplicatii-personalizate', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['ro'] },
      { path: 'optimizare-retea', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['ro'] },
      { path: 'prezenta-onsite', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['ro'] },
      { path: 'servicii-reparatii', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['ro'] },

      // HR specific routes
      { path: 'it-edukacija', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['hr'] },
      { path: 'razvoj-prilagodenih-aplikacija', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['hr'] },
      { path: 'optimizacija-mreze', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['hr'] },
      { path: 'it-onsite-prisutnost', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['hr'] },
      { path: 'servis-popravak', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['hr'] },
      { path: 'it-podrska-tvrtkama', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['hr'] },
      { path: 'proizvodi', changeFreq: 'weekly', priority: 0.7, allowedLocales: ['hr'] },
      { path: 'cjenik', changeFreq: 'weekly', priority: 0.7, allowedLocales: ['hr'] },
      { path: 'o-nama', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['hr'] },
      { path: 'kontakt', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['hr'] },
      { path: 'usluge', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['hr'] },
    ];


  // For the shared pages (rolunk, kapcsolat, etc) that don't have localized folders yet,
  // we need to decide if we include them for other locales.
  // Currently the site works as /en/kapcsolat.
  // So we should include them for all locales until we fix the routing.
  const sharedPages = ['szolgaltatasok', 'termekeink', 'arak', 'rolunk', 'kapcsolat', 'blog'];

  for (const page of routeConfig) {
    for (const locale of locales) {
      // Check if this page is allowed for this locale
      if (page.allowedLocales && !page.allowedLocales.includes(locale)) {
        continue;
      }

      const url = page.path
        ? `${baseUrl}/${locale}/${page.path}`
        : `${baseUrl}/${locale}`;

      sitemap.push({
        url,
        lastModified: new Date(),
        changeFrequency: page.changeFreq as any,
        priority: page.priority,
      });
    }
  }

  // Add shared pages for non-HU and non-HR locales
  for (const path of sharedPages) {
    for (const locale of locales) {
      if (locale === 'hu' || locale === 'hr') continue; // Already added or localized

      const url = `${baseUrl}/${locale}/${path}`;
      sitemap.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  }

  return sitemap;
}
