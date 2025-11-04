import { Hero } from '@/components/Hero';
import { ServiceCard } from '@/components/ServiceCard';
import { Testimonial } from '@/components/Testimonial';
import { FaqSection } from '@/components/FaqSection';
import { MindenCegnekSection } from '@/components/MindenCegnekSection';
import { Button } from '@/components/ui/button';
import { Server, Network, Shield, Code, CheckCircle, ShoppingCart, Cloud, Wrench, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { organizationSchema, localBusinessSchema } from '@/utils/seo';
import { faqSchema } from '@/utils/faqSchema';

const services = [
  {
    title: 'Rendszerüzemeltetés és IT karbantartás',
    description:
      'Stabil, biztonságos és gyors működés – mi folyamatosan figyeljük rendszereidet, mielőtt bármi gond lenne. Kevesebb leállás, több hatékonyság.',
    icon: Server,
  },
  {
    title: 'Hálózatépítés és fejlesztés',
    description:
      'Megtervezzük, kiépítjük és optimalizáljuk céged hálózatát, hogy minden eszköz megbízhatóan, gyorsan és biztonságosan kapcsolódjon.',
    icon: Network,
  },
  {
    title: 'IT biztonság és adatvédelem',
    description:
      'Védd vállalkozásod adatait! Korszerű tűzfalak, biztonsági mentések, hozzáféréskezelés – az adatbiztonság nálunk nem extra, hanem alap.',
    icon: Shield,
  },
  {
    title: 'Weboldal- és rendszerfejlesztés',
    description:
      'Professzionális, reszponzív weboldalakat és egyedi szoftvermegoldásokat készítünk, hogy céged online is kiemelkedjen.',
    icon: Code,
  },
  {
    title: 'Kereskedelem – IT eszközök és szoftverek',
    description:
      'Nálunk mindent beszerezhetsz, ami az irodai működéshez szükséges – számítógépek, monitorok, nyomtatók, szerverek és szoftverlicencek.',
    icon: ShoppingCart,
  },
  {
    title: 'Hosting és felhőmegoldások',
    description:
      'Stabil, gyors és biztonságos tárhelymegoldások weboldalakhoz, levelezéshez és adatmentéshez. Webtárhely, szerver bérlés és felhő alapú mentés.',
    icon: Cloud,
  },
  {
    title: 'Szerviz és javítás',
    description:
      'Számítógépek, laptopok és szerverek gyors és megbízható javítása helyszínen vagy postai beküldéssel. Átlátható árajánlat és gyors javítás.',
    icon: Wrench,
  },
];

const whyChooseUs = [
  'Megbízhatóság: 5+ év tapasztalat rendszerek tervezésében és üzemeltetésében.',
  'Proaktív működés: Mi előre gondolkodunk, nem akkor lépünk, amikor már baj van.',
  'Átlátható költségek: Nincsenek rejtett díjak, fix havidíjas karbantartás vagy eseti megoldások.',
  'Valódi emberi kommunikáció: Nálunk nincs "ticket-dzsungel" – mindig elérsz minket.',
  'Teljes körű IT üzemeltetés: Rendszereid stabil és gyors működéséért folyamatosan dolgozunk – kevesebb leállás, nagyobb hatékonyság, biztonságos háttérrel.',
  'Korszerű IT biztonság: Adatvédelem és hálózati biztonság modern tűzfalakkal, mentési megoldásokkal és hozzáférés-kezeléssel – az adatbiztonság nálunk alap, nem extra.',
  'Webfejlesztés és digitális jelenlét: Professzionális, reszponzív weboldalak és egyedi rendszerek, amelyek növelik céged online láthatóságát és bevonzák az ügyfeleket.',
  'Felhőalapú megoldások és hosting: Gyors, biztonságos és skálázható tárhelyszolgáltatás weboldaladhoz, levelezésedhez és adatmentéseidhez – mindig elérhető, mindig stabil.',
];

const testimonials = [
  {
    quote:
      'A SIRONIC csapatával végre nyugodtan alszunk: az informatikai rendszereink stabilan, gyorsan és biztonságosan működnek. Ha probléma merül fel, azonnal reagálnak, és mindent elmagyaráznak érthetően – nem IT-nyelven. Ritka az ilyen megbízható partner az informatika világában.',
    company: 'Pervector Zrt.',
  },
  {
    quote:
      'Korábban állandó gondjaink voltak a számítógépekkel és a hálózattal, de amióta a SIRONIC-ra bíztuk az IT-t, minden gördülékenyen megy. Gyorsan segítenek, bármilyen hibáról is legyen szó, és mindig találunk náluk megoldást. Pont ilyen támogatásra van szüksége minden cégnek.',
    company: 'Bocskai Alba Flexum Kft.',
  },
  {
    quote:
      'A SIRONIC egy modern, átlátható és mobilbarát weboldalt készített számunkra, ami nemcsak jól néz ki, de ügyfeleink is könnyen megtalálnak minket online. Azóta a karbantartást is ők végzik – minden frissítés és módosítás gyorsan, precízen történik. Teljes körű, profi szolgáltatást kaptunk.',
    company: 'Bull & U Kft.',
  },
  {
    quote:
      'Egy letisztult, gyors és modern weboldalt szerettünk volna – a SIRONIC pontosan ezt szállította. Profi csapat, figyelnek a részletekre, és mindig van egy jó ötletük, amivel még jobbá teszik az eredményt. Az új oldalunk tökéletesen tükrözi a cégünk arculatát.',
    company: 'Regia Dental Kft.',
  },
];

const workProcess = [
  {
    step: '1',
    title: 'Kapcsolatfelvétel',
    description: 'Küldj üzenetet vagy kérj ingyenes konzultációt.',
  },
  {
    step: '2',
    title: 'IT állapotfelmérés',
    description: 'Megnézzük, miben tudunk segíteni, és javaslatot adunk.',
  },
  {
    step: '3',
    title: 'Megvalósítás és támogatás',
    description: 'Mi mindent beállítunk, te csak élvezed a gondtalan működést.',
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero />

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Szolgáltatásaink
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Komplett IT megoldások, amelyekkel vállalkozásod biztonságban és hatékonyan működhet
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="/szolgaltatasok">
                Minden szolgáltatásunk
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <MindenCegnekSection />

      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Miért válassz minket?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex gap-3 items-start">
                <CheckCircle className="h-6 w-6 text-brand-red flex-shrink-0 mt-0.5" />
                <p className="text-base leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Mit mondanak ügyfeleink?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                quote={testimonial.quote}
                company={testimonial.company}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Hogyan dolgozunk?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {workProcess.map((process) => (
              <div key={process.step} className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-red text-white text-2xl font-bold mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />

      <section className="py-16 lg:py-24 bg-brand-red text-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Készen állsz a gondtalan IT-re?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Kérj ingyenes konzultációt, és találjuk meg együtt a legjobb megoldást vállalkozásod számára.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-brand-red">
            <Link href="/kapcsolat">Kérj ajánlatot most</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
