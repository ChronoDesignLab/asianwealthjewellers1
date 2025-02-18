import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div>
      <div className="grid grid-cols-1 mb-24 container3 md:grid-cols-[1.25fr_1fr] gap-4">
        <div className=" flex padding pr-16 flex-col justify-center">
          <p className="text-sm">About</p>
          <div className="text-2xl text-black md:text-4xl flex flex-col gap-3 mt-5 mb-7 md:mt-10 md:mb-14 font-semibold">
            <h1 className="italic font-bold">ASIAN WEALTH JEWELLERS,</h1>
            <h1 className="text-gray-600">your dedicated luxury</h1>
            <h1 className="text-gray-600">watch expert.</h1>
          </div>
          <p className="">
            Asian Wealth Jewellers collaborates with industry experts to seek
            out the <b>rare</b> timepieces you{" "}
          </p>
          <p>
            desire, making them a <b>reality</b> for all watch enthusiasts and
            collectors.
          </p>
          <p className="mt-4">
            Asian Wealth Jewellers brings integrity, trustworthiness and
            delivers world-class service
          </p>
          <p className="mb-6"> to the second-hand luxury market.</p>
          <p className="bg-black  font-semibold text-white text-11 py-3 px-5 rounded-full shadow-md w-fit">
            SOURCE ME A WATCH
          </p>
        </div>
        <div className=" flex items-center p-5">
          <div className="h-[550px] w-full md:w-[450px]">
            <Image
              alt=""
              unoptimized
              src={
                "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwf457b71e/images/large/d133a600656e5290b377d6e8a23eb7e0.png?sw=750&sh=750&sm=fit&sfrm=png"
                  }
              width={0}
              height={0}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
