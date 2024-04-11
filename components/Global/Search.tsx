"use client";
import { Dispatch, SetStateAction } from "react";
import { FaTimes } from "react-icons/fa";

type Props = {
  setOpenSearch: Dispatch<SetStateAction<boolean>>;
  openSearch: boolean;
};

export default function Search({ setOpenSearch, openSearch }: Props) {
  const search = [
    ["for him", ""],
    ["for her", ""],
    ["sport model", ""],
    ["dress model", ""],
    ["diver model", ""],
    ["diamond dial", ""],
    ["motif dial", ""],
    ["arabic dial", ""],
    ["roman dial", ""],
    ["best price ", ""],
    ["two tone", ""],
    ["yellow gold", ""],
    ["rose gold", ""],
    ["white gold", ""],
    ["42mm+", ""],
    ["heavy hitters", ""],
    ["jubilee bracelet", ""],
    ["new for 2024", ""],
    ["oyester bracelet", ""],
    ["oyester bracelet", ""],
    ["smooth bezel", ""],
    ["asian wealth jewellers choice", ""],
    ["new for 2024", ""],
    ["discontinued model", ""],
    ["anniversary model", ""],
    ["limited edition", ""],
  ];

  
  return (
    <div
      className={`h-screen w-screen fixed duration-500 delay-300 left-0 bg-white z-[400000] ${
        openSearch ? "opacity-100 visible blur-none" : "opacity-0 invisible blur-xl"
      }`}
    >
      <div className="container3 flex justify-end h-20 pr-2 lg:pr-0 items-center">
        <div
          onClick={() => setOpenSearch(false)}
          className="h-10 w-10 cursor-pointer rounded-full border center "
        >
          <FaTimes className="text-base"/>
        </div>
      </div>
      <div className="center">
        <div className="w-[1000px] padding relative">
          <div className="h-12 lg:h-16 border-2 border-gray-200 mt-4 w-full overflow-hidden flex rounded-full">
            <input
              type="text"
              className="flex-1 text-sm outline-none border-none px-5 h-full bg-transparent "
              placeholder="Search by Brands, Models, Celebrities and More!"
            />
            <button className="h-full px-5 rounded-full font-semibold text-black">
              SEARCH
            </button>
          </div>
          <div className="flex flex-wrap  items-center justify-center mt-8 gap-3">
            {search.map((data, key) => (
              <p className="text-10 uppercase cursor-pointer p-2 lg:p-4 rounded-full bg-gray-200 text-black font-semibold">
                {data[0]}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
