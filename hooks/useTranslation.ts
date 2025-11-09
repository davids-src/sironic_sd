'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getLocaleFromPathname } from '@/lib/i18n';
import type { Locale } from '@/i18n';

// Simple hook for client-side translations
export function useTranslation() {
  const pathname = usePathname();
  const [messages, setMessages] = useState<any>({});
  const [locale, setLocale] = useState<Locale>('hu');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const currentLocale = getLocaleFromPathname(pathname);
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
  }, [pathname]);

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
