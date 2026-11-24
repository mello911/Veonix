import type { Metadata } from "next";
import type { ReactNode } from "react";
import { brandProperties } from "@/design/palette";
import "./globals.css";

export const metadata: Metadata = {
  title: "VEONIX — Fragment Collection",
  description:
    "VEONIX is an independent fashion house. The Fragment collection — Spring 2027.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" style={brandProperties}>
      <body>{children}</body>
    </html>
  );
}
