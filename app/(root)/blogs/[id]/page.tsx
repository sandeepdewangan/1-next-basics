"use client";

import React, { use } from "react";

const Blog = ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ lang?: "en" | "hi" }>;
}) => {
  const { lang = "en" } = use(searchParams);
  const { id } = use(params);

  return (
    <div>
      Blog id: {id} and Language is set to {lang}
    </div>
  );
};

export default Blog;
