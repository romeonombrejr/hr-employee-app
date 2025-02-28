'use client';

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Box, Flex } from "@radix-ui/themes";

export default function DateFilter() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function updateDateParams(key: string, value: string) {
      const params = new URLSearchParams(searchParams);
      
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      
      replace(`${pathname}?${params.toString()}`);
    }

    return (
      <Flex gap="3" justify="between" style={{paddingInline: 20}}>
        <Box>
          <label htmlFor="start-date">Start Date:<br /></label>
          <input 
            type="date" 
            id="start-date"  
            name="start-date"
            defaultValue={searchParams.get('startDate') || ""}
            onChange={(e) => updateDateParams('startDate', e.target.value)}
          />
        </Box>
        <Box>
          <label htmlFor="end-date">End Date:<br /></label>
          <input 
            type="date" 
            id="end-date" 
            name="end-date"
            defaultValue={searchParams.get('endDate') || ""}
            onChange={(e) => updateDateParams('endDate', e.target.value)}
          />
        </Box>
      </Flex>
    );
}
