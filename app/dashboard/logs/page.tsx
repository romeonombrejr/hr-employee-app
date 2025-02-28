import { Grid, Button, Box, Section } from "@radix-ui/themes";
import Pagination from "@/app/ui/dashboard/logs/pagination";
import LogsTable from "@/app/ui/dashboard/logs/table";
import DateFilter from "@/app/ui/dashboard/logs/date-filter";
import { Suspense } from 'react'
import { DateFilterSkeleton } from "@/app/ui/skeletons";

export default async function Page(
//   props: {
//   SearchParams?: Promise<{
//     startDate?: string;
//     endDate?: string;
//     page?: string;
//   }>;
// }
)  {

  // const searchParams = await props.SearchParams;
  // const startDate = searchParams?.startDate || '';
  // const endDate =
  //   searchParams?.endDate ||
  //   new Date().toISOString().split('T')[0];

  // const currentPage = Number(searchParams?.page) || 1;


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
    </Box>
  );
  // This should have two sections/components:
  // A section to ask the date start and date end
  // And a section fortable and pagination in response to the user's input in the section above

}