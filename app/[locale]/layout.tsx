import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SkipToContent } from '@/components/SkipToContent';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import HreflangTags from '@/components/HreflangTags';
import { TranslationsProvider } from '@/components/TranslationsProvider';
import { LocalBusinessSchema, OrganizationSchema, WebSiteSchema } from '@/components/StructuredData';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = locales.includes(params.locale as any) ? params.locale : 'hu';
  let messages;
  try {
    messages = (await import(`@/locales/${locale}.json`)).default;
  } catch (error) {
    messages = (await import(`@/locales/hu.json`)).default;
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sironic.hu';

  return {
    metadataBase: new URL(baseUrl),
    title: messages.meta.siteTitle,
    description: messages.meta.siteDescription,
    keywords: messages.meta.keywords ?? [],
    authors: [{ name: messages.meta.companyName }],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'hu': `${baseUrl}/hu`,
        'en': `${baseUrl}/en`,
        'de': `${baseUrl}/de`,
        'sk': `${baseUrl}/sk`,
        'ro': `${baseUrl}/ro`,
        'hr': `${baseUrl}/hr`,
        'sl': `${baseUrl}/sl`,
        'fr': `${baseUrl}/fr`,
        'it': `${baseUrl}/it`,
        'es': `${baseUrl}/es`,
        'x-default': baseUrl,
      },
    },
    openGraph: {
      title: messages.meta.siteTitle,
      description: messages.meta.siteDescription,
      type: 'website',
      locale: locale,
      url: `${baseUrl}/${locale}`,
      siteName: messages.meta.companyName,
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.meta.siteTitle,
      description: messages.meta.siteDescription,
    },
  };
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

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
        <HreflangTags />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
      </head>
      <body className={inter.className}>
        <LocalBusinessSchema locale={locale} />
        <OrganizationSchema />
        <WebSiteSchema locale={locale} />
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
