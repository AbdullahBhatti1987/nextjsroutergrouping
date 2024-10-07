import React from "react";

export default function Logo() {
  return (
    <div className={"p-6 bg-orange-400 w-fit h-fit z-50"}>
      <div className={"border-2 border-white px-6 py-4"}>
        <div className={"text-white text-md font-bold space-x-2"}>
          <span>F</span> <span>U</span>
        </div>
        <div className={"text-white text-md font-bold space-x-2"}>
          <span>R</span> <span>N</span>
        </div>
      </div>
    </div>
  );
}
