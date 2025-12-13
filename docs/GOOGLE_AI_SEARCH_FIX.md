# Google AI Keresés Optimalizálás - "informatikai cég Székesfehérvár"

## Probléma
A Google AI keresésben a "informatikai cég székesfehérvár" keresésre nem jelent meg a SIRONIC IT Solutions cég.

## Okok
1. **Hiányzó explicit leírás**: A strukturált adatokban nem szerepelt egyértelműen az "informatikai cég Székesfehérvár" kifejezés
2. **Hiányzó alternatív nevek**: Nem voltak beállítva olyan alternatív nevek, amelyek tartalmazták volna a keresési kifejezéseket
3. **Hiányzó serviceType**: Nem volt explicit kategorizálva IT szolgáltatásként
4. **llms.txt optimalizálás**: Az AI keresőmotorok számára fontos llms.txt fájl nem volt elég explicit

## Végrehajtott javítások

### 1. LocalBusinessSchema frissítése (`components/structured-data/LocalBusinessSchema.tsx`)

#### Hozzáadott mezők:
- **description**: Nyelvspecifikus leírások, amelyek explicit tartalmazza az "informatikai cég Székesfehérvár" kifejezést
  - Magyar: "SIRONIC IT Rendszerház - Informatikai cég Székesfehérváron..."
  - Angol: "SIRONIC IT Solutions - IT company in Székesfehérvár..."
  
- **alternateName**: Több alternatív név, beleértve:
  - "informatikai cég Székesfehérvár"
  - "IT cég Székesfehérvár"
  - "SIRONIC Informatikai Megoldások"
  
- **serviceType**: Explicit IT szolgáltatás kategorizálás
- **addressRegion**: Hozzáadva "Fejér megye" a pontosabb lokalizációhoz
- **areaServed**: Bővítve város, megye és ország szinttel

### 2. llms.txt frissítése (`public/llms.txt`)

Hozzáadva explicit információk:
- "informatikai cég (IT company)" kifejezés
- Székesfehérvár lokalizáció kiemelése
- Company Type és Location mezők

## Várható eredmények

### Rövid távon (1-2 hét)
- A Google AI keresőmotorok elkezdik indexelni a frissített strukturált adatokat
- A cég megjelenhet a "informatikai cég Székesfehérvár" keresésre

### Közép távon (1-3 hónap)
- Stabil megjelenés a Google AI keresésben
- Jobb pozíciók a releváns keresésekre
- Több AI-powered keresőmotor (Bing AI, Perplexity) is felismeri a cégét

## Következő lépések

### 1. Sitemap javítás (FONTOS!)
**Ha a Google Search Console azt jelzi: "Nem sikerült beolvasni a webhelytérképet":**

1. **Ellenőrizze a sitemap elérhetőségét:**
   - Nyissa meg: `https://sironic.eu/sitemap.xml` a böngészőben
   - Ellenőrizze, hogy XML formátumú és érvényes-e

2. **Google Search Console Sitemap hozzáadása:**
   - Látogasson el: https://search.google.com/search-console
   - Menjen a "Sitemaps" menüpontra
   - Adja hozzá: `sitemap.xml`
   - Kattintson "Küldés"

3. **Részletes útmutató:** Lásd a `SITEMAP_FIX.md` fájlt

### 2. Újraindexelés kérése
```bash
# Google Search Console-ban:
1. Látogasson el: https://search.google.com/search-console
2. Válassza ki a tulajdont
3. URL Inspection eszköz
4. Írja be: https://sironic.eu/hu
5. Kattintson "Request Indexing"
```

### 3. Strukturált adatok validálása
- Látogasson el: https://validator.schema.org/
- Tesztelje a főoldalt: https://sironic.eu/hu
- Ellenőrizze, hogy minden schema helyesen van beállítva

### 4. Rich Results tesztelés
- Google Rich Results Test: https://search.google.com/test/rich-results
- Tesztelje a főoldalt és a szolgáltatás oldalakat

### 5. Google AI keresés tesztelés
- Próbálja ki a Google AI keresést: "informatikai cég székesfehérvár"
- Várjon 1-2 hetet az indexelés után
- Ha még mindig nem jelenik meg, ellenőrizze:
  - Van-e Google Business Profile beállítva?
  - Van-e elegendő backlink és domain authority?
  - Frissül-e rendszeresen a weboldal tartalma?

### 6. További optimalizálási lehetőségek

#### Google Business Profile
- Hozzon létre/aktualizáljon Google Business Profile-t
- Adja hozzá az "IT Services" kategóriát
- Kérjen értékeléseket ügyfelektől

#### Backlink stratégia
- Szerezzen backlinkeket helyi portálokról (pl. Székesfehérvár városi oldal)
- IT szakmai portálokon való megjelenés
- Partnercégek weboldalain való említés

#### Tartalom optimalizálás
- Blog posztok "informatikai cég Székesfehérvár" témában
- FAQ szekció a gyakori kérdésekre
- Helyi SEO optimalizálás

## Technikai részletek

### Schema.org típusok
- `@type: LocalBusiness` - Helyi üzlet kategorizálás
- `serviceType` - Szolgáltatás típusok listája
- `alternateName` - Alternatív nevek tömbje
- `description` - Részletes leírás AI keresőmotorok számára

### AI keresőmotorok támogatása
- ✅ Google SGE (Search Generative Experience)
- ✅ Bing AI / Copilot
- ✅ Perplexity AI
- ✅ OpenAI Search (ChatGPT)

## Ellenőrzési lista

- [x] LocalBusinessSchema frissítve description mezővel
- [x] alternateName hozzáadva "informatikai cég Székesfehérvár" kifejezésekkel
- [x] serviceType hozzáadva IT szolgáltatásokkal
- [x] llms.txt frissítve explicit információkkal
- [x] Sitemap.ts javítva hibakezeléssel és validációval
- [ ] Sitemap elérhetőség ellenőrzése: `https://sironic.eu/sitemap.xml`
- [ ] Sitemap hozzáadása Google Search Console-ban
- [ ] Újraindexelés kérése Google Search Console-ban
- [ ] Strukturált adatok validálása
- [ ] Google AI keresés tesztelése 1-2 hét után
- [ ] Google Business Profile ellenőrzése/frissítése

## További segítség

Ha 2-3 hét után még mindig nem jelenik meg a Google AI keresésben:
1. Ellenőrizze a Google Search Console-ban a strukturált adatok státuszát
2. Nézze meg, hogy vannak-e hibák az indexelésben
3. Fontolja meg a Google Business Profile optimalizálását
4. Értékelje a domain authority-t és backlink profilját

