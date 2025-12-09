'use client';

import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Server, Network, Shield, Code, CheckCircle, ArrowRight, ShoppingCart, Cloud, Wrench, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ServiceListSchema } from '@/components/structured-data/ServiceListSchema';

export default function SzolgaltatasokPage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || 'hu';

  const services = [
    {
      title: t('services.systemOperation.title'),
      description: t('services.systemOperation.description'),
      icon: Server,
      features: t('servicesPage.details.systemOperation.features', []),
    },
    {
      title: t('services.networking.title'),
      description: t('services.networking.description'),
      icon: Network,
      features: t('servicesPage.details.networking.features', []),
    },
    {
      title: t('services.security.title'),
      description: t('services.security.description'),
      icon: Shield,
      features: t('servicesPage.details.security.features', []),
    },
    {
      title: t('services.development.title'),
      description: t('services.development.description'),
      icon: Code,
      features: t('servicesPage.details.development.features', []),
      link: `/${locale}/egyedi-alkalmazas-fejlesztes`,
    },
    {
      title: t('services.commerce.title'),
      description: t('servicesPage.details.commerce.description'),
      icon: ShoppingCart,
      features: t('servicesPage.details.commerce.features', []),
    },
    {
      title: t('services.hosting.title'),
      description: t('servicesPage.details.hosting.description'),
      icon: Cloud,
      features: t('servicesPage.details.hosting.features', []),
    },
    {
      title: t('servicesPage.details.repair.title'),
      description: t('servicesPage.details.repair.description'),
      icon: Wrench,
      features: t('servicesPage.details.repair.features', []),
    },
    {
      title: t('servicesPage.details.training.title'),
      description: t('servicesPage.details.training.description'),
      icon: GraduationCap,
      features: t('servicesPage.details.training.features', []),
    },
  ];

  return (
    <>
      <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <Breadcrumbs items={[{ label: t('nav.services'), href: `/${locale}/szolgaltatasok` }]} />
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-8">
              {t('servicesPage.title')}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('servicesPage.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
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
                  <h3 className="text-xl font-semibold mb-4">{t('common.whatYouGet')}</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature: string, fIndex: number) => (
                      <li key={fIndex} className="flex gap-3 items-start">
                        <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {(service as any).link && (
                    <div className="mt-6">
                      <Button asChild variant="outline" className="group">
                        <Link href={(service as any).link}>
                          {t('common.learnMore')}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-brand-red text-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {t('servicesPage.cta.title')}
          </h2>
          <p className="text-lg mb-8 opacity-90">
            {t('servicesPage.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-brand-red group">
              <Link href={`/${locale}/kapcsolat`}>
                {t('servicesPage.cta.requestQuote')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
              <Link href={`/${locale}/kapcsolat?subject=Szerviz%20igény`}>
                {t('servicesPage.cta.reportService')}
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Structured Data */}
      <ServiceListSchema locale={locale} />
    </>
  );
}
