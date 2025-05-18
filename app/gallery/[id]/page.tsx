import React from "react";
import { Images } from "../images";
import Image from "next/image";

const Photo = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const img = Images.find((p) => p.id === id)!;

  return (
    <div>
      <h1 className="text-3xl m-auto">{img.name}</h1>
      <Image src={img.src} alt="IMAGE" width={600} height={600} />
    </div>
  );
};

export default Photo;
