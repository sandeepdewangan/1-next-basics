import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    // approach 1
    const requestHeader = new Headers(request.headers);
    console.log(requestHeader.get("Authorization"));

    // approach 2
    const headersList = await headers();
    console.log(headersList.get("Authorization"));


    // return new Response("Profile Data"); // returns simple plain/text response
    return new Response("Profile Data", {
        headers: {
            "Content-Type": "application/json",
        }
    });
}