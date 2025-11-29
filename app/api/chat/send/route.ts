import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const ADMIN_CHAT_ID = process.env.ADMIN_CHAT_ID;

export async function POST(req: NextRequest) {
    try {
        const { message, userUuid, email, isEmailSubmission } = await req.json();

        if (!message || !userUuid) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
        }

        // 1. Find or Create User in Supabase
        let { data: user, error: userError } = await supabaseAdmin
            .from('tg_users')
            .select('id, email')
            .eq('user_uuid', userUuid)
            .single();

        if (!user) {
            const insertData: any = { user_uuid: userUuid };
            if (email) {
                insertData.email = email;
            }

            const { data: newUser, error: createError } = await supabaseAdmin
                .from('tg_users')
                .insert(insertData)
                .select()
                .single();

            if (createError) throw createError;
            user = newUser;
        } else if (email && !user.email) {
            // Update existing user with email
            await supabaseAdmin
                .from('tg_users')
                .update({ email })
                .eq('id', user.id);
        }

        if (!user) throw new Error('Failed to get user');

        // 2. Save Message to Supabase
        const { error: msgError } = await supabaseAdmin
            .from('tg_messages')
            .insert({
                user_id: user.id,
                direction: 'user_to_admin',
                text: message
            });

        if (msgError) throw msgError;

        // 3. Send Notification to Telegram Admin
        if (TELEGRAM_BOT_TOKEN && ADMIN_CHAT_ID) {
            let telegramText = '';

            if (isEmailSubmission) {
                telegramText = `📧 *New User Started Chat*\nUser ID: \`${user.id}\`\nEmail: ${email}\nUUID: ${userUuid}\n\nOpen dashboard to reply: /admin/dashboard`;
            } else {
                telegramText = `📩 *New Message*\nUser ID: \`${user.id}\`\nUUID: ${userUuid}\n\n${message}\n\nReply from dashboard: /admin/dashboard`;
            }

            await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: ADMIN_CHAT_ID,
                    text: telegramText,
                    parse_mode: 'Markdown'
                })
            });
        }

        return NextResponse.json({ ok: true });
    } catch (error: any) {
        console.error('Chat send error:', error);
        return NextResponse.json({
            error: error.message || 'Internal Server Error',
            details: JSON.stringify(error)
        }, { status: 500 });
    }
}
