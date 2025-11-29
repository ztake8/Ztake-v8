import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

export async function POST(req: NextRequest) {
    try {
        const update = await req.json();

        // Check if it's a message
        if (update.message && update.message.text) {
            const text = update.message.text;
            const chatId = update.message.chat.id;

            // Check for /reply command
            if (text.startsWith('/reply')) {
                const parts = text.split(' ');
                if (parts.length < 3) {
                    // Send usage help to admin
                    await sendTelegramMessage(chatId, 'Usage: `/reply <user_id> <message>`');
                    return NextResponse.json({ ok: true });
                }

                const userId = parts[1];
                const replyMessage = parts.slice(2).join(' ');

                // 1. Verify User Exists
                const { data: user, error: userError } = await supabaseAdmin
                    .from('tg_users')
                    .select('id')
                    .eq('id', userId)
                    .single();

                if (userError || !user) {
                    await sendTelegramMessage(chatId, `❌ User ID ${userId} not found.`);
                    return NextResponse.json({ ok: true });
                }

                // 2. Save Reply to Supabase
                const { error: msgError } = await supabaseAdmin
                    .from('tg_messages')
                    .insert({
                        user_id: user.id,
                        direction: 'admin_to_user',
                        text: replyMessage
                    });

                if (msgError) {
                    await sendTelegramMessage(chatId, `❌ Failed to save reply: ${msgError.message}`);
                } else {
                    await sendTelegramMessage(chatId, `✅ Reply sent to User ${userId}`);
                }
            }
        }

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error('Webhook error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

async function sendTelegramMessage(chatId: number | string, text: string) {
    if (!TELEGRAM_BOT_TOKEN) return;
    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: chatId,
            text: text,
            parse_mode: 'Markdown'
        })
    });
}
