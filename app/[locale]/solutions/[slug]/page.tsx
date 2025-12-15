import { SolutionTemplate } from '@/components/SolutionTemplate';
import { solutionsData, getSolutionBySlug } from '@/lib/solutions-data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface Props {
    params: {
        slug: string;
        locale: string;
    };
}

export async function generateStaticParams() {
    const slugs = Object.keys(solutionsData);
    // We should return params for all locales, but for simplicity/pilot we might relying on dynamic generation at runtime (fallback: blocking or true) if not using output: export.
    // Assuming 16 locales * 3 pages = 48 pages.
    // I'll leave it empty to generate on demand or just use keys.
    return slugs.map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const solution = getSolutionBySlug(params.slug);

    if (!solution) {
        return {
            title: 'Solution Not Found',
        };
    }

    return {
        title: `${solution.title} | SIRONIC`,
        description: solution.subtitle,
        openGraph: {
            title: solution.title,
            description: solution.subtitle,
        },
    };
}

export default function SolutionPage({ params }: Props) {
    const solution = getSolutionBySlug(params.slug);

    if (!solution) {
        notFound();
    }

    return <SolutionTemplate data={solution} />;
}
