# SIRONIC Website - Multilingual Implementation README

## 🌍 Overview

This document provides complete instructions for implementing, deploying, and maintaining the multilingual version of the SIRONIC IT Rendszerház website with support for:

- 🇭🇺 Hungarian (hu) - Default/Base language
- 🇬🇧 English (en) - C1 Professional
- 🇩🇪 German (de) - C1 Formal Business
- 🇸🇰 Slovak (sk) - C1 Formal Business
- 🇷🇴 Romanian (ro) - C1 Professional

---

## 📁 Current Implementation Status

### ✅ Completed
- ✅ `next-intl` package installed
- ✅ i18n configuration created (`/i18n.ts`)
- ✅ All 5 locale JSON files with C1-level translations:
  - `/locales/hu.json` - Hungarian (baseline)
  - `/locales/en.json` - English
  - `/locales/de.json` - German
  - `/locales/sk.json` - Slovak
  - `/locales/ro.json` - Romanian
- ✅ Comprehensive implementation guide
- ✅ Translation report with quality analysis

### ⏳ Pending Implementation
- Middleware for language detection
- App Router structure update to `[locale]` pattern
- Language selector component
- Component translation integration
- SEO metadata per locale
- Hreflang tags
- Sitemap generation

**See `MULTILINGUAL_IMPLEMENTATION_GUIDE.md` for complete implementation roadmap.**

---

## 🚀 Quick Start Guide

### Step 1: Review Locale Files
All translations are ready in `/locales/` directory:
```bash
locales/
├── hu.json  # Hungarian (baseline)
├── en.json  # English
├── de.json  # German
├── sk.json  # Slovak
└── ro.json  # Romanian
```

### Step 2: Implement Middleware
Create `/middleware.ts`:
```typescript
import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
  localeDetection: true,
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
```

### Step 3: Update App Structure
Restructure `/app` directory:
```
/app/
  /[locale]/        # All localized pages
    layout.tsx
    page.tsx
    /szolgaltatasok/
    /kapcsolat/
    etc.
  /blog/            # Blog stays Hungarian only
  layout.tsx
```

### Step 4: Create Language Selector
See `MULTILINGUAL_IMPLEMENTATION_GUIDE.md` Section 5 for complete component code.

### Step 5: Deploy
```bash
npm run build
npm run start
```

---

## 🛠️ i18n Configuration

### Locale Settings (`/i18n.ts`)
```typescript
export const locales = ['hu', 'en', 'de', 'sk', 'ro'] as const;
export const defaultLocale = 'hu';
export const localeNames = {
  hu: 'Magyar',
  en: 'English',
  de: 'Deutsch',
  sk: 'Slovenčina',
  ro: 'Română',
};
```

### Usage in Components
```typescript
import { useTranslations } from 'next-intl';

function MyComponent() {
  const t = useTranslations();

  return (
    <h1>{t('hero.title')}</h1>
  );
}
```

---

## 🔄 Language Detection Logic

### Priority Order
1. **User Cookie** (`NEXT_LOCALE`) - Persisted preference
2. **URL Locale Prefix** (`/en/`, `/de/`, etc.)
3. **Accept-Language Header** - Browser setting
4. **Optional: GeoIP** - Country-based suggestion
5. **Fallback** - Hungarian (`hu`)

### How It Works
```
User visits sironic.hu
  └─> Check NEXT_LOCALE cookie
       └─> If exists: redirect to /{locale}/
       └─> Else: check Accept-Language
            └─> Match to closest locale
            └─> Redirect to /{matched-locale}/
```

### Disabling Auto-Detection
To disable automatic detection:
```typescript
// middleware.ts
export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
  localeDetection: false, // Disable auto-detection
});
```

---

## 📝 Translation Management

### Adding New Translations

**1. Add to Hungarian first** (`/locales/hu.json`):
```json
{
  "newSection": {
    "title": "Új cím",
    "description": "Új leírás"
  }
}
```

**2. Translate to all other locales**:
- English (`en.json`)
- German (`de.json`)
- Slovak (`sk.json`)
- Romanian (`ro.json`)

**3. Use in components**:
```typescript
const t = useTranslations('newSection');
return <h2>{t('title')}</h2>;
```

### Translation Key Naming Convention
```
{section}.{subsection}.{element}
```

**Examples:**
- `nav.home` - Navigation: Home link
- `contact.form.name` - Contact form: Name label
- `services.title` - Services section: Title

