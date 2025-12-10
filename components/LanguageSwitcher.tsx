'use client';
// @ts-nocheck
import React from 'react';

import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe, Check } from 'lucide-react';
import { locales, localeNames, localeFlags, type Locale } from '@/i18n';
import { translatePath } from '@/lib/routes';

/**
 * Enhanced Language Switcher Component
 * 
 * Features:
 * - Flag icons for each language
 * - Improved visual design with hover states
 * - Better accessibility with ARIA labels
 * - Check mark for current language
 * - Smooth transitions
 * - URL slug translation when switching languages
 */
export function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();

    // Extract current locale from pathname
    const currentLocale = (pathname?.split('/')[1] as Locale) || 'hu';
    const currentLocaleName = localeNames[currentLocale as keyof typeof localeNames] || localeNames['hu'];

    const handleLanguageChange = (newLocale: string) => {
        if (!pathname) return;

        // Set cookie for middleware persistence (1 year)
        document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

        const segments = pathname.split('/').filter(Boolean);
        // segments[0] is the current locale
        // segments[1] is the current page slug (if any)

        const currentSlug = segments[1] || ''; // Empty string for homepage
        const translatedSlug = translatePath(currentSlug, currentLocale as Locale, newLocale as Locale);

        //Rebuild the path with new locale and translated slug
        const newSegments = [newLocale];
        if (translatedSlug) {
            newSegments.push(translatedSlug);
        }
        // Add any remaining path segments (subpages, query params will be handled by router)
        if (segments.length > 2) {
            newSegments.push(...segments.slice(2));
        }

        const newPath = '/' + newSegments.join('/');

        router.push(newPath);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2 hover:bg-accent/50 transition-colors"
                    aria-label={`Change language. Current: ${currentLocaleName}`}
                >
                    <Globe className="h-5 w-5" aria-hidden="true" />
                    <span className="hidden sm:inline-block text-sm font-medium">
                        {localeFlags[currentLocale]} {currentLocaleName}
                    </span>
                    <span className="sm:hidden text-lg" aria-hidden="true">
                        {localeFlags[currentLocale]}
                    </span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 p-1">
                {locales.map((locale) => {
                    const isActive = currentLocale === locale;
                    return (
                        <DropdownMenuItem
                            key={locale}
                            onClick={() => handleLanguageChange(locale)}
                            className={`
                                cursor-pointer px-3 py-2.5 rounded-md transition-all duration-200
                                ${isActive
                                    ? 'bg-brand-red/10 text-brand-red font-semibold'
                                    : 'hover:bg-accent/80'
                                }
                                flex items-center justify-between gap-3
                            `}
                            aria-label={`Switch to ${localeNames[locale]}`}
                            aria-current={isActive ? 'true' : 'false'}
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-xl" role="img" aria-label={`${localeNames[locale]} flag`}>
                                    {localeFlags[locale]}
                                </span>
                                <span className="text-sm font-medium">
                                    {localeNames[locale]}
                                </span>
                            </div>
                            {isActive && (
                                <Check className="h-4 w-4 text-brand-red" aria-hidden="true" />
                            )}
                        </DropdownMenuItem>
                    );
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
