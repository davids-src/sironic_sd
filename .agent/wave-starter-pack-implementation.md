# Wave Starter Pack: EU-Grade Lead Generation Upgrade
## Implementation Plan

**Status**: Ready for Implementation  
**Created**: 2025-12-15  
**Target**: Increase qualified inbound leads (EU + HU) without restructuring site

---

## 📋 Executive Summary

This upgrade adds **conversion-focused sections and pages** to sironic.eu while preserving the existing site structure and navigation. The project targets two distinct markets:

- **EU Remote**: Custom software/web app development (remote-first)
- **HU On-site**: IT operations, network, and services requiring physical presence

**Scope**: 16 languages | SEO-optimized | GDPR-compliant | Analytics-ready

---

## 🎯 Key Deliverables

### Phase 1: Homepage Enhancements (Non-breaking additions)
- [ ] Portfolio Preview Section (3-6 cards)
- [ ] Case Studies Preview (3 items: 1 HU on-site, 2 remote dev)
- [ ] Process & SLA Section (4-step process + SLA highlights)
- [ ] Lead Magnet (EU SMB IT Security Checklist - gated)
- [ ] Booking Module (15-min call booking form)
- [ ] EU Presence Visual (SVG/Canvas component)
- [ ] Quick Quote Calculator (3-step mini calculator)

### Phase 2: New EU Landing Page
- [ ] Route: `/[locale]/eu-web-app-development` (+ localized slugs)
- [ ] Sections: Hero, Services, Tech Stack, Engagement Models, Timeline, Portfolio, FAQ, CTA
- [ ] SEO: EU-wide keywords, remote-first, GDPR-ready
- [ ] Structured data: Service, FAQPage, BreadcrumbList

### Phase 3: HU Local Strengthening
- [ ] Service Area Module for on-site pages
- [ ] HU geo-specific structured data (LocalBusiness)
- [ ] Response time expectations for HU market

### Phase 4: Programmatic SEO Templates
- [ ] Template: `/[locale]/solutions/[topic-slug]`
- [ ] 10 initial topics (5 EU dev, 5 HU on-site)
- [ ] Sections: Summary, Problem, Solution, Checklist, FAQ, CTA
- [ ] Internal linking strategy

### Phase 5: Global SEO & Structured Data
- [ ] Metadata generation (all pages, 16 languages)
- [ ] Hreflang matrix + Canonical tags
- [ ] JSON-LD: Organization, WebSite, Service, FAQPage
- [ ] Sitemap regeneration
- [ ] AI-search ready summaries

### Phase 6: Analytics & GDPR
- [ ] GA4 conversion events
- [ ] Cookie consent (16 languages)
- [ ] Script gating until consent

---

## 🏗️ Phase 1: Homepage Enhancements

### 1.1 Portfolio Preview Section

**Component**: `components/PortfolioPreview.tsx`

**Content Structure**:
- 3-6 portfolio cards (use-case style, not client-confidential)
- Each card: Industry, Problem, Solution, Tech Stack, Outcome

**i18n keys required**:
```
portfolio.title
portfolio.subtitle
portfolio.cards[0-5].industry
portfolio.cards[0-5].problem
portfolio.cards[0-5].solution
portfolio.cards[0-5].stack
portfolio.cards[0-5].outcome
portfolio.ctaPrimary
portfolio.ctaSecondary
```

**Placement**: After `EuGlobalPresenceSection`, before services section

---

### 1.2 Case Studies Preview

**Component**: `components/CaseStudiesPreview.tsx`

**Content**:
- 3 short case studies (1 paragraph + 3 bullets each)
- Mix: 1 HU on-site + 2 remote development

**i18n keys required**:
```
caseStudies.title
caseStudies.subtitle
caseStudies.items[0-2].title
caseStudies.items[0-2].summary
caseStudies.items[0-2].bullets[0-2]
caseStudies.cta
```

**Placement**: After Portfolio Preview

---

### 1.3 Process & SLA Section

**Component**: `components/ProcessAndSLA.tsx`

**Content**:
- 4-step process: Discovery → Proposal → Delivery → Support
- SLA highlights: response time, monitoring, proactive maintenance

**i18n keys required**:
```
process.title
process.steps[0-3].title
process.steps[0-3].description
sla.title
sla.highlights[0-5]
```

