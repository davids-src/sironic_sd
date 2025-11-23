'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';
import { locales, localeNames, localeFlags } from '@/i18n';

export function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();

    // Extract current locale from pathname
    const currentLocale = pathname?.split('/')[1] || 'hu';

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
                <Button variant="ghost" size="icon" aria-label="Nyelvválasztás">
                    <Globe className="h-5 w-5" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {locales.map((locale) => (
                    <DropdownMenuItem
                        key={locale}
                        onClick={() => handleLanguageChange(locale)}
                        className={`cursor-pointer ${currentLocale === locale ? 'bg-accent' : ''}`}
                    >
                        <span className="mr-2">{localeFlags[locale]}</span>
                        {localeNames[locale]}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
