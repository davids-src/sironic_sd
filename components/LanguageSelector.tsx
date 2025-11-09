'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { ChevronDown, Globe } from 'lucide-react';

const locales = ['hu', 'en', 'de', 'sk', 'ro'] as const;
type Locale = (typeof locales)[number];

const localeNames: Record<Locale, string> = {
  hu: 'Magyar',
  en: 'English',
  de: 'Deutsch',
  sk: 'Slovenčina',
  ro: 'Română',
};

const localeFlags: Record<Locale, string> = {
  hu: '🇭🇺',
  en: '🇬🇧',
  de: '🇩🇪',
  sk: '🇸🇰',
  ro: '🇷🇴',
};

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState<Locale>('hu');
  const pathname = usePathname();
  const router = useRouter();

  // Detect current locale from pathname
  useEffect(() => {
    const pathLocale = locales.find(loc => pathname.startsWith(`/${loc}`));
    if (pathLocale) {
      setCurrentLocale(pathLocale);
    }
  }, [pathname]);

  const switchLocale = (newLocale: Locale) => {
    setIsOpen(false);

    // Save to cookie for persistence
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

    // Remove current locale prefix and add new one
    const segments = pathname.split('/').filter(Boolean);
    const currentPathLocale = locales.find(loc => segments[0] === loc);

    let newPath;
    if (currentPathLocale) {
      // Replace existing locale
      segments[0] = newLocale;
      newPath = `/${segments.join('/')}`;
    } else {
      // Add locale prefix
      newPath = `/${newLocale}${pathname}`;
    }

    router.push(newPath);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Nyelvválasztás"
        aria-expanded={isOpen}
        className="gap-2"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">
          {localeFlags[currentLocale]} {localeNames[currentLocale]}
        </span>
        <span className="sm:hidden">{localeFlags[currentLocale]}</span>
        <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 mt-2 w-48 bg-popover border rounded-md shadow-lg z-50">
            <div className="py-1" role="menu">
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => switchLocale(loc)}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-accent transition-colors flex items-center gap-2 ${
                    currentLocale === loc ? 'bg-accent font-semibold' : ''
                  }`}
                  role="menuitem"
                >
                  <span className="text-xl">{localeFlags[loc]}</span>
                  <span>{localeNames[loc]}</span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
