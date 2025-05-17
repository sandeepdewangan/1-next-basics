"use client";

import { useRouter } from "next/navigation";
import React, { use } from "react";

const Blog = ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ lang?: "en" | "hi" }>;
}) => {
  const router = useRouter();
  const { lang = "en" } = use(searchParams);
  const { id } = use(params);

  const randId = Math.floor(Math.random() * 2);
  console.log(randId);

  if (randId === 0) {
    throw new Error("No.0 Blog is not available!");
  }

  function handleOnClick() {
    router.push("/");
    // router.replace("/"); // router.replace to prevent the user to navigate back to the invalid route.
    // redirect("/"); // use for redirection
  }

  return (
    <div>
      <span>
        Blog id: {id} and Language is set to {lang}
      </span>
      <button onClick={handleOnClick}>Go to Home</button>
    </div>
  );
};

export default Blog;
