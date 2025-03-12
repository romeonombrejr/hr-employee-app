import { fetchFilteredAttendanceLogs } from "@/app/lib/data";
import { Table } from "@radix-ui/themes";

export default async function LogsTable({
    startDate,
    endDate,
    currentPage
}: {
    startDate: string;
    endDate: string;
    currentPage: number;
}) {
    const attendanceLogs = await fetchFilteredAttendanceLogs(currentPage, startDate, endDate);

    return (
        <Table.Root>
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell>Clock In</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Clock Out</Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {attendanceLogs.length > 0 ? (
                    attendanceLogs.map((log) => (
                        <Table.Row key={log.id}>
                            <Table.Cell>{log.clock_in ? new Date(log.clock_in).toLocaleString() : "—"}</Table.Cell>
                            <Table.Cell>{log.clock_out ? new Date(log.clock_out).toLocaleString() : "—"}</Table.Cell>
                        </Table.Row>
                    ))
                ) : (
                    <Table.Row>
                        <Table.Cell colSpan={2} style={{ textAlign: "center" }}>
                            No attendance logs found.
                        </Table.Cell>
                    </Table.Row>
                )}
            </Table.Body>
        </Table.Root>
    );
}
