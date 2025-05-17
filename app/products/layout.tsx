import React from "react";

function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <header>
        <h1 className="text-2xl bg-yellow-100 text-black">Header</h1>
      </header>
      <body>{children}</body>
      <footer>
        <h1>Footer</h1>
      </footer>
    </html>
  );
}

export default ProductLayout;
