'use client';

import { useTranslationsContext } from '@/components/TranslationsProvider';

export function useTranslation() {
  const { messages, locale } = useTranslationsContext();

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

  return { t, locale, isLoading: false };
}
