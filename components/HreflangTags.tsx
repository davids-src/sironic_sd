'use client';

import { usePathname } from 'next/navigation';
import { locales } from '@/i18n';
import { routes } from '@/lib/routes';

export default function HreflangTags() {
    const pathname = usePathname();
    // Default to localhost if env var is not set, but in production it should be set
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sironic.eu';

    if (!pathname) return null;

    // 1. Find the current locale
    const currentLocale = locales.find(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    // 2. Extract path without locale
    let pathWithoutLocale = pathname;
    if (currentLocale) {
        pathWithoutLocale = pathname.replace(`/${currentLocale}`, '');
        if (pathWithoutLocale === '') pathWithoutLocale = '/';
    } else {
        if (pathWithoutLocale === '') pathWithoutLocale = '/';
    }

    // Remove leading slash for matching
    const slugToMatch = pathWithoutLocale.replace(/^\//, '');

    // 3. Find the logical key in localized routes for the current path
    let pathKey: string | null = null;

    if (slugToMatch === '') {
        pathKey = 'home';
    } else {
        for (const [key, localizedPaths] of Object.entries(routes)) {
            if (Object.values(localizedPaths).some(p => p !== '' && p === slugToMatch)) {
                pathKey = key;
                break;
            }
        }
    }

    // 4. Generate URL for a given target locale
    const getUrl = (targetLocale: string | null) => {
        let finalSlug = slugToMatch;

        if (pathKey && targetLocale && routes[pathKey as keyof typeof routes]) {
            const localeRoutes = routes[pathKey as keyof typeof routes] as Record<string, string>;
            if (localeRoutes[targetLocale] !== undefined) {
                finalSlug = localeRoutes[targetLocale];
            }
        }

        const cleanPath = finalSlug ? `/${finalSlug}` : '';

        if (!targetLocale) {
            // For x-default, we usually link to the base language fallback or the root
            return `${baseUrl}${cleanPath === '/' ? '' : cleanPath}`;
        }

        // For specific locales
        return `${baseUrl}/${targetLocale}${cleanPath === '/' ? '' : cleanPath}`;
    };

    return (
        <>
            {locales.map((locale) => {
                // Map locale to proper region code for hreflang
                const regionCode = {
                    'hu': 'hu-HU',
                    'en': 'en-US',
                    'de': 'de-DE',
                    'sk': 'sk-SK',
                    'ro': 'ro-RO',
                    'hr': 'hr-HR',
                    'sl': 'sl-SI',
                    'fr': 'fr-FR',
                    'it': 'it-IT',
                    'es': 'es-ES',
                    'sv': 'sv-SE',
                    'da': 'da-DK',
                    'no': 'no-NO',
                    'nl': 'nl-NL',
                    'pl': 'pl-PL',
                    'cs': 'cs-CZ'
                }[locale] || locale;

                return (
                    <link
                        key={locale}
                        rel="alternate"
                        href={getUrl(locale)}
                        hrefLang={regionCode}
                    />
                );
            })}
            <link
                rel="alternate"
                href={getUrl(null)}
                hrefLang="x-default"
            />
        </>
    );
}
