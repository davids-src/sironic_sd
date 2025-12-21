import { NextRequest, NextResponse } from 'next/server';
import { validateContactForm, sanitizeInput, ContactFormData } from '@/utils/contact';
import { rateLimit } from '@/utils/rateLimit';

// Discord webhook URL - csak környezeti változóból, nincs fallback (biztonsági okokból)
const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;
const NODE_ENV = process.env.NODE_ENV || 'development';

async function sendDiscordNotification(data: {
  name: string;
  companyName?: string;
  email: string;
  service: string;
  message: string;
  timestamp: string;
  ipAddress: string;
}) {
  const embed = {
    title: '🔔 Új kapcsolati üzenet',
    color: 0xff0000, // Red color for SIRONIC brand
    fields: [
      {
        name: '👤 Név',
        value: data.name,
        inline: true,
      },
      {
        name: '🏢 Cégnév',
        value: data.companyName || 'Nincs megadva',
        inline: true,
      },
      {
        name: '📧 Email',
        value: data.email,
        inline: true,
      },
      {
        name: '🛠️ Szolgáltatás',
        value: data.service,
        inline: true,
      },
      {
        name: '📝 Üzenet',
        value: data.message.length > 1000 ? data.message.substring(0, 1000) + '...' : data.message,
        inline: false,
      },
      {
        name: '⏰ Időpont',
        value: `<t:${Math.floor(new Date(data.timestamp).getTime() / 1000)}:F>`,
        inline: true,
      },
      {
        name: '🌐 IP Cím',
        value: data.ipAddress,
        inline: true,
      },
      {
        name: '🌍 Környezet',
        value: NODE_ENV,
        inline: true,
      },
    ],
    footer: {
      text: 'SIRONIC Rendszerház - Kapcsolati űrlap',
    },
    timestamp: data.timestamp,
  };

  if (!DISCORD_WEBHOOK_URL) {
    console.warn(`[${NODE_ENV}] Discord webhook URL not configured - DISCORD_WEBHOOK_URL environment variable is missing`);
    return false;
  }

  try {
    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'SIRONIC Weboldal',
        avatar_url: 'https://sironic.eu/favicon.svg',
        embeds: [embed],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[${NODE_ENV}] Discord webhook failed:`, response.status, errorText);
      return false;
    }

    console.log(`[${NODE_ENV}] Discord notification sent successfully`);
    return true;
  } catch (error) {
    console.error(`[${NODE_ENV}] Discord webhook error:`, error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

  if (!rateLimit(ip, 5, 60000)) {
    return NextResponse.json(
      { success: false, message: 'Túl sok kérés. Kérjük, várj egy percet.' },
      { status: 429 }
    );
  }

  try {
    const body: ContactFormData = await request.json();

    const validation = validateContactForm(body);

    if (!validation.isValid) {
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      );
    }

    const sanitizedData = {
      name: sanitizeInput(body.name),
      companyName: body.companyName ? sanitizeInput(body.companyName) : undefined,
      email: sanitizeInput(body.email),
      service: sanitizeInput(body.service),
      message: sanitizeInput(body.message),
    };

    const timestamp = new Date().toISOString();

    // Send Discord notification
    const discordSuccess = await sendDiscordNotification({
      name: sanitizedData.name,
      companyName: sanitizedData.companyName,
      email: sanitizedData.email,
      service: sanitizedData.service,
      message: sanitizedData.message,
      timestamp: timestamp,
      ipAddress: ip,
    });

    console.log('Contact form submission:', {
      name: sanitizedData.name,
      email: sanitizedData.email,
      message: sanitizedData.message.substring(0, 100) + '...',
      timestamp: timestamp,
      discordSent: discordSuccess,
    });

    return NextResponse.json({
      success: true,
      message: 'Üzeneted sikeresen elküldve!',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Szerver hiba történt. Kérjük, próbáld újra később.' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  // Test endpoint to check Discord webhook configuration
  const test = request.nextUrl.searchParams.get('test');

  if (test === 'discord') {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    const nodeEnv = process.env.NODE_ENV || 'development';

    if (!webhookUrl) {
      return NextResponse.json(
        {
          status: 'error',
          message: 'Discord webhook URL nincs beállítva',
          webhookConfigured: false,
          environment: nodeEnv,
          hint: 'Ellenőrizd a DISCORD_WEBHOOK_URL környezeti változót a Vercel/production környezetben',
        },
        { status: 200 }
      );
    }

    // Try to send a test message
    try {
      const testEmbed = {
        title: '🧪 Discord Webhook Teszt',
        description: 'Ez egy teszt üzenet a SIRONIC weboldalról.',
        color: 0xff0000,
        fields: [
          {
            name: '⏰ Időpont',
            value: `<t:${Math.floor(Date.now() / 1000)}:F>`,
            inline: true,
          },
          {
            name: '✅ Státusz',
            value: 'Webhook működik!',
            inline: true,
          },
        ],
        footer: {
          text: 'SIRONIC Rendszerház - Webhook Teszt',
        },
        timestamp: new Date().toISOString(),
      };

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'SIRONIC Weboldal',
          avatar_url: 'https://sironic.eu/favicon.svg',
          embeds: [testEmbed],
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        return NextResponse.json(
          {
            status: 'error',
            message: 'Discord webhook hiba történt',
            webhookConfigured: true,
            webhookUrl: webhookUrl.substring(0, 30) + '...', // Only show first 30 chars for security
            error: {
              status: response.status,
              statusText: response.statusText,
              details: errorText.substring(0, 200),
            },
          },
          { status: 200 }
        );
      }

      return NextResponse.json(
        {
          status: 'success',
          message: 'Discord webhook sikeresen működik!',
          webhookConfigured: true,
          webhookUrl: webhookUrl.substring(0, 30) + '...', // Only show first 30 chars for security
        },
        { status: 200 }
      );
    } catch (error: any) {
      return NextResponse.json(
        {
          status: 'error',
          message: 'Discord webhook hiba történt',
          webhookConfigured: true,
          webhookUrl: webhookUrl.substring(0, 30) + '...',
          error: error.message || 'Ismeretlen hiba',
        },
        { status: 200 }
      );
    }
  }

  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}
