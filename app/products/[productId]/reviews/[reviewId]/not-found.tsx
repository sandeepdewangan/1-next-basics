"use client";

import { usePathname } from "next/navigation";
import React from "react";

const NotFound = () => {
  const pathName = usePathname();
  console.log(pathName); // /products/12/reviews/1001

  const params = pathName.split("/");

  return (
    <div>
      Review {params[4]} is Not Found for Product {params[2]}{" "}
    </div>
  );
};

export default NotFound;
