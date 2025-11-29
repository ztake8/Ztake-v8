import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(req: NextRequest) {
    try {
        const { message, userUuid } = await req.json();

        if (!message || !userUuid) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
        }

        // 1. Get User ID
        const { data: user, error: userError } = await supabaseAdmin
            .from('tg_users')
            .select('id')
            .eq('user_uuid', userUuid)
            .single();

        if (userError || !user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        // 2. Insert Admin Message
        const { error: msgError } = await supabaseAdmin
            .from('tg_messages')
            .insert({
                user_id: user.id,
                direction: 'admin_to_user',
                text: message
            });

        if (msgError) throw msgError;

        return NextResponse.json({ ok: true });
    } catch (error: any) {
        console.error('Admin reply error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
