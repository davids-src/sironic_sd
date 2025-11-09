# SIRONIC Multilingual Implementation Guide

## Overview
This guide outlines the complete multilingual implementation for the SIRONIC website with C1-level translations in Hungarian, English, German, Slovak, and Romanian.

## Implementation Status

### ✅ Completed
- Installed `next-intl` package
- Created i18n configuration (`i18n.ts`)
- Created locale files for:
  - Hungarian (hu.json) - Base language ✅
  - English (en.json) - C1 level professional ✅
  - German (de.json) - C1 level formal business ✅

### 🔄 In Progress
- Slovak (sk.json) - C1 level formal business
- Romanian (ro.json) - C1 level professional business

### ⏳ Pending
- Middleware for language detection
- Language selector component with flags
- Route structure updates
- Component translation integration
- SEO metadata per locale
- Hreflang implementation

---

## Complete Implementation Roadmap

### Phase 1: Core Infrastructure ✅

**Files Created:**
- `/i18n.ts` - Configuration with locale definitions
- `/locales/hu.json` - Hungarian base translations
- `/locales/en.json` - English C1 translations
- `/locales/de.json` - German C1 translations

**Key Features:**
- Locale types and constants
- Request configuration
- Flag emoji mappings
- Locale name mappings

---

### Phase 2: Remaining Translations (Slovak & Romanian)

#### Slovak Translation (sk.json) - C1 Level, Formal Business Tone

**Translation Guidelines:**
- Use formal address (Vy/Váš) appropriate for B2B
- Professional, clear business language
- Technical terms should be understandable to non-IT managers
- Emphasize reliability and personal service

**Key Phrases to Translate:**
```json
{
  "meta": {
    "siteTitle": "SIRONIC IT Riešenia",
    "siteDescription": "Komplexné IT riešenia pre malé a stredné podniky v Székesfehérvári"
  },
  "nav": {
    "home": "Domov",
    "services": "Služby",
    "products": "Produkty",
    "pricing": "Cenník",
    "about": "O nás",
    "blog": "Blog",
    "contact": "Kontakt",
    "ctaButton": "Požiadať o ponuku"
  },
  "hero": {
    "title": "IT riešenia, akoby ste mali vlastný tím",
    "subtitle": "Profesionálna správa IT infraštruktúry, rýchla údržba a osobná podpora pre malé a stredné podniky.",
    "cta": "Bezplatná konzultácia"
  }
  // ... continue with full translation
}
```

#### Romanian Translation (ro.json) - C1 Level, Professional Business Tone

**Translation Guidelines:**
- Professional, business-formal tone (Dumneavoastră)
- Clear, benefit-driven language
- Emphasize security, reliability, and cost-effectiveness
- Avoid overly technical jargon

**Key Phrases to Translate:**
```json
{
  "meta": {
    "siteTitle": "SIRONIC Soluții IT",
    "siteDescription": "Soluții IT complete pentru întreprinderi mici și mijlocii în Székesfehérvár"
  },
  "nav": {
    "home": "Acasă",
    "services": "Servicii",
    "products": "Produse",
    "pricing": "Prețuri",
    "about": "Despre noi",
    "blog": "Blog",
    "contact": "Contact",
    "ctaButton": "Solicitați o ofertă"
  },
  "hero": {
    "title": "Soluții IT ca și cum ați avea propria echipă",
    "subtitle": "Management profesionist al infrastructurii IT, întreținere rapidă și asistență dedicată pentru întreprinderi mici și mijlocii.",
    "cta": "Consultare gratuită"
  }
  // ... continue with full translation
}
```

---

### Phase 3: Middleware & Language Detection

**File: `/middleware.ts`**

```typescript
import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always', // Always show locale in URL
  localeDetection: true, // Auto-detect from Accept-Language header
});

export const config = {
  // Match all pathnames except static files and API routes
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
```

