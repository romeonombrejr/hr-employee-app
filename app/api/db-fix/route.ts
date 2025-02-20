import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedTimeLogs() {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  
    // Drop the existing time_logs table
    await sql`
      DROP TABLE IF EXISTS time_logs;
    `;
  
    // Recreate the time_logs table without the foreign key reference
    await sql`
      CREATE TABLE time_logs (
          id SERIAL PRIMARY KEY,
          employee_id TEXT NOT NULL,
          clock_in TIMESTAMPTZ NOT NULL,
          clock_out TIMESTAMPTZ
      );
    `;
  }
  
  

export async function GET() {
    try {
      const result = await sql.begin((sql) => [
        seedTimeLogs(),
      ]);
  
      return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
      return Response.json({ error }, { status: 500 });
    }
  }