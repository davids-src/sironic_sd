'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const footerLinks = [
    { name: 'Szolgáltatások', href: '/szolgaltatasok' },
    { name: 'Fejlesztéseink', href: '/fejleszteseink' },
    { name: 'Termékeink', href: '/termekeink' },
    { name: 'Árak', href: '/arak' },
    { name: 'Rólunk', href: '/rolunk' },
    { name: 'Blog', href: '/blog' },
    { name: 'Kapcsolat', href: '/kapcsolat' },
    { name: 'Adatkezelési tájékoztató', href: '/adatkezeles' },
  ];

  return (
    <footer className="border-t bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">SIRONIC Rendszerház</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Teljes körű IT megoldások kis- és középvállalkozásoknak
            </p>
            <div className="flex items-center gap-2 text-sm mb-2">
              <Mail className="h-4 w-4 text-brand-red" aria-hidden="true" />
              <a
                href="mailto:info@sironic.hu"
                className="hover:text-brand-red transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red rounded-sm"
              >
                info@sironic.hu
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm mb-2">
              <Phone className="h-4 w-4 text-brand-red" aria-hidden="true" />
              <a
                href="tel:+36301234567"
                className="hover:text-brand-red transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red rounded-sm"
              >
                +36 30 123 4567
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-brand-red" aria-hidden="true" />
              <span>Budapest</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Linkek</h3>
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
            <h3 className="text-lg font-semibold mb-4">Nyitvatartás</h3>
            <p className="text-sm text-muted-foreground">
              Hétfő – Péntek
              <br />
              8:00 – 17:00
            </p>
            <button
              className="mt-4 text-sm text-muted-foreground hover:text-brand-red transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red rounded-sm"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).cookieConsent) {
                  (window as any).cookieConsent.show();
                }
              }}
            >
              Süti beállítások
            </button>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SIRONIC Rendszerház. Minden jog fenntartva.</p>
        </div>
      </div>
    </footer>
  );
}
