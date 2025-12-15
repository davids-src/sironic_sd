import { MetadataRoute } from 'next';
import { locales } from '@/i18n';
import { solutionsData } from '@/lib/solutions-data';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sironic.eu';
type Locale = typeof locales[number];

/**
 * Comprehensive Multilingual Sitemap Generator
 * 
 * Features:
 * - Complete coverage for all 16 languages (hu, en, de, sk, ro, hr, sl, fr, it, es, sv, da, no, nl, pl, cs)
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
  try {
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
      { path: 'it-utbildning', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['sv'] },
      { path: 'it-uddannelse', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['da'] },
      { path: 'it-opplaering', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['no'] },
      { path: 'it-training', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['nl'] },
      { path: 'szkolenie-it', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['pl'] },
      { path: 'it-skoleni', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['cs'] },

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
      { path: 'anpassad-applikationsutveckling', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['sv'] },
      { path: 'skraeddersyet-applikationsudvikling', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['da'] },
      { path: 'skreddersydd-applikasjonsutvikling', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['no'] },
      { path: 'maatwerk-applicatieontwikkeling', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['nl'] },
      { path: 'dedykowane-tworzenie-aplikacji', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['pl'] },
      { path: 'vyvoj-aplikaci-na-miru', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['cs'] },

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
      { path: 'natverksoptimering', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['sv'] },
      { path: 'netvaerksoptimering', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['da'] },
      { path: 'nettverksoptimalisering', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['no'] },
      { path: 'netwerkoptimalisatie', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['nl'] },
      { path: 'optymalizacja-sieci', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['pl'] },
      { path: 'optimalizace-site', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['cs'] },

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
      { path: 'onsite-narvaro', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['sv'] },
      { path: 'onsite-tilstedevarelse', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['da'] },
      { path: 'onsite-tilstedevarelse', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['no'] },
      { path: 'onsite-aanwezigheid', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['nl'] },
      { path: 'onsite-obecnosc', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['pl'] },
      { path: 'onsite-pritomnost', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['cs'] },

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
      { path: 'reparation-service', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['sv'] },
      { path: 'reparation-service', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['da'] },
      { path: 'reparasjon-service', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['no'] },
      { path: 'reparatie-service', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['nl'] },
      { path: 'serwis-naprawy', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['pl'] },
      { path: 'opravy-servis', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['cs'] },

      // ============================================
      // CAMPAIGN: "Every Company Needs IT"
      // ============================================
      { path: 'minden-cegnek-legyen-informatikusa', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['hu', 'en', 'de', 'sk', 'ro', 'fr', 'it', 'es'] },
      { path: 'it-podrska-tvrtkama', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['hr'] },
      { path: 'it-podpora-podjetjem', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['sl'] },
      { path: 'it-support-foretag', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['sv'] },
      { path: 'it-stoette-virksomheder', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['da'] },
      { path: 'it-stoette-bedrifter', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['no'] },
      { path: 'it-ondersteuning-bedrijven', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['nl'] },
      { path: 'wsparcie-it-firm', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['pl'] },
      { path: 'it-podpora-firem', changeFreq: 'monthly', priority: 0.9, allowedLocales: ['cs'] },

      // ============================================
      // PRODUCTS PAGE (All Languages - Fully Localized)
      // ============================================
      { path: 'termekeink', changeFreq: 'weekly', priority: 0.7, allowedLocales: ['hu', 'en', 'de', 'sk', 'ro'] },
      { path: 'proizvodi', changeFreq: 'weekly', priority: 0.7, allowedLocales: ['hr'] },
      { path: 'produkti', changeFreq: 'weekly', priority: 0.7, allowedLocales: ['sl'] },
      { path: 'produits', changeFreq: 'weekly', priority: 0.7, allowedLocales: ['fr'] },
      { path: 'prodotti', changeFreq: 'weekly', priority: 0.7, allowedLocales: ['it'] },
      { path: 'productos', changeFreq: 'weekly', priority: 0.7, allowedLocales: ['es'] },
      { path: 'produkter', changeFreq: 'weekly', priority: 0.7, allowedLocales: ['sv'] },
      { path: 'produkter', changeFreq: 'weekly', priority: 0.7, allowedLocales: ['da'] },
      { path: 'produkter', changeFreq: 'weekly', priority: 0.7, allowedLocales: ['no'] },
      { path: 'producten', changeFreq: 'weekly', priority: 0.7, allowedLocales: ['nl'] },
      { path: 'produkty', changeFreq: 'weekly', priority: 0.7, allowedLocales: ['pl'] },
      { path: 'produkty', changeFreq: 'weekly', priority: 0.7, allowedLocales: ['cs'] },

      // ============================================
      // PRICING PAGE (All Languages - Fully Localized)
      // ============================================
      { path: 'arak', changeFreq: 'weekly', priority: 0.8, allowedLocales: ['hu', 'en', 'de', 'sk', 'ro'] },
      { path: 'cjenik', changeFreq: 'weekly', priority: 0.8, allowedLocales: ['hr'] },
      { path: 'cenik', changeFreq: 'weekly', priority: 0.8, allowedLocales: ['sl'] },
      { path: 'tarifs', changeFreq: 'weekly', priority: 0.8, allowedLocales: ['fr'] },
      { path: 'prezzi', changeFreq: 'weekly', priority: 0.8, allowedLocales: ['it'] },
      { path: 'precios', changeFreq: 'weekly', priority: 0.8, allowedLocales: ['es'] },
      { path: 'priser', changeFreq: 'weekly', priority: 0.8, allowedLocales: ['sv'] },
      { path: 'priser', changeFreq: 'weekly', priority: 0.8, allowedLocales: ['da'] },
      { path: 'priser', changeFreq: 'weekly', priority: 0.8, allowedLocales: ['no'] },
      { path: 'prijzen', changeFreq: 'weekly', priority: 0.8, allowedLocales: ['nl'] },
      { path: 'cennik', changeFreq: 'weekly', priority: 0.8, allowedLocales: ['pl'] },
      { path: 'cenik', changeFreq: 'weekly', priority: 0.8, allowedLocales: ['cs'] },

      // ============================================
      // ABOUT PAGE (All Languages - Fully Localized)
      // ============================================
      { path: 'rolunk', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['hu', 'en', 'de', 'sk', 'ro'] },
      { path: 'o-nama', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['hr'] },
      { path: 'o-nas', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['sl'] },
      { path: 'a-propos', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['fr'] },
      { path: 'chi-siamo', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['it'] },
      { path: 'sobre-nosotros', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['es'] },
      { path: 'om-oss', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['sv'] },
      { path: 'om-os', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['da'] },
      { path: 'om-oss', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['no'] },
      { path: 'over-ons', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['nl'] },
      { path: 'o-nas', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['pl'] },
      { path: 'o-nas', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['cs'] },

      // ============================================
      // SERVICES PAGE (All Languages - Fully Localized)
      // ============================================
      { path: 'szolgaltatasok', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['hu', 'en', 'de', 'sk', 'ro'] },
      { path: 'usluge', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['hr'] },
      { path: 'storitve', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['sl'] },
      { path: 'services', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['fr'] },
      { path: 'servizi', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['it'] },
      { path: 'servicios', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['es'] },
      { path: 'tjanster', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['sv'] },
      { path: 'tjenester', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['da'] },
      { path: 'tjenester', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['no'] },
      { path: 'diensten', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['nl'] },
      { path: 'uslugi', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['pl'] },
      { path: 'sluzby', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['cs'] },

      // ============================================
      // CONTACT PAGE (All Languages - Fully Localized)
      // ============================================
      { path: 'kapcsolat', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['hu', 'en', 'de', 'sk', 'ro'] },
      { path: 'kontakt', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['hr', 'sl'] },
      { path: 'contact', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['fr'] },
      { path: 'contatti', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['it'] },
      { path: 'contacto', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['es'] },
      { path: 'kontakt', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['sv', 'da', 'no'] },
      { path: 'contact', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['nl'] },
      { path: 'kontakt', changeFreq: 'monthly', priority: 0.8, allowedLocales: ['pl', 'cs'] },

      // ============================================
      // BLOG (Currently HU only)
      // ============================================
      { path: 'blog', changeFreq: 'weekly', priority: 0.7, allowedLocales: ['hu'] },

      // ============================================
      // PRIVACY POLICY / DATA PROTECTION (All Languages - Fully Localized)
      // ============================================
      { path: 'adatvedelem', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['hu'] },
      { path: 'privacy-policy', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['en'] },
      { path: 'datenschutz', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['de'] },
      { path: 'ochrana-udajov', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['sk'] },
      { path: 'confidentialitate', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['ro'] },
      { path: 'zastita-podataka', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['hr'] },
      { path: 'zasebnost', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['sl'] },
      { path: 'politique-de-confidentialite', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['fr'] },
      { path: 'privacy', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['it'] },
      { path: 'privacidad', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['es'] },
      { path: 'integritetspolicy', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['sv'] },
      { path: 'fortrolighedspolitik', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['da'] },
      { path: 'personvernregler', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['no'] },
      { path: 'privacybeleid', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['nl'] },
      { path: 'polityka-prywatnosci', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['pl'] },
      { path: 'ochrana-soukromi', changeFreq: 'monthly', priority: 0.6, allowedLocales: ['cs'] },

      // ============================================
      // WAVE STARTER PACK - LEAD GEN
      // ============================================
      { path: 'book', changeFreq: 'monthly', priority: 0.8 },
      { path: 'checklist/eu-smb-it-security', changeFreq: 'monthly', priority: 0.8 },
    ];

    // Dynamic Solutions (Programmatic SEO)
    // We add these programmatically since they are derived from data
    Object.keys(solutionsData).forEach(slug => {
      routes.push({
        path: `solutions/${slug}`,
        changeFreq: 'weekly',
        priority: 0.8
      });
    });

    // Generate sitemap entries
    for (const route of routes) {
      const allowedLocales = route.allowedLocales || locales;

      for (const locale of allowedLocales) {
        // Validate locale
        if (!locales.includes(locale as Locale)) {
          console.warn(`Invalid locale in sitemap: ${locale}`);
          continue;
        }

        const url = route.path
          ? `${baseUrl}/${locale}/${route.path}`
          : `${baseUrl}/${locale}`;

        // Validate URL format
        try {
          new URL(url);
        } catch (error) {
          console.error(`Invalid URL in sitemap: ${url}`, error);
          continue;
        }

        sitemapEntries.push({
          url,
          lastModified: new Date(),
          changeFrequency: route.changeFreq,
          priority: route.priority,
        });
      }
    }

    // Remove duplicates
    const uniqueEntries = Array.from(
      new Map(sitemapEntries.map(entry => [entry.url, entry])).values()
    );

    // Sort by priority (descending) then by URL for consistency
    const sortedEntries = uniqueEntries.sort((a, b) => {
      const priorityA = a.priority ?? 0.5;
      const priorityB = b.priority ?? 0.5;

      if (priorityB !== priorityA) {
        return priorityB - priorityA;
      }
      return a.url.localeCompare(b.url);
    });

    // Log sitemap generation info (only in development)
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Sitemap] Generated ${sortedEntries.length} URLs`);
    }

    return sortedEntries;
  } catch (error) {
    console.error('[Sitemap] Error generating sitemap:', error);
    // Return at least the homepage to prevent complete failure
    return [
      {
        url: `${baseUrl}/hu`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1.0,
      },
    ];
  }
}
