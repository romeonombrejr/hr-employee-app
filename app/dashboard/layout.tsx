import TopNavbar from "../ui/dashboard/topnavbar";
import { Container } from "@radix-ui/themes";

 export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container style={{ margin: "auto", width: "600px" }}>
        <TopNavbar />
        {children}
    </Container>
    // <div className="flex flex-col md:flex-row md:overflow-hidden">
    //   <TopNavbar />
    //   <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    // </div>
  );
}

