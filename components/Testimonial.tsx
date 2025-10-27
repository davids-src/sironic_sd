import { Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface TestimonialProps {
  quote: string;
  author?: string;
  company: string;
}

export function Testimonial({ quote, author, company }: TestimonialProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardContent className="pt-6">
        <Quote className="h-8 w-8 text-brand-red mb-4" aria-hidden="true" />
        <blockquote className="text-lg mb-4 leading-relaxed">
          &quot;{quote}&quot;
        </blockquote>
        <footer className="text-sm">
          <cite className="not-italic">
            {author && <strong className="font-semibold">{author}</strong>}
            {author && <span className="text-muted-foreground"> — </span>}
            <span className="text-muted-foreground">{company}</span>
          </cite>
        </footer>
      </CardContent>
    </Card>
  );
}
