import Image from "next/image";
import React from "react";
import { Images } from "../../images";

const PhotoModal = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const img = Images.find((p) => p.id === id)!;

  return (
    <div>
      <Image src={img.src} alt="IMAGE" width={600} height={600} />
    </div>
  );
};

export default PhotoModal;
