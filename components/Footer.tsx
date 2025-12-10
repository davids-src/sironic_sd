'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Linkedin } from 'lucide-react';
import { trackPhoneClick, trackEmailClick } from '@/lib/analytics';
import { useTranslation } from '@/hooks/useTranslation';
import { getLocalizedPath } from '@/lib/routes';

export function Footer() {
  const { t, locale } = useTranslation();

  const footerLinks = [
    { name: t('nav.services'), href: `/${locale}/${getLocalizedPath('services', locale)}` },
    { name: t('nav.products'), href: `/${locale}/${getLocalizedPath('products', locale)}` },
    { name: t('nav.pricing'), href: `/${locale}/${getLocalizedPath('pricing', locale)}` },
    { name: t('nav.about'), href: `/${locale}/${getLocalizedPath('about', locale)}` },
    { name: t('nav.blog'), href: `/${locale}/${getLocalizedPath('blog', locale)}` },
    { name: t('nav.contact'), href: `/${locale}/${getLocalizedPath('contact', locale)}` },
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
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://facebook.com/sironicit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-brand-red transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/sironicit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-brand-red transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.links')}</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-brand-red transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red rounded-sm"
                  >
                    {link.name}
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
