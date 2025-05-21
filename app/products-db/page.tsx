import { getProducts } from "../prisma-db";

import ProductDetail from "./product-detail";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

const ProductDb = async () => {
  const products: Product[] = await getProducts();

  return <ProductDetail products={products} />;
};

export default ProductDb;
