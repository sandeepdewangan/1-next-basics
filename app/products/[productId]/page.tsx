import React from "react";

// Dynamic Metadata
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  return {
    title: `Product id: ${productId}`,
  };
};

const Product = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  return <div>Product Details Page: {productId}</div>;
};

export default Product;
