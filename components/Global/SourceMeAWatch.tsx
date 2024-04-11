import React from "react";

type Props = {
  bgColor: string 
  color: string
}

export default function SourceMeAWatch({bgColor, color}: Props) {
  return (
    <button style={{backgroundColor: `${bgColor}`, color: `${color}`}} className="py-4 px-10 bg-black text-white font-semibold mt-24 rounded-full shadow-md text-11">
      SOURCE ME A WATCH
    </button>
  );
}
