"use client";

import React, { useEffect } from "react";

const ErrorPage = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return <div>Error Fetching Data</div>;
};

export default ErrorPage;
