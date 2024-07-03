import type { Metadata } from "next";
import "./globals.css";
import { syne, spaceGrotesk } from "./font/font";

export const metadata: Metadata = {
  title: "Blue Garden | Looking at the water, together.",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${spaceGrotesk.variable}`}>{children}</body>
    </html>
  );
}
