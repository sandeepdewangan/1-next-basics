"use client";
import React, { useOptimistic } from "react";
import Link from "next/link";
import { removeProduct } from "../actions/products";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

const ProductDetail = ({ products }: { products: Product[] }) => {
  // optimistic updates
  // 1st param: initial list of products
  // 2nd param: how to update state

  const [optimisticProducts, setOptimisticProducts] = useOptimistic(
    products,
    (currProduct, prodId) => {
      // return updated list as an optimistic state
      return currProduct.filter((product) => product.id !== prodId);
    }
  );

  async function removeProductById(productId: number) {
    setOptimisticProducts(productId); // user see changes instantly
    await removeProduct(productId); // actual happens in background
  }

  return (
    <div>
      {optimisticProducts.map((prod) => (
        <div key={prod.id}>
          <Link href={`/products-db/${prod.id}`}>
            <h4>{prod.title}</h4>
          </Link>
          <p>Rs. {prod.price}</p>
          <form action={removeProductById.bind(null, prod.id)}>
            <button style={{ backgroundColor: "red", color: "white" }}>
              Delete
            </button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default ProductDetail;
