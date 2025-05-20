import Product from "@/components/product";
import Review from "@/components/review";
import React, { Suspense } from "react";

/*
    -WITHOUT Suspense:- Due to the delay in Product page, the ProductReviews page takes time to load all the contents.
*/

// const ProductReviews = () => {
//   return (
//     <div>
//       <h1>Product Review</h1>
//       <Product />
//       <Review />
//     </div>
//   );
// };

// WITH Suspense
const ProductReviews = () => {
  return (
    <div>
      <h1>Product Review</h1>
      <Suspense fallback={<p>Loading product</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading review</p>}>
        <Review />
      </Suspense>
    </div>
  );
};

export default ProductReviews;
