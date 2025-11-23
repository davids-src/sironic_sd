'use client';

import { usePathname } from 'next/navigation';
import { locales } from '@/i18n';

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

    // Helper to construct full URL
    const getUrl = (locale: string | null, path: string) => {
        // Clean up path to ensure it starts with /
        const cleanPath = path.startsWith('/') ? path : `/${path}`;

        if (!locale) {
            // For x-default, we use the path without locale
            // If path is just '/', we return baseUrl
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
