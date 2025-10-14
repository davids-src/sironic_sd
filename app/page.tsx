import { Hero } from '@/components/Hero';
import { ServiceCard } from '@/components/ServiceCard';
import { Testimonial } from '@/components/Testimonial';
import { Button } from '@/components/ui/button';
import { Server, Network, Shield, Code, CheckCircle, ShoppingCart, Cloud, Wrench, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { organizationSchema, localBusinessSchema } from '@/utils/seo';

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
  'Megbízhatóság: 10+ év tapasztalat rendszerek tervezésében és üzemeltetésében.',
  'Proaktív működés: Mi előre gondolkodunk, nem akkor lépünk, amikor már baj van.',
  'Átlátható költségek: Nincsenek rejtett díjak, fix havidíjas karbantartás vagy eseti megoldások.',
  'Valódi emberi kommunikáció: Nálunk nincs "ticket-dzsungel" – mindig elérsz minket.',
];

const testimonials = [
  {
    quote:
      'A Sironic óta nem kellett egyetlen napot sem a leállásokkal töltenünk. Az IT-ról végre nem nekünk kell gondoskodnunk.',
    author: 'Kovács András',
    company: 'MetalPlus Kft.',
  },
  {
    quote:
      'Gyors reakció, profi hozzáállás, érthető magyarázatok. Olyan partner, akire tényleg rá lehet bízni a rendszert.',
    author: 'Nagy Ágnes',
    company: 'StudioLine Bt.',
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

      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Miért válassz minket?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex gap-3 items-start">
                <CheckCircle className="h-6 w-6 text-brand-red flex-shrink-0 mt-0.5" />
                <p className="text-lg">{reason}</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
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