**Language Detection Priority:**
1. User preference cookie (`NEXT_LOCALE`)
2. URL locale prefix (`/en/`, `/de/`, etc.)
3. `Accept-Language` header (browser)
4. Optional: GeoIP detection (requires external service)
5. Fallback to Hungarian (`hu`)

**Optional GeoIP Integration:**
```typescript
// middleware-with-geo.ts (optional enhancement)
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const country = request.geo?.country || 'HU';

  // Map countries to locales
  const countryLocaleMap: Record<string, string> = {
    'HU': 'hu',
    'GB': 'en',
    'US': 'en',
    'DE': 'de',
    'AT': 'de',
    'SK': 'sk',
    'RO': 'ro',
  };

  const suggestedLocale = countryLocaleMap[country] || 'hu';

  // Show banner suggesting locale switch (implement in UI)
  const response = NextResponse.next();
  response.cookies.set('suggested_locale', suggestedLocale);

  return response;
}
```

---

### Phase 4: App Router Structure Update

**New Directory Structure:**
```
/app/
  /[locale]/
    layout.tsx          # Locale-specific layout
    page.tsx            # Homepage
    /szolgaltatasok/    # Services (translated routes)
    /termekeink/        # Products
    /arak/              # Pricing
    /rolunk/            # About
    /kapcsolat/         # Contact
    /minden-cegnek-legyen-informatikusa/  # Special product page
  /blog/                # Blog stays in Hungarian only
    page.tsx
    /[slug]/
      page.tsx
  layout.tsx            # Root layout
  globals.css
```

**Root Layout (`/app/layout.tsx`):**
```typescript
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'latin-ext'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children; // Will be wrapped by locale layout
}
```

**Locale Layout (`/app/[locale]/layout.tsx`):**
```typescript
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin', 'latin-ext'] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`@/locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
          <GoogleAnalytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

---

### Phase 5: Language Selector Component

**File: `/components/LanguageSelector.tsx`**

```typescript
'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { locales, localeNames, localeFlags, type Locale } from '@/i18n';
import { Button } from './ui/button';
import { ChevronDown, Globe } from 'lucide-react';

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: Locale) => {
    // Remove current locale prefix and add new one
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    const newPath = `/${newLocale}${pathWithoutLocale}`;

    // Set cookie for persistence
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;

    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
        aria-expanded={isOpen}
        className="gap-2"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{localeFlags[locale]} {localeNames[locale]}</span>
        <span className="sm:hidden">{localeFlags[locale]}</span>
        <ChevronDown className="h-3 w-3" />
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
                    locale === loc ? 'bg-accent font-semibold' : ''
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
```

**Update Header Component** (`/components/Header.tsx`):
```typescript
// Add import
import { LanguageSelector } from './LanguageSelector';

// Add to header (before ThemeToggle):
<div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
  <LanguageSelector />
  <ThemeToggle />
  <Button asChild className="bg-brand-red hover:bg-brand-red/90">
    <Link href={`/${locale}/kapcsolat`}>{t('nav.ctaButton')}</Link>
  </Button>
</div>
```

---

### Phase 6: Component Translation Integration

**Example: Homepage (`/app/[locale]/page.tsx`):**

```typescript
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    title: t('siteTitle'),
    description: t('siteDescription'),
    openGraph: {
      title: t('siteTitle'),
      description: t('siteDescription'),
      locale: locale,
      alternateLocale: ['hu', 'en', 'de', 'sk', 'ro'].filter(l => l !== locale),
    },
  };
}

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      <section>
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.subtitle')}</p>
        <Button>{t('hero.cta')}</Button>
      </section>

      <section>
        <h2>{t('services.title')}</h2>
        <p>{t('services.subtitle')}</p>
        {/* Map services with translations */}
      </section>
    </>
  );
}
```

---

### Phase 7: SEO & Hreflang Implementation

**Hreflang Component** (`/components/Hreflang.tsx`):

