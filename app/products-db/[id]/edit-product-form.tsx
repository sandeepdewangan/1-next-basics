"use client";

import { editProduct, FormState } from "@/app/actions/products";
import React, { useActionState } from "react";
import { Product } from "../page";

const EditProductForm = ({ product }: { product: Product }) => {
  const initialState: FormState = {
    errors: {},
  };

  const editProductWithId = editProduct.bind(null, product.id);

  const [state, formAction, isPending] = useActionState(
    editProductWithId,
    initialState
  );

  return (
    <form action={formAction}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        defaultValue={product.title}
      />
      {state.errors.title && (
        <p style={{ color: "red" }}>{state.errors.title}</p>
      )}
      <input
        type="number"
        name="price"
        placeholder="Price"
        defaultValue={product.price}
      />
      {state.errors.description && (
        <p style={{ color: "red" }}>{state.errors.description}</p>
      )}
      <input
        type="text"
        name="description"
        placeholder="Description"
        defaultValue={product.description ?? ""}
      />
      {state.errors.price && (
        <p style={{ color: "red" }}>{state.errors.price}</p>
      )}
      <button disabled={isPending}>Add Product</button>
      {/* If this is server component then we need to separate the submit button */}
      {/* <Submit /> */}
    </form>
  );
};

export default EditProductForm;
