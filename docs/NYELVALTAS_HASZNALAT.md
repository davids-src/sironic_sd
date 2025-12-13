# ✅ Nyelvváltás Használata - SIRONIC Website

## 🎉 Mi Működik Most

### Zászlók a Headerben
A jobb felső sarokban (a "Kérj ajánlatot" gomb előtt) látható:
- 🇭🇺 Magyar (alapértelmezett)
- Kattints rá → dropdown menü jelenik meg
- Válassz nyelvet → az oldal azonnal átváll!

### Támogatott Nyelvek
- 🇭🇺 Magyar (hu)
- 🇬🇧 English (en)
- 🇩🇪 Deutsch (de)
- 🇸🇰 Slovenčina (sk)
- 🇷🇴 Română (ro)

---

## 🔧 Hogyan Működik

### 1. Nyelválasztás
1. Kattints a zászlóra a headerben
2. Válassz nyelvet a legördülő menüből
3. Az oldal automatikusan újratölt
4. A header menüpontjai és gombok azonnal lefordulnak

### 2. Cookie Tárolás
- A választott nyelv **cookie-ban tárolódik**
- Következő látogatáskor is megmarad
- Az oldal minden újratöltéskor az eltárolt nyelvet használja

### 3. Mi Van Lefordítva
**Jelenleg:**
- ✅ Header menüpontok (Főoldal, Szolgáltatások, stb.)
- ✅ "Kérj ajánlatot" gomb
- ✅ Minden navigációs elem

**Hamarosan:**
- Főoldal tartalma
- Kapcsolat oldal
- Footer
- Egyéb oldalak

---

## 💻 Fejlesztőknek

### Új Tartalom Fordítása

**1. Adj hozzá fordítást a JSON fájlokhoz:**

`locales/hu.json`:
```json
{
  "mySection": {
    "title": "Új Cím",
    "description": "Új leírás"
  }
}
```

`locales/en.json`:
```json
{
  "mySection": {
    "title": "New Title",
    "description": "New description"
  }
}
```

**És ugyanígy `de.json`, `sk.json`, `ro.json` fájlokba is!**

**2. Használd a komponensben:**

```typescript
'use client';
import { useTranslation } from '@/hooks/useTranslation';

function MyComponent() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('mySection.title')}</h2>
      <p>{t('mySection.description')}</p>
    </div>
  );
}
```

**3. Kész!** Az oldal automatikusan mutatja a megfelelő fordítást.

---

## 🔄 Technikai Működés

### Cookie Alapú Rendszer
```
1. Felhasználó választ nyelvet
2. Cookie mentődik: NEXT_LOCALE=en
3. useTranslation hook olvassa a cookie-t
4. Betölti a megfelelő locale JSON fájlt
5. t('key') függvény visszaadja a fordítást
```

### Nincs URL Változtatás
- Az URL **nem változik** (marad `/`, `/szolgaltatasok`, stb.)
- Egyszerűbb struktúra
- Könnyebb karbantartás
- Minden oldal ugyanúgy működik, mint korábban

### Automatikus Újratöltés
- Nyelvváltáskor az oldal újratölt
- Ez biztosítja, hogy minden komponens megkapja az új fordításokat
- Egyszerű és megbízható megoldás

---

## 📝 Checklist - Új Tartalom Hozzáadása

- [ ] 1. Írj magyar szöveget `locales/hu.json`-ba
- [ ] 2. Fordítsd le angolra `locales/en.json`-ba
- [ ] 3. Fordítsd le németre `locales/de.json`-ba
- [ ] 4. Fordítsd le szlovákra `locales/sk.json`-ba
- [ ] 5. Fordítsd le románra `locales/ro.json`-ba
- [ ] 6. Add hozzá a komponenshez: `const { t } = useTranslation()`
- [ ] 7. Cseréld le a szöveget: `{t('key')}`
- [ ] 8. Teszteld minden nyelven
- [ ] 9. Build: `npm run build`

---

## 🐛 Hibaelhárítás

### "A szöveg nem fordult le"
**Okok:**
1. Hiányzik a kulcs valamelyik JSON fájlból
2. Elírtad a kulcs nevét
3. A komponens nem használja a `useTranslation` hook-ot

**Megoldás:**
- Ellenőrizd mind az 5 JSON fájlt
- Nézd meg a böngésző konzolt (F12)
- Add hozzá: `const { t } = useTranslation();`

### "JSON Syntax Error"
**Megoldás:**
- Ellenőrizd a vesszőket és zárójel eket
- Használj JSON validátort: https://jsonlint.com/

### "Nyelv nem marad meg"
**Megoldás:**
- Ellenőrizd, hogy engedélyezve vannak-e a cookie-k
- Nézd meg a böngésző cookie beállításait

---

## 📂 Fájlok

**Fordítások:**
- `locales/hu.json` - Magyar
- `locales/en.json` - Angol
- `locales/de.json` - Német
- `locales/sk.json` - Szlovák
- `locales/ro.json` - Román

**Kód:**
- `hooks/useTranslation.ts` - Fordítási hook
- `components/LanguageSelector.tsx` - Nyelválasztó
- `components/Header.tsx` - Frissített header
- `i18n.ts` - Nyelv definíciók

---

## ✅ Példa - Teljes Komponens

```typescript
'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';

export default function MyPage() {
  const { t, locale, isLoading } = useTranslation();

  if (isLoading) {
    return <div>Betöltés...</div>;
  }

  return (
    <div>
      <h1>{t('myPage.title')}</h1>
      <p>{t('myPage.description')}</p>
      <Button>{t('myPage.button')}</Button>
      <p>Aktuális nyelv: {locale}</p>
    </div>
  );
}
```

**JSON-ban (pl. `hu.json`):**
```json
{
  "myPage": {
    "title": "Oldal Címe",
    "description": "Oldal leírása",
    "button": "Kattints ide"
  }
}
```

---

## 🎯 Következő Lépések

1. **Próbáld ki:** Kattints a zászlókra és válts nyelvet!
2. **Nézd meg:** A header menü azonnal lefordul
3. **Frissítsd:** Az oldal újratölt, de a nyelv megmarad
4. **Fejlessz:** Adj hozzá új fordított tartalmakat!

---

## 📞 Segítségkérés

Ha bármi nem működik:
1. Nézd meg a böngésző konzolt (F12)
2. Ellenőrizd a JSON fájlokat
3. Build-eld újra: `npm run build`
4. Kérdezz bátran!

---

**Status:** ✅ Működik
**Build:** ✅ Sikeres
**Oldalak:** ✅ Elérhetők

**Utolsó frissítés:** 2025-11-09
