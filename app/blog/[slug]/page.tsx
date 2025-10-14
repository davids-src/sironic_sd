import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

const blogPosts: { [key: string]: any } = {
  'hogyan-vedd-meg-ceged-adatait': {
    title: 'Hogyan védd meg céged adatait?',
    date: '2024. március 15.',
    readTime: '5 perc olvasás',
    content: `
      <p>Az adatbiztonság minden vállalkozás számára kritikus fontosságú. Ebben a cikkben bemutatjuk a legfontosabb lépéseket, amelyekkel megvédheted céged adatait a kibertámadásoktól.</p>

      <h2>Miért fontos az adatbiztonság?</h2>
      <p>Az adatszivárgások és kibertámadások komoly károkat okozhatnak: pénzügyi veszteségek, hírnévkárosodás, ügyféladatok elvesztése. A kis- és középvállalkozások gyakran könnyebb célpontok, mert kevesebb védelmi réteggel rendelkeznek.</p>

      <h2>5 alapvető lépés az adatbiztonsághoz</h2>
      <ol>
        <li><strong>Rendszeres biztonsági mentések:</strong> Automatizált backup rendszer beállítása, amely naponta menti az adatokat külön helyre.</li>
        <li><strong>Erős jelszavak és többfaktoros hitelesítés:</strong> Minden felhasználó számára kötelező a biztonságos jelszó és 2FA használata.</li>
        <li><strong>Naprakész szoftverek:</strong> Az operációs rendszer és alkalmazások rendszeres frissítése csökkenti a biztonsági réseket.</li>
        <li><strong>Tűzfal és vírusvédelem:</strong> Professzionális megoldások telepítése és karbantartása.</li>
        <li><strong>Alkalmazotti képzés:</strong> A legnagyobb biztonsági kockázat az emberi tényező - rendszeres tréningek szükségesek.</li>
      </ol>

      <h2>Hogyan segíthetünk?</h2>
      <p>A SIRONIC Rendszerház komplett adatbiztonsági megoldásokat kínál: tűzfal konfigurálás, automatikus mentések beállítása, vírusvédelem, hozzáférés-kezelés és rendszeres biztonsági auditok.</p>
    `,
  },
  'mikor-erdemes-it-karbantartasi-szerzodest-kotni': {
    title: 'Mikor érdemes IT karbantartási szerződést kötni?',
    date: '2024. március 8.',
    readTime: '4 perc olvasás',
    content: `
      <p>Sokan csak akkor gondolnak az IT karbantartásra, amikor már probléma van. Megmutatjuk, miért éri meg proaktívan gondoskodni a rendszerekről.</p>

      <h2>Reaktív vs. proaktív megközelítés</h2>
      <p>A reaktív megközelítés azt jelenti, hogy csak akkor hívunk szakembert, amikor már gond van. Ez drágább, időigényesebb és több leállást okoz. A proaktív karbantartás megelőzi a problémákat.</p>

      <h2>Mikor van szükséged karbantartási szerződésre?</h2>
      <ul>
        <li>Ha 5+ számítógéped van</li>
        <li>Ha szervert üzemeltetsz</li>
        <li>Ha kritikus az üzemfolytonosság</li>
        <li>Ha nincs dedikált IT szakembered</li>
        <li>Ha gyakran vannak kisebb-nagyobb informatikai problémák</li>
      </ul>

      <h2>Mit tartalmaz egy jó karbantartási csomag?</h2>
      <p>Proaktív monitoring, rendszeres frissítések, gyors hibaelhárítás, teljesítmény-optimalizálás, biztonsági auditok és folyamatos support.</p>

      <h2>Mennyi pénzt takarít meg?</h2>
      <p>A tapasztalatok szerint a proaktív karbantartás 60-80%-kal csökkenti a váratlan IT költségeket és a rendszer leállás miatti termeléskiesést.</p>
    `,
  },
  '5-tipp-a-gyorsabb-es-biztonsagosabb-halozatert': {
    title: '5 tipp a gyorsabb és biztonságosabb hálózatért',
    date: '2024. március 1.',
    readTime: '6 perc olvasás',
    content: `
      <p>Lassú internet és instabil kapcsolat? Ezekkel az egyszerű lépésekkel jelentősen javíthatod céged hálózatának teljesítményét és biztonságát.</p>

      <h2>1. Korszerű router és kapcsolók</h2>
      <p>A régi routerek nem támogatják a modern sebességeket és biztonsági protokollokat. Egy üzleti szintű router jelentős teljesítménynövekedést hozhat.</p>

      <h2>2. WiFi optimalizálás</h2>
      <p>Megfelelő WiFi lefedettség, több hozzáférési pont nagyobb irodában, 5GHz frekvencia használata ahol lehet, és a vendég WiFi szeparálása a munkahelyi hálózattól.</p>

      <h2>3. Hálózatszegmentálás</h2>
      <p>Különítsd el a különböző funkciójú eszközöket: például külön hálózat a szervereknek, a munkaállomásoknak és az IoT eszközöknek. Ez növeli a biztonságot és a teljesítményt.</p>

      <h2>4. QoS (Quality of Service) beállítása</h2>
      <p>Prioritizáld a kritikus forgalmat: videokonferenciák, VoIP, üzleti alkalmazások előnyt kapnak a streaming vagy letöltések ellenében.</p>

      <h2>5. Rendszeres monitoring és karbantartás</h2>
      <p>Folyamatosan figyeld a hálózati forgalmat, azonosítsd a szűk keresztmetszeteket és a gyanús aktivitásokat. Rendszeres firmware frissítések és konfigurációs auditok.</p>

      <h2>Professzionális segítség</h2>
      <p>A SIRONIC Rendszerház átfogó hálózati auditot végez, megtervezi és kiépíti a megfelelő infrastruktúrát, és folyamatos támogatást nyújt.</p>
    `,
  },
};

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = blogPosts[params.slug];

  if (!post) {
    return {
      title: 'Cikk nem található',
    };
  }

  return {
    title: `${post.title} - SIRONIC Blog`,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, ''),
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      <article>
        <header className="py-16 lg:py-24 bg-gradient-to-br from-background via-background to-muted">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Vissza a bloghoz
              </Link>
            </Button>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {post.readTime}
              </span>
            </div>
          </div>
        </header>

        <section className="py-16 bg-background">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div
              className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:my-2"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="bg-brand-red text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Kérdésed van ezzel kapcsolatban?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Lépj kapcsolatba velünk, és segítünk megtalálni a legjobb megoldást!
              </p>
              <Button asChild size="lg" variant="secondary" className="text-brand-red">
                <Link href="/kapcsolat">Kapcsolatfelvétel</Link>
              </Button>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}
