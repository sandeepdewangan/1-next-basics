import React from "react";

// this will prefetch the id 1,2,3 in advance.
// prerendered as static HTML
// the timestamp will be same for each request which is generated at build time.
export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

const Product = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div>
      Product {id} is fetched at {new Date().toLocaleTimeString()}
    </div>
  );
};

export default Product;
