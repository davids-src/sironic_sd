'use client';

import { CTAButton } from '@/components/CTAButton';
import { SectionTitle } from '@/components/SectionTitle';
import { InfoCard } from '@/components/InfoCard';
import { CheckCircle, Target, Users, Lightbulb, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs';

const iconMap: Record<string, any> = {
  Target,
  Users,
  Lightbulb,
};

export default function RolunkPage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || 'hu';

  const intro = t('aboutPage.intro', []);
  const stats = t('aboutPage.stats', []);
  const missionParagraphs = t('aboutPage.mission.paragraphs', []);
  const values = t('aboutPage.values.items', []);
  const howWeWorkSteps = t('aboutPage.howWeWork.steps', []);

  return (
    <>
      <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <Breadcrumbs items={[{ label: t('nav.about'), href: `/${locale}/rolunk` }]} />
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-8">
              {t('aboutPage.title')}
            </h1>
            {intro.map((paragraph: string, index: number) => (
              <p key={index} className="text-lg text-muted-foreground leading-relaxed mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat: any, index: number) => (
              <div key={index} className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
                <div className="text-4xl font-bold text-brand-red mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mx-auto max-w-3xl">
            <SectionTitle title={t('aboutPage.mission.title')} />
            <div className="prose prose-lg dark:prose-invert mx-auto mb-12">
              {missionParagraphs.map((paragraph: string, index: number) => (
                <p key={index} className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="text-center">
              <CTAButton asChild variant="outline" size="lg">
                <Link href={`/${locale}/szolgaltatasok`}>
                  {t('nav.services')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle title={t('aboutPage.values.title')} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value: any, index: number) => {
              const IconComponent = iconMap[['Target', 'Users', 'Lightbulb'][index]] || Target;
              return (
                <InfoCard
                  key={index}
                  title={value.title}
                  description={value.description}
                  icon={IconComponent}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <SectionTitle title={t('aboutPage.howWeWork.title')} />
            <div className="space-y-4">
              {howWeWorkSteps.map((step: string, index: number) => (
                <div key={index} className="flex gap-4 items-start p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
                  <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm shrink-0">
                    <CheckCircle className="h-5 w-5 text-brand-red" />
                  </div>
                  <p className="text-lg font-medium pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-brand-red text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            {t('aboutPage.finalCta.title')}
          </h2>
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto font-medium">
            {t('aboutPage.finalCta.subtitle')}
          </p>
          <CTAButton
            asChild
            size="lg"
            className="bg-white text-brand-red hover:bg-gray-100 border-none text-lg px-8 py-6 h-auto"
          >
            <Link href={`/${locale}/kapcsolat`}>
              {t('aboutPage.finalCta.button')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </CTAButton>
        </div>
      </section>
    </>
  );
}
