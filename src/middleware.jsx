import { NextResponse } from "next/server";

export function middleware(request) {

    /*  if (request.nextUrl.pathname.startsWith('/dashboard')) {
             return NextResponse.redirect(new URL('/api/auth/signin', request.url))
         } */


    const token = request.cookies.get('next-auth.session-token');

    // if (request.nextUrl.pathname.startsWith('/dashboard')) {
    //     if (!token) {
    //         return NextResponse.redirect(new URL('/api/auth/signin', request.url))
    //     }
    // }

    if (!token) {
        return NextResponse.redirect(new URL('/api/auth/signin', request.url))
    }


    return NextResponse.next();



}

export const config = {
    matcher: ['/dashboard']
}