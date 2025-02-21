import { Box, Card, Flex, Text, Heading } from "@radix-ui/themes";

export default function InfoCards() {
    return (
        <Flex gap="3" justify="between" style={{ paddingInline: 20, marginInline: 10, width: "full", height: 120}}>
            <Box>
                <Card style={{ padding: 10, width: 120, height: 120, flexDirection: "column", alignItems: "between" }}>
                    <Text as="div" size="2" align={"center"} style={{ marginBottom: 10 }}>Sick<br />Leaves</Text>
                    <Heading as="h2" size="8" align={"center"} style={{ marginBottom: 10 }}>10</Heading>
                </Card>
            </Box>
            <Box>
                <Card style={{ padding: 10, width: 120, height: 120}}>
                    <Text as="div" size="2" align={"center"} style={{ marginBottom: 10 }}>Vacation Leaves</Text>
                    <Heading as="h2" size="8" align={"center"}>5</Heading>
                </Card>
            </Box>
            <Box>
                <Card style={{ padding: 10, width: 120, height: 120}}>
                    <Text as="div" size="2" align={"center"} style={{ marginBottom: 10 }}>Bereavement Leaves</Text>
                    <Heading as="h2" size="8" align={"center"}>5</Heading>
                </Card>
            </Box>
        </Flex>
    );
}



