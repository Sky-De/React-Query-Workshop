import React, { FC } from "react";

const ErrorMessage: FC<{ message: string }> = ({ message }) => {
  return (
    <main>
      <span className="text-red-500">Error: {message}</span>;
    </main>
  );
};

export default ErrorMessage;
