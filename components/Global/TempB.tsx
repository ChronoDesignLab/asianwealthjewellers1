import Image from "next/image";
import React from "react";

type Props = {
  watch: {
    name: string;
    price: string;
    text: string;
    img: string;
  };
  key: number;
};

export default function TempB({ watch, key }: Props) {
  return (
    <div className="">
      <div className="h-96 center shadow bg-gray-100 relative">
        <div className="h-[250px]">
          <Image
            alt=""
            src={watch.img}
            unoptimized
            height={0}
            width={0}
            className="h-full duration-500 w-full object-contain"
          />
        </div>
      </div>
      <div className="flex items-center mt-2 flex-col gap-1">
        <p className="text-15 font-semibold">{watch.name}</p>
        <p className="text-base">{watch.price}</p>
        <p className="text-13 text-gray-400">{watch.text}</p>
      </div>
    </div>
  );
}
