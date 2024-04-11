"use client";
import Image from "next/image";
import Image2 from "@/Assets/Images/patek.png";
import { useState } from "react";

export default function Success() {
  const [active, setActive] = useState(0);
  const stories = [
    [
      " Moe’s service was above all expectations, he sourced the exact watch I wanted within 48 hours & answered every single one of my questions/doubts. I would highly recommend - this was my first experience buying a Rolex and Moe made it one to remember. The presentation/unboxing of the watch down to the fitting & explanation, everything was A+++. Thank you to Big Moe once again, I will surely be revisiting his services! g was easy and transparent. I really appreciate everything he did its my first time to deal with",
      "Eric",
    ],
    [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro fuga, accusamus odit quos, omnis rem ut, id suscipit at repellendus nobis sapiente.",
      "James",
    ],
    [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro fuga, accusamus odit quos, omnis rem ut, id suscipit at repellendus nobis sapiente.",
      "John",
    ],
    [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro fuga, accusamus odit quos, omnis rem ut, id suscipit at repellendus nobis sapiente.",
      "Sunny",
    ],
  ];

  return (
    <div className="padding">
      <div className="px-3 py-16 container p-2 rounded-2xl bg-gray-100 h-fit sm:h-[400px] grid grid-cols-1 lg:grid-cols-2 gap-7">
        <div className="hidden overflow-hidden lg:block">
          <Image src={Image2} alt="" height={0} width={0} className="h-full w-full object-cover"/>
        </div>
        <div className="flex flex-col gap-5 items-center justify-between">
          <div className="flex flex-col items-center gap-3">
            <p className="text-lg text-black font-semibold">Success Stories</p>
            <p className="text-center">{stories[active]}</p>
            <p className="uppercase font-semibold text-13 text-black">
              {stories[active][1]}
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((data, key) => (
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
