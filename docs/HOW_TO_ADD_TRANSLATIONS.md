# Hogyan Adj Hozzá Új Fordításokat - Egyszerű Útmutató

## 🎯 Alapok

A SIRONIC oldal most már **5 nyelven működik**:
- 🇭🇺 Magyar (hu) - Alapértelmezett
- 🇬🇧 Angol (en)
- 🇩🇪 Német (de)
- 🇸🇰 Szlovák (sk)
- 🇷🇴 Román (ro)

## 📝 Új Szöveg Hozzáadása - 3 Egyszerű Lépés

### 1. Lépés: Hozzáadás a Magyar Fordításhoz

Nyisd meg: `/locales/hu.json`

```json
{
  "myNewSection": {
    "title": "Az új címem",
    "description": "Az új leírásom",
    "button": "Kattints ide"
  }
}
```

### 2. Lépés: Fordítsd Le az Összes Nyelvre

Ugyanazt a struktúrát add hozzá minden nyelvi fájlhoz:

**`/locales/en.json`** (Angol):
```json
{
  "myNewSection": {
    "title": "My New Title",
    "description": "My new description",
    "button": "Click here"
  }
}
```

**`/locales/de.json`** (Német):
```json
{
  "myNewSection": {
    "title": "Mein neuer Titel",
    "description": "Meine neue Beschreibung",
    "button": "Hier klicken"
  }
}
```

**`/locales/sk.json`** (Szlovák):
```json
{
  "myNewSection": {
    "title": "Môj nový názov",
    "description": "Môj nový popis",
    "button": "Kliknite sem"
  }
}
```

**`/locales/ro.json`** (Román):
```json
{
  "myNewSection": {
    "title": "Titlul meu nou",
    "description": "Descrierea mea nouă",
    "button": "Faceți clic aici"
  }
}
```

### 3. Lépés: Használd a Kódban

A komponensedben:

```typescript
'use client';

import { useTranslation } from '@/hooks/useTranslation';

export function MyComponent() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('myNewSection.title')}</h2>
      <p>{t('myNewSection.description')}</p>
      <button>{t('myNewSection.button')}</button>
    </div>
  );
}
```

**Ennyi!** A komponens automatikusan mutatja a megfelelő nyelvi szöveget a látogató nyelvének megfelelően.

---

## 🔗 Link-ek Nyelvesítése

### Belső linkek (az oldalon belül):

```typescript
import { usePathname } from 'next/navigation';
import { getLocaleFromPathname } from '@/lib/i18n';
import Link from 'next/link';

function MyComponent() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);

  return (
    <Link href={`/${locale}/rolunk`}>
      Rólunk oldal
    </Link>
  );
}
```

### Blog linkek (mindig magyar):

```typescript
<Link href="/blog">Blog</Link>
```

A blog oldal **NEM** nyelvesített, mindig magyarul jelenik meg.

---

## 📂 Fájlstruktúra

```
project/
├── locales/          # Fordítási fájlok
│   ├── hu.json      # Magyar (MINDIG EZT SZERKESZD ELŐSZÖR)
│   ├── en.json      # Angol
│   ├── de.json      # Német
│   ├── sk.json      # Szlovák
│   └── ro.json      # Román
├── lib/
│   └── i18n.ts      # Segédfüggvények
├── hooks/
│   └── useTranslation.ts  # Hook a fordításokhoz
└── middleware.ts    # Nyelvdetektálás (NE MÓDOSÍTSD)
```

---

## 🎨 Gyakori Használati Esetek

### 1. Egyszerű Szöveg
```typescript
const { t } = useTranslation();
<h1>{t('hero.title')}</h1>
```

### 2. Szöveg Alternatív Értékkel
```typescript
<p>{t('section.missing', 'Ez jelenik meg, ha nincs fordítás')}</p>
```

### 3. Gomb Szöveg
```typescript
<button>{t('common.submit')}</button>
```

### 4. Űrlap Címkék
```typescript
<label>{t('contact.form.name')}</label>
<input type="text" placeholder={t('contact.form.namePlaceholder')} />
```

---

## ✅ Checklist Új Tartalom Hozzáadásakor

- [ ] 1. Írj magyar szöveget `hu.json`-ba
- [ ] 2. Fordítsd le angolra `en.json`-ba
- [ ] 3. Fordítsd le németr `de.json`-ba
- [ ] 4. Fordítsd le szlovákra `sk.json`-ba
- [ ] 5. Fordítsd le románra `ro.json`-ba
- [ ] 6. Használd a komponensben: `t('key')`
- [ ] 7. Teszteld minden nyelven (kattints a zászlókra)
- [ ] 8. Build: `npm run build`

---

## 🐛 Hibaelhárítás

### "A szöveg nem változik nyelvet váltáskor"

**Okok:**
1. Nem adtad hozzá az összes nyelvi fájlhoz
2. Elírtad a kulcs nevét
3. A komponens nem használja a `useTranslation` hook-ot

