import Image from "next/image";
import React from "react";

export default function Changing() {
  const data = [
    [
      "Why We Do It?",
      "We envision a world where we bring rare luxury timepieces within reach, creating exceptional moments worthy to be crowned.",
    ],
    [
      "How We Do It",
      "We achieve this by reshaping the second-hand-luxury watch market, leveraging our expertise, trust, and personalized service.",
    ],
    [
      "Our Promise",
      "We offer extensive knowledge. transparent dealings, and personalized guidance to help you find the perfect watch, ensuring a smooth experience and avoiding potential pitfalls.",
    ],
  ];

  https: return (
    <div className="padding py-20">
      <div className=" text-center text-2xl text-gray-800 lg:text-2xl mb-32 flex flex-col gap-3 font-semibold ">
        <p className="">We're changing the way people think about the</p>
        <p>  secondary-luxury watch market.</p>
      </div>
      <div className="flex flex-col lg:flex-row container3  gap-5">
        <div className="h-[600px] flex-1 w-full">
          <Image
              alt=""
              unoptimized
              src={
                "https://assets-global.website-files.com/64a2f498d944b4e944093b84/64dc837edc475efb34b04197_Group%2082-p-500.png"
              }
              height={0}
              width={0}
              className="h-full w-full object-cover"
            />
        </div>
        <div className="lg:pl-14 flex-[1.75] flex flex-col gap-5 justify-evenly">
          {data.map((item, key) => (
            <div className="">
              <p className="text-[24px] font-semibold text-gray-800">{item[0]}</p>
              <p className="mt-2 w-[90%] text-sm leading-loose">{item[1]}</p>
            </div>
          ))}
          <p className="bg-black font-semibold text-white text-10 py-4 px-10 rounded-full shadow-md w-fit">
            SOURCE ME A WATCH
          </p>
        </div>
      </div>
    </div>
  );
}
