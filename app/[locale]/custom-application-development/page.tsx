'use client';

import { EuDevLanding } from '@/components/EuDevLanding';
import { FAQSchema } from '@/components/structured-data/FAQSchema';
import { BreadcrumbSchema } from '@/components/structured-data/BreadcrumbSchema';
import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';

export default function CustomDevelopmentPage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sironic.eu';

  // Prepare FAQs for schema (reusing existing keys or new ones)
  const faqs = t('customDevelopmentPage.faq.items', []).map((item: any) => ({
    question: item.question,
    answer: item.answer
  }));

  // Prepare breadcrumbs for schema
  const breadcrumbs = [
    { name: t('customDevelopmentPage.breadcrumb.home'), url: `${baseUrl}/${locale}` },
    { name: t('customDevelopmentPage.breadcrumb.customDevelopment'), url: `${baseUrl}/${locale}/custom-application-development` }
  ];

  return (
    <main>
      <EuDevLanding />

      {/* Structured Data */}
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbs} />
    </main>
  );
}
