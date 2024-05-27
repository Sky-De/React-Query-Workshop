import { FC } from "react";

const Loading: FC = () => {
  return (
    <main>
      <div className="animate-spin w-4 h-4 border-4 border-gray-200 border-t-blue-500 rounded-full"></div>
    </main>
  );
};

export default Loading;
