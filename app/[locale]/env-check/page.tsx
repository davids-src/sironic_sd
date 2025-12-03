import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Environment Check - Sironic',
    robots: {
        index: false,
        follow: false,
    },
};

export default function EnvCheckPage() {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold mb-8">Environment Variables Check</h1>

            <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                    <h2 className="font-semibold text-lg mb-2">Google Analytics ID</h2>
                    <p className="font-mono text-sm">
                        {gaId ? (
                            <span className="text-green-600">✓ {gaId}</span>
                        ) : (
                            <span className="text-red-600">✗ Not set</span>
                        )}
                    </p>
                </div>

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

            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h2 className="font-semibold text-lg mb-2">🔍 Browser Console Check</h2>
                <p className="text-sm mb-2">Open browser console (F12) and run:</p>
                <pre className="bg-gray-800 text-white p-3 rounded text-xs overflow-x-auto">
                    {`// Check if GA is loaded
console.log('GA ID:', process.env.NEXT_PUBLIC_GA_ID);
console.log('dataLayer:', window.dataLayer);
console.log('gtag:', typeof gtag);`}
                </pre>
            </div>
        </div>
    );
}
