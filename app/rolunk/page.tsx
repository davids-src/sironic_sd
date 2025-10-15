import { Button } from '@/components/ui/button';
import { CheckCircle, Target, Users, Lightbulb, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rólunk - SIRONIC Rendszerház',
  description:
    '10+ év tapasztalat IT rendszerek tervezésében és üzemeltetésében. Proaktív, megbízható partner kis- és középvállalkozásoknak.',
};

const values = [
  {
    icon: Target,
    title: 'Proaktív hozzáállás',
    description:
      'Nem akkor lépünk, amikor már baj van. Folyamatosan monitorozzuk rendszereidet, hogy megelőzzük a problémákat.',
  },
  {
    icon: Users,
    title: 'Emberi kommunikáció',
    description:
      'Nálunk nincs "ticket-dzsungel". Igazi emberekkel beszélsz, akik értik a problémádat és gyorsan segítenek.',
  },
  {
    icon: Lightbulb,
    title: 'Átláthatóság',
    description:
      'Fix havidíjas karbantartás vagy eseti megoldások – nincsenek rejtett díjak, mindig tudod, mire számíthatsz.',
  },
];

const stats = [
  { value: '10+', label: 'Év tapasztalat' },
  { value: '100+', label: 'Elégedett ügyfél' },
  { value: '24/7', label: 'Elérhetőség' },
  { value: '99.9%', label: 'Rendelkezésre állás' },
];

export default function RolunkPage() {
  return (
    <>
      <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-background to-muted">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Rólunk
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A SIRONIC Rendszerház több mint egy évtizede segít vállalkozásoknak abban, hogy az IT ne
              legyen probléma, hanem megoldás. Mi nem csak rendszereket tartunk karban – nyugalmat adunk a
              működéshez.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-brand-red mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">A SIRONIC küldetése</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            A <b className="text-red font-bold">Sironic Rendszerház</b> egy olyan informatikai vállalkozás, amely nemcsak rendszereket épít, hanem bizalmat is.
            Hiszünk abban, hogy az informatika akkor értékes igazán, ha megkönnyíti az emberek életét, és nem bonyolítja azt.
            Ezért minden megoldásunk mögött egy egyszerű gondolat áll: a technológia érted dolgozik, nem ellened.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Cégünk története több év szakmai tapasztalatból, rengeteg ügyfélvisszajelzésből és még több elhivatottságból született.
            Kezdetben kisvállalkozásoknak segítettünk eligazodni az IT világában, ma pedig már komplett infrastruktúrákat, felhőalapú szolgáltatásokat és testreszabott fejlesztéseket valósítunk meg.
            Mindezt úgy, hogy közben megőriztük azt, ami az elejétől jellemző ránk: emberközpontúság, rugalmasság és technológiai precizitás.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mi vagyunk az a partner, akire rá lehet bízni a rendszert, és aki akkor is ott van, amikor
              kell – gyorsan, érthetően, megbízhatóan.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Miért dolgozz velünk?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-red/10 mb-4">
                  <value.icon className="h-8 w-8 text-brand-red" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Hogyan dolgozunk?</h2>
            <div className="space-y-4">
              {[
                'Meghallgatjuk az igényeidet és felmérjük a jelenlegi IT rendszeredet',
                'Javaslatot adunk, mi lenne a legjobb megoldás számodra',
                'Beállítjuk, optimalizáljuk és figyeljük a rendszeredet',
                'Folyamatos támogatást nyújtunk, amikor csak szükséged van ránk',
              ].map((step, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <CheckCircle className="h-6 w-6 text-brand-red flex-shrink-0 mt-0.5" />
                  <p className="text-lg">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-brand-red text-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Légy te is partnereink között!
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Kérj ingyenes konzultációt, és találjuk meg együtt a legjobb IT megoldást vállalkozásod számára.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-brand-red group">
            <Link href="/kapcsolat">
              Vegyük fel a kapcsolatot
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
