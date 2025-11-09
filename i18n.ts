// i18n configuration for SIRONIC multilingual website
export const locales = ['hu', 'en', 'de', 'sk', 'ro'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'hu';

export const localeNames: Record<Locale, string> = {
  hu: 'Magyar',
  en: 'English',
  de: 'Deutsch',
  sk: 'Slovenčina',
  ro: 'Română',
};

export const localeFlags: Record<Locale, string> = {
  hu: '🇭🇺',
  en: '🇬🇧',
  de: '🇩🇪',
  sk: '🇸🇰',
  ro: '🇷🇴',
};
