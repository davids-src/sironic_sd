import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, company, phone, dateRange, timezone, topic } = body;

        // TODO: Send email notification to admin or integrate with calendar API
        console.log('Booking Request:', {
            name, email, company, phone, dateRange, timezone, topic,
            date: new Date().toISOString()
        });

        // Simulate delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json({ success: true, message: 'Booking request received' });
    } catch (error) {
        console.error('Booking API Error:', error);
        return NextResponse.json(
            { success: false, message: 'Internal server error' },
            { status: 500 }
        );
    }
}
