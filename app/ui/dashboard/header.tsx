'use client'

import { Box, Text } from "@radix-ui/themes";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function Header() {
  const { user, isLoaded } = useUser();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Use the user's first name if available, otherwise fallback to "User"
  const firstName = user?.firstName || "User";
  return (
    <Box
      as="div"
      style={{
        padding: "1rem",
        backgroundColor: "#f0f0f0",
        textAlign: "center",
      }}
    >
      <Text size="8" style={{ margin: 0 }}>
        Good Morning, {isLoaded ? firstName : "..."}
      </Text>
      <Text as="p" style={{ margin: 0 }}>
        {time.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </Text>
    </Box>
  );
}
