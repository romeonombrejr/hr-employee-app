"use server";

import postgres from "postgres";

const sql = postgres({ ssl: "require" });

export async function clockInAction(formData: FormData) {
  const employeeId = Number(formData.get("employeeId"));
  const [record] = await sql`
    INSERT INTO time_logs (employee_id, clock_in)
    VALUES (${employeeId}, now())
    RETURNING id
  `;
  return record;
}

export async function undoClockInAction(clockInId: number) {
  await sql`
    DELETE FROM time_logs
    WHERE id = ${clockInId}
  `;
}

export async function clockOutAction(formData: FormData) {
  const employeeId = Number(formData.get("employeeId"));
  const [record] = await sql`
    INSERT INTO time_logs (employee_id, clock_out)
    VALUES (${employeeId}, now())
    RETURNING id
    `;
  return record;
}

export async function undoClockOutAction(clockOutId: number) {
  await sql`
    DELETE FROM time_logs
    WHERE id = ${clockOutId}
  `;
}

export async function getAttendanceLogs(
  employeeId: string,
  page: number,
  pageSize: number,
  from?: string,
  to?: string
) {
  const offset = (page - 1) * pageSize;

  // Query logs with optional date filters.
  const logs = await sql`
      SELECT * FROM time_logs
      WHERE employee_id = ${employeeId}
      ${from ? sql`AND clock_in >= ${from}` : sql``}
      ${to ? sql`AND clock_in <= ${to}` : sql``}
      ORDER BY clock_in DESC
      LIMIT ${pageSize} OFFSET ${offset}
    `;

  // Get total count for pagination.
  const countResult = await sql`
      SELECT COUNT(*) as count FROM time_logs
      WHERE employee_id = ${employeeId}
      ${from ? sql`AND clock_in >= ${from}` : sql``}
      ${to ? sql`AND clock_in <= ${to}` : sql``}
    `;
  const totalCount = Number(countResult[0].count);
  return { logs, totalCount };
}