### Missing Translation Fallback
If a translation is missing, `next-intl` will:
1. Fall back to Hungarian text
2. Log warning in development
3. Show key name in development mode

---

## 🗺️ URL Structure

### Localized Routes
```
/               → Redirects to /hu/
/hu/            → Hungarian homepage
/en/            → English homepage
/de/            → German homepage
/sk/            → Slovak homepage
/ro/            → Romanian homepage

/hu/szolgaltatasok  → Services (Hungarian)
/en/services         → Services (English)
/de/dienstleistungen → Services (German)
/sk/sluzby           → Services (Slovak)
/ro/servicii         → Services (Romanian)
```

### Blog (Hungarian Only)
```
/blog          → Blog index (Hungarian)
/blog/[slug]   → Blog article (Hungarian)
```

**Note:** Blog stays outside `[locale]` routing and remains Hungarian only.

---

## 🎯 SEO Implementation

### Meta Tags Per Locale
```typescript
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    title: t('siteTitle'),
    description: t('siteDescription'),
    openGraph: {
      locale: locale,
      alternateLocale: otherLocales,
    },
  };
}
```

### Hreflang Tags
Add to layout:
```tsx
<link rel="alternate" hrefLang="hu" href="https://sironic.hu/hu/" />
<link rel="alternate" hrefLang="en" href="https://sironic.hu/en/" />
<link rel="alternate" hrefLang="de" href="https://sironic.hu/de/" />
<link rel="alternate" hrefLang="sk" href="https://sironic.hu/sk/" />
<link rel="alternate" hrefLang="ro" href="https://sironic.hu/ro/" />
<link rel="alternate" hrefLang="x-default" href="https://sironic.hu/hu/" />
```

### Sitemap with Locales
See `MULTILINGUAL_IMPLEMENTATION_GUIDE.md` Section 7 for sitemap implementation.

---

## 🔍 Search Console Setup

### 1. Add Locale-Specific Properties
In Google Search Console:
```
https://sironic.hu/hu/  (Hungarian)
https://sironic.hu/en/  (English)
https://sironic.hu/de/  (German)
https://sironic.hu/sk/  (Slovak)
https://sironic.hu/ro/  (Romanian)
```

### 2. Submit Sitemap
```
https://sironic.hu/sitemap.xml
```

### 3. Verify Hreflang
Use Google's International Targeting report to check hreflang implementation.

### 4. Monitor Coverage
Check Index Coverage for each locale prefix:
- Filter by URL prefix: `/en/`, `/de/`, etc.
- Monitor for indexing issues

---

## 🧪 Testing Checklist

### Functional Testing
- [ ] All 5 locales load without errors
- [ ] Language selector appears and functions
- [ ] Language switching works on all pages
- [ ] Cookie persists language selection
- [ ] Mobile view: language selector accessible
- [ ] Blog shows language warning for non-HU users

### SEO Testing
- [ ] Each locale has unique meta tags
- [ ] Hreflang tags present on all pages
- [ ] Sitemap includes all locale variations
- [ ] Canonical URLs correct per locale
- [ ] robots.txt allows all locales
- [ ] No duplicate content issues

### Accessibility Testing
- [ ] `<html lang="xx">` matches page locale
- [ ] Language selector has ARIA labels
- [ ] Keyboard navigation works
- [ ] Screen readers announce language
- [ ] Focus management after locale switch

### Browser Testing
- [ ] Chrome: Auto-detection works
- [ ] Safari: Translations render correctly
- [ ] Firefox: Language switcher functions
- [ ] Edge: Cookie persistence works
- [ ] Mobile browsers: Dropdown accessible

---

## 📊 Analytics & Monitoring

### Recommended Tracking
1. **Traffic by Locale**
   - Google Analytics: Filter by page path (`/en/`, `/de/`, etc.)
   - Track sessions, pageviews per locale

2. **Conversion Rates**
   - Contact form submissions by language
   - Quote requests by locale
   - Bounce rate per language

3. **Search Performance**
   - Search Console: Impressions/clicks per locale
   - Top queries by language
   - CTR comparison across locales

### Event Tracking
```typescript
// Track language switches
trackEvent('language_switch', {
  from: oldLocale,
  to: newLocale,
  page: currentPath
});
```

---

## 🌐 Optional: GeoIP Detection

### Setup (Optional Enhancement)
```bash
# Example with ipstack
GEOIP_API_KEY=your_api_key
GEOIP_PROVIDER=ipstack
```

