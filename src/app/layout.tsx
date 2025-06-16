import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import {
  ClerkProvider,

} from '@clerk/nextjs'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GulfTicket - Malaysia's #1 Daily Draw Platform",
  description:
    "Win Cars, Motorbikes, Cash & More with 80%-90% Winning Chance. Daily prizes up to RM 115,000,000. Fully licensed and regulated.",
  keywords: "lottery, draw, Malaysia, prizes, cars, motorbikes, cash, daily draw",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

          {children}

        </body>
      </html>
    </ClerkProvider>
  );
}
