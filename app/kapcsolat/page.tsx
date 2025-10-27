import { Suspense } from 'react';
import { ContactForm } from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kapcsolat - SIRONIC Rendszerház',
  description:
    'Lépj kapcsolatba velünk! Kérj ingyenes IT konzultációt és ajánlatot. E-mail: hello@sironic.hu, Tel: +36 70 273 5532',
};

export default function KapcsolatPage() {
  return (
    <>
      <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-background to-muted">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Kapcsolat
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Van kérdésed vagy szeretnél ingyenes konzultációt? Vedd fel velünk a kapcsolatot, és
              hamarosan válaszolunk!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Küldj üzenetet</h2>
              <Suspense fallback={<div>Betöltés...</div>}>
                <ContactForm />
              </Suspense>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Elérhetőségeink</h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-red/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-brand-red" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">E-mail</h3>
                    <a
                      href="mailto:hello@sironic.hu"
                      className="text-muted-foreground hover:text-brand-red transition-colors"
                    >
                      hello@sironic.hu
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-red/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-brand-red" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <a
                      href="tel:+36702735532"
                      className="text-muted-foreground hover:text-brand-red transition-colors"
                    >
                      +36 70 273 5532
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-red/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-brand-red" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Székhely</h3>
                    <p className="text-muted-foreground">Székesfehérvár</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-red/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-brand-red" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Nyitvatartás</h3>
                    <p className="text-muted-foreground">
                      Hétfő – Péntek
                      <br />
                      8:00 – 17:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Gyors válasz</h3>
                <p className="text-sm text-muted-foreground">
                  Általában 24 órán belül válaszolunk minden megkeresésre munkanapokon. Sürgős esetben
                  hívj minket telefonon!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