### Middleware Integration
```typescript
export async function middleware(request: NextRequest) {
  const country = request.geo?.country || 'HU';

  const countryLocaleMap = {
    'HU': 'hu',
    'GB': 'en',
    'US': 'en',
    'DE': 'de',
    'AT': 'de',
    'SK': 'sk',
    'RO': 'ro',
  };

  const suggestedLocale = countryLocaleMap[country] || 'hu';

  // Show suggestion banner, don't force redirect
  const response = NextResponse.next();
  response.cookies.set('suggested_locale', suggestedLocale);

  return response;
}
```

**Privacy Consideration:**
- Add note in privacy policy about geo-detection
- Provide opt-out mechanism
- Don't force redirects based on geo only

---

## 📧 Contact Form Localization

### Service Options Translation
The contact form dropdown is translated in all locales:

**Hungarian:**
- Minden cégnek legyen informatikusa
- Rendszerüzemeltetés és IT karbantartás
- ...

**English:**
- Every Company Deserves an IT Department
- System Management & IT Maintenance
- ...

### Form Validation Messages
All error messages are localized:
```json
{
  "contact": {
    "form": {
      "success": "Message sent successfully! We'll contact you shortly.",
      "error": "An error occurred while sending your message"
    }
  }
}
```

---

## 📝 Blog Handling

### Hungarian Only Strategy
**Rationale:**
- Maintains content quality and authenticity
- Preserves SEO value of original content
- Resource-efficient (no translation overhead)
- Target audience primarily Hungarian

### User Experience
For non-Hungarian visitors viewing blog:
```tsx
<LanguageBanner
  message="📰 Blog articles are available in Hungarian only."
/>
```

### Optional: Machine Translation
If desired, add client-side translation button:
```tsx
<Button onClick={() => window.open(`https://translate.google.com/translate?sl=hu&tl=en&u=${url}`)}>
  🌐 Translate with Google (machine translation)
