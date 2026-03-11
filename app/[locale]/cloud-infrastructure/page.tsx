import { CloudPage } from '@/components/CloudPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cloud & Infrastructure Hosting — EU-Compliant, Reliable, Managed | SIRONIC',
    description: 'Managed cloud hosting, on-premise servers, and hybrid infrastructure for European SMBs. GDPR-compliant, continuously monitored, with automated backup and reporting.',
};

export default function CloudPageRoute() {
    return <CloudPage />;
}
