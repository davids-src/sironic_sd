'use client';

import { Button } from '@/components/ui/button';
import { CTAButton } from '@/components/CTAButton';
import { ArrowRight, Sparkles, CheckCircle, Gift } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/hooks/useTranslation';
import { getLocalizedPath } from '@/lib/routes';
import { Locale } from '@/i18n';

export function MindenCegnekSection() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as Locale) || 'hu';

  return (
    <section
      id="minden-cegnek-legyen-informatikusa"
      className="py-20 lg:py-32 bg-white dark:bg-gray-950 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full mb-8 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30">
            <Sparkles className="h-4 w-4 text-brand-red" aria-hidden="true" />
            <span className="text-sm font-semibold text-brand-red">{t('mindenCegnek.badge')}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 leading-tight text-gray-900 dark:text-white">
            {t('mindenCegnek.title')}
          </h2>
          <p className="text-xl sm:text-2xl font-medium text-brand-red mb-8">
            {t('mindenCegnek.subtitle')}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('mindenCegnek.description')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 mb-16">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm dark:bg-gray-900 dark:border-gray-800 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                  <CheckCircle className="h-6 w-6 text-brand-red" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('mindenCegnek.features.costEffective')}</h3>
                  <p className="text-muted-foreground">
                    Professzionális IT szolgáltatás havidíjas konstrukcióban, rejtett költségek nélkül.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-2xl p-8 border border-red-100 shadow-sm dark:bg-red-900/10 dark:border-red-900/20 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                  <Gift className="h-6 w-6 text-brand-red" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('mindenCegnek.features.discount')}</h3>
                  <p className="text-muted-foreground">
                    Kezdje velünk a közös munkát kedvezményes feltételekkel és extra szolgáltatásokkal.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton
              asChild
              size="lg"
              className="w-full sm:w-auto text-lg px-8 py-6 h-auto"
            >
              <Link href={`/${locale}/${getLocalizedPath('contact', locale as Locale)}?subject=Minden%20cégnek%20legyen%20informatikusa`}>
                {t('mindenCegnek.cta.consultation')}
              </Link>
            </CTAButton>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-gray-200 hover:bg-gray-50 text-gray-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 w-full sm:w-auto text-lg px-8 py-6 h-auto"
            >
              <Link href={`/${locale}/minden-cegnek-legyen-informatikusa`}>{t('mindenCegnek.cta.learnMore')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
