import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <div className="group relative card-hover gpu-accelerated rounded-lg border bg-card p-6 text-card-foreground shadow-sm tech-border">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-red/10 transition-colors group-hover:bg-brand-red/20">
        <Icon className="h-6 w-6 text-brand-red" />
      </div>
      <h3 className="mb-2 text-xl font-semibold tracking-tight">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
