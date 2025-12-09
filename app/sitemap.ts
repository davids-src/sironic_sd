import { MetadataRoute } from 'next';
import { locales } from '@/i18n';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sironic.hu';
type Locale = typeof locales[number];

/**
 * Comprehensive Multilingual Sitemap Generator
 * 
 * Features:
 * - Complete coverage for all 7 languages (hu, en, de, sk, ro, hr, sl)
 * - Proper locale-specific route segregation
 * - AI search engine optimized structure
 * - SEO-friendly priority and frequency settings
 */

interface RouteDefinition {
  /** URL path segment (without locale prefix) */
  path: string;
  /** How often the page changes */
  changeFreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  /** Priority (0.0 to 1.0) */
  priority: number;
  /** Specific locales this route exists for. If undefined, available for all locales */
  allowedLocales?: Locale[];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  /**
   * Route Configuration Map
   * Organized by page type for clarity
   */
  const routes: RouteDefinition[] = [
    // ============================================
    // HOMEPAGE (All Languages)
    // ============================================
    {
      path: '',
      changeFreq: 'weekly',
      priority: 1.0,
      allowedLocales: ['hu', 'en', 'de', 'sk', 'ro', 'hr', 'sl']
    },

    // ============================================
    // IT TRAINING (All Languages - Fully Localized)
    // ============================================
    { path: 'oktatas', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['hu'] },
    // EN specific routes (serving as fallback for FR, IT, ES until localized routes are created)
    { path: 'it-training', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['en', 'fr', 'it', 'es'] },
    { path: 'it-schulung', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['de'] },
    { path: 'it-vzdelavanie', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['sk'] },
    { path: 'training-it', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['ro'] },
    { path: 'it-edukacija', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['hr'] },
    { path: 'it-usposabljanje', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['sl'] },

    // ============================================
    // CUSTOM APPLICATION DEVELOPMENT (All Languages - Fully Localized)
    // ============================================
    { path: 'egyedi-alkalmazas-fejlesztes', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['hu'] },
    { path: 'custom-application-development', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['en'] },
    { path: 'individuelle-anwendungsentwicklung', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['de'] },
    { path: 'vyvoj-vlastnych-aplikacii', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['sk'] },
    { path: 'dezvoltare-aplicatii-personalizate', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['ro'] },
    { path: 'razvoj-prilagodenih-aplikacija', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['hr'] },
    { path: 'razvoj-spletnih-aplikacij', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['sl'] },

    // ============================================
    // NETWORK OPTIMIZATION (All Languages - Fully Localized)
    // ============================================
    { path: 'halozat-fejlesztes', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['hu'] },
    { path: 'network-optimization', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['en'] },
    { path: 'netzwerk-optimierung', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['de'] },
    { path: 'optimalizacia-siete', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['sk'] },
    { path: 'optimizare-retea', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['ro'] },
    { path: 'optimizacija-mreze', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['hr'] },
    { path: 'mrezna-infrastruktura', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['sl'] },

    // ============================================
    // ON-SITE IT PRESENCE (All Languages - Fully Localized)
    // ============================================
    { path: 'onsite-jelenlet', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['hu'] },
    { path: 'onsite-presence', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['en'] },
    { path: 'onsite-prasenz', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['de'] },
    { path: 'onsite-pritomnost', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['sk'] },
    { path: 'prezenta-onsite', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['ro'] },
    { path: 'it-onsite-prisutnost', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['hr'] },
    { path: 'onsite-it-tehnik', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['sl'] },

    // ============================================
    // REPAIR SERVICE (All Languages - Fully Localized)
    // ============================================
    { path: 'szerviz-javitas', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['hu'] },
    { path: 'repair-service', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['en'] },
    { path: 'reparatur-service', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['de'] },
    { path: 'servisne-sluzby', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['sk'] },
    { path: 'servicii-reparatii', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['ro'] },
    { path: 'servis-popravak', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['hr'] },
    { path: 'servis-racunalnikov', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['sl'] },

    // ============================================
    // CAMPAIGN: "Every Company Needs IT" (HU, HR, SL Only - Others use shared paths)
    // ============================================
    { path: 'minden-cegnek-legyen-informatikusa', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['hu'] },
    { path: 'it-podrska-tvrtkama', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['hr'] },
    { path: 'it-podpora-podjetjem', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['sl'] },

    // ============================================
    // PRODUCTS PAGE (Localized for HU, HR, SL; Shared for others)
    // ============================================
    { path: 'termekeink', changeFreq: 'weekly', priority: 0.7, allowedLocales: ['hu', 'en', 'de', 'sk', 'ro'] },
    { path: 'proizvodi', changeFreq: 'weekly', priority: 0.7, allowedLocales: ['hr'] },
    { path: 'produkti', changeFreq: 'weekly', priority: 0.7, allowedLocales: ['sl'] },

    // ============================================
    // PRICING PAGE (Localized for HU, HR, SL; Shared for others)
    // ============================================
    { path: 'arak', changeFreq: 'weekly', priority: 0.8, allowedLocales: ['hu', 'en', 'de', 'sk', 'ro'] },
    { path: 'cjenik', changeFreq: 'weekly', priority: 0.8, allowedLocales: ['hr'] },
    { path: 'cenik', changeFreq: 'weekly', priority: 0.8, allowedLocales: ['sl'] },

    // ============================================
    // ABOUT PAGE (Localized for HU, HR, SL; Shared for others)
    // ============================================
    { path: 'rolunk', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['hu', 'en', 'de', 'sk', 'ro'] },
    { path: 'o-nama', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['hr'] },
    { path: 'o-nas', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['sl'] },

    // ============================================
    // SERVICES PAGE (Localized for HU, HR, SL; Shared for others)
    // ============================================
    { path: 'szolgaltatasok', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['hu', 'en', 'de', 'sk', 'ro'] },
    { path: 'usluge', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['hr'] },
    { path: 'storitve', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['sl'] },

    // ============================================
    // CONTACT PAGE (Localized for HU, HR, SL; Shared for others)
    // ============================================
    { path: 'kapcsolat', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['hu', 'en', 'de', 'sk', 'ro'] },
    { path: 'kontakt', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['hr', 'sl'] },

    // ============================================
    // BLOG (Currently HU only)
    // ============================================
    { path: 'blog', changeFreq: 'weekly', priority: 0.7, allowedLocales: ['hu'] },
  ];

  // Generate sitemap entries
  for (const route of routes) {
    const allowedLocales = route.allowedLocales || locales;

    for (const locale of allowedLocales) {
      const url = route.path
        ? `${baseUrl}/${locale}/${route.path}`
        : `${baseUrl}/${locale}`;

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route.changeFreq,
        priority: route.priority,
      });
    }
  }

  // Sort by priority (descending) then by URL for consistency
  return sitemapEntries.sort((a, b) => {
    const priorityA = a.priority ?? 0.5;
    const priorityB = b.priority ?? 0.5;

    if (priorityB !== priorityA) {
      return priorityB - priorityA;
    }
    return a.url.localeCompare(b.url);
  });
}
