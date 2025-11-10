import { locales, type Locale } from '@/i18n';

// Load translation messages
export async function getMessages(locale: Locale) {
  try {
    const messages = await import(`@/locales/${locale}.json`);
    return messages.default;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    // Fallback to Hungarian
    const fallback = await import(`@/locales/hu.json`);
    return fallback.default;
  }
}

// Simple translation function
export function createTranslator(messages: any) {
  return function t(key: string, fallback?: string): string {
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
}

// Get locale from pathname
export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  if (locales.includes(firstSegment as Locale)) {
    return firstSegment as Locale;
  }

  return 'hu'; // default
}

// Remove locale prefix from pathname
export function removeLocalePrefix(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  if (locales.includes(firstSegment as Locale)) {
    segments.shift();
    return `/${segments.join('/')}`;
  }

  return pathname;
}

// Add locale prefix to pathname
export function addLocalePrefix(pathname: string, locale: Locale): string {
  const withoutLocale = removeLocalePrefix(pathname);
  return `/${locale}${withoutLocale}`;
}
