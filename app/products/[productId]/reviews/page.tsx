import React from "react";

const Reviews = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  return <div>All Reviews of Product {productId}</div>;
};

export default Reviews;
