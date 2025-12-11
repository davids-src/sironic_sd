# SIRONIC Rendszerház - IT Megoldások Weboldal

Teljes körű IT szolgáltató vállalkozás modern, responsive Next.js weboldala. Magyar nyelvű, SEO-optimalizált, hozzáférhető és gyors website komplett funkciókkal.

## 🚀 Jellemzők

- **Modern Tech Stack:** Next.js 14 + React + TypeScript + TailwindCSS
- **Teljes SEO:** Meta tags, Open Graph, Twitter Cards, JSON-LD structured data, sitemap.xml
- **Hozzáférhető:** WCAG kompatibilis, keyboard navigáció, ARIA labels, skip-to-content link
- **Responsive:** Mobile-first design, minden eszközön tökéletes megjelenés
- **Dark Mode:** Automatikus témaváltás localStorage perzisztenciával
- **Biztonsági fejlécek:** CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- **Contact Form:** Validált form API route-tal, rate limiting, honeypot védelem
- **Blog:** Dinamikus blog rendszer 3 placeholder cikkel
- **Teljesítmény:** Optimalizált bundle, lazy loading, static generation

## 📁 Projekt Struktúra

```
├── app/
│   ├── layout.tsx              # Fő layout (header, footer)
│   ├── page.tsx                # Főoldal
│   ├── sitemap.ts              # Dinamikus sitemap generálás
│   ├── globals.css             # Globális stílusok és CSS változók
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # Kapcsolat form API endpoint
│   ├── szolgaltatasok/
│   │   └── page.tsx            # Szolgáltatások oldal
│   ├── rolunk/
│   │   └── page.tsx            # Rólunk oldal
│   ├── blog/
│   │   ├── page.tsx            # Blog lista
│   │   └── [slug]/
│   │       └── page.tsx        # Dinamikus blog cikkek
│   └── kapcsolat/
│       └── page.tsx            # Kapcsolat oldal
├── components/
│   ├── Header.tsx              # Sticky navigáció logóval
│   ├── Footer.tsx              # Footer elérhetőségekkel
│   ├── Hero.tsx                # Hero szekció CTA gombokkal
│   ├── ServiceCard.tsx         # Újrahasználható szolgáltatás kártya
│   ├── Testimonial.tsx         # Ügyfél vélemény komponens
│   ├── ContactForm.tsx         # Validált kapcsolat form
│   ├── BlogCard.tsx            # Blog kártya komponens
│   ├── ThemeToggle.tsx         # Dark/Light mode váltó
│   ├── SkipToContent.tsx       # Accessibility skip link
│   └── ui/                     # shadcn/ui komponensek
├── utils/
│   ├── seo.ts                  # SEO utility és schema generálás
│   ├── contact.ts              # Form validálás és sanitizálás
│   └── rateLimit.ts            # In-memory rate limiter
├── public/
│   ├── robots.txt              # Robots fájl
│   └── images/
│       └── og/                 # OG image placeholder-ek
├── .env.example                # Környezeti változók sablon
├── next.config.js              # Next.js konfig security headers-szel
├── tailwind.config.ts          # Tailwind konfig brand színekkel
└── tsconfig.json               # TypeScript konfiguráció
```

## 🛠️ Telepítés és Futtatás

### 1. Projekt klónozása és függőségek telepítése

```bash
npm install
```

### 2. Környezeti változók beállítása

Másold le a `.env.example` fájlt `.env` néven:

```bash
cp .env.example .env
```

Szerkeszd meg a `.env` fájlt:

```env
# Discord webhook (opcionális, kapcsolati űrlap értesítésekhez)
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN

# Supabase (opcionális, jövőbeli funkciókhoz)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key

# SendGrid email integráció (opcionális)
SENDGRID_API_KEY=your_sendgrid_api_key
CONTACT_RECIPIENT_EMAIL=hello@sironic.hu

# Analytics (opcionális)
NEXT_PUBLIC_GA_ID=G-6R5N50C5R8
NEXT_PUBLIC_META_PIXEL_ID=your_pixel_id

# Éles domain
NEXT_PUBLIC_SITE_URL=https://sironic.eu
```

### 3. Fejlesztői szerver indítása

```bash
npm run dev
```

