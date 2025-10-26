import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Server, Network, Shield, Code, CheckCircle, ArrowRight, ShoppingCart, Cloud, Wrench, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Szolgáltatásaink - SIRONIC Rendszerház',
  description:
    'Rendszerüzemeltetés, hálózatépítés, IT biztonság, webfejlesztés, IT kereskedelem, hosting, szerviz és IT oktatás - teljes körű IT megoldások kis- és középvállalkozásoknak.',
  keywords: ['IT szolgáltatás', 'rendszerüzemeltetés', 'hálózatépítés', 'IT biztonság', 'webfejlesztés', 'IT kereskedelem', 'IT eszköz értékesítés', 'hosting szolgáltatás', 'webtárhely', 'szerver bérlés', 'számítógép javítás', 'laptop szerviz', 'helyszíni szerviz', 'IT oktatás', 'informatikai képzés', 'biztonságtudatosság', 'digitális tréning', 'vállalati tudásfejlesztés'],
};

const services = [
  {
    title: 'Rendszerüzemeltetés és IT karbantartás',
    description:
      'Stabil, biztonságos és gyors működés – mi folyamatosan figyeljük rendszereidet, mielőtt bármi gond lenne. Kevesebb leállás, több hatékonyság.',
    icon: Server,
    features: [
      'Proaktív monitoring és karbantartás',
      'Gyors hibaelhárítás',
      'Rendszeres biztonsági frissítések',
      'Teljesítmény-optimalizálás',
    ],
  },
  {
    title: 'Hálózatépítés és fejlesztés',
    description:
      'Megtervezzük, kiépítjük és optimalizáljuk céged hálózatát, hogy minden eszköz megbízhatóan, gyorsan és biztonságosan kapcsolódjon.',
    icon: Network,
    features: [
      'Hálózattervezés és kiépítés',
      'WiFi hálózatok optimalizálása',
      'VPN és távoli hozzáférés',
      'Hálózatbiztonság',
    ],
  },
  {
    title: 'IT biztonság és adatvédelem',
    description:
      'Védd vállalkozásod adatait! Korszerű tűzfalak, biztonsági mentések, hozzáféréskezelés – az adatbiztonság nálunk nem extra, hanem alap.',
    icon: Shield,
    features: [
      'Tűzfal konfiguráció és management',
      'Automatikus biztonsági mentések',
      'Adatvédelmi szabályozás (GDPR)',
      'Vírus- és malware védelem',
    ],
  },
  {
    title: 'Weboldal- és rendszerfejlesztés',
    description:
      'Professzionális, reszponzív weboldalakat és egyedi szoftvermegoldásokat készítünk, hogy céged online is kiemelkedjen.',
    icon: Code,
    features: [
      'Modern, reszponzív weboldalak',
      'E-commerce megoldások',
      'Egyedi szoftverek fejlesztése',
      'SEO optimalizálás',
    ],
  },
  {
    title: 'Kereskedelem – IT eszközök és szoftverek egy kézből',
    description:
      'Nálunk mindent beszerezhetsz, ami az irodai működéshez szükséges – számítógépek, monitorok, nyomtatók, szerverek, hálózati eszközök és szoftverlicencek. Megbízható márkákkal dolgozunk, és segítünk a legjobb ár-érték arány kiválasztásában. Akár új eszközökre, akár bővítésre van szükséged, mi gondoskodunk róla.',
    icon: ShoppingCart,
    features: [
      'Számítógépek, laptopok és szerverek',
      'Hálózati eszközök és perifériák',
      'Szoftverlicencek beszerzése',
      'Tanácsadás az eszközválasztásban',
    ],
  },
  {
    title: 'Hosting és felhőmegoldások',
    description:
      'Stabil, gyors és biztonságos tárhelymegoldásokat kínálunk weboldalakhoz, levelezéshez és adatmentéshez. Saját szerverparkunkon vagy megbízható nemzetközi partnereinken keresztül biztosítjuk, hogy adataid mindig elérhetők és védettek legyenek.',
    icon: Cloud,
    features: [
      'Webtárhely és domain regisztráció',
      'E-mail hosting',
      'Felhő alapú mentés és fájlmegosztás',
      'Szerver bérlés és menedzsment',
    ],
  },
  {
    title: 'Szerviz és javítás – helyszínen vagy postán',
    description:
      'Számítógépek, laptopok, szerverek és hálózati eszközök gyors és megbízható javítása. Helyszíni kiszállás Budapesten és környékén, vagy eszközök postai úton történő beküldése. Minden javítást bevizsgálással kezdünk, árajánlat után csak a jóváhagyásod alapján dolgozunk. Célunk, hogy minél előbb újra működjön a rendszered.',
    icon: Wrench,
    features: [
      'Helyszíni szerviz (Budapest és környéke)',
      'Postai beküldés lehetősége',
      'Átlátható árajánlat javítás előtt',
      'Gyors javítási idő',
    ],
  },
  {
    title: 'IT oktatás és tudásfejlesztés',
    description:
      'Fejleszd csapatod digitális tudását! Személyre szabott IT oktatásokat, biztonságtudatossági tréningeket és rendszerszintű tudásfejlesztést kínálunk, hogy a munkatársak magabiztosan használják a modern eszközöket és szoftvereket. A biztonságos működés az információnál kezdődik.',
    icon: GraduationCap,
    features: [
      'Személyre szabott IT oktatások',
      'Biztonságtudatossági tréningek',
      'Szoftver- és eszközhasználati képzések',
      'Vállalati tudásfejlesztési programok',
    ],
  },
];

export default function SzolgaltatasokPage() {
  return (
    <>
      <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-background to-muted">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Szolgáltatásaink
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Komplett IT megoldások, amelyekkel vállalkozásod biztonságban és hatékonyan működhet.
              Fix havidíjas karbantartástól az egyedi fejlesztésekig – minden egy helyen.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="text-xl font-semibold mb-4">Amit kapsz:</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex gap-3 items-start">
                        <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-brand-red text-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Érdekel valamelyik szolgáltatásunk?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Kérj ingyenes konzultációt, és találjuk meg együtt a legjobb megoldást vállalkozásod számára.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-brand-red group">
              <Link href="/kapcsolat">
                Kérj ajánlatot most
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
              <Link href="/kapcsolat?subject=Szerviz%20igény">
                Szervizigény bejelentése
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
