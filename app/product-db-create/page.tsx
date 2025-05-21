"use client";

import React, { useActionState } from "react";
import { createProduct, FormState } from "../actions/products";

const ProductDbCreate = () => {
  const initialState: FormState = {
    errors: {},
  };

  const [state, formAction, isPending] = useActionState(
    createProduct,
    initialState
  );

  return (
    <form action={formAction}>
      <input type="text" name="title" placeholder="Title" />
      {state.errors.title && (
        <p style={{ color: "red" }}>{state.errors.title}</p>
      )}
      <input type="number" name="price" placeholder="Price" />
      {state.errors.description && (
        <p style={{ color: "red" }}>{state.errors.description}</p>
      )}
      <input type="text" name="description" placeholder="Description" />
      {state.errors.price && (
        <p style={{ color: "red" }}>{state.errors.price}</p>
      )}
      <button disabled={isPending}>Add Product</button>
      {/* If this is server component then we need to separate the submit button */}
      {/* <Submit /> */}
    </form>
  );
};

export default ProductDbCreate;
