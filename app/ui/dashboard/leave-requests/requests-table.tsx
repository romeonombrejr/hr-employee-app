import { Table } from "@radix-ui/themes";
import { TrashIcon } from "@radix-ui/react-icons";
import { fetchLeaveRequests } from "@/app/lib/data";

export default async function RequestsTableexport({
    startDate,
    endDate,
    currentPage
}: {
    startDate: string;
    endDate: string;
    currentPage: number;
}) {
    const leaveRequests = await fetchLeaveRequests(currentPage, startDate, endDate);
    
    return (
        <Table.Root>
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell>Leave Type</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Start Date</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>End Date</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {leaveRequests.length > 0 ? (
                    leaveRequests.map((request) => (
                        <Table.Row key={request.id}>
                            <Table.Cell>{request.leave_type}</Table.Cell>
                            <Table.Cell>{new Date(request.start_date).toLocaleString()}</Table.Cell>
                            <Table.Cell>{new Date(request.end_date).toLocaleString()}</Table.Cell>
                            <Table.Cell>{request.status}</Table.Cell>
                            <Table.Cell><a href="#"><TrashIcon /></a></Table.Cell>
                        </Table.Row>
                    ))
                ) : (
                    <Table.Row>
                        <Table.Cell colSpan={5} style={{ textAlign: "center" }}>
                            No attendance Leave Requests found.
                        </Table.Cell>
                    </Table.Row>
                )}
            </Table.Body>
        </Table.Root>
    );
}