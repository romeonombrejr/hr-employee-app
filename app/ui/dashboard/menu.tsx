"use client";

import React, { useState } from "react";
import * as Toast from "@radix-ui/react-toast";
import { useUser } from "@clerk/nextjs";
import {
  clockInAction,
  clockOutAction,
  undoClockInAction,
  undoClockOutAction,
} from "@/app/lib/action";
import { Grid, Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

export default function Menu() {
  const { user } = useUser();
  const [toastOpen, setToastOpen] = useState(false);
  const [recordId, setRecordId] = useState<number | null>(null);
  const router = useRouter();

  const handleClockIn = async () => {
    if (!user) return;
    // Prepare a FormData object with the employee id (using Clerk’s user id).
    const formData = new FormData();
    formData.append("employeeId", user.id);
    try {
      // Call the server action; assume it returns an object like { id: number }.
      const result = await clockInAction(formData);
      setRecordId(result.id);
      setToastOpen(true);
    } catch (error) {
      console.error("Error clocking in:", error);
    }
  };

  const handleClockOut = async () => {
    if (!user) return;

    const formData = new FormData();
    formData.append("employeeId", user.id);
    try {
      const result = await clockOutAction(formData);
      setRecordId(result.id);
      setToastOpen(true);
    } catch (error) {
      console.error("Error clocking out:", error);
    }
  };

  const handleClockInUndo = async () => {
    if (!recordId) return;
    try {
      // Call the undo server action to remove the clock‑in record.
      await undoClockInAction(recordId);
      setToastOpen(false);
    } catch (error) {
      console.error("Error undoing clock in:", error);
    }
  };

  const handleClockOutUndo = async () => {
    if (!recordId) return;
    try {
      await undoClockOutAction(recordId);
      setToastOpen(false);
    } catch (error) {
      console.error("Error undoing clock out:", error);
    }
  };

  const handleAttendanceLogClick = () => {
    router.push("/dashboard/logs");
  };

  return (
    <Grid
      columns="2"
      gap="3"
      width="auto"
      style={{ paddingInline: 20, marginInline: 10 }}
    >
      <Button onClick={handleClockIn} style={{ padding: 20 }}>
        CLOCK IN
      </Button>
      <Button onClick={handleClockOut} style={{ padding: 20 }}>
        CLOCK OUT
      </Button>
      <Button style={{ padding: 20 }}>LOG TIME-OFF</Button>
      <Button style={{ padding: 20 }}>LOG OVERTIME</Button>
      <Button style={{ padding: 20 }} onClick={handleAttendanceLogClick}>
        ATTENDANCE LOG
      </Button>
      <Button style={{ padding: 20 }}>REQUESTS LOG</Button>

      {/* Toast provider and UI */}
      <Toast.Provider swipeDirection="down">
        <Toast.Root
          open={toastOpen}
          onOpenChange={setToastOpen}
          className="bg-gray-800 text-white p-4 rounded shadow-lg"
        >
          <Toast.Title>Clock In/Out Recorded</Toast.Title>
          <Toast.Description>
            <button onClick={handleClockInUndo} className="underline">
              Undo
            </button>
          </Toast.Description>
        </Toast.Root>
        <Toast.Viewport className="fixed bottom-0 left-1/2 transform -translate-x-1/2 p-4" />
      </Toast.Provider>
    </Grid>
  );
}
