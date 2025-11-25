'use client';

import { ServiceCard } from './ServiceCard';
import { Button } from './ui/button';
import { GraduationCap, Shield, Monitor, Users, ArrowRight, Info } from 'lucide-react';
import Link from 'next/link';
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
      title: t('itTraining.cards.software.title'),
      description: t('itTraining.cards.software.description'),
      icon: Monitor,
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
    <section className="py-24 bg-gradient-to-b from-background to-accent/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-4">
          <div className="inline-flex items-center rounded-full bg-brand-red/10 px-4 py-2 text-sm font-medium text-brand-red mb-4">
            {t('itTraining.badge')}
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {t('itTraining.title')}
          </h2>
          <p className="text-lg text-muted-foreground mb-2">
            {t('itTraining.subtitle')}
          </p>
          <p className="text-base text-muted-foreground">
            {t('itTraining.description')}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {trainingServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground bg-accent/30 p-4 rounded-lg max-w-3xl mx-auto">
          <Info className="h-4 w-4 flex-shrink-0 text-brand-red" />
          <p className="text-center">{t('itTraining.languageNote')}</p>
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-brand-red hover:bg-brand-red/90">
            <Link href={`/${locale}/${trainingUrl}`}>
              {t('itTraining.cta.learnMore')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
