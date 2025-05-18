import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    // approach 1
    const requestHeader = new Headers(request.headers);
    console.log(requestHeader.get("Authorization"));

    // approach 2, next way
    const headersList = await headers();
    console.log(headersList.get("Authorization"));

    // get cookie
    const theme = request.cookies.get("theme");
    console.log(theme);

    // next way
    const cookie = await cookies();
    cookie.set("cartItemCount", "5");
    console.log(cookie.get("cartItemCount"));


    // return new Response("Profile Data"); // returns simple plain/text response
    return new Response("Profile Data", {
        headers: {
            "Content-Type": "application/json",
            "Set-Cookie": "theme=dark",
        }
    });
}