**Placement**: Replace or enhance existing "How We Work" section

---

### 1.4 Lead Magnet

**Component**: `components/LeadMagnet.tsx`  
**Page**: `app/[locale]/checklist/eu-smb-it-security/page.tsx`

**Type**: Gated checklist (email capture)

**Content**: EU SMB IT Security Checklist

**i18n keys required**:
```
leadMagnet.title
leadMagnet.subtitle
leadMagnet.form.email
leadMagnet.form.company
leadMagnet.form.submit
leadMagnet.successMessage
```

**API**: `/api/lead-magnet` (email collection endpoint)

**Placement**: Before final CTA section

---

### 1.5 Booking Module

**Component**: `components/BookingForm.tsx`

**Type**: Simple booking request form (GDPR-friendly, no Calendly)

**Fields**:
- Name, Email, Company
- Preferred date range + timezone
- Topic/Service interest

**i18n keys required**:
```
booking.title
booking.subtitle
booking.form.name
booking.form.email
booking.form.company
booking.form.dateRange
booking.form.timezone
booking.form.topic
booking.form.submit
booking.successMessage
```

**API**: `/api/booking` (POST endpoint)

**Placement**: Homepage sidebar or dedicated section

---

### 1.6 EU Presence Visual

**Component**: `components/EUPresenceVisual.tsx`

**Type**: SVG/Canvas visualization (code-generated, no external images)

**Content**: EU map with highlighted countries, animation on hover

**i18n keys required**:
```
euPresence.title
euPresence.subtitle
euPresence.points[0-2]
euPresence.cta
euPresence.alt
```

**Tech**: React + inline SVG + optional Framer Motion

**Placement**: Replace or enhance `EuGlobalPresenceSection`

---

### 1.7 Quick Quote Calculator

**Component**: `components/QuickQuoteCalculator.tsx`

**Type**: 3-step mini calculator

**Steps**:
1. Company size (1-10, 10-50, 50+)
2. Service type (Dev, IT Ops, Network, Mixed)
3. Urgency (Standard, Priority, Emergency)

**Output**: Guidance text + CTA to request quote

**i18n keys required**:
```
calculator.title
calculator.step1.title
calculator.step1.options[0-2]
calculator.step2.title
calculator.step2.options[0-3]
calculator.step3.title
calculator.step3.options[0-2]
calculator.result.title
calculator.result.cta
```

**Analytics**: Track `calculator_step`, `calculator_submit`, `cta_click`

**Placement**: Homepage (near contact/CTA) + EU dev landing

---

## 🏗️ Phase 2: New EU Landing Page

### Route Structure

**Primary**: `/en/eu-web-app-development`

**Localized slugs** (examples):
- `/de/eu-webanwendung-entwicklung`
- `/fr/developpement-web-app-europe`
- `/it/sviluppo-web-app-europa`
- `/es/desarrollo-aplicaciones-web-europa`
- (etc. for all 16 languages)

**File**: `app/[locale]/eu-web-app-development/page.tsx`

### Page Sections

1. **Hero**: Clear promise + CTA
2. **Services**: Discovery, UX, Frontend, Backend, Integrations, Maintenance
3. **Tech Stack**: Next.js, TypeScript, React, APIs, CI/CD
4. **Engagement Models**: MVP / Growth / Enterprise (ranges)
5. **Timeline Expectations**: Project size ranges
6. **Portfolio**: Embed PortfolioPreview
7. **Case Studies**: Embed CaseStudiesPreview
8. **FAQ**: 6-10 EU-specific questions
9. **Strong CTA**: Scope call + contact

### SEO Focus

**Keywords**:
- EU-wide custom web app development
- Remote-first delivery
- GDPR-compliant software
- Next.js/TypeScript development EU

**Structured Data**:
- Service schema
- FAQPage schema
- BreadcrumbList schema

### i18n Keys Required

```
euDev.meta.title
euDev.meta.description
euDev.hero.title
euDev.hero.subtitle
euDev.hero.cta
euDev.services.title
euDev.services.items[0-5]
euDev.techStack.title
euDev.techStack.items[0-6]
euDev.engagementModels.title
euDev.engagementModels.mvp.*
euDev.engagementModels.growth.*
euDev.engagementModels.enterprise.*
euDev.timeline.title
euDev.timeline.ranges[0-3]
euDev.faq.items[0-9].question
euDev.faq.items[0-9].answer
euDev.cta.title
euDev.cta.button
```

