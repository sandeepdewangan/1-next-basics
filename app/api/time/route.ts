// time is cached and served instantly to the users.
// there is no caching in development.
export const dynamic = "force-static";
export const revalidate = 10; // refreshes the data every 10sec

export async function GET() {
    return Response.json({ time: new Date().toLocaleTimeString() });
}