import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Theme } from "@radix-ui/themes"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HR Employee App",
  description: "Digital Feet's HR Employee App Clone made with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Theme accentColor="yellow" grayColor="slate" panelBackground="translucent" radius="full">
        {children}
        </Theme>
      </body>
    </html>
    </ClerkProvider>
  );
}