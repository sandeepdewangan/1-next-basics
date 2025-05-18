import Link from "next/link";
import React from "react";

const F1 = () => {
  return (
    <div>
      Folder 1
      <br />
      <Link href="/f1/f2">Take me to Folder 2, on same level</Link>
      <br />
      <Link href="/f3">Take me to Folder 3, one level up</Link>
    </div>
  );
};

export default F1;
