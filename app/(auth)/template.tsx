"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../globals.css";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  console.log(pathname);

  const [input, setInput] = useState("");

  return (
    <html lang="en">
      <body>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <Link
          href="/login"
          className={pathname === "/login" ? "font-bold text-orange-500" : ""}
        >
          Login
        </Link>
        <Link
          href="/register"
          className={
            pathname === "/register" ? "font-bold text-orange-500" : ""
          }
        >
          Register
        </Link>
        {children}
      </body>
      <footer>The AUTH Layout</footer>
    </html>
  );
}
