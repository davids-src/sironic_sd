'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslation } from '@/hooks/useTranslation';
import { getLocalizedPath } from '@/lib/routes';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, locale } = useTranslation();

  const navigation = [
    { name: t('nav.home'), href: `/${locale}` },
    { name: t('nav.services'), href: `/${locale}/${getLocalizedPath('services', locale)}` },
    { name: t('nav.products'), href: `/${locale}/${getLocalizedPath('products', locale)}` },
    { name: t('nav.pricing'), href: `/${locale}/${getLocalizedPath('pricing', locale)}` },
    { name: t('nav.about'), href: `/${locale}/${getLocalizedPath('about', locale)}` },
    { name: t('nav.blog'), href: `/${locale}/${getLocalizedPath('blog', locale)}` },
    { name: t('nav.contact'), href: `/${locale}/${getLocalizedPath('contact', locale)}` },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto max-w-7xl p-4 lg:px-8 flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href={`/${locale}`} className="-m-1.5 p-1.5 flex items-center gap-2 button-press">
            <img
              src="/logo_rgb.svg"
              alt="SIRONIC"
              className="h-8 w-8 flex-shrink-0"
            />
            <span className="text-xl font-bold">SIRONIC</span>
          </Link>
        </div>
        <div className="flex lg:hidden gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="button-press"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 transition-colors hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 rounded-sm px-2 py-1 button-press"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button asChild className="bg-brand-red hover:bg-brand-red/90 button-press glow-red-hover shadow-md">
            <Link href={`/${locale}/${getLocalizedPath('contact', locale)}`}>{t('nav.ctaButton')}</Link>
          </Button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="lg:hidden border-t animate-slide-down gpu-accelerated">
          <div className="space-y-1 px-4 pb-3 pt-2 flex flex-col items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-accent text-center w-full button-press"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 w-full max-w-xs">
              <Button asChild className="w-full bg-brand-red hover:bg-brand-red/90 button-press shadow-lg">
                <Link href={`/${locale}/${getLocalizedPath('contact', locale)}`} onClick={() => setMobileMenuOpen(false)}>
                  {t('nav.ctaButton')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
