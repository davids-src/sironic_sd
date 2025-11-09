'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSelector } from './LanguageSelector';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Főoldal', href: '/' },
    { name: 'Szolgáltatások', href: '/szolgaltatasok' },
    { name: 'Termékeink', href: '/termekeink' },
    { name: 'Árak', href: '/arak' },
    { name: 'Rólunk', href: '/rolunk' },
    { name: 'Blog', href: '/blog' },
    { name: 'Kapcsolat', href: '/kapcsolat' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <img 
              src="/logo_rgb.svg" 
              alt="SIRONIC" 
              className="h-8 w-8 flex-shrink-0"
            />
            <span className="text-xl font-bold">SIRONIC</span>
          </Link>
        </div>
        <div className="flex lg:hidden gap-2">
          <LanguageSelector />
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:items-center lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 transition-colors hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 rounded-sm px-2 py-1"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <LanguageSelector />
          <ThemeToggle />
          <Button asChild className="bg-brand-red hover:bg-brand-red/90">
            <Link href="/kapcsolat">Kérj ajánlatot</Link>
          </Button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="lg:hidden border-t">
          <div className="space-y-1 px-4 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="w-full bg-brand-red hover:bg-brand-red/90 mt-2">
              <Link href="/kapcsolat" onClick={() => setMobileMenuOpen(false)}>
                Kérj ajánlatot
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}