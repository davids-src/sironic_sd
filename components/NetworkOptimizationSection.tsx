'use client';

import { ServiceCard } from './ServiceCard';
import { Button } from './ui/button';
import { Wifi, Network, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';

export function NetworkOptimizationSection() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || 'hu';

  const networkFeatures = [
    {
      title: t('networkOptimization.features.wifi.title'),
      description: t('networkOptimization.features.wifi.description'),
      icon: Wifi,
    },
    {
      title: t('networkOptimization.features.speed.title'),
      description: t('networkOptimization.features.speed.description'),
      icon: Network,
    },
    {
      title: t('networkOptimization.features.reliability.title'),
      description: t('networkOptimization.features.reliability.description'),
      icon: Shield,
    },
  ];

  const networkUrl = locale === 'hu' ? 'halozat-fejlesztes' :
                     locale === 'en' ? 'network-optimization' :
                     locale === 'de' ? 'netzwerk-optimierung' :
                     locale === 'sk' ? 'optimalizacia-siete' :
                     'optimizare-retea';

  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-4">
          <div className="inline-flex items-center rounded-full bg-brand-red/10 px-4 py-2 text-sm font-medium text-brand-red mb-4">
            {t('networkOptimization.badge')}
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {t('networkOptimization.title')}
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            {t('networkOptimization.subtitle')}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 mt-12">
          {networkFeatures.map((feature, index) => (
            <ServiceCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-brand-red hover:bg-brand-red/90">
            <Link href={`/${locale}/${networkUrl}`}>
              {t('networkOptimization.cta')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
