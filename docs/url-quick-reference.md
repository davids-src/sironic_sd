# Quick Reference: Multilingual URL Patterns
**SIRONIC IT Solutions**  
**Last Updated**: 2025-12-09

---

## URL Pattern Reference

### Format
```
/{locale}/{service-slug}
```

### Service-Specific URLs

| Service | HU 🇭🇺 | EN 🇬🇧 | DE 🇩🇪 | SK 🇸🇰 | RO 🇷🇴 | HR 🇭🇷 | SL 🇸🇮 |
|---------|--------|--------|--------|--------|--------|--------|--------|
| **IT Training** | `/hu/oktatas` | `/en/it-training` | `/de/it-schulung` | `/sk/it-vzdelavanie` | `/ro/training-it` | `/hr/it-edukacija` | `/sl/it-usposabljanje` |
| **Custom Development** | `/hu/egyedi-alkalmazas-fejlesztes` | `/en/custom-application-development` | `/de/individuelle-anwendungsentwicklung` | `/sk/vyvoj-vlastnych-aplikacii` | `/ro/dezvoltare-aplicatii-personalizate` | `/hr/razvoj-prilagodenih-aplikacija` | `/sl/razvoj-spletnih-aplikacij` |
| **Network Optimization** | `/hu/halozat-fejlesztes` | `/en/network-optimization` | `/de/netzwerk-optimierung` | `/sk/optimalizacia-siete` | `/ro/optimizare-retea` | `/hr/optimizacija-mreze` | `/sl/mrezna-infrastruktura` |
| **On-Site Presence** | `/hu/onsite-jelenlet` | `/en/onsite-presence` | `/de/onsite-prasenz` | `/sk/onsite-pritomnost` | `/ro/prezenta-onsite` | `/hr/it-onsite-prisutnost` | `/sl/onsite-it-tehnik` |
| **Repair Service** | `/hu/szerviz-javitas` | `/en/repair-service` | `/de/reparatur-service` | `/sk/servisne-sluzby` | `/ro/servicii-reparatii` | `/hr/servis-popravak` | `/sl/servis-racunalnikov` |
| **IT Support Campaign** | `/hu/minden-cegnek-legyen-informatikusa` | N/A | N/A | N/A | N/A | `/hr/it-podrska-tvrtkama` | `/sl/it-podpora-podjetjem` |
| **Products** | `/hu/termekeink` | `/en/termekeink` | `/de/termekeink` | `/sk/termekeink` | `/ro/termekeink` | `/hr/proizvodi` | `/sl/produkti` |
| **Pricing** | `/hu/arak` | `/en/arak` | `/de/arak` | `/sk/arak` | `/ro/arak` | `/hr/cjenik` | `/sl/cenik` |
| **About** | `/hu/rolunk` | `/en/rolunk` | `/de/rolunk` | `/sk/rolunk` | `/ro/rolunk` | `/hr/o-nama` | `/sl/o-nas` |
| **Services** | `/hu/szolgaltatasok` | `/en/szolgaltatasok` | `/de/szolgaltatasok` | `/sk/szolgaltatasok` | `/ro/szolgaltatasok` | `/hr/usluge` | `/sl/storitve` |
| **Contact** | `/hu/kapcsolat` | `/en/kapcsolat` | `/de/kapcsolat` | `/sk/kapcsolat` | `/ro/kapcsolat` | `/hr/kontakt` | `/sl/kontakt` |
| **Blog** | `/hu/blog` | N/A | N/A | N/A | N/A | N/A | N/A |

---

## Sitemap Statistics

- **Total URLs**: 109
- **Homepage Variants**: 7 (one per language)
- **Fully Localized Services**: 35 URLs
- **Partially Localized Pages**: 67 URLs

---

## Hreflang Implementation Status

✅ **Fully Implemented** for:
- IT Training
- Custom Development
- Network Optimization
- On-Site Presence
- Repair Service
- Products (HR, SL)
- Pricing (HR, SL)
- About (HR, SL)
- Services (HR, SL)
- Contact (HR, SL)
- IT Support Campaign (HU, HR, SL)

⚠️ **Using Shared Paths** for:
- Products (EN, DE, SK, RO)
- Pricing (EN, DE, SK, RO)
- About (EN, DE, SK, RO)
- Services (EN, DE, SK, RO)
- Contact (EN, DE, SK, RO)

---

## Currency by Locale

| Locale | Currency | Example Price |
|--------|----------|---------------|
| HU | HUF | 150.000 Ft/hó |
| RO | RON | de la 600 RON/lună |
| EN | EUR | from €150/month |
| DE | EUR | ab 150 €/Monat |
| SK | EUR | od 150 €/mesiac |
| HR | EUR | od 150 €/mjesec |
| SL | EUR | od 150 €/mesec |

---

## Language Detection Priority

1. **Cookie** (NEXT_LOCALE) - Manual user selection
2. **Browser Language** (Accept-Language header)
3. **GeoIP** (IP-based country detection)
4. **Default** - English (en)

---

## Quick Testing Commands

### Check sitemap
```bash
curl https://sironic.hu/sitemap.xml
```

### Validate hreflang
```bash
curl -s https://sironic.hu/en/it-training | grep hreflang
```

### Test locale redirect
```bash
curl -I https://sironic.hu/
```

---

**Reference Version**: 1.0  
**Maintained By**: Development Team
