import React from "react";

const Product = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  return <div>Product Details Page: {productId}</div>;
};

export default Product;
