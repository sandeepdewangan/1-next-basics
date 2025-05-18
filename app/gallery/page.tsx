import React from "react";
import "../globals.css";
import Image from "next/image";
import Link from "next/link";
import { Images } from "./images";

const Gallery = () => {
  return (
    <div className="m-3">
      <h1 className="text-3xl mb-2"> My Gallery</h1>
      <div className="flex flex-wrap gap-3">
        {Images.map(({ id, name, src }) => {
          return (
            <Link key={id} href={`/gallery/${id}`}>
              <Image src={src} height={400} width={400} alt={name} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
