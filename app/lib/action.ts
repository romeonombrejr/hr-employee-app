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


