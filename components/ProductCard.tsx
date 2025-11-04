import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, CheckCircle, ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import Link from 'next/link';
import { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const IconComponent = product.icon
    ? (LucideIcons[product.icon as keyof typeof LucideIcons] as any)
    : LucideIcons.Package;

  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-brand-red/50 group">
      <CardHeader>
        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-brand-red/10 group-hover:bg-brand-red/20 transition-colors">
          {IconComponent && <IconComponent className="h-7 w-7 text-brand-red" aria-hidden="true" />}
        </div>
        <CardTitle className="text-2xl mb-2 group-hover:text-brand-red transition-colors">
          {product.name}
        </CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {product.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
          Fő funkciók
        </h4>
        <ul className="space-y-2">
          {product.features.map((feature, index) => (
            <li key={index} className="flex gap-2 items-start">
              <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      {product.link && (
        <CardFooter>
          {product.id === 'minden-cegnek-legyen-informatikusa' ? (
            <Button
              asChild
              className="w-full bg-brand-red hover:bg-brand-red/90 text-white"
            >
              <Link href="/minden-cegnek-legyen-informatikusa">
                Tudj meg többet róla
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          ) : product.link.startsWith('http') ? (
            <Button
              asChild
              variant="outline"
              className="w-full group-hover:border-brand-red group-hover:text-brand-red"
            >
              <a href={product.link} target="_blank" rel="noopener noreferrer">
                Tudj meg többet
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          ) : (
            <Button
              asChild
              variant="outline"
              className="w-full group-hover:border-brand-red group-hover:text-brand-red"
            >
              <Link href={product.link}>
                Tudj meg többet
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
