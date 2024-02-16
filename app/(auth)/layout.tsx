import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-fill flex min-h-screen items-center justify-center">
      {children}
    </main>
  );
}
