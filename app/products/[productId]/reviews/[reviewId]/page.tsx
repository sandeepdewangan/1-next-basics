import React from "react";

const Review = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId, reviewId } = await params;
  return (
    <div>
      The product with id: {productId} and review id: {reviewId}
    </div>
  );
};

export default Review;
