"use client";
import { useEffect, useRef, useState } from "react";
import { BsChevronUp, BsFilter } from "react-icons/bs";

export default function SortFilter() {
  const items = [
    ["Sort by", <BsChevronUp />],
    ["Filter", <BsFilter />],
  ];
  const [over100, setOver100] = useState(false);
  const [sortOpened, setSortOpened] = useState(false);

  const sortRef = useRef<any>();
  const filterRef = useRef<any>();



  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setSortOpened(false)
      }
    };
    const handleClickInside = (event: any) => {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setSortOpened(false)
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('mousedown', handleClickInside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('mousedown', handleClickInside);
    };
  }, []);

  const handleModalClick = (event: any) => {
    event.stopPropagation(); // Prevents the click from propagating to the document
    console.log('Clicked inside the modal');
  };





  useEffect(() => {
    function handleClickOutside(event: any) {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setSortOpened(false)
      }
    }

    function handleChildClick(event: any) {
      if (sortRef.current && sortRef.current.contains(event.target)) {
        setSortOpened(true)
      }
    }

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('click', handleChildClick);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('click', handleChildClick);
    };
  }, []);


  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setOver100(true);
      } else {
        setOver100(false);
      }
    });
  }, []);
  return (
    <div
      className={`${
        over100 ? "opacity-100" : "opacity-0"
      } duration-500 delay-200 z-50 relative`}
    >
      <div className="fixed z-50 bottom-24 lg:bottom-20 left-1/2 -translate-x-1/2">
        <div className="relative">
          <div
          ref={sortRef}
            className={`absolute font-semibold text-black bg-white shadow-md w-52 space-y-3 -left-9 duration-300 -top-[135px] p-9 rounded-md ${
              sortOpened ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <p className="cursor-pointer">Highest price</p>
            <p className="cursor-pointer">Lowest price</p>
          </div>
          <div className="flex bg-slate-900 p-2 lg:p-[10px] w-full rounded-full items-center gap-2">
            {items.map((item, key) => (
              <div
                ref={key === 0 ? sortRef : filterRef}
                className="flex bg-black py-3 cursor-pointer px-5 text-white rounded-full text-11 uppercase font-semibold items-center gap-2"
              >
                <p className="text-nowrap">{item[0]}</p>
                <span className="stroke-2">{item[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
