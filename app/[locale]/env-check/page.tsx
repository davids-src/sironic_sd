import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Environment Check - Sironic',
    robots: {
        index: false,
        follow: false,
    },
};

export default function EnvCheckPage() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold mb-8">Environment Variables Check</h1>

            <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                    <h2 className="font-semibold text-lg mb-2">Site URL</h2>
                    <p className="font-mono text-sm">
                        {siteUrl ? (
                            <span className="text-green-600">✓ {siteUrl}</span>
                        ) : (
                            <span className="text-red-600">✗ Not set</span>
                        )}
                    </p>
                </div>

                <div className="p-4 border rounded-lg bg-yellow-50">
                    <h2 className="font-semibold text-lg mb-2">⚠️ Important Notes</h2>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Only <code className="bg-gray-200 px-1 rounded">NEXT_PUBLIC_*</code> variables are visible in the browser</li>
                        <li>Server must be restarted after changing .env files</li>
                        <li>This page should NOT be accessible in production</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
