"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function Watch() {
  const router = useRouter();

  const items = [
    {
      name: "Rolex",
      img: "https://assets-global.website-files.com/64c794410a6c56562470f505/651abd31646aced39a35eae3_Group%2013-p-500.png",
      link: "rolex",
    },
    {
      name: "Audemars Piguet",
      img: "https://assets-global.website-files.com/64c794410a6c56562470f505/6537d00217f87b4382a413e3_audbramd-p-500.png",
      link: "audemars",
    },
    {
      name: "Patek Philippe",
      img: "https://assets-global.website-files.com/64c794410a6c56562470f505/651abd201d89d9c909b720cf_Group%2015-p-500.png",
      link: "patek",
    },
    {
      name: "Richard Mille",
      img: "https://assets-global.website-files.com/64c794410a6c56562470f505/651abd0b1d89d9c909b70979_Group%2016-p-500.png",
      link: "richard",
    },
  ];
  return (
    <div className="container3 padding">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
        {items.map((data, key) => (
          <div
            className="cursor-pointer"
            key={key}
            onClick={() => {
              router.push(`brand/${data.link}`);
            }}
          >
            <div className="h-44 group relative overflow-hidden cursor-pointer">
              <div className="absolute h-full z-30  bg-[rgba(0,0,0,.2)] w-full top-0 delay-300 duration-500 left-0">
                <div className="flex flex-col px-20 justify-end items-center h-full translate-y-3 group-hover:-translate-y-2 gap-5 duration-500">
                  <p className="text-gray-100 text-xl sm:text-2xl lg:text-3xl font-semibold text-center">
                    {data.name}
                  </p>
                  <div className="h-1 w-8 bg-gray-50 rounded-full"></div>
                  <p className="text-[9px] delay-300 font-semibold opacity-0 group-hover:opacity-100 duration-500 uppercase text-white">
                    VIEW ALL MODELS
                  </p>
                </div>
              </div>
              <Image
                alt=""
                src={data.img}
                unoptimized
                height={0}
                width={0}
                className="h-full duration-500 delay-200 group-hover:scale-125 w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
