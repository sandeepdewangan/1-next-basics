import React from "react";
import { getProducts } from "../prisma-db";
import Link from "next/link";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

const ProductDb = async () => {
  const products: Product[] = await getProducts();
  return (
    <div>
      {products.map((prod) => (
        <div key={prod.id}>
          <Link href={`/products-db/${prod.id}`}>
            <h4>{prod.title}</h4>
          </Link>
          <p>Rs. {prod.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductDb;
