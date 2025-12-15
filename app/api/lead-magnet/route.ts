import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, company, country, checklist } = body;

        // TODO: Integrate with your CRM or Email marketing tool (e.g. Mailchimp, Supabase)
        // For now, we'll just log it
        console.log('Lead Captured:', { email, company, country, checklist, date: new Date().toISOString() });

        // Simulate delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json({ success: true, message: 'Lead captured successfully' });
    } catch (error) {
        console.error('Lead Magnet Error:', error);
        return NextResponse.json(
            { success: false, message: 'Internal server error' },
            { status: 500 }
        );
    }
}
