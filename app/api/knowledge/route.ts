import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data', 'knowledge.json');

export async function GET(req: NextRequest) {
    const q = req.nextUrl.searchParams.get('q') || '';
    const raw = fs.existsSync(DB_PATH) ? fs.readFileSync(DB_PATH, 'utf-8') : '[]';
    const items = JSON.parse(raw);

    if (!q) {
        return NextResponse.json({ items: items.slice(-20).reverse() });
    }

    const lower = q.toLowerCase();
    const matches = items.filter((i: any) =>
        (i.title + ' ' + (i.text || '')).toLowerCase().includes(lower)
    );

    return NextResponse.json({ items: matches.slice(0, 25) });
}
