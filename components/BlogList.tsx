'use client';

import { BlogCard } from '@/components/BlogCard';
import { useTranslation } from '@/hooks/useTranslation';

export function BlogList() {
    const { t } = useTranslation();

    // In a real app, these would come from a CMS or be translated in the JSON
    // For now, we'll use the hardcoded ones but wrapped in t() if we had keys, 
    // or just leave them as is but allow the UI around them to be translated.
    // Ideally, blog posts should be fetched based on locale.

    const blogPosts = [
        {
            title: 'Hogyan védd meg céged adatait?',
            excerpt:
                'Az adatbiztonság minden vállalkozás számára kritikus. Ebben a cikkben bemutatjuk a legfontosabb lépéseket, amelyekkel megvédheted céged adatait a kibertámadásoktól.',
            slug: 'hogyan-vedd-meg-ceged-adatait',
            date: '2024. március 15.',
            readTime: '5 perc olvasás',
        },
        {
            title: 'Mikor érdemes IT karbantartási szerződést kötni?',
            excerpt:
                'Sokan csak akkor gondolnak az IT karbantartásra, amikor már probléma van. Megmutatjuk, miért éri meg proaktívan gondoskodni a rendszerekről.',
            slug: 'mikor-erdemes-it-karbantartasi-szerzodest-kotni',
            date: '2024. március 8.',
            readTime: '4 perc olvasás',
        },
        {
            title: '5 tipp a gyorsabb és biztonságosabb hálózatért',
            excerpt:
                'Lassú internet és instabil kapcsolat? Ezekkel az egyszerű lépésekkel jelentősen javíthatod céged hálózatának teljesítményét és biztonságát.',
            slug: '5-tipp-a-gyorsabb-es-biztonsagosabb-halozatert',
            date: '2024. március 1.',
            readTime: '6 perc olvasás',
        },
    ];

    return (
        <>
            <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center mb-12">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                            {t('blog.title', 'Blog')}
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {t('blog.subtitle', 'IT tippek, tanácsok és szakmai cikkek, amelyek segítenek vállalkozásod informatikai biztonságának és hatékonyságának növelésében.')}
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <BlogCard
                                key={post.slug}
                                title={post.title}
                                excerpt={post.excerpt}
                                slug={post.slug}
                                date={post.date}
                                readTime={post.readTime}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
