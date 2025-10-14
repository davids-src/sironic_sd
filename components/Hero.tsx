import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted py-20 lg:py-28">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 lg:px-8 relative">
        <div className="mx-auto max-w-4xl text-center animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
            Tedd biztossá vállalkozásod informatikai hátterét – mi gondoskodunk róla, hogy minden működjön.
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            A Sironic teljes körű IT megoldásokat kínál kis- és középvállalkozásoknak: karbantartás,
            hálózatépítés, adatbiztonság és webfejlesztés egy kézben. Mi nem csak rendszereket tartunk
            karban – nyugalmat adunk a működéshez.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-brand-red hover:bg-brand-red/90 text-white w-full sm:w-auto group"
            >
              <Link href="/kapcsolat">
                Kérj ingyenes IT konzultációt
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link href="/szolgaltatasok">Ismerd meg szolgáltatásainkat</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
