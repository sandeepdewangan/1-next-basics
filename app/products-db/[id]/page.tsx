import React from "react";
import EditProductForm from "./edit-product-form";
import { getProduct } from "@/app/prisma-db";
import { Product } from "../page";
import { notFound } from "next/navigation";

const ProductUpdate = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const product: Product | null = await getProduct(parseInt(id));

  if (!product) {
    notFound();
  }

  return <EditProductForm product={product} />;
};

export default ProductUpdate;
