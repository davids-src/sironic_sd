'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Server, Globe, Shield, Code, ShoppingCart, Cloud, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function ArakPage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || 'hu';

  const pricingPackages = [
    {
      emoji: '💼',
      key: 'mindenCegnek',
      icon: Briefcase,
      ctaLink: `/${locale}/kapcsolat?subject=Minden%20cégnek%20legyen%20informatikusa`,
      highlighted: true,
    },
    {
      emoji: '🧩',
      key: 'systemOperation',
      icon: Server,
      ctaLink: `/${locale}/kapcsolat?subject=Rendszerüzemeltetés`,
      highlighted: false,
    },
    {
      emoji: '🌐',
      key: 'networking',
      icon: Globe,
      ctaLink: `/${locale}/kapcsolat?subject=Hálózatépítés`,
      highlighted: false,
    },
    {
      emoji: '🔒',
      key: 'security',
      icon: Shield,
      ctaLink: `/${locale}/kapcsolat?subject=IT%20biztonság`,
      highlighted: false,
    },
    {
      emoji: '💻',
      key: 'development',
      icon: Code,
      ctaLink: `/${locale}/kapcsolat?subject=Webfejlesztés`,
      highlighted: false,
    },
    {
      emoji: '🛒',
      key: 'commerce',
      icon: ShoppingCart,
      ctaLink: `/${locale}/kapcsolat?subject=IT%20eszközök`,
      highlighted: false,
    },
    {
      emoji: '☁️',
      key: 'hosting',
      icon: Cloud,
      ctaLink: `/${locale}/kapcsolat?subject=Hosting`,
      highlighted: false,
    },
    {
      emoji: '🤖',
      key: 'crm',
      icon: Briefcase,
      ctaLink: `/${locale}/kapcsolat?subject=CRM%20fejlesztés`,
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
        name: t(`pricingPage.packages.${pkg.key}.title`),
        description: t(`pricingPage.packages.${pkg.key}.description`),
        provider: {
          '@type': 'Organization',
          name: t('meta.companyName'),
        },
        offers: {
          '@type': 'Offer',
          price: t(`pricingPage.packages.${pkg.key}.price`).replace(/[^\d]/g, ''),
          priceCurrency: 'HUF',
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-background to-muted">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs items={[{ label: t('nav.pricing'), href: `/${locale}/arak` }]} />
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              {t('pricingPage.heroTitle')}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('pricingPage.heroDescription')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPackages.map((pkg, index) => {
              const features = t(`pricingPage.packages.${pkg.key}.features`, []);
              const badge = t(`pricingPage.packages.${pkg.key}.badge`, '');

              return (
                <Card
                  key={index}
                  className={`transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col ${pkg.highlighted ? 'border-brand-red border-2 shadow-lg relative' : ''
                    }`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-4xl" role="img" aria-label={t(`pricingPage.packages.${pkg.key}.title`)}>
                        {pkg.emoji}
                      </span>
                      {pkg.highlighted && (
                        <div className="inline-block bg-brand-red text-white text-xs font-semibold px-3 py-1 rounded-full">
                          Népszerű
                        </div>
                      )}
                    </div>
                    <CardTitle className="text-xl mb-3 leading-snug">
                      {t(`pricingPage.packages.${pkg.key}.title`)}
                    </CardTitle>
                    <div className="mb-3">
                      <div className="text-2xl font-bold text-brand-red">
                        {t(`pricingPage.packages.${pkg.key}.price`)}
                      </div>
                    </div>
                    <CardDescription className="text-sm italic">
                      {t(`pricingPage.packages.${pkg.key}.description`)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3">
                      {Array.isArray(features) && features.map((feature: string, fIndex: number) => (
                        <li key={fIndex} className="flex gap-2 items-start">
                          <CheckCircle className="h-4 w-4 text-brand-red flex-shrink-0 mt-0.5" />
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {badge && (
                      <div className="mt-4 pt-4 border-t border-muted">
                        <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1">
                          <span>📍</span> {badge}
                        </p>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      className={`w-full ${pkg.highlighted
                        ? 'bg-brand-red hover:bg-brand-red/90'
                        : 'bg-brand-grey hover:bg-brand-grey/90'
                        }`}
                    >
                      <Link href={pkg.ctaLink}>
                        {t(`pricingPage.packages.${pkg.key}.ctaText`)}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <div className="bg-background rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">{t('pricingPage.customQuote.title')}</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed whitespace-pre-line">
              {t('pricingPage.customQuote.description')}
            </p>
            <Button asChild size="lg" className="bg-brand-red hover:bg-brand-red/90 group">
              <Link href={`/${locale}/kapcsolat`}>
                {t('pricingPage.customQuote.button')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('pricingPage.whyChoose.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('pricingPage.whyChoose.description')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {t('pricingPage.whyChoose.reasons', []).map((reason: any, index: number) => (
              <div key={index} className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-red/10 mb-4">
                  <CheckCircle className="h-8 w-8 text-brand-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href={`/${locale}/kapcsolat?subject=Egyedi%20ajánlat`}>
                {t('pricingPage.whyChoose.button')}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
