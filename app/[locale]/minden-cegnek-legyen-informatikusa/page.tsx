'use client';

import { Button } from '@/components/ui/button';
import {
  Wifi,
  Monitor,
  Activity,
  Wallet,
  CalendarCheck,
  ArrowRight,
  CheckCircle,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';

export default function MindenCegnekPage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || 'hu';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: t('mindenCegnekPage.hero.title'),
    description: t('mindenCegnekPage.hero.description'),
    provider: {
      '@type': 'Organization',
      name: t('meta.companyName'),
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
      key: 'internet',
    },
    {
      icon: Monitor,
      key: 'platform',
    },
    {
      icon: Activity,
      key: 'monitoring',
    },
    {
      icon: Wallet,
      key: 'cost',
    },
    {
      icon: CalendarCheck,
      key: 'reporting',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="py-20 lg:py-32 bg-white dark:bg-gray-950 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full mb-6 dark:bg-red-900/20">
              <Sparkles className="h-5 w-5 text-brand-red" aria-hidden="true" />
              <span className="text-sm font-semibold text-brand-red">{t('mindenCegnekPage.hero.badge')}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight text-gray-900 dark:text-white">
              <span className="inline-block mr-3" role="img" aria-label="Computer">
                🖥️
              </span>
              {t('mindenCegnekPage.hero.title')}
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-brand-red mb-4">
              {t('mindenCegnekPage.hero.subtitle')}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
              {t('mindenCegnekPage.hero.description')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button
              asChild
              size="lg"
              className="bg-brand-red hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group w-full sm:w-auto"
            >
              <Link href={`/${locale}/kapcsolat?subject=Minden%20cégnek%20legyen%20informatikusa`}>
                {t('mindenCegnekPage.hero.cta')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 bg-red-50 rounded-lg p-6 border border-red-100 max-w-4xl mx-auto dark:bg-red-900/10 dark:border-red-900/20">
            <p className="text-lg text-gray-900 dark:text-white flex items-start gap-3">
              <span className="text-3xl flex-shrink-0" role="img" aria-label="Gift">
                🎁
              </span>
              <span className="font-medium">
                {t('mindenCegnekPage.hero.discount')}
              </span>
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="mt-12 flex flex-col items-center justify-center animate-bounce">
            <p className="text-sm text-gray-400 mb-2">{t('mindenCegnekPage.hero.scroll')}</p>
            <ChevronDown className="h-6 w-6 text-gray-400" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              {t('mindenCegnekPage.whatYouGet.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('mindenCegnekPage.whatYouGet.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-brand-red transition-colors group-hover:bg-brand-red group-hover:text-white dark:bg-red-900/20 dark:text-red-400 dark:group-hover:bg-brand-red dark:group-hover:text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{t(`mindenCegnekPage.whatYouGet.features.${feature.key}.title`)}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{t(`mindenCegnekPage.whatYouGet.features.${feature.key}.description`)}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
            {features.slice(3).map((feature, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-brand-red transition-colors group-hover:bg-brand-red group-hover:text-white dark:bg-red-900/20 dark:text-red-400 dark:group-hover:bg-brand-red dark:group-hover:text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{t(`mindenCegnekPage.whatYouGet.features.${feature.key}.title`)}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{t(`mindenCegnekPage.whatYouGet.features.${feature.key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              {t('mindenCegnekPage.benefits.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('mindenCegnekPage.benefits.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {t('mindenCegnekPage.benefits.items', []).map((benefit: string, index: number) => (
              <div key={index} className="flex gap-3 items-start">
                <CheckCircle className="h-6 w-6 text-brand-red flex-shrink-0 mt-0.5" />
                <p className="text-base leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="bg-gradient-to-r from-brand-red/10 to-brand-red/5 rounded-lg p-8 md:p-12 border border-brand-red/20">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">{t('mindenCegnekPage.pricing.title')}</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t('mindenCegnekPage.pricing.subtitle')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-left">
                <div className="bg-background rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-brand-red">{t('mindenCegnekPage.pricing.fixed.title')}</h3>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">{t('mindenCegnekPage.pricing.fixed.price')}</strong>
                    <br />
                    {t('mindenCegnekPage.pricing.fixed.description')}
                  </p>
                </div>
                <div className="bg-background rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-brand-red">{t('mindenCegnekPage.pricing.hourly.title')}</h3>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">{t('mindenCegnekPage.pricing.hourly.price')}</strong>
                    <br />
                    {t('mindenCegnekPage.pricing.hourly.description')}
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                {t('mindenCegnekPage.pricing.note')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-brand-red text-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {t('mindenCegnekPage.finalCta.title')}
          </h2>
          <p className="text-lg mb-8 text-white/90 leading-relaxed">
            {t('mindenCegnekPage.finalCta.description')}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-brand-red hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Link href={`/${locale}/kapcsolat?subject=Minden%20cégnek%20legyen%20informatikusa`}>
              {t('mindenCegnekPage.finalCta.button')}
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
