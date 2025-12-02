'use client';

import { ServiceBlock } from './ServiceBlock';
import { Wifi, Network, Shield } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';

export function NetworkOptimizationSection() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || 'hu';

  const networkUrl = locale === 'hu' ? 'halozat-fejlesztes' :
    locale === 'en' ? 'network-optimization' :
      locale === 'de' ? 'netzwerk-optimierung' :
        locale === 'sk' ? 'optimalizacia-siete' :
          'optimizare-retea';

  const features = [
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

  return (
    <ServiceBlock
      title={t('networkOptimization.title')}
      subtitle={t('networkOptimization.badge')}
      description={t('networkOptimization.subtitle')}
      features={features}
      ctaText={t('networkOptimization.cta')}
      ctaLink={`/${locale}/${networkUrl}`}
      variant="highlighted"
    />
  );
}