---

## 🏗️ Phase 3: HU Local Strengthening

### Service Area Module

**Component**: `components/HUServiceAreaModule.tsx`

**Target Pages**:
- On-site IT operations
- Network/IT service pages
- Repair service pages

**Content**:
- Service area: Hungary (Budapest + regions)
- Response time expectations (HU-specific)
- On-site + remote combination

**Structured Data**:
- LocalBusiness (HU-specific)
- Service with `areaServed: "HU"`

**i18n keys required**:
```
huService.title
huService.serviceArea
huService.responseTime
huService.coverage
```

**SEO Note**: HU geo-keywords only on HU pages; keep EU pages geo-neutral

---

## 🏗️ Phase 4: Programmatic SEO Templates

### Template Structure

**Route**: `/[locale]/solutions/[topic-slug]`

**File**: `app/[locale]/solutions/[topic-slug]/page.tsx`

### Initial Topics (10)

**EU Dev Topics**:
1. `nextjs-performance-optimization`
2. `typescript-migration`
3. `web-app-security-gdpr`
4. `api-integration-strategy`
5. `saas-mvp-build`

**HU On-site Topics**:
1. `office-network-wifi-stability`
2. `nas-backup-strategy`
3. `mikrotik-firewall-basics`
4. `it-maintenance-contract`
5. `ransomware-prevention-smb`

### Page Sections

1. **Executive Summary** (2 sentences, AI-search optimized)
2. **Problem Explanation**
3. **How We Solve It**
4. **Checklist** (actionable steps)
5. **FAQ** (4-6 questions)
6. **CTA**

### Structured Data

- FAQPage
- Service (if relevant)

### Internal Linking

- Link from service pages to solution pages
- Link from solution pages back to service pages

### i18n Structure

**Dynamic content** (topic-specific):
```
solutions.[topicSlug].meta.title
solutions.[topicSlug].meta.description
solutions.[topicSlug].summary
solutions.[topicSlug].problem.title
solutions.[topicSlug].problem.content
solutions.[topicSlug].solution.title
solutions.[topicSlug].solution.content
solutions.[topicSlug].checklist.items[0-9]
solutions.[topicSlug].faq.items[0-5]
```

---

## 🏗️ Phase 5: Global SEO & Structured Data

### 5.1 Metadata Generation

**Requirement**: Localized title/description for every page × 16 languages

**Files to update**:
- `app/[locale]/layout.tsx`
- All page-level `generateMetadata()` functions

**Rules**:
- H1 length >= 20 chars
- OpenGraph/Twitter cards for key pages
- Self-referencing canonical per language

### 5.2 Hreflang & Canonical

**Component**: `components/HreflangTags.tsx` (already exists, verify completeness)

**Requirement**: Full reciprocal hreflang matrix

**Example**:
```html
<link rel="alternate" hreflang="en" href="https://sironic.eu/en/eu-web-app-development" />
<link rel="alternate" hreflang="de" href="https://sironic.eu/de/eu-webanwendung-entwicklung" />
<!-- etc. for all 16 languages -->
<link rel="canonical" href="https://sironic.eu/en/eu-web-app-development" />
```

### 5.3 Sitemap

**File**: `app/sitemap.ts` (already exists, needs extension)

**Requirement**:
- Sitemap index + per-language sitemaps
- Include all new pages (EU landing, solutions, etc.)
- Exclude blog posts if needed; include blog index

### 5.4 Structured Data (JSON-LD)

**Global**:
- Organization (homepage)
- WebSite + SearchAction (homepage)

**Page-specific**:
- Service (service pages, EU landing)
- FAQPage (FAQ sections everywhere)
- LocalBusiness (HU on-site pages)
- BreadcrumbList (all deep pages)

**Components** (create/extend):
- `components/structured-data/ServiceSchema.tsx`
- `components/structured-data/FAQPageSchema.tsx`
- `components/structured-data/BreadcrumbSchema.tsx`

### 5.5 AI-Search Readiness

**Requirement**: Short semantic summaries per page

