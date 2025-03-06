"use server";

import postgres from "postgres";

const sql = postgres({ ssl: "require" });

export async function clockInAction(formData: FormData) {
  const employeeId = String(formData.get("employeeId")); 

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
  const employeeId = String(formData.get("employeeId"));
  
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

export async function addLeaveRequest(formData: FormData) {
  const employeeId = String(formData.get("employeeId"));
  const leaveType = String(formData.get("leaveType"));
  const startDate = String(formData.get("startDate"));
  const endDate = String(formData.get("endDate"));
  const reason = String(formData.get("reason"));
  const status = "PENDING";

  const [record] = await sql`
    INSERT INTO leave_requests (employee_id, leave_type, start_date, end_date, reason, status)
    VALUES (${employeeId}, ${leaveType}, ${startDate}, ${endDate}, ${reason}, ${status})
    RETURNING id
  `;

  return record;
}

