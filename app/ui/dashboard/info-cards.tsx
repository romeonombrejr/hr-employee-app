import { Box, Card, Flex, Text, Heading } from "@radix-ui/themes";

export default function InfoCards() {
    return (
        <Flex gap="3" justify="between" style={{ paddingInline: 20, marginInline: 10 }}>
            <Box>
                <Card style={{ width:150, padding: 10 }}>
                    <Text as="div" size="2" align={"center"} style={{ marginBottom: 10 }}>Sick Leaves</Text>
                    <Heading as="h2" size="8" align={"center"}>10</Heading>
                </Card>
            </Box>
            <Box>
                <Card style={{ width:150, padding: 10 }}>
                    <Text as="div" size="2" align={"center"} style={{ marginBottom: 10 }}>Vacation Leaves</Text>
                    <Heading as="h2" size="8" align={"center"}>5</Heading>
                </Card>
            </Box>
            <Box>
                <Card style={{ width:150, padding: 10 }}>
                    <Text as="div" size="2" align={"center"} style={{ marginBottom: 10 }}>Bereavement Leaves</Text>
                    <Heading as="h2" size="8" align={"center"}>5</Heading>
                </Card>
            </Box>
        </Flex>
    );
}


/* overviewDashboard_Elements */

// position: absolute;
// width: 449px;
// height: 579px;
// left: 34px;
// top: 177px;

