"use client";
import Image from "next/image";
import Image2 from "@/assets/images/patek.png";
import { useState } from "react";

export default function Success() {
  const [active, setActive] = useState(0);
  const stories = [
    {
      name: "John Smith",
      location: "New York, USA",
      story: "I purchased a watch from Asian Wealth Jewellers - Drew a Jeweler, and I'm extremely satisfied with the quality and design. It has become my everyday accessory."
    },
    {
      name: "Emma Johnson",
      location: "London, UK",
      story: "I had been searching for a unique timepiece, and I found the perfect one on Asian Wealth Jewellers. The craftsmanship is exceptional, and I always receive compliments when I wear it."
    },
    {
      name: "Carlos Gomez",
      location: "Madrid, Spain",
      story: "I bought a watch as a gift for my father from Asian Wealth Jewellers. He was thrilled with the elegant design and precision. It's now his favorite watch."
    },
    {
      name: "Sophie Chen",
      location: "Shanghai, China",
      story: "Asian Wealth Jewellers offers a great selection of watches. I ordered one for myself, and it arrived quickly and in perfect condition. I love its modern look."
    },
    {
      name: "Hiroshi Tanaka",
      location: "Tokyo, Japan",
      story: "I'm a watch collector, and I must say that the watches I purchased from Asian Wealth Jewellers are exceptional. They have a wide range of styles and brands to choose from."
    }
  ];
  console.log(stories[0])


  return (
    <div className="padding">
      <div className="px-3 py-16 container p-2 rounded-2xl bg-gray-100 h-fit sm:h-[400px] grid grid-cols-1 lg:grid-cols-2 gap-7">
        <div className="hidden overflow-hidden lg:block">
          <Image src={Image2} alt="" height={0} width={0} className="h-full w-full object-cover"/>
        </div>
        <div className="flex flex-col gap-5 items-center lg:px-16 justify-between">
          <div className="flex flex-col items-center gap-3">
            <p className="text-lg text-black font-semibold">Success Stories</p>
            <p className="text-center text-13">{stories[active].story}</p>
            <p className="uppercase font-semibold text-13 text-black">
              {stories[active].name}
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-2">
              {stories.map((data, key) => (
                <div
                  key={key}
                  onClick={() => setActive(key)}
                  className={`h-4 w-4 cursor-pointer rounded-full ${
                    key === active ? "bg-black" : "bg-white"
                  } `}
                ></div>
              ))}
            </div>
            <p className="px-6 py-4 rounded-full mt-auto bg-black text-white font-semibold w-fit">
              READ MORE REVIEWS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
