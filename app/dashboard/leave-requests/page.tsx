"use client";

import { Flex, Text, Button, TextArea, Section, Box } from "@radix-ui/themes";
import { useUser } from "@clerk/nextjs";
import { addLeaveRequest } from "@/app/lib/action";
import { useState } from "react";

export default function Page() {
  const { user } = useUser();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("employeeId", user.id);
    formData.append("startDate", startDate);
    formData.append("endDate", endDate);
    formData.append("reason", reason);

    try {
      const response = await addLeaveRequest(formData);
      if (response?.id) {
        setMessage("Leave request submitted successfully!");
        setStartDate("");
        setEndDate("");
        setReason("");
      }
    } catch (error) {
      setMessage("Failed to submit leave request.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box
      py="8"
      style={{
        backgroundColor: "var(--gray-a2)",
        borderRadius: "var(--radius-3)",
      }}
    >
      <Section style={{ paddingBlock: 30 }}>
        <Flex justify="center">
          <Text size="5" weight="bold" style={{ marginBottom: 20 }}>
            Leave Request
          </Text>
        </Flex>

        <Flex gap="3" justify="between" style={{ paddingInline: 20 }}>
          <Box>
            <label htmlFor="start-date">
              Start Date:
              <br />
            </label>
            <input
              type="date"
              id="start-date"
              name="start-date"
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Box>
          <Box>
            <label htmlFor="end-date">
              End Date:
              <br />
            </label>
            <input
              type="date"
              id="end-date"
              name="end-date"
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Box>
        </Flex>
        <Flex
          direction="column"
          gap="3"
          style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}
        >
          <form onSubmit={handleSubmit}>
		  <Box maxWidth="300px">
			<TextArea size="3" 
				placeholder="Reason" 
				value={reason}
				onChange={(e) => setReason(e.target.value)}
				required 
				style={{width: 300}}/>
			</Box>

            <Button
              type="submit"
              disabled={loading}
              style={{ marginTop: "10px" }}
            >
              {loading ? "Submitting..." : "Submit Request"}
            </Button>
          </form>

          {message && (
            <Text color={message.includes("success") ? "green" : "red"}>
              {message}
            </Text>
          )}
        </Flex>
      </Section>
    </Box>
  );
}