A weboldal elérhető: [http://localhost:3000](http://localhost:3000)

### 4. Build és production preview

```bash
npm run build
npm start
```

## 📦 Deployment (Vercel)

### Gyors Deploy

1. Push-old a kódot GitHub/GitLab/Bitbucket-re
2. Importáld Vercel-be: [vercel.com/new](https://vercel.com/new)
3. Állítsd be a környezeti változókat a Vercel dashboard-on
4. Deploy!

### Környezeti Változók Vercel-ben

A Vercel Project Settings > Environment Variables menüpontban add meg:

- `NEXT_PUBLIC_SITE_URL` - pl. `https://sironic.eu`
- `DISCORD_WEBHOOK_URL` - (opcionális, Discord értesítésekhez a kapcsolati űrlapról)
- `SENDGRID_API_KEY` - (opcionális, email küldéshez)
- `CONTACT_RECIPIENT_EMAIL` - pl. `hello@sironic.hu`
- `NEXT_PUBLIC_GA_ID` - (opcionális, Google Analytics)
- `NEXT_PUBLIC_META_PIXEL_ID` - (opcionális, Meta Pixel)

### Build parancsok

- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

## 🔒 Biztonság

### Implementált védelmek:

- **CSP (Content Security Policy):** Megakadályozza az XSS támadásokat
- **X-Frame-Options: DENY:** Clickjacking védelem
- **X-Content-Type-Options: nosniff:** MIME type sniffing védelem
- **Referrer-Policy:** Adatvédelem külső site-ok felé
- **Rate Limiting:** Contact form spam védelem (5 kérés/perc/IP)
- **Honeypot:** Bot védelem a contact form-on
- **Input Sanitization:** XSS védelem a form input-okon
- **HTTPS Only:** Éles környezetben kötelező

## 🎨 Brand Színek

A website a SIRONIC brand színeit használja:

- **Piros (Primary):** `#D32F2F`
- **Szürke (Secondary):** `#757575`

Tailwind osztályok: `bg-brand-red`, `text-brand-red`, `bg-brand-grey`, `text-brand-grey`

## 📊 SEO Checklist

- [x] Meta title és description minden oldalon
- [x] Open Graph tags (Facebook, LinkedIn)
- [x] Twitter Card meta tags
- [x] Canonical URL-ek
- [x] JSON-LD structured data (Organization, LocalBusiness)
- [x] Sitemap.xml (dinamikusan generált)
- [x] Robots.txt
- [x] Semantic HTML5 (header, main, footer, article, section)
- [x] Responsive meta viewport
- [x] Alt text képeken (amikor képek lesznek)
- [x] Heading hierarchia (h1 > h2 > h3)

## ♿ Hozzáférhetőség

- **Keyboard Navigation:** Minden interaktív elem elérhető billentyűzetről
- **Focus States:** Látható focus ring minden elemre
- **Skip to Content:** Gyors ugrás a fő tartalomhoz
- **ARIA Labels:** Screen reader támogatás
- **Színkontrasztok:** WCAG AA kompatibilis kontrasztok
- **Semantic HTML:** Helyes HTML struktúra
- **Form Validáció:** Érthető hibaüzenetek magyar nyelven

## 🧪 Tesztelés

### Típusellenőrzés

```bash
npm run typecheck
```

### Linting

```bash
npm run lint
```

## 📈 Analytics Beállítás

### Google Analytics (GA4)

A Google Analytics már integrálva van a projektbe és automatikusan követi:

- **Oldalnézetek**: Minden oldalváltás automatikusan követve
- **Kattintások**: Email, telefon, navigációs linkek, CTA gombok
- **Form beküldések**: Kapcsolati űrlap beküldések
- **GDPR-kompatibilis**: Consent Mode v2 használata cookie banner-rel

**Beállítás:**

1. Add hozzá a környezeti változót: `NEXT_PUBLIC_GA_ID=G-6R5N50C5R8`
2. Ha nincs beállítva, az alapértelmezett ID (`G-6R5N50C5R8`) lesz használva
3. A script automatikusan betöltődik minden oldalon

### Meta Pixel

1. Hozz létre Meta Pixel-t: [business.facebook.com](https://business.facebook.com)
2. Másold ki a Pixel ID-t
3. Add hozzá környezeti változóként: `NEXT_PUBLIC_META_PIXEL_ID=your_pixel_id`
4. A script automatikusan betöltődik (opcionális implementáció szükséges)

## 📧 Email Integráció (SendGrid)

A contact form jelenleg **Discord webhook**-on keresztül küldi az értesítéseket. Az üzenetek egy szép embed formátumban jelennek meg a Discord csatornában.

### Discord Webhook Beállítás
A webhook URL már be van állítva az `app/api/contact/route.ts` fájlban:
```typescript
const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1432008314912374836/...';
```

### SendGrid Integráció (Opcionális)
Ha email értesítéseket is szeretnél:

1. Regisztrálj a [SendGrid](https://sendgrid.com)-re
2. Hozz létre API Key-t
3. Állítsd be környezeti változóként: `SENDGRID_API_KEY=your_key`
4. Adj meg címzettet: `CONTACT_RECIPIENT_EMAIL=hello@sironic.hu`
5. Kommenteld ki a SendGrid kódot az `app/api/contact/route.ts`-ben

## 🎯 Funkciók

### Főoldal (/)
- Hero szekció CTA gombokkal
- 4 fő szolgáltatás kártya
- "Miért mi?" szekció
- Ügyfél vélemények
- Munkafolyamat bemutató
- CTA szekció

### Szolgáltatások (/szolgaltatasok)
- Részletes szolgáltatás leírások
- Feature listák
- CTA blokk

### Rólunk (/rolunk)
- Cég bemutató
- Statisztikák
- Értékek
- Munkafolyamat

### Blog (/blog, /blog/[slug])
- Blog lista 3 cikkel
- Dinamikus blog oldalak
- SEO optimalizált cikkek
- CTA blokkokkal

### Kapcsolat (/kapcsolat)
- Validált contact form
- Elérhetőségek
- Térkép (bővíthető)

## 🔧 Testreszabás

### Logo csere

Cseréld ki az SVG logo-t a `components/Header.tsx`-ben egy saját képre vagy SVG fájlra.

### Színek módosítása

1. `tailwind.config.ts` - brand színek
2. `app/globals.css` - CSS változók (dark mode)

### Tartalom frissítése

Minden látható szöveg a komponensekben és page fájlokban található. Egyszerűen szerkeszd a magyar szövegeket.

## 📝 Licensz

Ez a projekt a SIRONIC Rendszerház tulajdona. Minden jog fenntartva.

## 🤝 Támogatás

Kérdések vagy problémák esetén:
- Email: hello@sironic.hu
- Telefon: +36 70 273 5532

---

**Készítve Next.js 14, React, TailwindCSS és ❤️ felhasználásával**
