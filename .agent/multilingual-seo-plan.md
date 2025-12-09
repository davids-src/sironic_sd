# Multilingual SEO Overhaul - Implementation Plan

## Task Overview
Full SEO optimization and URL structure repair for 10 languages (hu, en, de, sk, ro, hr, sl, fr, it, es).

## Current State Analysis
✅ Translations complete for FR/IT/ES
✅ i18n.ts configured for all 10 languages
❌ URL slugs missing for FR/IT/ES
❌ Hreflang tags incomplete (missing FR/IT/ES)
❌ Sitemap missing FR/IT/ES
❌ Metadata incomplete for new languages

## URL Slug Mapping

### IT Training
- hu: oktatas
- en: it-training
- de: it-schulung
- sk: it-vzdelavanie
- ro: training-it
- hr: it-edukacija
- sl: it-usposabljanje
- **fr: formation-informatique** ✨ NEW
- **it: formazione-it** ✨ NEW
- **es: formacion-informatica** ✨ NEW

### Custom Development
- hu: egyedi-alkalmazas-fejlesztes
- en: custom-application-development
- de: individuelle-anwendungsentwicklung
- sk: vyvoj-vlastnych-aplikacii
- ro: dezvoltare-aplicatii-personalizate
- hr: razvoj-prilagodenih-aplikacija
- sl: razvoj-spletnih-aplikacij
- **fr: developpement-dapplications** ✨ NEW
- **it: sviluppo-applicazioni** ✨ NEW
- **es: desarrollo-de-aplicaciones** ✨ NEW

### Network Optimization
- hu: halozat-fejlesztes
- en: network-optimization
- de: netzwerk-optimierung
- sk: optimalizacia-siete
- ro: optimizare-retea
- hr: optimizacija-mreze
- sl: mrezna-infrastruktura
- **fr: optimisation-reseau** ✨ NEW
- **it: ottimizzazione-rete** ✨ NEW
- **es: optimizacion-de-red** ✨ NEW

### Repair Service
- hu: szerviz-javitas
- en: repair-service
- de: reparatur-service
- sk: servisne-sluzby
- ro: servicii-reparatii
- hr: servis-popravak
- sl: servis-racunalnikov
- **fr: reparation-et-maintenance** ✨ NEW
- **it: riparazione-e-assistenza** ✨ NEW
- **es: reparacion-y-servicio** ✨ NEW

### Onsite Presence
- hu: onsite-jelenlet
- en: onsite-presence
- de: onsite-prasenz
- sk: onsite-pritomnost
- ro: prezenta-onsite
- hr: it-onsite-prisutnost
- sl: onsite-it-tehnik
- **fr: presence-it-sur-site** ✨ NEW
- **it: presenza-it-onsite** ✨ NEW
- **es: presencia-it-onsite** ✨ NEW

### Products
- hu: termekeink
- en/de/sk/ro: termekeink (shared)
- hr: proizvodi
- sl: produkti
- **fr: produits** ✨ NEW
- **it: prodotti** ✨ NEW
- **es: productos** ✨ NEW

### Pricing
- hu: arak
- en/de/sk/ro: arak (shared)
- hr: cjenik
- sl: cenik
- **fr: tarifs** ✨ NEW
- **it: prezzi** ✨ NEW
- **es: precios** ✨ NEW

### About
- hu: rolunk
- en/de/sk/ro: rolunk (shared)
- hr: o-nama
- sl: o-nas
- **fr: a-propos** ✨ NEW
- **it: chi-siamo** ✨ NEW
- **es: sobre-nosotros** ✨ NEW

### Services
- hu: szolgaltatasok
- en/de/sk/ro: szolgaltatasok (shared)
- hr: usluge
- sl: storitve
- **fr: services** ✨ NEW
- **it: servizi** ✨ NEW
- **es: servicios** ✨ NEW

### Contact
- hu: kapcsolat
- en/de/sk/ro: kapcsolat (shared)
- hr/sl: kontakt
- **fr: contact** ✨ NEW
- **it: contatti** ✨ NEW
- **es: contacto** ✨ NEW

## Implementation Steps

### Phase 1: URL Structure ✅
1. Create new route folders for FR/IT/ES slugs
2. Add page.tsx files with proper imports
3. Test routing for all new URLs

### Phase 2: Sitemap ✅
1. Update sitemap.ts with all 10 languages
2. Add FR/IT/ES route definitions
3. Ensure proper priority and changeFreq
4. Test sitemap generation

### Phase 3: Hreflang & Canonical ✅
1. Update layout.tsx alternates for FR/IT/ES
2. Update HreflangTags component
3. Ensure reciprocal hreflang across all pages
4. Add canonical URLs per locale

### Phase 4: Metadata Enhancement ✅
1. Verify meta titles/descriptions for FR/IT/ES
2. Add OpenGraph tags
3. Add Twitter cards
4. Add LocalBusiness schema
5. Add Service schemas

### Phase 5: AI Search Optimization ✅
1. Add structured data for SGE/Bing AI
2. Optimize for entity-based search
3. Enhance semantic markup
4. Improve internal linking

### Phase 6: Testing & Validation ✅
1. Test all URLs (no 404s)
2. Validate hreflang pairs
3. Submit sitemap to GSC
4. Run Lighthouse audit
5. Check mobile SEO

## Success Criteria
✅ All 10 languages have localized URLs
✅ Complete sitemap with all routes
✅ Full hreflang implementation
✅ Rich metadata for AI search engines
✅ No broken links or missing pages
✅ 90+ Lighthouse SEO score
