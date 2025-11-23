import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SkipToContent } from '@/components/SkipToContent';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = locales.includes(params.locale as any) ? params.locale : 'hu';
  let messages;
  try {
    messages = (await import(`@/locales/${locale}.json`)).default;
  } catch (error) {
    messages = (await import(`@/locales/hu.json`)).default;
  }

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://sironic.hu'),
    title: messages.meta.siteTitle,
    description: messages.meta.siteDescription,
    keywords: ['IT szolgáltatás', 'rendszerüzemeltetés', 'rendszergazda', 'hálózatépítés', 'IT biztonság', 'webfejlesztés', 'CRM fejlesztés', 'IT oktatás', 'informatikai képzés', 'biztonságtudatosság', 'digitális tréning', 'IT kereskedelem', 'IT eszköz értékesítés', 'hosting szolgáltatás', 'webtárhely', 'szerver bérlés', 'számítógép javítás', 'laptop szerviz', 'helyszíni szerviz', 'adatbiztonság', 'karbantartás', 'Székesfehérvár'],
    authors: [{ name: messages.meta.companyName }],
    openGraph: {
      title: messages.meta.siteTitle,
      description: messages.meta.siteDescription,
      type: 'website',
      locale: locale,
    },
  };
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

import HreflangTags from '@/components/HreflangTags';

import { TranslationsProvider } from '@/components/TranslationsProvider';

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`@/locales/${locale}.json`)).default;
  } catch (error) {
    messages = (await import(`@/locales/hu.json`)).default;
  }

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <HreflangTags />
      </head>
      <body className={inter.className}>
        <TranslationsProvider messages={messages} locale={locale}>
          <SkipToContent />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </TranslationsProvider>
      </body>
    </html>
  );
}
