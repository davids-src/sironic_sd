# Multilingual URL Structure Audit Report
**Date**: 2025-12-09  
**Languages**: hu, en, de, sk, ro, hr, sl  
**Domain**: https://sironic.hu

---

## Executive Summary

This audit reveals the current state of the multilingual URL structure across all 7 supported languages and identifies inconsistencies that need correction for optimal SEO performance and AI search engine compatibility.

---

## Current URL Structure Analysis

### ✅ **Properly Localized Routes** (Complete Coverage)

#### IT Training
- 🇭🇺 `/hu/oktatas`
- 🇬🇧 `/en/it-training`
- 🇩🇪 `/de/it-schulung`
- 🇸🇰 `/sk/it-vzdelavanie`
- 🇷🇴 `/ro/training-it`
- 🇭🇷 `/hr/it-edukacija`
- 🇸🇮 `/sl/it-usposabljanje`

#### Custom Application Development
- 🇭🇺 `/hu/egyedi-alkalmazas-fejlesztes`
- 🇬🇧 `/en/custom-application-development`
- 🇩🇪 `/de/individuelle-anwendungsentwicklung`
- 🇸🇰 `/sk/vyvoj-vlastnych-aplikacii`
- 🇷🇴 `/ro/dezvoltare-aplicatii-personalizate`
- 🇭🇷 `/hr/razvoj-prilagodenih-aplikacija`
- 🇸🇮 `/sl/razvoj-spletnih-aplikacij`

#### Network Optimization
- 🇭🇺 `/hu/halozat-fejlesztes`
- 🇬🇧 `/en/network-optimization`
- 🇩🇪 `/de/netzwerk-optimierung`
- 🇸🇰 `/sk/optimalizacia-siete`
- 🇷🇴 `/ro/optimizare-retea`
- 🇭🇷 `/hr/optimizacija-mreze`
- 🇸🇮 `/sl/mrezna-infrastruktura`

#### On-site IT Presence
- 🇭🇺 `/hu/onsite-jelenlet`
- 🇬🇧 `/en/onsite-presence`
- 🇩🇪 `/de/onsite-prasenz`
- 🇸🇰 `/sk/onsite-pritomnost`
- 🇷🇴 `/ro/prezenta-onsite`
- 🇭🇷 `/hr/it-onsite-prisutnost`
- 🇸🇮 `/sl/onsite-it-tehnik`

#### Repair Service
- 🇭🇺 `/hu/szerviz-javitas`
- 🇬🇧 `/en/repair-service`
- 🇩🇪 `/de/reparatur-service`
- 🇸🇰 `/sk/servisne-sluzby`
- 🇷🇴 `/ro/servicii-reparatii`
- 🇭🇷 `/hr/servis-popravak`
- 🇸🇮 `/sl/servis-racunalnikov`

---

### ⚠️ **Partially Localized Routes** (Missing Some Languages)

#### "Every Company Needs IT" Campaign Page
- ✅ 🇭🇺 `/hu/minden-cegnek-legyen-informatikusa`
- ✅ 🇭🇷 `/hr/it-podrska-tvrtkama`
- ✅ 🇸🇮 `/sl/it-podpora-podjetjem`
- ❌ 🇬🇧 **MISSING** (should be `/en/every-company-needs-it` or similar)
- ❌ 🇩🇪 **MISSING**
- ❌ 🇸🇰 **MISSING**
- ❌ 🇷🇴 **MISSING**

#### Products Page
- ✅ 🇭🇺 `/hu/termekeink`
- ✅ 🇭🇷 `/hr/proizvodi`
- ✅ 🇸🇮 `/sl/produkti`
- ⚠️ Others: Use Hungarian path `/XX/termekeink` (not ideal SEO)

#### Pricing Page
- ✅ 🇭🇺 `/hu/arak`
- ✅ 🇭🇷 `/hr/cjenik`
- ✅ 🇸🇮 `/sl/cenik`
- ⚠️ Others: Use Hungarian path `/XX/arak`

#### About Page
- ✅ 🇭🇺 `/hu/rolunk`
- ✅ 🇭🇷 `/hr/o-nama`
- ✅ 🇸🇮 `/sl/o-nas`
- ⚠️ Others: Use Hungarian path `/XX/rolunk`

#### Services Page
- ✅ 🇭🇺 `/hu/szolgaltatasok`
- ✅ 🇭🇷 `/hr/usluge`
- ✅ 🇸🇮 `/sl/storitve`
- ⚠️ Others: Use Hungarian path `/XX/szolgaltatasok`

