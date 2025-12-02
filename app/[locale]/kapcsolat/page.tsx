'use client';

import { Suspense } from 'react';
import { ContactForm } from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { useParams } from 'next/navigation';
import { SectionTitle } from '@/components/SectionTitle';

export default function KapcsolatPage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || 'hu';

  return (
    <>
      <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <Breadcrumbs items={[{ label: t('nav.contact'), href: `/${locale}/kapcsolat` }]} />
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionTitle title={t('contact.form.title')} className="mb-8" />
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
                <Suspense fallback={<div>{t('common.loading')}</div>}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>

            <div>
              <SectionTitle title={t('contact.info.title')} className="mb-8" />
              <div className="space-y-8">
                <div className="flex gap-6 items-start p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-sm transition-shadow">
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center">
                    <Mail className="h-6 w-6 text-brand-red" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{t('contact.info.email')}</h3>
                    <a
                      href="mailto:hello@sironic.hu"
                      className="text-muted-foreground hover:text-brand-red transition-colors text-lg"
                    >
                      hello@sironic.hu
                    </a>
                  </div>
                </div>

                <div className="flex gap-6 items-start p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-sm transition-shadow">
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center">
                    <Phone className="h-6 w-6 text-brand-red" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{t('contact.info.phone')}</h3>
                    <a
                      href="tel:+36702735532"
                      className="text-muted-foreground hover:text-brand-red transition-colors text-lg"
                    >
                      +36 70 273 5532
                    </a>
                  </div>
                </div>

                <div className="flex gap-6 items-start p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-sm transition-shadow">
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-brand-red" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{t('contact.info.location')}</h3>
                    <p className="text-muted-foreground text-lg">Székesfehérvár</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-sm transition-shadow">
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center">
                    <Clock className="h-6 w-6 text-brand-red" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{t('contact.info.hours')}</h3>
                    <p className="text-muted-foreground whitespace-pre-line text-lg">
                      {t('contact.info.hoursValue')}
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-6 border border-red-100 dark:border-red-900/20">
                  <h3 className="font-bold mb-2 text-brand-red">{t('contact.info.quickResponse')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('contact.info.quickResponseText')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
