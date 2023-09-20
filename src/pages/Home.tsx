import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <div className="w-full h-screen bg-white flex">
        <div className="flex-[35%] w-full h-full p-10">
          <h1 className="text-3xl text-neutral-900 text-left font-semibold">
            Filter
          </h1>
        </div>
        <div className="flex-[65%] w-full h-full bg-blue-300"></div>
      </div>
    </React.Fragment>
  );
}