**Megoldás:**
- Ellenőrizd, hogy minden `locales/*.json` fájlban benne van-e
- Nézd meg a kulcs nevét: `"hero.title"` != `"hero.Title"`
- Add hozzá: `const { t } = useTranslation();`

### "Missing translation" üzenet

Ez azt jelenti, hogy a kulcs hiányzik valamelyik nyelvi fájlból.

**Megoldás:**
1. Nyisd meg a hiányzó nyelv JSON fájlját
2. Add hozzá a kulcsot és a fordítást
3. Mentsd el

### "JSON Syntax Error"

**Okok:**
- Hiányzik egy vessző (,)
- Hiányzik egy idézőjel (")
- Hiányzik egy kapcsos zárójel (})

**Megoldás:**
- Használj JSON validátort: https://jsonlint.com/
- Vagy VSCode-ban: nézd meg a piros aláhúzásokat

---

## 💡 Pro Tippek

### 1. Konzisztens Névadás

Használj egyértelmű, hierarchikus neveket:

```json
{
  "contact": {
    "form": {
      "title": "Kapcsolat",
      "name": "Név",
      "email": "E-mail"
    },
    "info": {
      "title": "Elérhetőségeink"
    }
  }
}
```

### 2. Csoportosítás

Csoportosítsd a kapcsolódó szövegeket:

```json
{
  "buttons": {
    "submit": "Küldés",
    "cancel": "Mégse",
    "save": "Mentés"
  }
}
```

### 3. Újrafelhasználható Szövegek

A gyakran használt szövegeket tedd a `common` részbe:

```json
{
  "common": {
    "loading": "Betöltés...",
    "error": "Hiba történt",
    "success": "Sikeres művelet"
  }
}
```

### 4. Formális vs. Informális Hangnem

- **Magyar**: Informális (Te/Téged)
- **Angol**: Semleges
- **Német**: Formális (Sie)
- **Szlovák**: Formális (Vy)
- **Román**: Formális (Dumneavoastră)

---

## 📖 Példa: Új Szolgáltatás Oldal

### 1. Hozzáadás `hu.json`-hoz:

```json
{
  "newService": {
    "meta": {
      "title": "Új Szolgáltatásunk | SIRONIC",
      "description": "Új IT szolgáltatásunk leírása"
    },
    "hero": {
      "title": "Új Szolgáltatásunk",
      "subtitle": "A legjobb megoldás vállalkozásod számára"
    },
    "features": {
      "title": "Jellemzők",
      "feature1": "Első jellemző",
      "feature2": "Második jellemző"
    },
    "cta": {
      "button": "Kérj ajánlatot",
      "description": "Lépj kapcsolatba velünk még ma!"
    }
  }
}
```

### 2. Angol fordítás `en.json`:

```json
{
  "newService": {
    "meta": {
      "title": "Our New Service | SIRONIC",
      "description": "Description of our new IT service"
    },
    "hero": {
      "title": "Our New Service",
      "subtitle": "The best solution for your business"
    },
    "features": {
      "title": "Features",
      "feature1": "First feature",
      "feature2": "Second feature"
    },
    "cta": {
      "button": "Request a Quote",
      "description": "Contact us today!"
    }
  }
}
```

### 3. Használat a komponensben:

```typescript
'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';

export default function NewServicePage() {
  const { t } = useTranslation();

  return (
    <div>
      <section>
        <h1>{t('newService.hero.title')}</h1>
        <p>{t('newService.hero.subtitle')}</p>
      </section>

      <section>
        <h2>{t('newService.features.title')}</h2>
        <ul>
          <li>{t('newService.features.feature1')}</li>
          <li>{t('newService.features.feature2')}</li>
        </ul>
      </section>

      <section>
        <p>{t('newService.cta.description')}</p>
        <Button>{t('newService.cta.button')}</Button>
      </section>
    </div>
  );
}
```

---

## 🚀 Gyors Referencia

| Mit akarsz csinálni? | Kód |
|---------------------|-----|
| Szöveg megjelenítése | `{t('key')}` |
| Gomb szöveg | `<Button>{t('button.text')}</Button>` |
| Link szöveg | `<Link>{t('link.text')}</Link>` |
| Input placeholder | `placeholder={t('input.placeholder')}` |
| Alternatív szöveg | `{t('key', 'Alapértelmezett')}` |
| Aktuális nyelv | `const { locale } = useTranslation()` |

---

## 📞 Segítség Kellene?

Ha elakadsz:
1. Nézd meg a meglévő példákat `locales/hu.json`-ban
2. Ellenőrizd a JSON szintaxist
3. Build-eld újra: `npm run build`
4. Nézd meg a konzolt a böngészőben (F12)

---

**Utolsó frissítés:** 2025-11-09
**Verzió:** 1.0

*Ez az útmutató egyszerű, kezdő-barát nyelvezetet használ. Bármilyen kérdés esetén írj nekem!*
