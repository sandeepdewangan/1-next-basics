import React from "react";

const Blog = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ lang?: "en" | "hi" }>;
}) => {
  const { lang = "en" } = await searchParams;
  const { id } = await params;

  return (
    <div>
      Blog id: {id} and Language is set to {lang}
    </div>
  );
};

export default Blog;
