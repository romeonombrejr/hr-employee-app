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