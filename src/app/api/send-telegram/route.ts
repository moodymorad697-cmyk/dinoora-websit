import { NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message } = body;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('Missing Telegram configuration');
      return NextResponse.json(
        { error: 'Telegram configuration missing' },
        { status: 500 }
      );
    }

    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
      }),
    });

    const responseData = await response.json();
    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to send Telegram message', details: responseData },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Telegram API error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
