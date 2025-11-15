import React from "react";
import { UserProvider } from "./context/UserContext";

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
      <body>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
