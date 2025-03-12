import { Flex, Text, Button, TextArea, Section, Box } from "@radix-ui/themes";
import AddRequest from "@/app/ui/dashboard/leave-requests/add-request";
import DateFilter from "@/app/ui/dashboard/logs/date-filter";
import { Suspense } from "react";
import { DateFilterSkeleton } from "@/app/ui/skeletons";
import RequestsTable from "@/app/ui/dashboard/leave-requests/requests-table";
import { fetchLeaveRequestPages } from "@/app/lib/data";

export default async function Page(props: {
  searchParams?: Promise<{
    page?: number;
    startDate?: string;
    endDate?: string;
	refresh?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams?.page) || 1;
  const today = new Date().toISOString().split("T")[0];
  const startDate = searchParams?.startDate || today;
  const endDate = searchParams?.endDate || today;
  const totalPages = await fetchLeaveRequestPages(startDate, endDate);

  return (
    <Box
      py="4"
      style={{
        backgroundColor: "var(--gray-a2)",
        borderRadius: "var(--radius-3)",
      }}
    >
      <Section style={{ paddingBottom: 20 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <Text size="6" weight="bold">
            Leave Requests
          </Text>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <AddRequest />
        </div>
      </Section>
      <Section style={{ paddingBlock: 10 }}>
        <Suspense fallback={<DateFilterSkeleton />}>
          <DateFilter />
        </Suspense>
      </Section>
      <Section style={{ paddingBlock: 10 }}>
        <Suspense>
          <RequestsTable startDate={startDate} endDate={endDate} currentPage={currentPage}/>
        </Suspense>
      </Section>
    </Box>
  );
}
