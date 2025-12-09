import { MetadataRoute } from 'next';
import { locales } from '@/i18n';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sironic.hu';
type Locale = typeof locales[number];

/**
 * Comprehensive Multilingual Sitemap Generator
 * 
 * Features:
 * - Complete coverage for all 10 languages (hu, en, de, sk, ro, hr, sl, fr, it, es)
 * - Proper locale-specific route segregation
 * - AI search engine optimized structure
 * - SEO-friendly priority and frequency settings
 * - Full localized URL slugs for all languages
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
   * 
   * NEW: Fully localized URL slugs for FR/IT/ES
   */
  const routes: RouteDefinition[] = [
    // ============================================
    // HOMEPAGE (All Languages)
    // ============================================
    {
      path: '',
      changeFreq: 'weekly',
      priority: 1.0,
    },

    // ============================================
    // IT TRAINING (All Languages - Fully Localized)
    // ============================================
    { path: 'oktatas', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['hu'] },
    { path: 'it-training', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['en'] },
    { path: 'it-schulung', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['de'] },
    { path: 'it-vzdelavanie', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['sk'] },
    { path: 'training-it', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['ro'] },
    { path: 'it-edukacija', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['hr'] },
    { path: 'it-usposabljanje', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['sl'] },
    { path: 'formation-informatique', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['fr'] },
    { path: 'formazione-it', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['it'] },
    { path: 'formacion-informatica', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['es'] },

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
    { path: 'developpement-dapplications', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['fr'] },
    { path: 'sviluppo-applicazioni', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['it'] },
    { path: 'desarrollo-de-aplicaciones', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['es'] },

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
    { path: 'optimisation-reseau', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['fr'] },
    { path: 'ottimizzazione-rete', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['it'] },
    { path: 'optimizacion-de-red', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['es'] },

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
    { path: 'presence-it-sur-site', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['fr'] },
    { path: 'presenza-it-onsite', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['it'] },
    { path: 'presencia-it-onsite', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['es'] },

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
    { path: 'reparation-et-maintenance', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['fr'] },
    { path: 'riparazione-e-assistenza', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['it'] },
    { path: 'reparacion-y-servicio', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['es'] },

    // ============================================
    // CAMPAIGN: "Every Company Needs IT" (HU, HR, SL Only)
    // ============================================
    { path: 'minden-cegnek-legyen-informatikusa', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['hu'] },
    { path: 'it-podrska-tvrtkama', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['hr'] },
    { path: 'it-podpora-podjetjem', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['sl'] },

    // ============================================
    // PRODUCTS PAGE (All Languages - Fully Localized)
    // ============================================
    { path: 'termekeink', changeFreq: 'weekly', priority: 0.7, allowedLocales: ['hu', 'en', 'de', 'sk', 'ro'] },
    { path: 'proizvodi', changeFreq: 'weekly', priority: 0.7, allowedLocales: ['hr'] },
    { path: 'produkti', changeFreq: 'weekly', priority: 0.7, allowedLocales: ['sl'] },
    { path: 'produits', changeFreq: 'weekly', priority: 0.7, allowedLocales: ['fr'] },
    { path: 'prodotti', changeFreq: 'weekly', priority: 0.7, allowedLocales: ['it'] },
    { path: 'productos', changeFreq: 'weekly', priority: 0.7, allowedLocales: ['es'] },

    // ============================================
    // PRICING PAGE (All Languages - Fully Localized)
    // ============================================
    { path: 'arak', changeFreq: 'weekly', priority: 0.8, allowedLocales: ['hu', 'en', 'de', 'sk', 'ro'] },
    { path: 'cjenik', changeFreq: 'weekly', priority: 0.8, allowedLocales: ['hr'] },
    { path: 'cenik', changeFreq: 'weekly', priority: 0.8, allowedLocales: ['sl'] },
    { path: 'tarifs', changeFreq: 'weekly', priority: 0.8, allowedLocales: ['fr'] },
    { path: 'prezzi', changeFreq: 'weekly', priority: 0.8, allowedLocales: ['it'] },
    { path: 'precios', changeFreq: 'weekly', priority: 0.8, allowedLocales: ['es'] },

    // ============================================
    // ABOUT PAGE (All Languages - Fully Localized)
    // ============================================
    { path: 'rolunk', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['hu', 'en', 'de', 'sk', 'ro'] },
    { path: 'o-nama', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['hr'] },
    { path: 'o-nas', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['sl'] },
    { path: 'a-propos', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['fr'] },
    { path: 'chi-siamo', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['it'] },
    { path: 'sobre-nosotros', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['es'] },

    // ============================================
    // SERVICES PAGE (All Languages - Fully Localized)
    // ============================================
    { path: 'szolgaltatasok', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['hu', 'en', 'de', 'sk', 'ro'] },
    { path: 'usluge', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['hr'] },
    { path: 'storitve', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['sl'] },
    { path: 'services', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['fr'] },
    { path: 'servizi', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['it'] },
    { path: 'servicios', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['es'] },

    // ============================================
    // CONTACT PAGE (All Languages - Fully Localized)
    // ============================================
    { path: 'kapcsolat', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['hu', 'en', 'de', 'sk', 'ro'] },
    { path: 'kontakt', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['hr', 'sl'] },
    { path: 'contact', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['fr'] },
    { path: 'contatti', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['it'] },
    { path: 'contacto', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['es'] },

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
