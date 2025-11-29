import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // Protect /admin/dashboard routes
    if (request.nextUrl.pathname.startsWith('/admin/dashboard')) {
        const adminSession = request.cookies.get('admin_session')

        if (!adminSession || adminSession.value !== 'true') {
            return NextResponse.redirect(new URL('/admin/login', request.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/admin/dashboard/:path*',
}
