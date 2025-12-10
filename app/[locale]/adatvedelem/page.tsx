'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function PrivacyPage() {
    const { t } = useTranslation();

    // Breadcrumbs
    const breadcrumbItems = [
        { label: t('cookie.privacy') || 'Adatvédelmi tájékoztató', href: '' }
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 py-8 md:px-6">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            <section className="py-12 lg:py-20">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100 dark:border-gray-700">
                        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                            {t('cookie.privacy') || 'Adatvédelmi tájékoztató'}
                        </h1>

                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <p>
                                {t('meta.companyName')} (továbbiakban: Szolgáltató) tiszteletben tartja a felhasználók személyes adatainak védelmét.
                                Ez az adatvédelmi tájékoztató ismerteti, hogyan gyűjtjük, használjuk és védjük az Ön adatait.
                            </p>

                            <h3>1. Adatgyűjtés</h3>
                            <p>
                                A weboldal használata során bizonyos adatokat (pl. IP cím, süti adatok) automatikusan rögzítünk.
                                A kapcsolatfelvételi űrlap kitöltésekor megadott adatokat (név, email, telefonszám) kizárólag a kapcsolatfelvétel céljából kezeljük.
                            </p>

                            <h3>2. Sütik (Cookies)</h3>
                            <p>
                                Weboldalunk sütiket használ a felhasználói élmény javítása érdekében. A sütik beállításait a weboldal alján található sávban módosíthatja.
                            </p>

                            <h3>3. Kapcsolat</h3>
                            <p>
                                Amennyiben kérdése van adatkezelésünkkel kapcsolatban, kérjük lépjen kapcsolatba velünk a hivatalos email címünkön.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
