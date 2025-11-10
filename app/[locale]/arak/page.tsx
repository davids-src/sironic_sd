import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Server, Globe, Shield, Code, ShoppingCart, Cloud, Briefcase } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Árak - SIRONIC Rendszerház',
  description:
    'Tekintsd meg a SIRONIC Rendszerház IT karbantartási, fejlesztési, hosting, CRM és szerviz szolgáltatásainak irányárait. Átlátható díjak, rejtett költségek nélkül.',
  keywords: ['IT karbantartás árak', 'webfejlesztés díjak', 'hosting árak', 'szerviz díjak', 'IT szolgáltatás árazás', 'CRM fejlesztés ár', 'hálózatépítés díj', 'IT biztonság árak'],
};

const pricingPackages = [
  {
    emoji: '💼',
    title: 'Minden cégnek legyen informatikusa',
    price: '39.000 Ft/hó-tól',
    description: 'Teljes körű IT üzemeltetés havidíjas konstrukcióban – mintha saját informatikusod lenne.',
    features: [
      'Folyamatos rendszermonitorozás és karbantartás',
      'Gyors beavatkozás hiba esetén',
      'Infrastruktúra-fejlesztési tanácsadás',
      'Biztonsági mentések és frissítések kezelése',
      'Személyes, magyar nyelvű IT támogatás',
    ],
    badge: '🎁 2026 Február 1-ig érvényes 10% kedvezmény az első 3 hónap havidíjából előzetes konzultáció esetén!',
    icon: Briefcase,
    ctaText: 'Kérj előzetes konzultációt',
    ctaLink: '/kapcsolat?subject=Minden%20cégnek%20legyen%20informatikusa',
    highlighted: true,
  },
  {
    emoji: '🧩',
    title: 'Rendszerüzemeltetés és IT karbantartás',
    price: '29.000 Ft/hó-tól',
    description: 'Folyamatos felügyelet és zavartalan működés.',
    features: [
      'Rendszeres karbantartás és monitorozás',
      'Gyors hibaelhárítás és helyreállítás',
      'Szerver- és hálózatfelügyelet',
      'Proaktív működés és biztonsági frissítések',
    ],
    badge: null,
    icon: Server,
    ctaText: 'Kérj ajánlatot',
    ctaLink: '/kapcsolat?subject=Rendszerüzemeltetés',
    highlighted: false,
  },
  {
    emoji: '🌐',
    title: 'Hálózatépítés és fejlesztés',
    price: '45.000 Ft-tól / projekt',
    description: 'Megbízható, biztonságos hálózati infrastruktúra tervezése és kivitelezése.',
    features: [
      'Teljes hálózattervezés és kiépítés',
      'Router, switch, Wi-Fi konfigurálás',
      'Hálózati optimalizálás és karbantartás',
      'Gyors, stabil és biztonságos adatkapcsolat',
    ],
    badge: null,
    icon: Globe,
    ctaText: 'Kérj ajánlatot',
    ctaLink: '/kapcsolat?subject=Hálózatépítés',
    highlighted: false,
  },
  {
    emoji: '🔒',
    title: 'IT biztonság és adatvédelem',
    price: '59.000 Ft-tól',
    description: 'Védd vállalkozásod adatait korszerű megoldásokkal.',
    features: [
      'Tűzfal beállítás és hálózati biztonság',
      'Biztonsági mentés és helyreállítás',
      'Hozzáférés-kezelés, titkosítás',
      'GDPR-kompatibilis adatvédelem',
    ],
    badge: null,
    icon: Shield,
    ctaText: 'Kérj ajánlatot',
    ctaLink: '/kapcsolat?subject=IT%20biztonság',
    highlighted: false,
  },
  {
    emoji: '💻',
    title: 'Weboldal- és rendszerfejlesztés',
    price: '250.000 Ft-tól (egyszeri díj)',
    description: 'Professzionális, egyedi fejlesztések a céged digitális növekedéséért.',
    features: [
      'Reszponzív weboldalak és portálok',
      'Egyedi szoftver megoldások',
      'SEO és UX optimalizálás',
      'Folyamatos támogatás és karbantartás',
    ],
    badge: null,
    icon: Code,
    ctaText: 'Kérj ajánlatot',
    ctaLink: '/kapcsolat?subject=Webfejlesztés',
    highlighted: false,
  },
  {
    emoji: '🛒',
    title: 'Kereskedelem – IT eszközök és szoftverek',
    price: 'Egyedi ajánlat alapján',
    description: 'Minden, ami a modern irodai működéshez kell.',
    features: [
      'Számítógépek, monitorok, szerverek',
      'Nyomtatók és hálózati eszközök',
      'Szoftverlicencek és előfizetések',
      'Komplett irodai infrastruktúra',
    ],
    badge: null,
    icon: ShoppingCart,
    ctaText: 'Kérj ajánlatot',
    ctaLink: '/kapcsolat?subject=IT%20eszközök',
    highlighted: false,
  },
  {
    emoji: '☁️',
    title: 'Hosting és felhőmegoldások',
    price: '3.990 Ft/hó-tól',
    description: 'Gyors, biztonságos és skálázható tárhely cégeknek.',
    features: [
      'Web- és e-mail tárhely',
      'Felhőalapú adatmentés',
      'Magánfelhő szolgáltatás',
      'Folyamatos rendelkezésre állás (99,9%)',
    ],
    badge: null,
    icon: Cloud,
    ctaText: 'Kérj ajánlatot',
    ctaLink: '/kapcsolat?subject=Hosting',
    highlighted: false,
  },
  {
    emoji: '🤖',
    title: 'Egyedi CRM fejlesztés',
    price: '390.000 Ft-tól',
    description: 'Személyre szabott ügyfélkezelő rendszer, ami növeli az értékesítési hatékonyságot.',
    features: [
      'Moduláris felépítés, testreszabható funkciók',
      'Integráció meglévő rendszerekkel (ERP, levelezés, weboldal)',
      'Automatizált riportok és analitika',
      'Felhasználóbarát kezelőfelület',
    ],
    badge: null,
    icon: Briefcase,
    ctaText: 'Kérj ajánlatot',
    ctaLink: '/kapcsolat?subject=CRM%20fejlesztés',
    highlighted: false,
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: pricingPackages.map((pkg, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Service',
      name: pkg.title,
      description: pkg.description,
      provider: {
        '@type': 'Organization',
        name: 'SIRONIC Rendszerház',
      },
      offers: {
        '@type': 'Offer',
        price: pkg.price.replace(/[^\d]/g, ''),
        priceCurrency: 'HUF',
      },
    },
  })),
};

