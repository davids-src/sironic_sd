import { Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface TestimonialProps {
  quote: string;
  author?: string;
  company: string;
}

export function Testimonial({ quote, author, company }: TestimonialProps) {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-2xl overflow-hidden">
      <CardContent className="p-8 flex flex-col h-full">
        <div className="mb-6 p-3 bg-red-50 dark:bg-red-900/20 rounded-xl w-fit">
          <Quote className="h-6 w-6 text-brand-red" aria-hidden="true" />
        </div>
        <blockquote className="text-lg text-foreground mb-6 leading-relaxed flex-grow font-medium">
          &quot;{quote}&quot;
        </blockquote>
        <footer className="text-sm pt-6 border-t border-gray-100 dark:border-gray-800 mt-auto">
          <cite className="not-italic flex flex-col gap-1">
            {author && <strong className="font-bold text-base text-foreground">{author}</strong>}
            <span className="text-muted-foreground font-medium">{company}</span>
          </cite>
        </footer>
      </CardContent>
    </Card>
  );
}
