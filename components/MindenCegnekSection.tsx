'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function MindenCegnekSection() {
  return (
    <section
      id="minden-cegnek-legyen-informatikusa"
      className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-brand-red/20 px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-5 w-5 text-brand-red" aria-hidden="true" />
            <span className="text-sm font-semibold text-brand-red">Új szolgáltatás</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
            <span className="inline-block mr-3" role="img" aria-label="Computer">
              🖥️
            </span>
            Minden cégnek legyen informatikusa
          </h2>
          <p className="text-xl sm:text-2xl font-medium text-red-300 mb-4">
            IT megoldás, mintha saját IT-sod lenne
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 text-center">
            Nem kell saját informatikust alkalmaznod ahhoz, hogy stabil, biztonságos és gyors
            rendszereid legyenek. A SIRONIC havidíjas konstrukciója úgy működik, mintha a csapatunk
            a Te cégednél dolgozna — de csak annyit fizetsz, amennyire ténylegesen szükség van.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8 border border-white/20 mb-8">
            <p className="text-lg text-gray-200 flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">💡</span>
              <span>
                <strong className="text-white">Költséghatékony, infrastruktúrára optimalizált IT
                támogatás</strong>
                {' '}– rugalmasan, megbízhatóan, átláthatóan.
              </span>
            </p>
          </div>

          <div className="bg-gradient-to-r from-brand-red/20 to-brand-red/10 rounded-lg p-6 sm:p-8 border border-brand-red/30 mb-8">
            <p className="text-lg sm:text-xl text-white flex items-start gap-3">
              <span className="text-3xl flex-shrink-0" role="img" aria-label="Gift">
                🎁
              </span>
              <span>
                <strong>December 31-ig</strong> minden előzetes konzultációt kérő partnerünknek{' '}
                <strong className="text-red-300">10% kedvezményt</strong> adunk az első 3 hónap
                havidíjából!
              </span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-brand-red hover:bg-brand-red/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group w-full sm:w-auto"
            >
              <Link href="/kapcsolat?subject=Minden%20cégnek%20legyen%20informatikusa">
                Kérj előzetes konzultációt
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 backdrop-blur-sm w-full sm:w-auto"
            >
              <Link href="#minden-cegnek-legyen-informatikusa">Tudj meg többet</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
