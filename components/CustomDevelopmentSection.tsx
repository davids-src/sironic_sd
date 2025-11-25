'use client';

import { ServiceCard } from './ServiceCard';
import { Button } from './ui/button';
import { Code2, MonitorSmartphone, Smartphone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';

export function CustomDevelopmentSection() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || 'hu';

  const developmentServices = [
    {
      title: t('customDevelopment.cards.webApps.title'),
      description: t('customDevelopment.cards.webApps.description'),
      icon: Code2,
    },
    {
      title: t('customDevelopment.cards.desktop.title'),
      description: t('customDevelopment.cards.desktop.description'),
      icon: MonitorSmartphone,
    },
    {
      title: t('customDevelopment.cards.mobile.title'),
      description: t('customDevelopment.cards.mobile.description'),
      icon: Smartphone,
    },
  ];

  const customDevUrl = locale === 'hu' ? 'egyedi-alkalmazas-fejlesztes' :
                       locale === 'en' ? 'custom-application-development' :
                       locale === 'de' ? 'individuelle-anwendungsentwicklung' :
                       locale === 'sk' ? 'vyvoj-vlastnych-aplikacii' :
                       'dezvoltare-aplicatii-personalizate';

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-4">
          <div className="inline-flex items-center rounded-full bg-brand-red/10 px-4 py-2 text-sm font-medium text-brand-red mb-4">
            {t('customDevelopment.badge')}
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {t('customDevelopment.title')}
          </h2>
          <p className="text-lg text-muted-foreground mb-2">
            {t('customDevelopment.subtitle')}
          </p>
          <p className="text-base text-muted-foreground">
            {t('customDevelopment.description')}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 mt-12">
          {developmentServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-brand-red hover:bg-brand-red/90">
            <Link href={`/${locale}/${customDevUrl}`}>
              {t('customDevelopment.cta.learnMore')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
