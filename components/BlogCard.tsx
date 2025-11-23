'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Calendar, Clock } from 'lucide-react';
import { useParams } from 'next/navigation';

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  readTime: string;
}

export function BlogCard({ title, excerpt, slug, date, readTime }: BlogCardProps) {
  const params = useParams();
  const locale = (params?.locale as string) || 'hu';

  return (
    <Link href={`/${locale}/blog/${slug}`} className="block group">
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-brand-red/50 focus-within:ring-2 focus-within:ring-brand-red">
        <CardHeader>
          <CardTitle className="text-xl group-hover:text-brand-red transition-colors">
            {title}
          </CardTitle>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {readTime}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">{excerpt}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
