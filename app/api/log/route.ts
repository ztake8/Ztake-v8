import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const LOG_PATH = path.join(process.cwd(), 'data', 'logs.json');
fs.mkdirSync(path.dirname(LOG_PATH), { recursive: true });

export async function POST(req: NextRequest) {
    const body = await req.json();
    const logs = fs.existsSync(LOG_PATH)
        ? JSON.parse(fs.readFileSync(LOG_PATH, 'utf-8'))
        : [];
    logs.push({ ...body, ts: new Date().toISOString() });
    fs.writeFileSync(LOG_PATH, JSON.stringify(logs, null, 2), 'utf-8');
    return NextResponse.json({ ok: true });
}
