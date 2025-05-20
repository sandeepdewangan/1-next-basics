import Link from "next/link";
import React from "react";

const Products = () => {
  return (
    <div>
      <Link href="/products/1">Product 1</Link>
      <Link href="/products/1">Product 2</Link>
      <Link href="/products/1">Product 3</Link>
    </div>
  );
};

export default Products;
