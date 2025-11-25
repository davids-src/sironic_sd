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
import { locales, localeNames, localeFlags } from '@/i18n';

/**
 * Enhanced Language Switcher Component
 * 
 * Features:
 * - Flag icons for each language
 * - Improved visual design with hover states
 * - Better accessibility with ARIA labels
 * - Check mark for current language
 * - Smooth transitions
 */
export function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();

    // Extract current locale from pathname
    const currentLocale = (pathname?.split('/')[1] as keyof typeof localeNames) || 'hu';
    const currentLocaleName = localeNames[currentLocale as keyof typeof localeNames] || localeNames['hu'];

    const handleLanguageChange = (newLocale: string) => {
        if (!pathname) return;

        const segments = pathname.split('/');
        segments[1] = newLocale;
        const newPath = segments.join('/');

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
