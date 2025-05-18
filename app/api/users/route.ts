import { users } from "@/app/usersData";
import { NextRequest } from "next/server";

// GET Request
// NextRequest provides convenient method for managing query params.
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');
    const filteredUsers = query ? users.filter((user) => user.name.includes(query)) : users;
    return Response.json(filteredUsers);
}

export async function POST(request: Request) {
    const user = await request.json();

    const newUser = {
        id: users.length + 1,
        name: user.name
    }
    users.push(newUser);

    return new Response(JSON.stringify(newUser), { headers: { "Content-Type": "application/json" }, status: 201 });
}