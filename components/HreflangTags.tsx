'use client';

import { usePathname } from 'next/navigation';
import { locales } from '@/i18n';

// Mapping of localized paths
const pathMapping: Record<string, Record<string, string>> = {
    'repair-service': {
        hu: 'szerviz-javitas',
        en: 'repair-service',
        de: 'reparatur-service',
        sk: 'servisne-sluzby',
        ro: 'servicii-reparatii'
    },
    'network-optimization': {
        hu: 'halozat-fejlesztes',
        en: 'network-optimization',
        de: 'netzwerk-optimierung',
        sk: 'optimalizacia-siete',
        ro: 'optimizare-retea'
    }
};

// Reverse mapping helper to find the key from any localized path
const findPathKey = (path: string): string | null => {
    for (const [key, localizedPaths] of Object.entries(pathMapping)) {
        if (Object.values(localizedPaths).some(p => path.includes(p))) {
            return key;
        }
    }
    return null;
};

export default function HreflangTags() {
    const pathname = usePathname();

    // Default to localhost if env var is not set, but in production it should be set
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    if (!pathname) return null;

    // Find which locale is currently in the pathname
    const currentLocale = locales.find(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    // Get the path without the locale prefix
    let pathWithoutLocale = pathname;
    if (currentLocale) {
        pathWithoutLocale = pathname.replace(`/${currentLocale}`, '');
        // Ensure we don't end up with an empty string if it was just the locale
        if (pathWithoutLocale === '') pathWithoutLocale = '/';
    }

    // Check if this is a localized path
    const pathKey = findPathKey(pathWithoutLocale);

    // Helper to construct full URL
    const getUrl = (locale: string | null, path: string) => {
        let finalPath = path;

        // If we have a localized path key, use the correct slug for the target locale
        if (pathKey && locale && pathMapping[pathKey][locale]) {
            finalPath = `/${pathMapping[pathKey][locale]}`;
        }

        // Clean up path to ensure it starts with /
        const cleanPath = finalPath.startsWith('/') ? finalPath : `/${finalPath}`;

        if (!locale) {
            // For x-default, we use the path without locale (or default to EN/HU if needed)
            // Here we just use the current path structure but stripped of locale prefix
            // ideally x-default should point to a specific language version or a language selector
            if (cleanPath === '/') return baseUrl;
            return `${baseUrl}${cleanPath}`;
        }

        // For specific locales
        if (cleanPath === '/') return `${baseUrl}/${locale}`;
        return `${baseUrl}/${locale}${cleanPath}`;
    };

    return (
        <>
            {locales.map((locale) => (
                <link
                    key={locale}
                    rel="alternate"
                    href={getUrl(locale, pathWithoutLocale)}
                    hrefLang={locale}
                />
            ))}
            <link
                rel="alternate"
                href={getUrl(null, pathWithoutLocale)}
                hrefLang="x-default"
            />
        </>
    );
}
