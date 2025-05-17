import React from "react";

// this will catch all the routes

const Doc = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const slug = await params;
  console.log(slug);

  /*
  URL: http://localhost:3000/docs/feature1/concept3/data1
  OUTPUT:
  [
    "feature1",
    "concept3",
    "data1"
  ]
  */

  return <div>Catch all</div>;
};

export default Doc;