</Button>
```
**Important:** Add disclaimer that it's machine-generated.

---

## 🔧 Troubleshooting

### Issue: Locale not loading
**Solution:**
1. Check locale file exists in `/locales/`
2. Verify JSON syntax (use JSON validator)
3. Check middleware config includes locale
4. Clear Next.js cache: `rm -rf .next`

### Issue: Translations not updating
**Solution:**
1. Restart dev server
2. Clear browser cache
3. Check translation key matches exactly
4. Verify namespace in `useTranslations()`

### Issue: Language selector not working
**Solution:**
1. Check cookie permissions
2. Verify pathname replacement logic
3. Test in incognito mode (fresh cookies)
4. Check middleware matcher pattern

### Issue: SEO duplicates detected
**Solution:**
1. Verify canonical tags per locale
2. Check hreflang implementation
3. Ensure x-default points to correct locale
4. Use Google Search Console hreflang validator

---

## 🚀 Deployment

### Environment Variables
```bash
# .env.production
NEXT_PUBLIC_SITE_URL=https://sironic.hu
NEXT_PUBLIC_DEFAULT_LOCALE=hu
```

### Build Command
```bash
npm run build
```

### Vercel Deployment
1. Connect GitHub repository
2. Set environment variables
3. Deploy automatically on push
4. Check build logs for errors

### Post-Deployment Checklist
- [ ] All locale routes accessible
- [ ] Language selector functions
- [ ] Cookie persistence works
- [ ] SEO tags correct
- [ ] Sitemap accessible
- [ ] Analytics tracking
- [ ] Search Console verified

---

## 📈 Performance Optimization

### Locale File Loading
- JSON files are automatically code-split by Next.js
- Only active locale loaded per page
- ~35 KB per locale (uncompressed)
- ~8-10 KB gzipped per locale

### Caching Strategy
```typescript
// Cache locale files at CDN edge
export const revalidate = 3600; // 1 hour
```

### Bundle Optimization
- Tree-shaking removes unused translations
- Static generation for common pages
- ISR for dynamic content

---

## 🔄 Translation Updates Workflow

### Process
1. **Content Update Request**
   - Stakeholder identifies content needing update

2. **Update Hungarian Base**
   - Edit `/locales/hu.json`
   - Commit changes

3. **Translate to All Locales**
   - Update `en.json`, `de.json`, `sk.json`, `ro.json`
   - Maintain consistent key structure

4. **Quality Review**
   - Verify translations for accuracy
   - Check formality level appropriate
   - Test in browser

5. **Deploy**
   - Push to repository
   - Automatic deployment via CI/CD

### Recommended: Translation Management System
For larger projects, consider:
- [Phrase](https://phrase.com) - Professional TMS
- [Lokalise](https://lokalise.com) - Developer-friendly
- [Crowdin](https://crowdin.com) - Community translations

---

## 📖 Reference Documentation

### Key Files
- `/i18n.ts` - i18n configuration
- `/locales/*.json` - Translation files
- `/middleware.ts` - Language detection
- `MULTILINGUAL_IMPLEMENTATION_GUIDE.md` - Complete implementation guide
- `TRANSLATION_REPORT.md` - Translation quality report

### External Resources
- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Next.js Internationalization](https://nextjs.org/docs/advanced-features/i18n-routing)
- [Google hreflang Guide](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [ISO 639-1 Language Codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)

---

## 🎓 Training & Onboarding

### For Developers
1. Read this README
2. Review `MULTILINGUAL_IMPLEMENTATION_GUIDE.md`
3. Examine locale JSON structure
4. Test language switching locally
5. Practice adding new translations

### For Content Editors
1. Understand key naming convention
2. Learn to edit JSON files safely
3. Use JSON validator before committing
4. Follow translation workflow
5. Test changes in staging

### For SEO/Marketing
1. Review translated meta tags
2. Understand hreflang implementation
3. Monitor Search Console per locale
4. Track analytics by language
5. Optimize content per market

---

## 🛡️ Security Considerations

### XSS Prevention
- All user inputs sanitized
- Translations treated as static content
- No dynamic translation injection

### Cookie Security
```typescript
document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax; Secure`;
```

### Rate Limiting
Language switching not rate-limited (UX consideration).

---

## 📞 Support & Maintenance

### Reporting Issues
1. Check this README
2. Review troubleshooting section
3. Verify locale files syntax
4. Submit GitHub issue with:
   - Locale affected
   - Browser/device
   - Steps to reproduce

### Regular Maintenance
- **Monthly:** Review analytics per locale
- **Quarterly:** Update translations based on user feedback
- **Annually:** Full translation audit

---

## 🎯 Success Metrics

### Key Performance Indicators
1. **Traffic Growth**
   - Target: +30% international traffic in 6 months
   - Measure: GA sessions from EN, DE, SK, RO

2. **Engagement**
   - Target: <40% bounce rate per locale
   - Measure: Session duration, pages per session

3. **Conversion**
   - Target: 5% conversion rate (contact form)
   - Measure: Form submissions per locale

4. **SEO**
   - Target: Top 10 rankings for key terms per locale
   - Measure: Average position in Search Console

---

## 🔮 Future Enhancements

### Phase 2 (Optional)
1. **Dynamic Content Localization**
   - Blog article translations
   - Customer testimonials per market
   - Localized case studies

2. **Advanced Features**
   - Currency conversion for pricing
   - Region-specific promotions
   - Time zone adjustments

3. **Automation**
   - Translation memory integration
   - Automated QA for translations
   - Continuous localization pipeline

4. **Market Expansion**
   - Additional languages (CZ, HR, SI)
   - Market-specific landing pages
   - Localized paid campaigns

---

## 📄 License & Attribution

**Translation Work:** AI-generated C1-level translations
**Quality Level:** Professional business translations
**Review Status:** Recommended for native speaker review before production

**Attribution:**
- `next-intl` library by Jan Amann (MIT License)
- Translation structure based on SIRONIC requirements

---

## ✅ Pre-Launch Checklist

### Technical
- [ ] Middleware implemented and tested
- [ ] All locale routes functioning
- [ ] Language selector in header
- [ ] Cookie persistence working
- [ ] Build successful without errors

### SEO
- [ ] Hreflang tags on all pages
- [ ] Sitemap generated with locales
- [ ] Meta tags unique per locale
- [ ] Canonical URLs correct
- [ ] Search Console properties set up

### Content
- [ ] All 5 locales have complete translations
- [ ] Blog language banner implemented
- [ ] Contact form localized
- [ ] Footer information localized
- [ ] Legal pages addressed

### QA
- [ ] Tested in Chrome, Safari, Firefox, Edge
- [ ] Mobile responsive confirmed
- [ ] Accessibility audit passed
- [ ] No console errors
- [ ] Analytics tracking verified

---

**Document Version:** 1.0
**Last Updated:** 2025-11-09
**Status:** Ready for implementation
**Next Step:** Follow `MULTILINGUAL_IMPLEMENTATION_GUIDE.md` for complete setup

---

*For questions or support, refer to the implementation guide or contact the development team.*
