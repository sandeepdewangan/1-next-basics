import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      Hello NextJS!
      <Link href="/blog">Blog</Link>
    </div>
  );
};

export default Home;
