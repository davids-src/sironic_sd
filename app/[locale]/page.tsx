import { Metadata } from 'next';
import { HomePage } from '@/components/HomePage';
import { locales } from '@/i18n';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = locales.includes(params.locale as any) ? params.locale : 'hu';
  let messages;
  try {
    messages = (await import(`@/locales/${locale}.json`)).default;
  } catch (error) {
    messages = (await import(`@/locales/hu.json`)).default;
  }

  return {
    title: messages.meta.siteTitle,
    description: messages.meta.siteDescription,
    alternates: {
      canonical: `https://sironic.hu/${locale}`,
    },
  };
}

export default function Page() {
  return <HomePage />;
}
