import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blog with layout default value will be displayed",
  description: "Desc",
};

const Blog = () => {
  return <div>Blog</div>;
};

export default Blog;
