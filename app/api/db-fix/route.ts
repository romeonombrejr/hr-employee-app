import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedTimeLogs() {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  
    // Drop the existing time_logs table
    await sql`
      DROP TABLE IF EXISTS leave_requests;
    `;
  
    // Recreate the time_logs table without the foreign key reference
    await sql`
      CREATE TABLE leave_requests (
      id SERIAL PRIMARY KEY,
      employee_id TEXT NOT NULL,
      leave_type TEXT NOT NULL,       -- e.g., 'VACATION', 'SICK', etc.
      start_date DATE NOT NULL,
      end_date DATE NOT NULL,
      reason TEXT,
      status TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
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