```typescript
import { locales } from '@/i18n';

export function Hreflang({ pathname }: { pathname: string }) {
  const baseUrl = 'https://sironic.hu';

  return (
    <>
      {locales.map((locale) => (
        <link
          key={locale}
          rel="alternate"
          hrefLang={locale}
          href={`${baseUrl}/${locale}${pathname}`}
        />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${baseUrl}/hu${pathname}`}
      />
    </>
  );
}
```

**Add to layout head:**
```typescript
<head>
  <Hreflang pathname={pathname} />
</head>
```

**Sitemap Generation** (`/app/sitemap.ts`):

```typescript
import { MetadataRoute } from 'next';
import { locales } from '@/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sironic.hu';

  const routes = [
    '',
    '/szolgaltatasok',
    '/termekeink',
    '/arak',
    '/rolunk',
    '/kapcsolat',
    '/minden-cegnek-legyen-informatikusa',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((loc) => [loc, `${baseUrl}/${loc}${route}`])
          ),
        },
      });
    });
  });

  // Add blog (Hungarian only)
  sitemapEntries.push({
    url: `${baseUrl}/blog`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.7,
  });

  return sitemapEntries;
}
```

---

### Phase 8: Blog Handling (Hungarian Only)

**Blog stays outside locale routing:**

```
/app/
  /[locale]/           # All translated pages
  /blog/               # Hungarian only, outside locale prefix
    page.tsx
    /[slug]/page.tsx
```

**Blog Index** (`/app/blog/page.tsx`):
```typescript
import { LanguageBanner } from '@/components/LanguageBanner';

export default function BlogPage() {
  return (
    <>
      <LanguageBanner
        message="A blog cikkek magyar nyelven érhetők el."
        englishMessage="Blog articles are available in Hungarian."
      />
      {/* Blog content */}
    </>
  );
}
```

**Language Banner Component:**
```typescript
'use client';

import { useLocale } from 'next-intl';
import { Info } from 'lucide-react';

export function LanguageBanner({ message, englishMessage }: {
  message: string;
  englishMessage: string;
}) {
  const locale = useLocale();

  if (locale === 'hu') return null;

  return (
    <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 mb-8">
      <div className="flex items-start gap-3">
        <Info className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm text-amber-800 dark:text-amber-200">
            {englishMessage}
          </p>
        </div>
      </div>
    </div>
  );
}
```

---

### Phase 9: Form Localization

**Contact Form Translation:**

```typescript
'use client';

import { useTranslations } from 'next-intl';

export function ContactForm() {
  const t = useTranslations('contact.form');

  return (
    <form>
      <Label>{t('name')} <span>{t('required')}</span></Label>
      <Input name="name" />

      <Label>{t('email')} <span>{t('required')}</span></Label>
      <Input type="email" name="email" />

      <Label>{t('service')} <span>{t('required')}</span></Label>
      <select name="service">
        <option value="">{t('servicePlaceholder')}</option>
        {/* Options translated */}
      </select>

      <Label>{t('message')} <span>{t('required')}</span></Label>
      <Textarea name="message" />

      <Button type="submit">{t('submit')}</Button>
    </form>
  );
}
```

---

### Phase 10: Environment Variables

**`.env.example`:**
```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://sironic.hu

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=

# Optional: GeoIP Service (for geo-based locale detection)
# GEOIP_API_KEY=your_api_key_here
# GEOIP_PROVIDER=ipstack  # or cloudflare, maxmind, etc.

# Supabase (existing)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

---

## Testing Checklist

### Manual Testing
- [ ] Language selector appears in header
- [ ] All 5 locales load without errors
- [ ] Language switching persists across page navigation
- [ ] Blog shows language warning for non-Hungarian users
- [ ] Contact form displays in correct language
- [ ] Footer content translates correctly
- [ ] Mobile navigation shows language selector

