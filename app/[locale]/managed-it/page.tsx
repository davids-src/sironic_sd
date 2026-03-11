import { ManagedItPage } from '@/components/ManagedItPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Managed IT Services — Your IT Department, Without the Overhead | SIRONIC',
    description: 'Outsourced IT operations and managed IT services for European SMBs. 24/7 monitoring, proactive maintenance, remote helpdesk, and backup verification. Based in Hungary, serving 16 EU countries.',
};

export default function ManagedItPageRoute() {
    return <ManagedItPage />;
}
