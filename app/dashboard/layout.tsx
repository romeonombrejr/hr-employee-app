"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import TopNavbar from "../ui/dashboard/topnavbar";
import { Container } from "@radix-ui/themes";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <Container style={{ margin: "auto", width: "430px" }}>
      <TopNavbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname} // new key on route changes
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </Container>
  );
}
