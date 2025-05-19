import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {

    // Setting cookie
    const response = NextResponse.next();
    const themePreference = request.cookies.get('theme');
    if (!themePreference) {
        response.cookies.set("theme", "dark");
    }

    // Setting header
    response.headers.set("custom-header", "custom-value");
    return response;

    // Conditional URL redirecting/rewriting
    if (request.nextUrl.pathname === '/profile') {
        // return NextResponse.redirect(new URL("/", request.url)); // url changes
        return NextResponse.rewrite(new URL("/", request.url)); // url doesnot change
    }
}


