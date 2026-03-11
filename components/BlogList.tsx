'use client';

import { BlogCard } from '@/components/BlogCard';
import { useTranslation } from '@/hooks/useTranslation';
import { blogPosts } from '@/lib/blog-data';

export function BlogList() {
    const { t } = useTranslation();


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
