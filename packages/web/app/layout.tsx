import React from "react";
import { UserProvider } from "./context";
import { Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "PERN Monorepo",
  description: "Full-stack TypeScript monorepo with pnpm, Next.js, and Express",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <UserProvider>
          <Navbar />
          <main className="container mx-auto px-4 py-8">{children}</main>
        </UserProvider>
      </body>
    </html>
  );
}
