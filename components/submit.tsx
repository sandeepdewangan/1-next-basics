"use client";

import React from "react";
import { useFormStatus } from "react-dom";

const Submit = () => {
  // it returns last form submit status
  const { pending } = useFormStatus();
  return <button disabled={pending}>Add Product</button>;
};

export default Submit;
