import React from "react";
import Title from "../Global/Title";
import SourceMeAWatch from "../Global/SourceMeAWatch";

export default function Seamless() {
  const items = [
    [
      "You Want It",
      "Share the specific details of the desired watch model you are looking for via WhatsApp",
    ],
    [
      "We Find It",
      "Our dedicated team will swiftly locate the watch you want, providing you with the latest price and availability. If the price matches your budget, we will request a deposit to secure your order.",
    ],
    [
      "We Deliver It",
      "Once your order is confirmed, our team will source and deliver the watch for you in as little as 48 hours.",
    ],
  ];
  return (
    <div className="py-20 padding bg-black relative text-white">
      <div className="h-[800] z-30 w-[800] border-2 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <Title color="white" title="Our Seamless Process" />
      <div className="grid grid-cols-1 md:grid-cols-3 mt-28 gap-10 container3">
        {items.map((data, key) => (
          <div className="">
            <p>0{key + 1}</p>
            <p className="text-lg font-bold mt-8 mb-5">{data[0]}</p>
            <p>{data[1]}</p>
          </div>
        ))}
      </div>
      <div className="center">
        <SourceMeAWatch bgColor="white" color="black" />
      </div>
    </div>
  );
}
