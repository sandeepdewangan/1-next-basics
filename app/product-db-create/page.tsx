import React from "react";
import { addProduct } from "../prisma-db";
import { redirect } from "next/navigation";
import Submit from "@/components/submit";

const ProductDbCreate = () => {
  // this function receives form data as argument.
  async function createProduct(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const price = formData.get("price") as string;
    const description = formData.get("description") as string;

    await addProduct(title, parseInt(price), description);
    redirect("/products-db");
  }

  return (
    <form action={createProduct}>
      <input type="text" name="title" placeholder="Title" />
      <input type="number" name="price" placeholder="Price" />
      <input type="text" name="description" placeholder="Description" />

      <Submit />
    </form>
  );
};

export default ProductDbCreate;
