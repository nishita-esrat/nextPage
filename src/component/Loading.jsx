import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-68px)]">
      <p className="text-3xl md:text-7xl  font-thin">L</p>
      <div className="w-10 h-10 md:mt-5 border-dashed border-blue-500 rounded-full border-8 animate-spin	"></div>
      <p className="text-3xl md:text-7xl font-thin">ading....</p>
    </div>
  );
};

export default Loading;
