import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AutoVista - Luxury Car Rentals",
  description: "Experience luxury and performance with our premium car rental service.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geist.className} style={{ isolation: "isolate" }}>
        {children}
      </body>
    </html>
  );
}
