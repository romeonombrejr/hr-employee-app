import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function GET() {
    try {
        const timeLogs = await sql`SELECT * FROM time_logs`;

        return Response.json({ data: timeLogs });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
