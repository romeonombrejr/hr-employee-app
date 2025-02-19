import { Grid, Button } from "@radix-ui/themes";

export default function Menu() {
    return (
        <Grid columns="2" gap="3" width="auto" style={{ paddingInline: 20, marginInline: 10 }}>
            <Button style={{padding: 20}}>CLOCK IN</Button>
            <Button style={{padding: 20}}>CLOCK OUT</Button>
            <Button style={{padding: 20}}>LOG TIME-OFF</Button>
            <Button style={{padding: 20}}>LOG OVERTIME</Button>
            <Button style={{padding: 20}}>ATTENDANCE LOG</Button>
            <Button style={{padding: 20}}>REQUESTS LOG</Button>
        </Grid>
    );
}