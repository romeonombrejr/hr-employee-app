import postgres from "postgres";
import { auth } from "@clerk/nextjs/server";
// import { AttendanceLogs } from "./definitions";

const sql = postgres({ ssl: "require" });
const ITEMS_PER_PAGE = 10; 

// CREATE TABLE time_logs (
//     id SERIAL PRIMARY KEY,
//     employee_id INTEGER REFERENCES employees(id) ON DELETE CASCADE,
//     clock_in TIMESTAMPTZ NOT NULL,
//     clock_out TIMESTAMPTZ
//   );


// CREATE TABLE leave_requests (
//     id SERIAL PRIMARY KEY,
//     employee_id INTEGER REFERENCES employees(id) ON DELETE CASCADE,
//     leave_type TEXT NOT NULL,       -- e.g., 'VACATION', 'SICK', etc.
//     start_date DATE NOT NULL,
//     end_date DATE NOT NULL,
//     reason TEXT,
//     status TEXT NOT NULL            -- e.g., 'PENDING', 'APPROVED', 'REJECTED'
//   );

// CREATE TABLE document_requests (
//     id SERIAL PRIMARY KEY,
//     employee_id INTEGER REFERENCES employees(id) ON DELETE CASCADE,
//     document_type TEXT NOT NULL,    -- e.g., 'PAYSLIP', 'CERTIFICATE_OF_EMPLOYMENT'
//     request_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
//     status TEXT NOT NULL            -- e.g., 'PENDING', 'APPROVED', 'REJECTED'
//   );

export async function fetchFilteredAttendanceLogs(
    currentPage: number, 
    startDate: string = '',
    endDate: string = ''
  ) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  
    try {
      const { userId } = await auth(); // Get logged-in user's ID
      if (!userId) throw new Error("User not authenticated");
  
      // Fetch logs with optional date filters
      const logs = await sql`
        SELECT
          id,
          clock_in,
          clock_out
        FROM time_logs
        WHERE employee_id = ${userId}
        ${startDate ? sql`AND clock_in >= ${startDate}` : sql``}
        ${endDate ? sql`AND clock_out <= ${endDate}` : sql``}
        ORDER BY clock_in DESC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
      `;
  
      return logs;
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to fetch attendance logs.");
    }
  }