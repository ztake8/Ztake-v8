import { NextRequest, NextResponse } from 'next/server';
import { addKnowledge } from '@/server/knowledge-store';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        if (body?.url) {
            const res = await fetch(body.url);
            const html = await res.text();
            const stripped = html
                .replace(/< script[^>]*>[\s\S]*?<\/script>/gi, '')
                .replace(/<[^>]+>/g, ' ');
            addKnowledge({
                id: `url-${Date.now()}`,
                title: body.title || body.url,
                source: body.url,
                text: stripped.slice(0, 12000),
            });
            return NextResponse.json({ ok: true });
        }
        return NextResponse.json(
            { ok: false, error: 'No url provided' },
            { status: 400 }
        );
    } catch (e) {
        const error = e as Error;
        return NextResponse.json(
            { ok: false, error: error.message },
            { status: 500 }
        );
    }
}
