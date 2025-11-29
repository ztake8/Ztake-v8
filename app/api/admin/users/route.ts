import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET(req: NextRequest) {
    try {
        // Fetch users with their latest message time
        // Note: Supabase doesn't support complex joins easily in JS client without foreign keys setup perfectly
        // So we'll fetch users and then maybe their last message, or just users for now.

        const { data: users, error } = await supabaseAdmin
            .from('tg_users')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        return NextResponse.json({ users });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
