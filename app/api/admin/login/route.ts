import { NextRequest, NextResponse } from 'next/server';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

export async function POST(req: NextRequest) {
    try {
        const { password } = await req.json();

        if (!ADMIN_PASSWORD) {
            return NextResponse.json({ error: 'Admin password not configured' }, { status: 500 });
        }

        if (password === ADMIN_PASSWORD) {
            const response = NextResponse.json({ ok: true });

            // Set HTTP-only cookie
            response.cookies.set('admin_session', 'true', {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 60 * 60 * 24, // 1 day
                path: '/',
            });

            return response;
        }

        return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
