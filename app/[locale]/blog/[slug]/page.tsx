import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { blogPosts, getBlogPost } from '@/lib/blog-data';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: 'Cikk nem található',
    };
  }

  return {
    title: `${post.title} - SIRONIC Blog`,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, ''),
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article>
        <header className="py-16 lg:py-24 bg-gradient-to-br from-background via-background to-muted">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Vissza a bloghoz
              </Link>
            </Button>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {post.readTime}
              </span>
            </div>
          </div>
        </header>

        <section className="py-16 bg-background">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div
              className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:my-2"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="bg-brand-red text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Kérdésed van ezzel kapcsolatban?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Lépj kapcsolatba velünk, és segítünk megtalálni a legjobb megoldást!
              </p>
              <Button asChild size="lg" variant="secondary" className="text-brand-red">
                <Link href="/kapcsolat">Kapcsolatfelvétel</Link>
              </Button>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
