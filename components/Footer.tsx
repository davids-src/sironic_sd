'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Mail, Phone, MapPin } from 'lucide-react';
import { trackPhoneClick, trackEmailClick } from '@/lib/analytics';
import { useTranslation } from '@/hooks/useTranslation';

export function Footer() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || 'hu';

  const footerLinks = [
    { nameKey: 'nav.services', href: `/${locale}/szolgaltatasok` },
    { nameKey: 'nav.products', href: `/${locale}/termekeink` },
    { nameKey: 'nav.pricing', href: `/${locale}/arak` },
    { nameKey: 'nav.about', href: `/${locale}/rolunk` },
    { nameKey: 'nav.blog', href: '/blog' },
    { nameKey: 'nav.contact', href: `/${locale}/kapcsolat` },
  ];

  return (
    <footer className="border-t bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.companyName')}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t('footer.tagline')}
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              <strong>{t('footer.legalName')}</strong>
              <br />
              {t('footer.address')}
              <br />
              {t('footer.taxNumber')}
            </p>
            <div className="flex items-center gap-2 text-sm mb-2">
              <Mail className="h-4 w-4 text-brand-red" aria-hidden="true" />
              <a
                href="mailto:hello@sironic.hu"
                onClick={trackEmailClick}
                className="hover:text-brand-red transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red rounded-sm"
              >
                hello@sironic.hu
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm mb-2">
              <Phone className="h-4 w-4 text-brand-red" aria-hidden="true" />
              <a
                href="tel:+36702735532"
                onClick={trackPhoneClick}
                className="hover:text-brand-red transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red rounded-sm"
              >
                +36 70 273 5532
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-brand-red" aria-hidden="true" />
              <span>{t('footer.address')}</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.links')}</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.nameKey}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-brand-red transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red rounded-sm"
                  >
                    {t(link.nameKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.hours')}</h3>
            <p className="text-sm text-muted-foreground whitespace-pre-line">
              {t('footer.hoursValue')}
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>{t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}</p>
        </div>
      </div>
    </footer>
  );
}
