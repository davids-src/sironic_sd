'use client';

import { ProductCard } from '@/components/ProductCard';
import { products } from '@/lib/products';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function TermekekPage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || 'hu';

  const whyChooseReasons = t('productsPage.whyChoose.reasons', []);

  return (
    <>
      <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs items={[{ label: t('productsPage.breadcrumb.products'), href: `/${locale}/termekeink` }]} />

          <div className="mx-auto max-w-3xl text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              {t('productsPage.title')}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('productsPage.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products
              .filter(p => !['cloud-suite', 'it-partner-portal'].includes(p.id)) // Assuming IDs match these slugs, otherwise I'll need to check the lib file.
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {t('productsPage.noProducts')}
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('productsPage.cta.title')}</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {t('productsPage.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/kapcsolat?subject=Termék%20érdeklődés`}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-brand-red text-white hover:bg-brand-red/90 h-11 px-8"
            >
              {t('productsPage.cta.consultation')}
            </Link>
            <Link
              href={`/${locale}/szolgaltatasok`}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border border-input hover:bg-accent hover:text-accent-foreground h-11 px-8"
            >
              {t('productsPage.cta.services')}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="bg-gradient-to-r from-brand-red/10 to-brand-grey/10 rounded-lg p-8 md:p-12">
            <div className="max-w-3xl">
              <h3 className="text-2xl font-bold mb-4">{t('productsPage.whyChoose.title')}</h3>
              <div className="space-y-4">
                {whyChooseReasons.map((reason: any, index: number) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="h-6 w-6 rounded-full bg-brand-red flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{reason.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
