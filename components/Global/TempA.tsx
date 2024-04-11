import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
    watch: {
    name: string;
    price: string;
    img: string
  };
  key: number;
};

export default function TempA({ watch, key }: Props) {

  const router = useRouter()
  
  
  return (
    <div className="cursor-pointer" onClick={() => router.push('/details')}>
      <div className="h-96 center bg-gray-100 shadow relative">
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
      <div className="flex items-center mt-2 text-black flex-col gap-1">
        <p className="text-base font-semibold text-gray-800 ">{watch.name}</p>
        <p className="text-[17px] font-bold">{watch.price}</p>
        <p className="text-13 text-gray-500">Comes with Box & Papers</p>
      </div>
    </div>
  );
}
