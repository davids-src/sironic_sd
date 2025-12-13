# Sitemap Beolvasási Hiba Javítása

## Probléma
A Google Search Console azt jelzi: **"Nem sikerült beolvasni a webhelytérképet"**

## Lehetséges okok

### 1. Sitemap nem elérhető
A sitemap elérhetőnek kell lennie a következő URL-en:
- **https://sironic.eu/sitemap.xml** (vagy a NEXT_PUBLIC_SITE_URL értéke alapján)

### 2. Sitemap generálási hiba
A sitemap generálása során hiba történhet, ha:
- Érvénytelen URL-ek vannak a sitemapban
- Túl sok URL van (bár 50,000 alatt kell lennie)
- A sitemap formátuma hibás

### 3. Robots.txt konfiguráció
A robots.txt fájlban rossz sitemap URL lehet.

## Végrehajtott javítások

### 1. Sitemap.ts frissítése
- ✅ Hibakezelés hozzáadva
- ✅ URL validáció hozzáadva
- ✅ Duplikátumok eltávolítása
- ✅ Fejlesztési környezetben logolás

### 2. Ellenőrzési lépések

#### 1. Ellenőrizze a sitemap elérhetőségét
Nyissa meg a böngészőben:
```
https://sironic.eu/sitemap.xml
```

Vagy ha más domain-t használ:
```
https://[YOUR_DOMAIN]/sitemap.xml
```

**Várt eredmény:** XML fájl, amely tartalmazza az összes URL-t.

#### 2. Ellenőrizze a robots.txt fájlt
Nyissa meg:
```
https://sironic.eu/robots.txt
```

**Várt tartalom:**
```
User-agent: *
Allow: /

Sitemap: https://sironic.eu/sitemap.xml
```

#### 3. Tesztelje a sitemap validitását
Használja a Google Search Console Sitemap tesztelő eszközét:
1. Látogasson el: https://search.google.com/search-console
2. Válassza ki a tulajdont
3. Menjen a "Sitemaps" menüpontra
4. Adja hozzá: `sitemap.xml`
5. Kattintson "Tesztelés" gombra

#### 4. Ellenőrizze a sitemap méretét
A sitemap nem lehet:
- **Több mint 50,000 URL**
- **Több mint 50MB** (tömörített)

Jelenlegi sitemap: ~200-300 URL (biztonságos)

## Hibakeresési lépések

### 1. Lokális tesztelés

#### Fejlesztési környezetben:
```bash
npm run dev
```

Nyissa meg: `http://localhost:3000/sitemap.xml`

#### Build és tesztelés:
```bash
npm run build
npm start
```

Nyissa meg: `http://localhost:3000/sitemap.xml`

### 2. Ellenőrizze a konzol logokat

A fejlesztési környezetben a sitemap generálásakor a konzolban meg kell jelennie:
```
[Sitemap] Generated X URLs
```

Ha hibát lát, az jelzi a problémát.

### 3. Sitemap XML validáció

A generált XML-nek érvényes XML-nek kell lennie. Ellenőrizze:
- XML deklaráció: `<?xml version="1.0" encoding="UTF-8"?>`
- URL set tag: `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`
- Minden URL tag helyesen van bezárva

### 4. Google Search Console tesztelés

1. **URL Inspection eszköz:**
   - Látogasson el: https://search.google.com/search-console
   - URL Inspection
   - Írja be: `https://sironic.eu/sitemap.xml`
   - Kattintson "Test URL"

2. **Sitemap hozzáadása:**
   - Menjen a "Sitemaps" menüpontra
   - Adja hozzá: `sitemap.xml`
   - Várjon 1-2 napot az indexelésre

## Gyakori problémák és megoldások

### Probléma: "Sitemap could not be read"
**Megoldás:**
1. Ellenőrizze, hogy a sitemap elérhető-e a böngészőben
2. Ellenőrizze a robots.txt fájlt
3. Ellenőrizze, hogy nincs-e CORS vagy más hozzáférési korlátozás

### Probléma: "Sitemap contains invalid URLs"
**Megoldás:**
1. Ellenőrizze az URL formátumokat a sitemap.ts fájlban
2. Győződjön meg róla, hogy minden URL érvényes
3. Ellenőrizze, hogy nincs-e duplikátum

### Probléma: "Sitemap is too large"
**Megoldás:**
Ha több mint 50,000 URL van, használjon sitemap index fájlt:
- `sitemap-index.xml` - fő sitemap index
- `sitemap-1.xml` - első rész sitemap
- `sitemap-2.xml` - második rész sitemap
- stb.

Jelenlegi sitemap: ~200-300 URL (nincs szükség index fájlra)

### Probléma: "Sitemap contains non-200 URLs"
**Megoldás:**
1. Ellenőrizze, hogy minden URL elérhető-e
2. Tesztelje az URL-eket a böngészőben
3. Ellenőrizze a 404 hibákat

## Következő lépések

### 1. Azonnali ellenőrzés
- [ ] Nyissa meg: `https://sironic.eu/sitemap.xml` a böngészőben
- [ ] Ellenőrizze, hogy XML formátumú-e és érvényes-e
- [ ] Ellenőrizze a robots.txt fájlt

### 2. Google Search Console
- [ ] Adja hozzá a sitemap-ot a Google Search Console-ban
- [ ] Várjon 1-2 napot az indexelésre
- [ ] Ellenőrizze a sitemap státuszát

### 3. Monitoring
- [ ] Kövesse nyomon a sitemap indexelését
- [ ] Ellenőrizze a Google Search Console-ban a hibákat
- [ ] Frissítse a sitemap-ot rendszeresen

## Technikai részletek

### Sitemap generálás
- **Fájl:** `app/sitemap.ts`
- **Next.js Route:** Automatikusan `/sitemap.xml` útvonalon
- **Típus:** `MetadataRoute.Sitemap`
- **Generálás:** Build időben és runtime-on

### Robots.txt konfiguráció
- **Fájl:** `app/robots.ts` (dinamikus) és `public/robots.txt` (statikus)
- **Sitemap URL:** `${baseUrl}/sitemap.xml`
- **Ellenőrizze:** Mindkét fájl konzisztens legyen

### URL struktúra
- **Formátum:** `{baseUrl}/{locale}/{path}`
- **Példa:** `https://sironic.eu/hu/oktatas`
- **Homepage:** `https://sironic.eu/{locale}`

## További segítség

Ha a probléma továbbra is fennáll:

1. **Ellenőrizze a build logokat:**
   ```bash
   npm run build
   ```
   Keressen sitemap kapcsolatos hibákat.

2. **Tesztelje a sitemap generálást:**
   ```bash
   npm run dev
   ```
   Nyissa meg: `http://localhost:3000/sitemap.xml`

3. **Ellenőrizze a környezeti változókat:**
   ```bash
   echo $NEXT_PUBLIC_SITE_URL
   ```
   Vagy `.env.local` fájlban:
   ```
   NEXT_PUBLIC_SITE_URL=https://sironic.eu
   ```

4. **Kapcsolódjon a Next.js dokumentációhoz:**
   - https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap

