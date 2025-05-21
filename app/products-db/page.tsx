import { getProducts } from "../prisma-db";

import ProductDetail from "./product-detail";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

const ProductDb = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const { query } = await searchParams;

  const products: Product[] = await getProducts(query);

  return <ProductDetail products={products} />;
};

export default ProductDb;
