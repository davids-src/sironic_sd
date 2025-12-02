'use client';

import { CTAButton } from '@/components/CTAButton';
import { SectionTitle } from '@/components/SectionTitle';
import { InfoCard } from '@/components/InfoCard';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, CheckCircle, Wrench } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/hooks/useTranslation';

export function RepairServiceSection() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || 'hu';

  const benefits = t('repairService.benefits', []) as string[];

  const repairUrl = locale === 'hu' ? 'szerviz-javitas' :
    locale === 'en' ? 'repair-service' :
      locale === 'de' ? 'reparatur-service' :
        locale === 'sk' ? 'servisne-sluzby' :
          'servicii-reparatii';

  return (
    <section
      id="szerviz-javitas"
      className="relative overflow-hidden bg-white py-16 dark:bg-gray-950 lg:py-24"
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" aria-hidden="true" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-brand-red dark:bg-red-900/20 dark:text-red-400">
            <Wrench className="h-4 w-4" aria-hidden="true" />
            {t('repairService.badge')}
          </div>

          <SectionTitle
            title={t('repairService.title')}
            subtitle={t('repairService.subtitle')}
            className="mb-8"
          />

          <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            {t('repairService.description')}
          </p>
        </div>

        <div className="mx-auto mb-12 grid max-w-4xl gap-6 md:grid-cols-2">
          <InfoCard
            title={t('repairService.cards.onsite.title')}
            description={t('repairService.cards.onsite.description')}
            icon={MapPin}
          />
          <InfoCard
            title={t('repairService.cards.postal.title')}
            description={t('repairService.cards.postal.description')}
            icon={Mail}
          />
        </div>

        <div className="mx-auto mb-12 max-w-3xl">
          <div className="rounded-xl border border-gray-100 bg-gray-50 p-8 dark:border-gray-800 dark:bg-gray-900/50">
            <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-white">
              <CheckCircle className="h-6 w-6 text-brand-red" />
              {t('common.whatYouGet')}
            </h3>
            <ul className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-brand-red" />
                  <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href={`/${locale}/kapcsolat?subject=Szerviz%20és%20javítás`}>
            <CTAButton className="w-full sm:w-auto">
              {t('repairService.cta.main')}
            </CTAButton>
          </Link>
          <Link href={`/${locale}/${repairUrl}`}>
            <Button
              variant="outline"
              size="lg"
              className="w-full border-gray-200 hover:bg-gray-50 hover:text-brand-red dark:border-gray-800 dark:hover:bg-gray-900 sm:w-auto"
            >
              {t('repairService.cta.learnMore')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
