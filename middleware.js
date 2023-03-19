import { NextResponse } from 'next/server'

export function middleware(req) {

    const token = localStorage.getItem('glampcity-token')
    console.log(token);
    if (token) {

        if (req.nextUrl.pathname.startsWith('/home')) {
            return NextResponse.rewrite(new URL('/home', req.url))
        }
        else if (!req.nextUrl.pathname.startsWith('/home')) {
            return NextResponse.rewrite(new URL('/login', req.url))
        }

        // if (req.nextUrl.pathname.startsWith('/dashboard')) {
        //     return NextResponse.rewrite(new URL('/dashboard/user', req.url))
        // }
    }
}