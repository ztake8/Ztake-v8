import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(req: NextRequest) {
    try {
        const { messageIds, userUuid } = await req.json();

        if (!messageIds || !Array.isArray(messageIds) || messageIds.length === 0) {
            return NextResponse.json({ error: 'Invalid message IDs' }, { status: 400 });
        }

        // Get user ID
        const { data: user } = await supabaseAdmin
            .from('tg_users')
            .select('id')
            .eq('user_uuid', userUuid)
            .single();

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        // Mark messages as read
        const { error } = await supabaseAdmin
            .from('tg_messages')
            .update({ read_at: new Date().toISOString() })
            .in('id', messageIds)
            .eq('user_id', user.id)
            .is('read_at', null); // Only update unread messages

        if (error) {
            console.error('Mark as read error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ ok: true });
    } catch (error: any) {
        console.error('Mark as read error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
