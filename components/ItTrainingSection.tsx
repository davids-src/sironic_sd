'use client';

import { ServiceBlock } from './ServiceBlock';
import { GraduationCap, Shield, Monitor, Users } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';

export function ItTrainingSection() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || 'hu';

  const trainingServices = [
    {
      title: t('itTraining.cards.personalized.title'),
      description: t('itTraining.cards.personalized.description'),
      icon: GraduationCap,
    },
    {
      title: t('itTraining.cards.security.title'),
      description: t('itTraining.cards.security.description'),
      icon: Shield,
    },
    {
      title: t('itTraining.cards.corporate.title'),
      description: t('itTraining.cards.corporate.description'),
      icon: Users,
    },
  ];

  const trainingUrl = locale === 'hu' ? 'oktatas' :
    locale === 'en' ? 'it-training' :
      locale === 'de' ? 'it-schulung' :
        locale === 'sk' ? 'it-vzdelavanie' :
          'training-it';

  return (
    <ServiceBlock
      title={t('itTraining.title')}
      subtitle={t('itTraining.badge')}
      description={`${t('itTraining.subtitle')} — ${t('itTraining.description')}`}
      features={trainingServices}
      ctaText={t('itTraining.cta.learnMore')}
      ctaLink={`/${locale}/${trainingUrl}`}
      secondaryCtaText={t('itTraining.cta.main')}
      secondaryCtaLink={`/${locale}/kapcsolat?subject=IT%20Oktatás`}
      secondaryCtaVariant="outline"
      variant="standard"
    />
  );
}
