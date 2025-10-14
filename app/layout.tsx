import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SkipToContent } from '@/components/SkipToContent';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://sironic.hu'),
  title: 'SIRONIC Rendszerház - IT megoldások vállalkozásoknak',
  description:
    'Teljes körű IT megoldások kis- és középvállalkozásoknak: karbantartás, hálózatépítés, adatbiztonság, webfejlesztés, IT kereskedelem, hosting és szerviz.',
  keywords: ['IT szolgáltatás', 'rendszerüzemeltetés', 'hálózatépítés', 'IT biztonság', 'webfejlesztés', 'IT kereskedelem', 'IT eszköz értékesítés', 'hosting szolgáltatás', 'webtárhely', 'szerver bérlés', 'számítógép javítás', 'laptop szerviz', 'helyszíni szerviz', 'Budapest'],
  authors: [{ name: 'SIRONIC Rendszerház' }],
  openGraph: {
    title: 'SIRONIC Rendszerház - IT megoldások vállalkozásoknak',
    description:
      'Teljes körű IT megoldások kis- és középvállalkozásoknak: karbantartás, hálózatépítés, adatbiztonság, webfejlesztés, IT kereskedelem, hosting és szerviz.',
    type: 'website',
    locale: 'hu_HU',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <SkipToContent />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
