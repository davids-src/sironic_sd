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
    | 'blog';

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
    },
    about: {
        hu: 'rolunk',
        en: 'about-us',
        de: 'uber-uns',
        sk: 'o-nas',
        ro: 'despre-noi',
        hr: 'o-nama',
        sl: 'o-nas',
        fr: 'a-propos',
        it: 'chi-siamo',
        es: 'sobre-nosotros',
    },
    services: {
        hu: 'szolgaltatasok',
        en: 'services',
        de: 'dienstleistungen',
        sk: 'sluzby',
        ro: 'servicii',
        hr: 'usluge',
        sl: 'storitve',
        fr: 'services',
        it: 'servizi',
        es: 'servicios',
    },
    products: {
        hu: 'termekeink',
        en: 'products',
        de: 'produkte',
        sk: 'produkty',
        ro: 'produse',
        hr: 'proizvodi',
        sl: 'produkti',
        fr: 'produits',
        it: 'prodotti',
        es: 'productos',
    },
    pricing: {
        hu: 'arak',
        en: 'pricing',
        de: 'preise',
        sk: 'cennik',
        ro: 'preturi',
        hr: 'cjenik',
        sl: 'cenik',
        fr: 'tarifs',
        it: 'prezzi',
        es: 'precios',
    },
    contact: {
        hu: 'kapcsolat',
        en: 'contact',
        de: 'kontakt',
        sk: 'kontakt',
        ro: 'contact',
        hr: 'kontakt',
        sl: 'kontakt',
        fr: 'contact',
        it: 'contatti',
        es: 'contacto',
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
    },
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
