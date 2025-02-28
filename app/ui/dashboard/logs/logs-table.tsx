import { Table } from "@radix-ui/themes";

export default function LogsTable() {
    <Table.Root>
        <Table.Header>
            <Table.Row>
                <Table.ColumnHeaderCell>Clock In</Table.ColumnHeaderCell>
            </Table.Row>
            <Table.Row>
                <Table.ColumnHeaderCell>Clock Out</Table.ColumnHeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            <Table.Row>
                <Table.Row>
                    <Table.RowHeaderCell>Date for Clock in</Table.RowHeaderCell>
                    <Table.Cell>Date for Clock Out</Table.Cell>
                </Table.Row>
            </Table.Row>
        </Table.Body>
    </Table.Root>

}