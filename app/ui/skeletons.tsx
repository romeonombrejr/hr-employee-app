import { Box, Flex } from "@radix-ui/themes";

const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function DateFilterSkeleton() {
    return (
        <Flex gap="3" justify="between" style={{paddingInline: 20}}>
        <div className="{`${shimmer} relative w-50% md:col-span-4`}">
        </div>
        <div className="{`${shimmer} relative w-50% md:col-span-4`}">
        </div>
      </Flex>
    );
}