export default function ArakPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-background to-muted">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Átlátható árak – tisztán, érthetően
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nálunk nincsenek rejtett költségek. Szolgáltatásainkat úgy alakítottuk ki, hogy minden
              vállalkozás megtalálja a számára megfelelő megoldást – legyen szó karbantartásról,
              fejlesztésről vagy szervizről.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPackages.map((pkg, index) => (
              <Card
                key={index}
                className={`transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col ${
                  pkg.highlighted ? 'border-brand-red border-2 shadow-lg relative' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-4xl" role="img" aria-label={pkg.title}>
                      {pkg.emoji}
                    </span>
                    {pkg.highlighted && (
                      <div className="inline-block bg-brand-red text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Népszerű
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-xl mb-3 leading-snug">{pkg.title}</CardTitle>
                  <div className="mb-3">
                    <div className="text-2xl font-bold text-brand-red">{pkg.price}</div>
                  </div>
                  <CardDescription className="text-sm italic">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex gap-2 items-start">
                        <CheckCircle className="h-4 w-4 text-brand-red flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {pkg.badge && (
                    <div className="mt-4 pt-4 border-t border-muted">
                      <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1">
                        <span>📍</span> {pkg.badge}
                      </p>
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className={`w-full ${
                      pkg.highlighted
                        ? 'bg-brand-red hover:bg-brand-red/90'
                        : 'bg-brand-grey hover:bg-brand-grey/90'
                    }`}
                  >
                    <Link href={pkg.ctaLink}>{pkg.ctaText}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <div className="bg-background rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Egyedi igényeid vannak?</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Az árak irányárak, a pontos ajánlat minden esetben az igények alapján készül.
              <br />
              Kérj ingyenes konzultációt, és segítünk megtalálni a legjobb megoldást.
            </p>
            <Button asChild size="lg" className="bg-brand-red hover:bg-brand-red/90 group">
              <Link href="/kapcsolat">
                Kérj ingyenes IT konzultációt
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Miért választják a SIRONIC-ot?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ha egyik csomag sem illik tökéletesen, készítünk személyre szabott ajánlatot. Nincsenek
              két egyforma vállalkozás – nincsenek két egyforma megoldások sem.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-red/10 mb-4">
                <CheckCircle className="h-8 w-8 text-brand-red" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Átlátható árak</h3>
              <p className="text-sm text-muted-foreground">Nincsenek rejtett költségek</p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-red/10 mb-4">
                <CheckCircle className="h-8 w-8 text-brand-red" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Rugalmas díjcsomagok</h3>
              <p className="text-sm text-muted-foreground">Havidíjas és eseti megoldások</p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-red/10 mb-4">
                <CheckCircle className="h-8 w-8 text-brand-red" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Gyors reagálás</h3>
              <p className="text-sm text-muted-foreground">Azonnal segítünk, ha szükséges</p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-red/10 mb-4">
                <CheckCircle className="h-8 w-8 text-brand-red" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Hosszú távú támogatás</h3>
              <p className="text-sm text-muted-foreground">Partnerként kezeljük ügyfeleinket</p>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/kapcsolat?subject=Egyedi%20ajánlat">Kérj egyedi ajánlatot</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
