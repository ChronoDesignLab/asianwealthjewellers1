"use client";
import { BsShare, BsTruck, BsWhatsapp } from "react-icons/bs";
import DetailsImages from "./DetailsImages";
import { BiDiamond, BiShare } from "react-icons/bi";
import { useState } from "react";
import { FaDiamond } from "react-icons/fa6";
import { IoStarSharp } from "react-icons/io5";
import { IoDiamondOutline } from "react-icons/io5";


export default function Details() {
  const [active, setActive] = useState(0);
  const links = [
    ['Authenticity', <IoDiamondOutline />],
    ['Deliver Within', <BsTruck />],
    ['5-Stars', <IoStarSharp />],
  ]
  return (
    <div className="">
      <div className="grid container3 padding items-start grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="h-full">
          <DetailsImages />
        </div>
        <div className="sticky top-44">
          <p className="mb-7 text-black font-semibold text-xl">
            Rolex, GMT-Master II, 126710BLRO, Black Dial, "Pepsi", Stainless
            Steel, Jubilee Bracelet, 40mm
          </p>
          <p className="my-5 text-black">REFERENCE: 126710BLRO-0001</p>
          <div className="mb-5 flex items-center gap-3 text-sm font-semibold">
            <p
              className={`${active === 0 ? "text-black" : ""} cursor-pointer`}
              onClick={() => setActive(0)}
            >
              AED
            </p>
            |
            <p
              className={`${active === 1 ? "text-black" : ""} cursor-pointer`}
              onClick={() => setActive(1)}
            >
              USD
            </p>
          </div>
          <p className="text-11 font-semibold">ESTIMATED PRICE</p>
          <div className="flex items-center justify-between">
            <div className="text-xl relative bg-red-500 text-transparent font-semibold">
              <p
                className={`absolute top-1/2 duration-300 text-nowrap text-black -translate-y-1/2 left-0 ${
                  active === 0 ? " opacity-100" : " opacity-0"
                }`}
              >
                80,000 - 100,000 AED
              </p>
              <p
                className={`absolute text-nowrap top-1/2 duration-300 text-black -translate-y-1/2 left-0 ${
                  active === 1 ? " opacity-100" : " opacity-0"
                }`}
              >
                $25,000 - $30,000 USD
              </p>
            </div>
            <div className="h-9 w-9 border-gray-300 border rounded-full center">
              <BsShare />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row border-y py-8 border-gray-400 justify-center mt-5 gap-3 items-center">
            <div className="flex bg-green-500 items-center text-white gap-3 justify-between w-full lg:w-auto lg:flex-1 rounded-full">
              <p></p>
              <p>REQUEST PRICE</p>
              <div className="h-12 w-12 rounded-full bg-green-400 center">
                <BsWhatsapp className="text-xl" />
              </div>
            </div>
            <div className="flex bg-white p-2 h-12 border-2 items-center text-black gap-3 center w-full lg:w-auto lg:flex-1 rounded-full">
              <p>JOIN OUR WATCH GROUP</p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-3">
            {links.map((link, key) => (
              <div className="flex flex-col gap-2 items-center">
                <p className="text-2xl text-gray-800">{link[1]}</p>
                <p className="text-10">{link[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
