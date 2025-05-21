import React from "react";
import { getProducts } from "../prisma-db";
import Link from "next/link";
import { removeProduct } from "../actions/products";

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
          <form action={removeProduct.bind(null, prod.id)}>
            <button style={{ backgroundColor: "red", color: "white" }}>
              Delete
            </button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default ProductDb;
