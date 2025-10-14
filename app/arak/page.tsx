import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Árak - SIRONIC Rendszerház',
  description:
    'Tekintsd meg a Sironic Rendszerház IT karbantartási, fejlesztési és szerviz szolgáltatásainak irányárait. Átlátható díjak, rejtett költségek nélkül.',
  keywords: ['IT karbantartás árak', 'webfejlesztés díjak', 'hosting árak', 'szerviz díjak', 'IT szolgáltatás árazás'],
};

const pricingPackages = [
  {
    title: 'Karbantartás & Üzemeltetés',
    description: 'Folyamatos felügyelet és gondtalan működés',
    price: '29.000 Ft/hó-tól',
    features: [
      'Rendszeres karbantartás és felügyelet',
      'Gyors hibaelhárítás',
      'Hálózati és szerver felügyelet',
      'Proaktív monitoring',
      'Biztonsági frissítések',
    ],
    ctaText: 'Kérj ajánlatot most',
    ctaLink: '/kapcsolat?subject=Karbantartási%20ajánlat',
    highlighted: true,
  },
  {
    title: 'Webfejlesztés & Hosting',
    description: 'Professzionális online jelenlét',
    price: '250.000 Ft-tól (egyszeri)',
    priceSecondary: '3.990 Ft/hó-tól (hosting)',
    features: [
      'Reszponzív weboldalak',
      'Felhőalapú tárhely és e-mail hosting',
      'Domain regisztráció, SSL tanúsítvány',
      'SEO optimalizálás',
      'Folyamatos támogatás',
    ],
    ctaText: 'Kérj személyre szabott árajánlatot',
    ctaLink: '/kapcsolat?subject=Webfejlesztés%20ajánlat',
    highlighted: false,
  },
  {
    title: 'Szerviz & Javítás',
    description: 'Gyors és megbízható eszközjavítás',
    price: '15.000 Ft-tól',
    features: [
      'Laptop, PC, szerver javítás',
      'Helyszíni kiszállás vagy postai beküldés',
      'Bevizsgálás, diagnosztika',
      'Gyors javítás',
      'Átlátható árajánlat',
    ],
    ctaText: 'Jelentsd be szerviz igényt',
    ctaLink: '/kapcsolat?subject=Szerviz%20igény',
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
          <div className="mx-auto max-w-3xl text-center mb-12 animate-fade-in">
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
                className={`transition-all duration-300 hover:shadow-xl hover:scale-105 flex flex-col ${
                  pkg.highlighted ? 'border-brand-red border-2 shadow-lg' : ''
                }`}
              >
                <CardHeader>
                  {pkg.highlighted && (
                    <div className="inline-block bg-brand-red text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 w-fit">
                      Népszerű
                    </div>
                  )}
                  <CardTitle className="text-2xl mb-2">{pkg.title}</CardTitle>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-brand-red mb-1">{pkg.price}</div>
                    {pkg.priceSecondary && (
                      <div className="text-sm text-muted-foreground">{pkg.priceSecondary}</div>
                    )}
                  </div>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex gap-2 items-start">
                        <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
            <h2 className="text-3xl font-bold mb-4">Egyedi igények?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ha egyik csomag sem illik tökéletesen, készítünk személyre szabott ajánlatot. Nincsenek
              két egyforma vállalkozás – nincsenek két egyforma megoldások sem.
            </p>
          </div>
          <div className="flex justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/kapcsolat?subject=Egyedi%20ajánlat">Kérj egyedi ajánlatot</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
