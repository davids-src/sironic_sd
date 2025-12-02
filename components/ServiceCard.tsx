import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <div className="group relative flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-brand-red transition-colors group-hover:bg-brand-red group-hover:text-white dark:bg-red-900/20 dark:text-red-400 dark:group-hover:bg-brand-red dark:group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
