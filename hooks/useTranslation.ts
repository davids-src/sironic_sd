'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import type { Locale } from '@/i18n';

const locales = ['hu', 'en', 'de', 'sk', 'ro'] as const;

export function useTranslation() {
  const params = useParams();
  const [messages, setMessages] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  const locale = (params?.locale as Locale) || 'hu';

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const module = await import(`@/locales/${locale}.json`);
        setMessages(module.default);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to load translations:', error);
        const fallback = await import(`@/locales/hu.json`);
        setMessages(fallback.default);
        setIsLoading(false);
      }
    };

    loadMessages();
  }, [locale]);

  const t = (key: string, fallback?: any): any => {
    const keys = key.split('.');
    let value = messages;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return fallback !== undefined ? fallback : key;
      }
    }

    return value !== undefined ? value : (fallback !== undefined ? fallback : key);
  };

  return { t, locale, isLoading };
}
