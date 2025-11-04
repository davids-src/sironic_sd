import { Button } from '@/components/ui/button';
import {
  Wifi,
  Monitor,
  Activity,
  Wallet,
  CalendarCheck,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Minden cégnek legyen informatikusa | SIRONIC IT Rendszerház',
  description:
    'Teljes IT támogatás fix havidíjért, mintha saját informatikusod lenne – monitoring, hibajavítás, karbantartás, havi jelentések.',
  keywords: [
    'informatikus',
    'IT karbantartás',
    'rendszergazda',
    'havidíjas IT szolgáltatás',
    'kisvállalati IT',
    'felhőmegoldások',
    'IT monitoring',
    'hibajavítás',
    'rendszerüzemeltetés',
  ],
  openGraph: {
    title: 'Minden cégnek legyen informatikusa | SIRONIC IT Rendszerház',
    description:
      'Teljes IT támogatás fix havidíjért, mintha saját informatikusod lenne – monitoring, hibajavítás, karbantartás, havi jelentések.',
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Minden cégnek legyen informatikusa',
  description:
    'Teljes körű IT üzemeltetés havidíjas konstrukcióban – mintha saját informatikusod lenne.',
  provider: {
    '@type': 'Organization',
    name: 'SIRONIC Rendszerház',
    url: 'https://sironic.hu',
  },
  areaServed: 'HU',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://sironic.hu/kapcsolat',
  },
};

const features = [
  {
    icon: Wifi,
    title: 'Folyamatos internetelérés és stabil működés',
    description:
      'Gondoskodunk róla, hogy a céged hálózata mindig elérhető, stabil és biztonságos legyen – észrevétlenül, a háttérben.',
  },
  {
    icon: Monitor,
    title: 'Egyedi platform hibabejelentésre',
    description:
      'Saját felületet kapsz, ahol egyszerűen jelezheted a problémát vagy igényedet – mi azonnal reagálunk.',
  },
  {
    icon: Activity,
    title: 'Folyamatos monitorozás és hibajavítás',
    description:
      'Figyeljük a szervereket, hálózatot, és rendszereket, hogy a hibákat már azelőtt kezeljük, mielőtt Te észrevennéd.',
  },
  {
    icon: Wallet,
    title: 'Költséghatékony, átlátható árstruktúra',
    description:
      'A fix havidíjon felül csak azért fizetsz, amivel ténylegesen foglalkozni kell – egy előre egyeztetett árlista alapján.',
  },
  {
    icon: CalendarCheck,
    title: 'Naprakész rendszerek, havi jelentés',
    description:
      'A rendszereket folyamatosan frissítjük, karbantartjuk, és minden hónap végén jelentést küldünk a teljesítésről és a rendszer állapotáról.',
  },
];

const benefits = [
  'Nem kell saját IT-st alkalmaznod – de van, aki figyel a rendszereidre',
  'Fix havidíj, kiszámítható költségek',
  'Gyors reagálási idő problémák esetén',
  'Proaktív karbantartás és monitorozás',
  'Magyar nyelvű, személyes támogatás',
  'Havi riportok a rendszer állapotáról',
  'Skálázható megoldás – ahogy a céged nő, mi is bővülünk',
  'Nincs meglepetés számla – minden előre egyeztetett',
];

export default function MindenCegnekPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-brand-red/20 px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-5 w-5 text-brand-red" aria-hidden="true" />
              <span className="text-sm font-semibold text-brand-red">Havidíjas IT támogatás</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
              <span className="inline-block mr-3" role="img" aria-label="Computer">
                🖥️
              </span>
              Minden cégnek legyen informatikusa
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-red-300 mb-4">
              Mintha saját IT-sod lenne
            </p>
            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Egy szolgáltatás, ahol nem alkalmaznod kell egy informatikust – hanem kapsz egy teljes
              csapatot, aki a háttérben mindent naprakészen tart, figyel, karbantart, és csak akkor
              avatkozik be, amikor kell.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button
              asChild
              size="lg"
              className="bg-brand-red hover:bg-brand-red/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group w-full sm:w-auto"
            >
              <Link href="/kapcsolat?subject=Minden%20cégnek%20legyen%20informatikusa">
                Kérj előzetes konzultációt
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 bg-gradient-to-r from-brand-red/20 to-brand-red/10 rounded-lg p-6 border border-brand-red/30 max-w-4xl mx-auto">
            <p className="text-lg text-white flex items-start gap-3">
              <span className="text-3xl flex-shrink-0" role="img" aria-label="Gift">
                🎁
              </span>
              <span>
                <strong>2026 február 1-re</strong> minden előzetes konzultációt kérő partnerünknek{' '}
                <strong className="text-red-300">10% kedvezményt</strong> adunk az első 3 hónap
                havidíjából!
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Mit kapsz pontosan?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Egy teljes körű IT megoldást, amely minden nap dolgozik érted – láthatatlanul, de
              hatékonyan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 border border-border hover:border-brand-red/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-red/10 mb-4">
                  <feature.icon className="h-6 w-6 text-brand-red" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
            {features.slice(3).map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 border border-border hover:border-brand-red/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-red/10 mb-4">
                  <feature.icon className="h-6 w-6 text-brand-red" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Miért jó ez Neked?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Költséghatékony, átlátható és megbízható IT támogatás – anélkül, hogy saját IT osztályt
              kellene fenntartanod.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-3 items-start">
                <CheckCircle className="h-6 w-6 text-brand-red flex-shrink-0 mt-0.5" />
                <p className="text-base leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="bg-gradient-to-r from-brand-red/10 to-brand-red/5 rounded-lg p-8 md:p-12 border border-brand-red/20">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Hogyan működik az árképzés?</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Egyszerű és átlátható konstrukció – fix havidíj plusz előre egyeztetett óradíj, ha szükség van rá.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-left">
                <div className="bg-background rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-brand-red">Fix havidíj</h3>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">39.000 Ft/hó-tól</strong>
                    <br />
                    Magában foglalja a monitorozást, alapkarbantartást, jelentést és támogatást.
                  </p>
                </div>
                <div className="bg-background rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-brand-red">Plusz munkadíj</h3>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Előre egyeztetett óradíj</strong>
                    <br />
                    Csak akkor fizetsz, ha tényleges beavatkozásra vagy fejlesztésre van szükség.
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Az árképzés függ a szerződés hosszától és a feladatok típusától. Kérj személyre szabott
                ajánlatot!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Nem kell saját IT-s, csak egy megbízható partner
          </h2>
          <p className="text-lg mb-8 text-gray-300 leading-relaxed">
            Mi biztosítjuk a szakértelmet, a gyors reagálást és a stabil működést – Te pedig a cégedre
            koncentrálhatsz.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-brand-red hover:bg-brand-red/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Link href="/kapcsolat?subject=Minden%20cégnek%20legyen%20informatikusa">
              Kérem az ajánlatot
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
