'use client';

import { ServiceBlock } from './ServiceBlock';
import { Code2, MonitorSmartphone, Smartphone } from 'lucide-react';
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
    <ServiceBlock
      title={t('customDevelopment.title')}
      subtitle={t('customDevelopment.badge')}
      description={`${t('customDevelopment.subtitle')} — ${t('customDevelopment.description')}`}
      features={developmentServices}
      ctaText={t('customDevelopment.cta.learnMore')}
      ctaLink={`/${locale}/${customDevUrl}`}
      variant="highlighted"
    />
  );
}
