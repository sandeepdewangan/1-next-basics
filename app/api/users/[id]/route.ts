import { users } from "@/app/usersData";

// /api/users/[id]
export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const user = users.find((u) => u.id === parseInt(id));
    return Response.json(user);
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const { name } = await request.json();

    const index = users.findIndex((u) => u.id === parseInt(id));
    users[index].name = name;

    return Response.json(users[index]);
}