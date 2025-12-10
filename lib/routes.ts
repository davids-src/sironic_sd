import { Locale } from '@/i18n';

/**
 * Centralized Route Mapping System
 * 
 * Defines all page URLs for each locale to ensure proper URL localization.
 * This allows pages to have language-specific slugs (e.g., 'arak' in Hungarian, 'prezzi' in Italian).
 */

export type PageKey =
    | 'home'
    | 'about'
    | 'services'
    | 'products'
    | 'pricing'
    | 'contact'
    | 'blog'
    | 'repair-service'
    | 'network-optimization'
    | 'it-training'
    | 'custom-development'
    | 'minden-cegnek'
    | 'onsite-presence'
    | 'privacy';

/**
 * Route configuration mapping logical page names to locale-specific URL slugs.
 * Based on the sitemap.ts configuration.
 */
export const routes: Record<PageKey, Record<Locale, string>> = {
    home: {
        hu: '',
        en: '',
        de: '',
        sk: '',
        ro: '',
        hr: '',
        sl: '',
        fr: '',
        it: '',
        es: '',
        sv: '',
        da: '',
        no: '',
        nl: '',
        pl: '',
        cs: '',
    },
    about: {
        hu: 'rolunk',
        en: 'rolunk',
        de: 'rolunk',
        sk: 'rolunk',
        ro: 'rolunk',
        hr: 'o-nama',
        sl: 'o-nas',
        fr: 'a-propos',
        it: 'chi-siamo',
        es: 'sobre-nosotros',
        sv: 'om-oss',
        da: 'om-os',
        no: 'om-oss',
        nl: 'over-ons',
        pl: 'o-nas',
        cs: 'o-nas',
    },
    services: {
        hu: 'szolgaltatasok',
        en: 'szolgaltatasok',
        de: 'szolgaltatasok',
        sk: 'szolgaltatasok',
        ro: 'szolgaltatasok',
        hr: 'usluge',
        sl: 'storitve',
        fr: 'services',
        it: 'servizi',
        es: 'servicios',
        sv: 'tjanster',
        da: 'tjenester',
        no: 'tjenester',
        nl: 'diensten',
        pl: 'uslugi',
        cs: 'sluzby',
    },
    products: {
        hu: 'termekeink',
        en: 'termekeink',
        de: 'termekeink',
        sk: 'termekeink',
        ro: 'termekeink',
        hr: 'proizvodi',
        sl: 'produkti',
        fr: 'produits',
        it: 'prodotti',
        es: 'productos',
        sv: 'produkter',
        da: 'produkter',
        no: 'produkter',
        nl: 'producten',
        pl: 'produkty',
        cs: 'produkty',
    },
    pricing: {
        hu: 'arak',
        en: 'arak',
        de: 'arak',
        sk: 'arak',
        ro: 'arak',
        hr: 'cjenik',
        sl: 'cenik',
        fr: 'tarifs',
        it: 'prezzi',
        es: 'precios',
        sv: 'priser',
        da: 'priser',
        no: 'priser',
        nl: 'prijzen',
        pl: 'cennik',
        cs: 'cenik',
    },
    contact: {
        hu: 'kapcsolat',
        en: 'kapcsolat',
        de: 'kapcsolat',
        sk: 'kapcsolat',
        ro: 'kapcsolat',
        hr: 'kontakt',
        sl: 'kontakt',
        fr: 'contact',
        it: 'contatti',
        es: 'contacto',
        sv: 'kontakt',
        da: 'kontakt',
        no: 'kontakt',
        nl: 'contact',
        pl: 'kontakt',
        cs: 'kontakt',
    },
    blog: {
        hu: 'blog',
        en: 'blog',
        de: 'blog',
        sk: 'blog',
        ro: 'blog',
        hr: 'blog',
        sl: 'blog',
        fr: 'blog',
        it: 'blog',
        es: 'blog',
        sv: 'blog',
        da: 'blog',
        no: 'blog',
        nl: 'blog',
        pl: 'blog',
        cs: 'blog',
    },
    'repair-service': {
        hu: 'szerviz-javitas',
        en: 'repair-service',
        de: 'reparatur-service',
        sk: 'servisne-sluzby',
        ro: 'servicii-reparatii',
        hr: 'servis-popravak',
        sl: 'servis-racunalnikov',
        fr: 'reparation-et-maintenance',
        it: 'riparazione-e-assistenza',
        es: 'reparacion-y-servicio',
        sv: 'reparation-service',
        da: 'reparation-service',
        no: 'reparasjon-service',
        nl: 'reparatie-service',
        pl: 'serwis-naprawy',
        cs: 'opravy-servis',
    },
    'network-optimization': {
        hu: 'halozat-fejlesztes',
        en: 'network-optimization',
        de: 'netzwerk-optimierung',
        sk: 'optimalizacia-siete',
        ro: 'optimizare-retea',
        hr: 'optimizacija-mreze',
        sl: 'mrezna-infrastruktura',
        fr: 'optimisation-reseau',
        it: 'ottimizzazione-rete',
        es: 'optimizacion-de-red',
        sv: 'natverksoptimering',
        da: 'netvaerksoptimering',
        no: 'nettverksoptimalisering',
        nl: 'netwerkoptimalisatie',
        pl: 'optymalizacja-sieci',
        cs: 'optimalizace-site',
    },
    'it-training': {
        hu: 'oktatas',
        en: 'it-training',
        de: 'it-schulung',
        sk: 'it-vzdelavanie',
        ro: 'training-it',
        hr: 'it-edukacija',
        sl: 'it-usposabljanje',
        fr: 'formation-informatique',
        it: 'formazione-it',
        es: 'formacion-informatica',
        sv: 'it-utbildning',
        da: 'it-uddannelse',
        no: 'it-opplaering',
        nl: 'it-training',
        pl: 'szkolenie-it',
        cs: 'it-skoleni',
    },
    'custom-development': {
        hu: 'egyedi-alkalmazas-fejlesztes',
        en: 'custom-application-development',
        de: 'individuelle-anwendungsentwicklung',
        sk: 'vyvoj-vlastnych-aplikacii',
        ro: 'dezvoltare-aplicatii-personalizate',
        hr: 'razvoj-prilagodenih-aplikacija',
        sl: 'razvoj-spletnih-aplikacij',
        fr: 'developpement-dapplications',
        it: 'sviluppo-applicazioni',
        es: 'desarrollo-de-aplicaciones',
        sv: 'anpassad-applikationsutveckling',
        da: 'skraeddersyet-applikationsudvikling',
        no: 'skreddersydd-applikasjonsutvikling',
        nl: 'maatwerk-applicatieontwikkeling',
        pl: 'dedykowane-tworzenie-aplikacji',
        cs: 'vyvoj-aplikaci-na-miru',
    },
    'minden-cegnek': {
        hu: 'minden-cegnek-legyen-informatikusa',
        en: 'minden-cegnek-legyen-informatikusa',
        de: 'minden-cegnek-legyen-informatikusa',
        sk: 'minden-cegnek-legyen-informatikusa',
        ro: 'minden-cegnek-legyen-informatikusa',
        hr: 'it-podrska-tvrtkama',
        sl: 'it-podpora-podjetjem',
        fr: 'minden-cegnek-legyen-informatikusa',
        it: 'minden-cegnek-legyen-informatikusa',
        es: 'minden-cegnek-legyen-informatikusa',
        sv: 'it-support-foretag',
        da: 'it-stoette-virksomheder',
        no: 'it-stoette-bedrifter',
        nl: 'it-ondersteuning-bedrijven',
        pl: 'wsparcie-it-firm',
        cs: 'it-podpora-firem',
    },
    'onsite-presence': {
        hu: 'onsite-jelenlet',
        en: 'onsite-presence',
        de: 'onsite-prasenz',
        sk: 'onsite-pritomnost',
        ro: 'prezenta-onsite',
        hr: 'it-onsite-prisutnost',
        sl: 'onsite-it-tehnik',
        fr: 'presence-it-sur-site',
        it: 'presenza-it-onsite',
        es: 'presencia-it-onsite',
        sv: 'onsite-narvaro',
        da: 'onsite-tilstedevarelse',
        no: 'onsite-tilstedevarelse',
        nl: 'onsite-aanwezigheid',
        pl: 'onsite-obecnosc',
        cs: 'onsite-pritomnost',
    },
    privacy: {
        hu: 'adatvedelem',
        en: 'privacy-policy',
        de: 'datenschutz',
        sk: 'ochrana-udajov',
        ro: 'confidentialitate',
        hr: 'zastita-podataka',
        sl: 'zasebnost',
        fr: 'politique-de-confidentialite',
        it: 'privacy',
        es: 'privacidad',
        sv: 'integritetspolicy',
        da: 'fortrolighedspolitik',
        no: 'personvernregler',
        nl: 'privacybeleid',
        pl: 'polityka-prywatnosci',
        cs: 'ochrana-soukromi',
    }
};

