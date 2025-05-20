"use client";

import { ThemeContext } from "@/components/theme-provider";
import Link from "next/link";
import React, { useContext } from "react";

const Products = () => {
  const theme = useContext(ThemeContext);
  console.log(theme.colors.primary);

  return (
    <div>
      <Link href="/products/1">Product 1</Link>
      <Link href="/products/1">Product 2</Link>
      <Link href="/products/1">Product 3</Link>
    </div>
  );
};

export default Products;
