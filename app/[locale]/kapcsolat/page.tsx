'use client';

import { Suspense } from 'react';
import { ContactForm } from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { useParams } from 'next/navigation';

export default function KapcsolatPage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || 'hu';

  return (
    <>
      <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-background to-muted">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs items={[{ label: t('nav.contact'), href: `/${locale}/kapcsolat` }]} />
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">{t('contact.form.title')}</h2>
              <Suspense fallback={<div>{t('common.loading')}</div>}>
                <ContactForm />
              </Suspense>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">{t('contact.info.title')}</h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-red/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-brand-red" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t('contact.info.email')}</h3>
                    <a
                      href="mailto:hello@sironic.hu"
                      className="text-muted-foreground hover:text-brand-red transition-colors"
                    >
                      hello@sironic.hu
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-red/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-brand-red" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t('contact.info.phone')}</h3>
                    <a
                      href="tel:+36702735532"
                      className="text-muted-foreground hover:text-brand-red transition-colors"
                    >
                      +36 70 273 5532
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-red/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-brand-red" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t('contact.info.location')}</h3>
                    <p className="text-muted-foreground">Székesfehérvár</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-red/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-brand-red" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t('contact.info.hours')}</h3>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {t('contact.info.hoursValue')}
                    </p>
                  </div>
                </div>

                <div className="bg-accent/50 rounded-lg p-6 border border-border">
                  <h3 className="font-semibold mb-2">{t('contact.info.quickResponse')}</h3>
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
