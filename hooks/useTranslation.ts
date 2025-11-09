'use client';

import { useState, useEffect } from 'react';
import type { Locale } from '@/i18n';

const locales = ['hu', 'en', 'de', 'sk', 'ro'] as const;

// Get locale from cookie
function getLocaleFromCookie(): Locale {
  if (typeof window === 'undefined') return 'hu';

  const cookieLocale = document.cookie
    .split('; ')
    .find(row => row.startsWith('NEXT_LOCALE='))
    ?.split('=')[1] as Locale | undefined;

  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  return 'hu';
}

// Simple hook for client-side translations
export function useTranslation() {
  const [messages, setMessages] = useState<any>({});
  const [locale, setLocale] = useState<Locale>('hu');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const currentLocale = getLocaleFromCookie();
    setLocale(currentLocale);

    // Load messages for current locale
    import(`@/locales/${currentLocale}.json`)
      .then(module => {
        setMessages(module.default);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Failed to load translations:', error);
        // Fallback to Hungarian
        import(`@/locales/hu.json`).then(module => {
          setMessages(module.default);
          setIsLoading(false);
        });
      });
  }, []);

  const t = (key: string, fallback?: string): string => {
    const keys = key.split('.');
    let value = messages;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return fallback || key;
      }
    }

    return typeof value === 'string' ? value : fallback || key;
  };

  return { t, locale, isLoading };
}
