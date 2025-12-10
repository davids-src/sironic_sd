// i18n configuration for SIRONIC multilingual website
export const locales = ['hu', 'en', 'de', 'sk', 'ro', 'hr', 'sl', 'fr', 'it', 'es', 'sv', 'da', 'no', 'nl', 'pl', 'cs'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'hu';

export const localeNames: Record<Locale, string> = {
  hu: 'Magyar',
  en: 'English',
  de: 'Deutsch',
  sk: 'Slovenčina',
  ro: 'Română',
  hr: 'Hrvatski',
  sl: 'Slovenščina',
  fr: 'Français',
  it: 'Italiano',
  es: 'Español',
  sv: 'Svenska',
  da: 'Dansk',
  no: 'Norsk',
  nl: 'Nederlands',
  pl: 'Polski',
  cs: 'Čeština',
};

export const localeFlags: Record<Locale, string> = {
  hu: '🇭🇺',
  en: '🇬🇧',
  de: '🇩🇪',
  sk: '🇸🇰',
  ro: '🇷🇴',
  hr: '🇭🇷',
  sl: '🇸🇮',
  fr: '🇫🇷',
  it: '🇮🇹',
  es: '🇪🇸',
  sv: '🇸🇪',
  da: '🇩🇰',
  no: '🇳🇴',
  nl: '🇳🇱',
  pl: '🇵🇱',
  cs: '🇨🇿',
};
