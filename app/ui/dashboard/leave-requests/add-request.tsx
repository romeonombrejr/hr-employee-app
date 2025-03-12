"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import {
  Dialog,
  Button,
  Flex,
  Text,
  Select,
  Box,
  TextArea,
} from "@radix-ui/themes";
import { addLeaveRequest } from "@/app/lib/action";

export default function AddRequest() {
  const router = useRouter();
  const { user } = useUser();
  const [open, setOpen] = useState(false); // Control dialog state

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("employeeId", user.id);

    await addLeaveRequest(formData);

    if (form) {
      form.reset(); 
    }

    setOpen(false); 
    // Add a refresh query parameter to trigger data refresh
    router.replace(`?refresh=${Date.now()}`, { scroll: false });
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <Button onClick={() => setOpen(true)}>Create Request +</Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="400px">
        <form onSubmit={handleSubmit}>
          <Dialog.Title>Request Leave</Dialog.Title>

          <Flex style={{ justifyContent: "center", marginBlock: 10 }}>
            <label>
              <Select.Root name="leaveType" required>
                <Select.Trigger placeholder="Leave Type">
                </Select.Trigger>
                <Select.Content>
                  <Select.Item value="SICK">Sick</Select.Item>
                  <Select.Item value="VACATION">Vacation</Select.Item>
                  <Select.Item value="BEREAVEMENT">Bereavement</Select.Item>
                  <Select.Item value="EMERGENCY">Emergency</Select.Item>
                  <Select.Item value="MATERNITY">Maternity</Select.Item>
                  <Select.Item value="PATERNITY">Paternity</Select.Item>
                  <Select.Item value="LWOP">Leave Without Pay</Select.Item>
                </Select.Content>
              </Select.Root>
            </label>
          </Flex>

          <Flex gap="3" justify="between" style={{ marginBlock: 10 }}>
            <Box>
              <label htmlFor="start-date">
                <Text as="div" size="2" mb="1" weight="bold">
                  Start Date
                </Text>
                <input type="date" name="startDate" required />
              </label>
            </Box>
            <Box>
              <label htmlFor="end-date">
                <Text as="div" size="2" mb="1" weight="bold">
                  End Date
                </Text>
                <input type="date" name="endDate" required />
              </label>
            </Box>
          </Flex>

          <Flex style={{ marginBlock: 10 }}>
            <TextArea
              placeholder="Reason"
              name="reason"
              style={{ width: "100%", height: 105 }}
              required
            ></TextArea>
          </Flex>

          <Flex style={{ justifyContent: "center", marginBlock: 10 }}>
            <Button type="submit">Submit</Button>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
}
