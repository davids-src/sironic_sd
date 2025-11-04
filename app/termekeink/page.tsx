import { ProductCard } from '@/components/ProductCard';
import { products } from '@/lib/products';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termékeink - SIRONIC Rendszerház',
  description:
    'Ismerd meg a Sironic saját fejlesztésű rendszereit – valódi, működő technológiai megoldások vállalkozások számára.',
  keywords: [
    'Sironic termékek',
    'TDarts',
    'Cloud Suite',
    'Partner Portal',
    'vállalati szoftverek',
    'folyamatkezelő rendszer',
    'privát felhő',
  ],
  openGraph: {
    title: 'Termékeink - SIRONIC Rendszerház',
    description:
      'Ismerd meg a Sironic saját fejlesztésű rendszereit – valódi, működő technológiai megoldások vállalkozások számára.',
  },
};

const productsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: products.map((product, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'SoftwareApplication',
      name: product.name,
      description: product.description,
      applicationCategory: 'BusinessApplication',
      author: {
        '@type': 'Organization',
        name: 'SIRONIC Rendszerház',
      },
      url: product.link || undefined,
    },
  })),
};

export default function TermekekPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
      />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-background to-muted">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
            <Link
              href="/"
              className="hover:text-brand-red transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red rounded-sm"
            >
              Főoldal
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">Termékeink</span>
          </nav>

          <div className="mx-auto max-w-3xl text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Termékeink – a Sironic technológia valós megoldásokban
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Belső fejlesztéseinket valós igények hívták életre – ezek a rendszerek ma már több
              vállalkozás működését támogatják. Nézd meg, hogyan segíthetnek a Te cégednek is.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Jelenleg nincsenek megjeleníthető termékek. Hamarosan bővül a kínálatunk!
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Érdekel valamelyik termékünk?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Lépj kapcsolatba velünk, és megmutatjuk, hogyan illeszthetőek a rendszereink a vállalkozásod
            működésébe. Minden termékünket a valós üzleti igények alapján fejlesztettük.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kapcsolat?subject=Termék%20érdeklődés"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-brand-red text-white hover:bg-brand-red/90 h-11 px-8"
            >
              Kérj konzultációt
            </Link>
            <Link
              href="/szolgaltatasok"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border border-input hover:bg-accent hover:text-accent-foreground h-11 px-8"
            >
              Szolgáltatásaink
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="bg-gradient-to-r from-brand-red/10 to-brand-grey/10 rounded-lg p-8 md:p-12">
            <div className="max-w-3xl">
              <h3 className="text-2xl font-bold mb-4">Miért válaszd a Sironic termékeit?</h3>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="h-6 w-6 rounded-full bg-brand-red flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Valós problémákra készült megoldások</h4>
                    <p className="text-sm text-muted-foreground">
                      Minden termékünk a gyakorlatban tesztelt, működő vállalkozásoknál bizonyított.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="h-6 w-6 rounded-full bg-brand-red flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Magyar nyelvű támogatás</h4>
                    <p className="text-sm text-muted-foreground">
                      Közvetlenül elérsz minket, nincs nyelvi barrier vagy automatizált válaszrendszer.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="h-6 w-6 rounded-full bg-brand-red flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Folyamatos fejlesztés</h4>
                    <p className="text-sm text-muted-foreground">
                      Rendszeresen bővítjük és fejlesztjük termékeink funkcióit az ügyfelek visszajelzései
                      alapján.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="h-6 w-6 rounded-full bg-brand-red flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Testreszabási lehetőségek</h4>
                    <p className="text-sm text-muted-foreground">
                      A termékeinket az igényeid szerint tudjuk személyre szabni és integrálni a meglévő
                      rendszereidbe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