### SEO Testing
- [ ] Hreflang tags present on all pages
- [ ] Each locale has unique meta title and description
- [ ] Sitemap includes all locale variations
- [ ] robots.txt allows all locale paths
- [ ] Canonical URLs point to correct locale
- [ ] OpenGraph tags include locale information

### Accessibility Testing
- [ ] Language selector has proper ARIA labels
- [ ] `<html lang>` attribute matches page locale
- [ ] Keyboard navigation works in language selector
- [ ] Screen readers announce language changes
- [ ] Focus management after language switch

### Browser Testing
- [ ] Chrome: Auto-detection works
- [ ] Safari: Locale routing correct
- [ ] Firefox: Translations render properly
- [ ] Edge: Cookie persistence works
- [ ] Mobile browsers: Dropdown accessible

---

## Search Console Setup

### 1. Add International Targeting
1. Go to Google Search Console
2. For each locale, verify property:
   - `https://sironic.hu/hu/`
   - `https://sironic.hu/en/`
   - `https://sironic.hu/de/`
   - `https://sironic.hu/sk/`
   - `https://sironic.hu/ro/`

### 2. Submit Sitemaps
Submit these sitemaps for each locale:
- `https://sironic.hu/sitemap.xml` (includes all locales)

### 3. Hreflang Validation
Use Google's hreflang testing tool to validate markup.

### 4. Monitor Coverage
Check Index Coverage report for each locale prefix.

---

## Translation Quality Notes

### English (en) - C1 Level
- Professional business tone
- Clear, benefit-driven CTAs
- Technical terms explained simply
- Suitable for international B2B audience

### German (de) - C1 Level, Formal
- Uses "Sie" formal address throughout
- Business-appropriate professional language
- Technical precision with clarity
- Suitable for German and Austrian SMB market

### Slovak (sk) - C1 Level, Formal
- Uses "Vy/Váš" formal business address
- Professional, respectful tone
- Clear value propositions
- Suitable for Slovak business market

### Romanian (ro) - C1 Level, Professional
- Uses "Dumneavoastră" formal address
- Professional business language
- Emphasis on reliability and security
- Suitable for Romanian SMB market

---

## Translation Maintenance

### Adding New Content
1. Add Hungarian text to `locales/hu.json`
2. Translate to all other locales (en, de, sk, ro)
3. Use translation keys in components
4. Test all locales before deployment

### Translation Report Format
Create `TRANSLATION_REPORT.csv`:
```csv
Key,Hungarian,English,German,Slovak,Romanian,Notes
hero.title,"IT megoldás...","IT solutions...","IT-Lösungen...","IT riešenia...","Soluții IT...","Main headline"
```

---

## Deployment Checklist

- [ ] All locale JSON files created
- [ ] Middleware configured
- [ ] Language selector added to header
- [ ] All pages migrated to `[locale]` structure
- [ ] Blog excluded from locale routing
- [ ] Hreflang tags implemented
- [ ] Sitemap generated with locales
- [ ] Environment variables set
- [ ] Build successful
- [ ] All routes accessible
- [ ] Google Search Console configured

---

## Performance Optimization

### Bundle Splitting
Locale files are automatically code-split by Next.js.

### Caching Strategy
- Set proper Cache-Control headers for locale files
- Use CDN for static assets
- Enable Vercel Edge caching

### Lazy Loading
Language selector dropdown loads on interaction.

---

## Future Enhancements

1. **Automatic Translation Pipeline**
   - Integrate with translation management system (Phrase, Lokalise)
   - Automated quality checks

2. **Content Negotiation**
   - More sophisticated geo-detection
   - A/B testing for optimal locale selection

3. **User Preferences**
   - Remember user's manual selection
   - Sync across devices (if auth added)

4. **Blog Translation**
   - Optional machine translation with disclaimer
   - Manual translation workflow for key articles

5. **Analytics**
   - Track locale-specific conversion rates
   - Monitor language selector usage

---

*Document Version: 1.0*
*Last Updated: 2025-11-09*
*Status: Implementation Guide*
