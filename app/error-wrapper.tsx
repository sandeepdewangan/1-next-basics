"use client";

import React, { useState } from "react";

const ErrorSimulator = ({
  message = "An error has occured.",
}: {
  message: string;
}) => {
  const [error, setError] = useState(false);

  if (error) throw new Error(message);
  return (
    <div>
      <button onClick={() => setError(true)}>Simulate Error</button>
    </div>
  );
};

const ErrorWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ErrorSimulator message="Simulated Error" />
      {children}
    </div>
  );
};

export default ErrorWrapper;
