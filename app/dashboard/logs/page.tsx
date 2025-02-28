import { Grid, Button, Box, Section } from "@radix-ui/themes";
import Pagination from "@/app/ui/dashboard/logs/pagination";
import LogsTable from "@/app/ui/dashboard/logs/logs-table";
import DateFilter from "@/app/ui/dashboard/logs/date-filter";
import { Suspense } from 'react'
import { DateFilterSkeleton } from "@/app/ui/skeletons";
import { fetchFilteredAttendanceLogs } from "@/app/lib/data";

export default async function Page(props: {
  searchParams?: Promise<{
    page?: number;
    startDate?: string;
    endDate?: string;
  }>;
})  {
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams?.page) || 1;
  const startDate = searchParams?.startDate || '';
  const endDate = searchParams?.endDate || '';
  const totalPages = await fetchFilteredAttendanceLogs(currentPage, startDate, endDate);


  return (
    <Box
      py="8"
      style={{
        backgroundColor: "var(--gray-a2)",
        borderRadius: "var(--radius-3)",
      }}
    >
      <Section>
        <Suspense fallback={<DateFilterSkeleton />}>
          <DateFilter />
        </Suspense>
      </Section>
      <Section>
        <Suspense>
          {/* <LogsTable/> */}
        </Suspense>
      </Section>
    </Box>
  );
  // This should have two sections/components:
  // A section to ask the date start and date end
  // And a section fortable and pagination in response to the user's input in the section above

}