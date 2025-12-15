
import { NextRequest, NextResponse } from 'next/server';
import { rateLimit } from '@/utils/rateLimit';

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL || 'https://discord.com/api/webhooks/1435287913402208468/N1uRR3hpu9P7kIi3uXJEi7aq2jRsS96r4nYIQiL-MM7ZTy1xtJpyNYgRt3ZVRObOSU5i';

type CalculatorData = {
    companySize: string;
    serviceType: string;
    timeline: string;
    contact: {
        name: string;
        company: string;
        email: string;
        phone: string;
    };
};

async function sendDiscordNotification(data: CalculatorData & { ipAddress: string }) {
    const embed = {
        title: '🧮 Új Árajánlat Kérés (Kalkulátor)',
        color: 0xffaa00, // Orange
        fields: [
            {
                name: '👤 Kapcsolattartó',
                value: `**Név:** ${data.contact.name}\n**Cég:** ${data.contact.company}\n**Email:** ${data.contact.email}\n**Tel:** ${data.contact.phone}`,
                inline: false,
            },
            {
                name: '📊 Projekt Adatok',
                value: `**Méret:** ${data.companySize}\n**Típus:** ${data.serviceType}\n**Időkeret:** ${data.timeline}`,
                inline: false,
            },
            {
                name: '⏰ Időpont',
                value: `<t:${Math.floor(Date.now() / 1000)}:F>`,
                inline: true,
            },
            {
                name: '🌐 IP Cím',
                value: data.ipAddress,
                inline: true,
            },
        ],
        footer: {
            text: 'SIRONIC Rendszerház - Kalkulátor Lead',
        },
        timestamp: new Date().toISOString(),
    };

    if (!DISCORD_WEBHOOK_URL) return false;

    try {
        const response = await fetch(DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: 'SIRONIC Kalkulátor',
                avatar_url: 'https://sironic.eu/logo_rgb.svg',
                embeds: [embed],
            }),
        });
        return response.ok;
    } catch (error) {
        console.error('Discord webhook error:', error);
        return false;
    }
}

export async function POST(request: NextRequest) {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

    if (!rateLimit(ip, 5, 60000)) {
        return NextResponse.json({ success: false, message: 'Too many requests' }, { status: 429 });
    }

    try {
        const body: CalculatorData = await request.json();
        await sendDiscordNotification({ ...body, ipAddress: ip });

        // We always return success to the UI even if discord fails, as it's not critical for the user to know
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
