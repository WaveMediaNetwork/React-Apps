import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Weight } from "lucide-react";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "DISM",
  description: "Digital Integrated Smart Menu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