#### Contact Page
- ✅ 🇭🇺 `/hu/kapcsolat`
- ✅ 🇭🇷 `/hr/kontakt`
- ✅ 🇸🇮 `/sl/kontakt`
- ⚠️ Others: Use Hungarian path `/XX/kapcsolat`

---

## Issues Identified

### 🔴 **Critical Issues**

1. **Inconsistent Navigation Paths**: EN, DE, SK, RO languages use Hungarian path names for core navigation pages (About, Contact, Services, Pricing, Products). This harms SEO and user experience.

2. **Missing Campaign Page Translations**: The high-priority "minden-cegnek-legyen-informatikusa" page is only available in HU, HR, and SL. Other markets cannot access localized versions.

3. **Hreflang Mapping Incomplete**: Current `HreflangTags.tsx` doesn't include mappings for all shared pages that use different slugs per language.

### 🟡 **Medium Priority Issues**

4. **Sitemap Redundancy**: Shared pages are added separately in a loop, creating potential duplicates.

5. **No Language-Specific Sitemaps**: Currently, one monolithic sitemap. Best practice for large multilingual sites is to generate per-language sitemaps.

6. **Schema.org Missing Regional Info**: Service schemas don't include `areaServed` or regional pricing variations for AI search engines.

### 🟢 **Low Priority / Future Enhancements**

7. **Blog Localization**: Blog is currently only HU. Consider multilingual blog entries for better international reach.

8. **URL Slug Consistency**: Some URLs use hyphens inconsistently (e.g., `it-onsite-prisutnost` vs `onsite-it-tehnik`). Standardize to `service-category-locale-standard`.

---

## Recommended Actions

### Phase 1: Immediate Fixes (High Priority)
1. ✅ **Add missing route directories** for EN, DE, SK, RO:
   - Products: `products`, `produkte`, `produkty`, `produse`
   - Pricing: `pricing`, `preise`, `cennik`, `preturi`
   - About: `about-us`, `uber-uns`, `o-nas-sk`, `despre-noi`
   - Services: `services`, `dienstleistungen`, `sluzby`, `servicii`
   - Contact: `contact`, `kontakt-de`, `kontakt-sk`, `contact-ro`

2. ✅ **Update HreflangTags.tsx** to include all new mappings

3. ✅ **Rebuild sitemap.ts** with proper route segregation

### Phase 2: SEO Enhancement (Medium Priority)
4. ✅ Generate language-specific sitemap files
5. ✅ Add comprehensive Schema.org markup with regional data
6. ✅ Implement AI-friendly page descriptions

### Phase 3: Validation (Testing)
7. ✅ Verify all routes are accessible
8. ✅ Test hreflang tags with validator
9. ✅ Submit updated sitemaps to Google Search Console

---

## URL Best Practices Applied

### ✅ **Implemented**
- Clear language prefix: `/{lang}/`
- Descriptive, keyword-rich slugs
- Consistent hyphenation
- No mixed-language terms within a single slug

### 🔄 **To Implement**
- Complete coverage for all 7 languages on all pages
- Canonical tags pointing to primary market version
- Breadcrumb schema for all pages
- Regional structured data (address, currency, phone)

---

## AI Search Engine Optimization Plan

### For Google SGE (Search Generative Experience)
- ✅ Structured Q&A format in FAQ sections
- ✅ Clear service descriptions (1-2 sentences)
- 🔄 Add "People Also Ask" schema where relevant

### For Bing Chat / Copilot
- ✅ Concise meta descriptions (under 160 chars)
- ✅ Entity-based keywords (e.g., "IT support Székesfehérvár")
- 🔄 Image alt text optimization

### For Perplexity AI
- ✅ Citation-friendly content structure
- ✅ Clear headings hierarchy (H1 → H2 → H3)
- 🔄 Factual, numbered lists where appropriate

---

## Next Steps

1. **Create missing route directories** for EN, DE, SK, RO
2. **Update sitemap generation logic** to handle all routes properly
3. **Enhance Schema.org markup** across all pages
4. **Generate language-specific sitemaps**
5. **Update HreflangTags component** with complete mappings
6. **Test and validate** all changes

---

**Report Generated**: 2025-12-09 21:35 CET  
**Auditor**: Antigravity AI Assistant  
**Status**: Ready for implementation
