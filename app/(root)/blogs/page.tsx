import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Blog with layout default value will be displayed",
  description: "Desc",
};

const Blog = async ({
  searchParams,
}: {
  searchParams: Promise<{ lang?: "en" | "hi" }>;
}) => {
  const { lang = "en" } = await searchParams;

  const contentInEnglish = (
    <div>
      <h1 className="text-2xl">Blogs</h1>
      <Link href="/blogs?lang=en">Read in English</Link>
      <Link href="/blogs?lang=hi">Read in Hindi</Link>

      <ul>
        <Link href={`/blogs/1?lang=${lang}`}>
          <li>What is react?</li>
        </Link>
        <Link href={`/blogs/1?lang=${lang}`}>
          <li>What is Node Js?</li>
        </Link>
      </ul>
    </div>
  );

  const contentInHindi = (
    <div>
      <h1 className="text-2xl">Blogs</h1>
      <Link href="/blogs/?lang=en">Read in English</Link>
      <Link href="/blogs/?lang=hi">Read in Hindi</Link>

      <ul>
        <Link href="/blogs/1?lang=en">
          <li>रिएक्ट क्या है?</li>
        </Link>
        <Link href="/blogs/2?lang=en">
          <li>नोड जेएस क्या है?</li>
        </Link>
      </ul>
    </div>
  );

  if (lang === "en") return contentInEnglish;
  if (lang === "hi") return contentInHindi;
};

export default Blog;
