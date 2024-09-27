import React from "react";

const Loading: React.FC = () => {
  return (
    <>
      <div className="animate-pulse w-full h-20 bg-gray-200 rounded-md" />
      {[...Array(10)].map((_, index) => (
        <div
          className="animate-pulse w-full h-20 bg-gray-200 rounded-md mt-2"
          key={index}
        />
      ))}
    </>
  );
};

export default Loading;
