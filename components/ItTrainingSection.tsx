'use client';

import { ServiceCard } from './ServiceCard';
import { Button } from './ui/button';
import { GraduationCap, Shield, Monitor, Users, ArrowRight, Info, Sparkles } from 'lucide-react';
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
    <section
      id="it-oktatas"
      className="py-16 lg:py-24 bg-gradient-to-b from-background to-accent/10 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/10 px-4 py-2 text-sm font-semibold text-brand-red mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            {t('itTraining.badge')}
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6 animate-fade-in">
            {t('itTraining.title')}
          </h2>
          <p className="text-xl sm:text-2xl font-medium text-brand-red/90 mb-4 animate-fade-in">
            {t('itTraining.subtitle')}
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed animate-fade-in">
            {t('itTraining.description')}
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {trainingServices.map((service, index) => (
            <div
              key={index}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>

        {/* Language Note */}
        <div className="mt-10 flex items-center justify-center gap-3 text-sm bg-accent/40 backdrop-blur-sm p-4 rounded-lg max-w-3xl mx-auto border border-accent/60 shadow-sm">
          <Info className="h-5 w-5 flex-shrink-0 text-brand-red" aria-hidden="true" />
          <p className="text-center text-foreground/90">{t('itTraining.languageNote')}</p>
        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-brand-red hover:bg-brand-red/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group w-full sm:w-auto"
          >
            <Link href={`/${locale}/${trainingUrl}`}>
              {t('itTraining.cta.learnMore')}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-brand-red/30 hover:border-brand-red/50 hover:bg-brand-red/5 w-full sm:w-auto"
          >
            <Link href={`/${locale}/kapcsolat?subject=IT%20Oktatás`}>
              {t('itTraining.cta.main')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
