"use client";

import { useRouter } from "next/navigation";
import React, { startTransition } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div>
      Error in blog id. {error.message}
      <button onClick={reload}>Retry</button>
    </div>
  );
};

export default Error;
