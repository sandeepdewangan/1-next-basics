import React from "react";

const Product = async () => {
  // delay product load for 5 sec
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return <div>Products</div>;
};

export default Product;
