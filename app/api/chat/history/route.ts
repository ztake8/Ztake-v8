import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET(req: NextRequest) {
    const userUuid = req.nextUrl.searchParams.get('userUuid');

    if (!userUuid) {
        return NextResponse.json({ error: 'Missing userUuid' }, { status: 400 });
    }

    // 1. Get User ID
    const { data: user, error: userError } = await supabaseAdmin
        .from('tg_users')
        .select('id')
        .eq('user_uuid', userUuid)
        .single();

    if (userError || !user) {
        console.log(`[History] User not found for UUID: ${userUuid}`);
        return NextResponse.json({ messages: [] });
    }

    // 2. Fetch Messages
    const { data: messages, error } = await supabaseAdmin
        .from('tg_messages')
        .select('*')
        .eq('user_id', user.id)
        .order('sent_at', { ascending: true });

    if (error) {
        console.error('[History] Fetch error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ messages });
}
