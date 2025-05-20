import React, { Suspense } from "react";
import Author from "./author";

type Post = {
  userId: string;
  id: number;
  title: string;
};

const PostSequential = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await response.json();

  const filteredPosts = posts.filter((post) => post.id % 10 === 1);

  return (
    <div>
      {filteredPosts.map((post) => (
        <div key={post.id}>
          <p>Title: {post.title}</p>
          <Suspense
            fallback={
              <p style={{ color: "red" }}>Fetching author details...</p>
            }
          >
            <Author userId={post.userId} />
          </Suspense>
        </div>
      ))}
    </div>
  );
};

export default PostSequential;
