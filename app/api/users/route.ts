import { users } from "@/app/usersData";

export async function GET() {
    return Response.json(users);
}