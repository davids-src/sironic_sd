import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Puzzle, Cloud, Globe, Link as LinkIcon, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fejlesztéseink - SIRONIC Rendszerház',
  description:
    'Ismerd meg a Sironic saját fejlesztéseit: egyedi szoftverek, webes rendszerek, felhőmegoldások és automatizáció vállalkozásoknak.',
  keywords: [
    'szoftverfejlesztés',
    'egyedi szoftver',
    'felhőmegoldás',
    'Nextcloud',
    'webes rendszerek',
    'automatizálás',
    'API integráció',
    'Sironic fejlesztések',
  ],
};

const developmentAreas = [
  {
    icon: Puzzle,
    title: 'Egyedi szoftverfejlesztés',
    description: 'Belső vállalati rendszerek, admin felületek, adatkezelő megoldások.',
    tagline: 'A működésedhez illő szoftver, nem fordítva.',
  },
  {
    icon: Cloud,
    title: 'Felhőintegráció (Nextcloud / Cloud Suite)',
    description: 'Saját, privát felhőmegoldás biztonságos adatmegosztásra.',
    tagline: 'Fájlmegosztás, naptár, kollaboráció – mindezt saját szerveren.',
  },
  {
    icon: Globe,
    title: 'Webes rendszerek és portálok',
    description: 'Reszponzív, üzleti célú webes alkalmazások.',
    tagline: 'Az online jelenlét több mint egy weboldal.',
  },
  {
    icon: LinkIcon,
    title: 'Automatizáció és integráció',
    description: 'Különböző rendszerek összekötése, API integrációk, workflow automatizálás.',
    tagline: 'Kevesebb manuális munka, több produktivitás.',
  },
];

const caseStudies = [
  {
    title: 'Cloud Suite',
    subtitle: 'Privát felhőmegoldás cégeknek',
    description: 'Fájlmegosztás, naptár és kollaboráció egy helyen.',
    features: ['Biztonságos fájlmegosztás', 'Csoportos naptár', 'Dokumentum együttműködés', 'Mobil hozzáférés'],
  },
  {
    title: 'IT Partner Portal',
    subtitle: 'Ügyfélszolgálati és karbantartási felület',
    description: 'Átlátható hibabejelentés és státuszkövetés.',
    features: ['Ticket rendszer', 'Valós idejű státusz', 'Dokumentáció', 'Előzmények nyilvántartása'],
  },
  {
    title: 'AssetTrack',
    subtitle: 'Eszközkezelő rendszer vállalatoknak',
    description: 'Nyilvántartás, karbantartási napló és riportok egy platformon.',
    features: ['Eszköz nyilvántartás', 'Karbantartási napló', 'Riport generálás', 'QR kód alapú azonosítás'],
  },
];

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: caseStudies.map((study, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'SoftwareApplication',
      name: study.title,
      description: study.description,
      applicationCategory: 'BusinessApplication',
      author: {
        '@type': 'Organization',
        name: 'SIRONIC Rendszerház',
      },
    },
  })),
};

export default function FejleszteseinkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-background to-muted">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Saját fejlesztéseink – amikor a technológia a Te igényeidre szabott
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Egyedi szoftverek, integrációk és webes megoldások, melyek egyszerűbbé, gyorsabbá és
              biztonságosabbá teszik a mindennapi működést.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Fejlesztési területeink</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Olyan megoldásokat készítünk, amelyek valóban illeszkednek a vállalkozásod működéséhez
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {developmentAreas.map((area, index) => (
              <Card
                key={index}
                className="transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-brand-red/50"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-brand-red/10">
                    <area.icon className="h-7 w-7 text-brand-red" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl mb-2">{area.title}</CardTitle>
                  <CardDescription className="text-base">{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-brand-red font-medium italic">→ {area.tagline}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Példák fejlesztéseinkre</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Valós megoldások, amelyek már működnek vállalkozásoknál
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="bg-background transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="text-2xl mb-2 text-brand-red">{study.title}</CardTitle>
                  <CardDescription className="text-base font-semibold mb-2">
                    {study.subtitle}
                  </CardDescription>
                  <p className="text-sm text-muted-foreground">{study.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {study.features.map((feature, fIndex) => (
                      <li key={fIndex} className="text-sm flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-brand-red flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-brand-red text-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Szeretnél egyedi megoldást a vállalkozásodhoz?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Vedd fel velünk a kapcsolatot, és megmutatjuk, hogyan lehet a technológia a Te előnyödre.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-brand-red group">
            <Link href="/kapcsolat?subject=Egyedi%20fejlesztés">
              Kérj konzultációt
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="bg-muted rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Miért érdemes egyedi fejlesztést választani?</h3>
                <ul className="space-y-3">
                  <li className="flex gap-2 items-start">
                    <div className="h-6 w-6 rounded-full bg-brand-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-brand-red text-sm font-bold">✓</span>
                    </div>
                    <span>Pontosan a vállalkozásod igényeihez igazodik</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <div className="h-6 w-6 rounded-full bg-brand-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-brand-red text-sm font-bold">✓</span>
                    </div>
                    <span>Nincs szükség felesleges funkciókért fizetni</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <div className="h-6 w-6 rounded-full bg-brand-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-brand-red text-sm font-bold">✓</span>
                    </div>
                    <span>Folyamatos támogatás és bővíthetőség</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <div className="h-6 w-6 rounded-full bg-brand-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-brand-red text-sm font-bold">✓</span>
                    </div>
                    <span>Versenyelőny egyedi megoldásokkal</span>
                  </li>
                </ul>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold mb-4">Így dolgozunk:</h4>
                <ol className="space-y-3">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-brand-red text-white flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <div className="font-medium">Igényfelmérés</div>
                      <div className="text-sm text-muted-foreground">
                        Részletes konzultáció a céljaidról
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-brand-red text-white flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <div className="font-medium">Tervezés és jóváhagyás</div>
                      <div className="text-sm text-muted-foreground">Konkrét terv és árajánlat</div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-brand-red text-white flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <div className="font-medium">Fejlesztés</div>
                      <div className="text-sm text-muted-foreground">Rendszeres egyeztetések</div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-brand-red text-white flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <div className="font-medium">Átadás és támogatás</div>
                      <div className="text-sm text-muted-foreground">Betanítás és folyamatos segítség</div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