/**
 * Get the localized URL path for a given page and locale.
 * 
 * @param page - The logical page key
 * @param locale - The target locale
 * @returns The localized URL slug (empty string for home)
 * 
 * @example
 * getLocalizedPath('pricing', 'it') // Returns 'prezzi'
 * getLocalizedPath('pricing', 'hu') // Returns 'arak'
 */
export function getLocalizedPath(page: PageKey, locale: Locale): string {
    return routes[page]?.[locale] ?? routes[page]?.['hu'] ?? '';
}

/**
 * Find the logical page key from a URL slug and locale.
 * Performs reverse lookup in the routes configuration.
 * 
 * @param slug - The URL slug to look up
 * @param locale - The current locale
 * @returns The page key if found, null otherwise
 * 
 * @example
 * getPageFromPath('prezzi', 'it') // Returns 'pricing'
 * getPageFromPath('arak', 'hu') // Returns 'pricing'
 */
export function getPageFromPath(slug: string, locale: Locale): PageKey | null {
    // Handle empty slug (home page)
    if (!slug || slug === '') {
        return 'home';
    }

    // Search for the page with this slug in the current locale
    for (const [page, localeMap] of Object.entries(routes)) {
        if (localeMap[locale] === slug) {
            return page as PageKey;
        }
    }

    return null;
}

/**
 * Translate a URL path from one locale to another.
 * Identifies the page, then returns the appropriate slug for the target locale.
 * 
 * @param currentSlug - The current URL slug
 * @param fromLocale - The source locale
 * @param toLocale - The target locale
 * @returns The translated URL slug, or the original if translation fails
 * 
 * @example
 * translatePath('arak', 'hu', 'it') // Returns 'prezzi'
 * translatePath('prezzi', 'it', 'hu') // Returns 'arak'
 */
export function translatePath(
    currentSlug: string,
    fromLocale: Locale,
    toLocale: Locale
): string {
    const page = getPageFromPath(currentSlug, fromLocale);

    if (!page) {
        // If we can't identify the page, return the original slug
        // This handles service pages and other dynamic routes
        return currentSlug;
    }

    return getLocalizedPath(page, toLocale);
}

/**
 * Check if a given slug belongs to a main page (not a service page).
 * 
 * @param slug - The URL slug to check
 * @param locale - The locale context
 * @returns True if the slug is a main page, false otherwise
 */
export function isMainPage(slug: string, locale: Locale): boolean {
    return getPageFromPath(slug, locale) !== null;
}
