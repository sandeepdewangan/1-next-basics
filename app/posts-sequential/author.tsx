import React from "react";

type Author = {
  id: number;
  name: string;
};

const Author = async ({ userId }: { userId: string }) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const author: Author = await response.json();

  return <p className="text-red-600">By: {author.name}</p>;
};

export default Author;
