import React from "react";
import { getProducts } from "../prisma-db";

type Product = {
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
          <h4>{prod.title}</h4>
          <p>Rs. {prod.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductDb;