**Implementation**:
- Add hidden `<meta name="description-summary" ...>` or structured data
- Clean headings, bullet lists, entity clarity
- Executive summaries in solution pages

### 5.6 Robots & NoIndex Check

**File**: `app/robots.ts` (already exists, verify)

**Requirement**:
- No accidental noindex
- Allow all crawlers
- Sitemap reference

---

## 🏗️ Phase 6: Analytics & GDPR

### 6.1 Analytics Events

**Component**: `components/GoogleAnalytics.tsx` (already exists)

**New Conversion Events**:
```javascript
// Contact form
gtag('event', 'contact_submit', {
  service_type: 'EU Dev',
  country: 'DE'
});

// Booking
gtag('event', 'booking_submit', {
  date_range: '2025-01-15 to 2025-01-20'
});

// Scope call click
gtag('event', 'scope_call_click', {
  page: '/eu-web-app-development'
});

// Lead magnet
gtag('event', 'lead_magnet_submit', {
  checklist: 'EU SMB IT Security'
});

// Calculator
gtag('event', 'calculator_submit', {
  company_size: '10-50',
  service: 'Dev',
  urgency: 'Standard'
});
```

### 6.2 Cookie Consent

**Component**: `components/CookieBanner.tsx` (already exists, verify i18n)

**Requirement**:
- Support all 16 languages
- Block non-essential scripts until consent
- GDPR-compliant (consent before tracking)

**i18n keys to verify**:
```
cookie.title
cookie.description
cookie.accept
cookie.reject
cookie.settings
```

### 6.3 Consent Gating

**Pattern**:
```typescript
// Only fire GA4 after consent
if (cookieConsent === 'accepted') {
  // Initialize GA4
  gtag('config', GA_MEASUREMENT_ID);
}
```

---

## 📦 Component Architecture

### New Components to Create

```
components/
├── PortfolioPreview.tsx          # Homepage portfolio cards
├── CaseStudiesPreview.tsx        # Homepage case studies
├── ProcessAndSLA.tsx             # Process + SLA section
├── LeadMagnet.tsx                # Lead magnet CTA
├── BookingForm.tsx               # Booking form
├── EUPresenceVisual.tsx          # EU map visual (SVG/Canvas)
├── QuickQuoteCalculator.tsx      # 3-step calculator
├── HUServiceAreaModule.tsx       # HU service area info
└── structured-data/
    ├── ServiceSchema.tsx         # Service structured data
    ├── FAQPageSchema.tsx         # FAQ structured data
    └── BreadcrumbSchema.tsx      # Breadcrumb structured data
```

### New Pages to Create

```
app/[locale]/
├── eu-web-app-development/
│   └── page.tsx                  # EU landing page
├── solutions/
│   └── [topic-slug]/
│       └── page.tsx              # Programmatic SEO template
└── checklist/
    └── eu-smb-it-security/
        └── page.tsx              # Lead magnet page
```

### New API Routes to Create

```
app/api/
├── booking/
│   └── route.ts                  # Booking submission
└── lead-magnet/
    └── route.ts                  # Lead magnet email capture
```

---

## 🗂️ i18n Key Structure

### New i18n Keys to Add (all 16 languages)

**Estimated keys**: ~300-500 new keys

**Structure**:
```json
{
  "portfolio": { ... },
  "caseStudies": { ... },
  "process": { ... },
  "sla": { ... },
  "leadMagnet": { ... },
  "booking": { ... },
  "calculator": { ... },
  "euDev": { ... },
  "huService": { ... },
  "solutions": {
    "nextjs-performance-optimization": { ... },
    "typescript-migration": { ... },
    // etc.
  }
}
```

---

## 📊 Acceptance Criteria

### Functional

- [ ] All new sections render on homepage without breaking layout
- [ ] EU landing page loads in all 16 languages
- [ ] Programmatic SEO template generates 10+ pages
- [ ] Booking form submits successfully
- [ ] Lead magnet captures emails
- [ ] Calculator tracks analytics events

### SEO

- [ ] All pages have correct hreflang/canonical
- [ ] All pages appear in sitemap
- [ ] Structured data validates (Google Rich Results Test)
- [ ] Lighthouse SEO >= 95

### Performance

- [ ] Lighthouse Performance >= 90 (where realistic)
- [ ] Best Practices >= 90
- [ ] Accessibility >= 90

