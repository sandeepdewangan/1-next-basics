"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <html lang="en">
      <body>
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
