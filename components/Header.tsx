'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Server, Network, Shield, Code, Monitor, Wrench, GraduationCap, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslation } from '@/hooks/useTranslation';
import { getLocalizedPath } from '@/lib/routes';
import { Locale } from '@/i18n';
import { trackButtonClick, trackLinkClick } from '@/lib/analytics';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const { t, locale } = useTranslation();
  const currentLocale = locale as Locale;

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigation = [
    { name: t('nav.home'), href: `/${locale}` },
    { name: t('nav.pricing'), href: `/${locale}/${getLocalizedPath('pricing', currentLocale)}` },
    { name: t('nav.about'), href: `/${locale}/${getLocalizedPath('about', currentLocale)}` },
    { name: t('nav.blog'), href: `/${locale}/${getLocalizedPath('blog', currentLocale)}` },
    { name: t('nav.contact'), href: `/${locale}/${getLocalizedPath('contact', currentLocale)}` },
  ];

  const serviceLinks = [
    { name: t('services.systemOperation.title'), href: `/${locale}/${getLocalizedPath('services', currentLocale)}`, icon: Server },
    { name: t('services.networking.title'), href: `/${locale}/${getLocalizedPath('network-optimization', currentLocale)}`, icon: Network },
    { name: t('services.security.title'), href: `/${locale}/${getLocalizedPath('services', currentLocale)}#security`, icon: Shield },
    { name: t('services.development.title'), href: `/${locale}/${getLocalizedPath('custom-development', currentLocale)}`, icon: Code },
    { name: t('services.hosting.title'), href: `/${locale}/${getLocalizedPath('services', currentLocale)}#hosting`, icon: Monitor },
    { name: t('services.repair.title'), href: `/${locale}/${getLocalizedPath('repair-service', currentLocale)}`, icon: Wrench },
    { name: t('nav.itTraining') || 'IT Training', href: `/${locale}/${getLocalizedPath('it-training', currentLocale)}`, icon: GraduationCap },
    { name: t('nav.onsitePresence') || 'On-Site IT', href: `/${locale}/${getLocalizedPath('onsite-presence', currentLocale)}`, icon: MapPin },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto max-w-7xl p-4 lg:px-8 flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href={`/${locale}`} className="-m-1.5 p-1.5 flex items-center gap-2 button-press">
            <img
              src="/favicon.svg"
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
        <div className="hidden lg:flex lg:gap-x-6 lg:items-center">
          <Link
            href={`/${locale}`}
            onClick={() => trackLinkClick(`/${locale}`, 'nav_home')}
            className="text-sm font-semibold leading-6 transition-colors hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 rounded-sm px-2 py-1 button-press"
          >
            {t('nav.home')}
          </Link>

          {/* Services Dropdown */}
          <div ref={servicesRef} className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => setServicesOpen(true)}
              className="flex items-center gap-1 text-sm font-semibold leading-6 transition-colors hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 rounded-sm px-2 py-1 button-press"
            >
              {t('nav.services')}
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {servicesOpen && (
              <div
                className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[520px] bg-background border rounded-xl shadow-xl p-4 animate-fade-in z-50"
                onMouseLeave={() => setServicesOpen(false)}
              >
                <div className="grid grid-cols-2 gap-1">
                  {serviceLinks.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.name}
                        href={service.href}
                        onClick={() => {
                          setServicesOpen(false);
                          trackLinkClick(service.href, `nav_service_${service.name}`);
                        }}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm hover:bg-accent transition-colors group"
                      >
                        <div className="p-1.5 rounded-md bg-brand-red/10 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors shrink-0">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="font-medium leading-tight">{service.name}</span>
                      </Link>
                    );
                  })}
                </div>
                <div className="border-t mt-3 pt-3">
                  <Link
                    href={`/${locale}/${getLocalizedPath('services', currentLocale)}`}
                    onClick={() => setServicesOpen(false)}
                    className="text-sm font-semibold text-brand-red hover:text-brand-red/80 transition-colors flex items-center gap-1"
                  >
                    {t('services.viewAll')} →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {navigation.slice(1).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => trackLinkClick(item.href, `nav_${item.name}`)}
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
            <Link
              href={`/${locale}/${getLocalizedPath('contact', currentLocale)}`}
              onClick={() => trackButtonClick('header_cta', 'desktop')}
            >
              {t('nav.ctaButton')}
            </Link>
          </Button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="lg:hidden border-t animate-slide-down gpu-accelerated">
          <div className="space-y-1 px-4 pb-3 pt-2 flex flex-col items-center">
            <Link
              href={`/${locale}`}
              className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-accent text-center w-full button-press"
              onClick={() => {
                setMobileMenuOpen(false);
                trackLinkClick(`/${locale}`, 'nav_mobile_home');
              }}
            >
              {t('nav.home')}
            </Link>

            {/* Mobile Services Accordion */}
            <div className="w-full">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-center gap-1 rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-accent w-full button-press"
              >
                {t('nav.services')}
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 space-y-0.5 mt-1 mb-2">
                  {serviceLinks.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm hover:bg-accent"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileServicesOpen(false);
                          trackLinkClick(service.href, `nav_mobile_service_${service.name}`);
                        }}
                      >
                        <Icon className="h-4 w-4 text-brand-red shrink-0" />
                        <span>{service.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {navigation.slice(1).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-accent text-center w-full button-press"
                onClick={() => {
                  setMobileMenuOpen(false);
                  trackLinkClick(item.href, `nav_mobile_${item.name}`);
                }}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 w-full max-w-xs">
              <Button asChild className="w-full bg-brand-red hover:bg-brand-red/90 button-press shadow-lg">
                <Link
                  href={`/${locale}/${getLocalizedPath('contact', currentLocale)}`}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    trackButtonClick('header_cta', 'mobile');
                  }}
                >
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
