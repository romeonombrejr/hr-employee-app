import { UserButton } from "@clerk/nextjs";
import { Box, Section } from "@radix-ui/themes";
import InfoCards from "../ui/dashboard/info-cards";
import Menu from "../ui/dashboard/menu";
import Header from "../ui/dashboard/header";

export default function Dashboard() {
  return (
    <Box
      py="8"
      style={{
        backgroundColor: "var(--gray-a2)",
        borderRadius: "var(--radius-3)",
      }}
    >
      <Section>
        <Header />
      </Section>
      <Section>
        <InfoCards />
      </Section>
      <Section>
        <Menu />
      </ Section>
    </Box>
  );
}
