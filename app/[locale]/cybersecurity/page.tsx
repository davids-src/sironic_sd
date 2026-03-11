import { CybersecurityPage } from '@/components/CybersecurityPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cybersecurity Services for SMBs — Endpoint, Network & NIS2 | SIRONIC',
    description: 'Practical cybersecurity for European small and medium businesses. Security audits, endpoint protection, identity management, network hardening, NIS2 support, and staff awareness training.',
};

export default function CybersecurityPageRoute() {
    return <CybersecurityPage />;
}
