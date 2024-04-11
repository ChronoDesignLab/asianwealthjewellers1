"use client";
import { BsChevronDown, BsSearch } from "react-icons/bs";
import Logo from "@/Assets/Images/mainlogo.png";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Search from "./Search";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [over100, setOver100] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const watches = [
    ["ROLEX", "rolex"],
    ["AUDEMARS PIGUET", "audemars"],
    ["PATEK PHILLIPE", "patek"],
    ["RICHARD MILLE", "richard"],
  ];

  const links = [
    ["watches", "watches"],
    ["brands", "brands"],
    ["authenticity", "authenticity"],
    ["celebrities", "celebrities"],
    ["why asian wealth jewellers", "why"],
  ];
  const pathname = usePathname();

  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setOver100(true);
      } else {
        setOver100(false);
      }
    });
  }, []);
  return (
    <nav>
      <div
        className={`fixed z-[10000] pt-3 w-screen top-0 duration-300 left-0 ${
          pathname === "/" ? `${over100 ? "glass" : "bg-transparent"}` : "glass"
        }`}
      >
        <div className="container3 flex flex-col items-center h-full">
          <div className="h-16 lg:h-auto py-4 flex items-center justify-between w-full text-lg text-white px-3 xl:p-0">
            <span className="lg:opacity-0 lg:invisible">
              {isOpen ? (
                <FaTimes onClick={() => setIsOpen(!isOpen)} />
              ) : (
                <FaBars onClick={() => setIsOpen(!isOpen)} />
              )}
            </span>
            <Link
              href={"/"}
              className="w-fit flex justify-center items-center "
            >
              <Image
                alt=""
                src={Logo}
                height={0}
                width={0}
                className="h-14 sm:h-16 lg:h-16 object-contain"
              />
              <p className="font-semibold text-15  hidden lg:block translate-x-0 lg:-translate-x-14 ">
                ASIAN WEALTH JEWELLERS
              </p>
            </Link>

            <BsSearch
              onClick={() => setOpenSearch(true)}
              className="cursor-pointer"
            />
          </div>
          <div className="hidden mt-3 lg:flex gap-5 text-11 font-semibold w-full justify-center border-y">
            {links.map((link, key) => (
              <div
                className={`uppercase after:absolute group flex items-center gap-1 after:-top-[2px] px-5 after:h-[2px] after:w-full   relative after:left-0 py-3 cursor-pointer text-white font-semibold ${
                  pathname === `/${link[1]}`
                    ? "after:bg-gray-600"
                    : "after:bg-transparent"
                }`}
                onClick={() => {
                  if (key !== 1) {
                    router.push(`/${link[1]}`);
                  }
                }}
              >
                {link[0]}
                <BsChevronDown
                  className={`${
                    key !== 1 && "hidden"
                  } stroke-1 group-hover:rotate-180 duration-300`}
                />
                {key === 1 && (
                  <div className="flex px-5 absolute top-full left-0 w-52 flex-col bg-white text-black opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                    {watches.map((watch, key) => (
                      <p
                        onClick={() => router.push(`/brand/${watch[1]}`)}
                        className={`${key === 3 ? "pb-5 pt-5" : "pt-5"}`}
                      >
                        {watch[0]}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`lg:hidden fixed text-white pt-20 uppercase flex flex-col items-center left-0 z-[5000] bg-black h-screen duration-300 w-screen ${
          isOpen ? "top-0" : "-top-[120vh]"
        }`}
      >
        {links.map((link, key) => (
          <div
            className="pt-3 flex items-center flex-col"
            onClick={() => {
              if (key !== 1) {
                setIsOpen(false);
                router.push(`/${link[1]}`);
              } else {
                setDropdownOpened(!dropdownOpened);
              }
            }}
          >
            <div className="flex items-center gap-1">
              <p className=" text-11 font-semibold">{link[0]}</p>
              <BsChevronDown
                className={`${
                  key !== 1 && "hidden"
                } stroke-1 group-hover:rotate-180 duration-300`}
              />
            </div>
            {key === 1 && (
              <div
                className={`w-40 flex flex-col gap-3 items-center duration-500 text-11 font-semibold pt-2 ${
                  dropdownOpened ? "h-28 " : "h-0 overflow-hidden"
                }`}
              >
                {watches.map((watch, key) => (
                  <p
                    className=""
                    onClick={() => {
                      router.push(`/brand/${watch[1]}`);
                      setIsOpen(!isOpen);
                    }}
                  >
                    {watch[0]}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <Search setOpenSearch={setOpenSearch} openSearch={openSearch} />
    </nav>
  );
}