### i18n

- [ ] No untranslated strings
- [ ] No missing i18n keys
- [ ] All 16 languages display correctly

### GDPR

- [ ] Cookie consent works in all languages
- [ ] Analytics blocked until consent
- [ ] No third-party tracking before consent

### Blog

- [ ] Blog posts remain untouched
- [ ] Blog index still works

---

## 🚀 Implementation Order

### Week 1: Homepage Components
1. PortfolioPreview
2. CaseStudiesPreview
3. ProcessAndSLA
4. QuickQuoteCalculator

### Week 2: Conversion Tools
1. LeadMagnet (component + page)
2. BookingForm (component + API)
3. EUPresenceVisual (SVG component)

### Week 3: EU Landing Page
1. Create page structure
2. Add all sections
3. Implement structured data
4. Add localized slugs for all languages

### Week 4: Programmatic SEO
1. Create solution page template
2. Generate 10 initial topics
3. Add internal linking
4. Implement structured data

### Week 5: SEO & Structured Data
1. Update metadata generation
2. Verify hreflang/canonical
3. Regenerate sitemap
4. Add JSON-LD schemas

### Week 6: HU Strengthening + Analytics
1. HUServiceAreaModule
2. Analytics event implementation
3. Cookie consent verification
4. Final testing

---

## 📝 Testing Checklist

### Manual Testing

- [ ] Test all forms (contact, booking, lead magnet)
- [ ] Test calculator flow
- [ ] Verify all CTAs work
- [ ] Test language switching on new pages
- [ ] Verify mobile responsiveness
- [ ] Test dark mode

### SEO Testing

- [ ] Google Rich Results Test (all structured data)
- [ ] Hreflang validator
- [ ] Sitemap validation
- [ ] Canonical tag verification
- [ ] Meta tag completeness

### Analytics Testing

- [ ] GA4 events firing
- [ ] Cookie consent blocking/unblocking
- [ ] Conversion tracking

### Performance Testing

- [ ] Lighthouse audits (Desktop + Mobile)
- [ ] WebPageTest
- [ ] Core Web Vitals

---

## 🎨 Design Notes

**Existing Design System**: Light homepage style, Tailwind-based

**New Components Should**:
- Match existing color scheme
- Use existing typography
- Follow existing spacing patterns
- Use existing button styles
- Maintain accessibility standards

**Inspiration**: Modern B2B SaaS landing pages

---

## 🔗 Internal Linking Strategy

### Homepage Links To:
- EU landing page
- Solution pages (via "Related Resources")
- Service pages (existing)

### EU Landing Links To:
- Portfolio examples
- Case studies
- Solution pages (relevant)
- Booking form

### Solution Pages Link To:
- Related service pages
- EU landing page
- Other solution pages (related topics)
- Booking form

---

## 📈 Success Metrics (Post-Launch)

### Lead Quality
- Contact form submissions (segmented by service type)
- Booking requests
- Lead magnet downloads

### Engagement
- Time on EU landing page
- Calculator completion rate
- Scroll depth on new sections

### SEO
- Organic traffic to EU landing
- Rankings for EU dev keywords
- Solution page impressions/clicks

---

## ⚠️ Constraints & Reminders

✅ **DO**:
- Keep existing site structure intact
- Match existing design system
- Add sections, don't remove
- Localize all content (16 languages)
- Implement GDPR-compliant tracking

❌ **DON'T**:
- Restructure navigation or IA
- Change existing pages unnecessarily
- Touch blog posts
- Add third-party tracking before consent
- Remove existing sections

---

## 🛠️ Tech Stack Reference

- **Framework**: Next.js 13.5 (App Router)
- **React**: 18.2
- **TypeScript**: 5.2
- **Styling**: Tailwind CSS 3.3
- **i18n**: next-intl 4.5
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Analytics**: GA4
- **Forms**: react-hook-form + zod

---

## 📚 Resources

- **Current i18n**: `/locales/en.json` (reference)
- **Route config**: `lib/routes.ts` (likely)
- **Middleware**: `middleware.ts` (locale handling)
- **Sitemap**: `app/sitemap.ts`
- **Structured Data**: `components/structured-data/`

---

**End of Implementation Plan**

Ready to begin implementation? Let's start with Phase 1: Homepage Components.
