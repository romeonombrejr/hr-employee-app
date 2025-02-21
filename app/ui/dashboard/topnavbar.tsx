'use client'

import { UserButton } from "@clerk/nextjs";
import { Box, Flex } from "@radix-ui/themes";
import React, { useEffect, useState } from 'react';

export default function TopNavbar() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
          setTime(new Date());
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);

  return (
    <Flex
      gap="3"
      justify="between"
      style={{
        backgroundColor: "#271A3D",
        width: "full",
        height: 109,
        left: 0,
        top: 0,
      }}
    >
      <Box
        style={{
          width: 120,
          height: 21,
          marginTop: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold",
          fontSize: 16,
          lineHeight: 21,
        }}
      >
        {time.toLocaleDateString([], { weekday: 'long' })}
      </Box>
      <Box
        style={{
          backgroundColor: "#FFFCFC",
          width: 138,
          height: 138,
          marginTop: 22,
          borderRadius: 138,
          border: "8px solid #F29220",
        }}
      >
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              rootBox: "w-full h-full",
              userButtonTrigger: "w-full h-full",
              userButtonBox: "w-full h-full",
              userButtonAvatarBox: "w-full h-full",
            },
          }}
        />
      </Box>

      <Box
        style={{
            width: 120,
            height: 21,
            marginTop: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: 16,
            lineHeight: 21,
          }}
      >
        {time.toLocaleDateString([], { 
            month: 'short', 
            day: 'numeric',
            year: 'numeric', 
        })}
      </Box>
    </Flex>
  );
}
