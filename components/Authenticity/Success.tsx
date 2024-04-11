import Image from "next/image";
import Title from "../Global/Title";
import { BsPlayFill } from "react-icons/bs";

export default function Success() {
  const items = [
    {
      title: " BIG MOE X FIFA WORLD CUP 2022 - TEAM CANADA",
      text: "Canada secured their spot in the 2022 World Cup as CONCACAF's top finisher setting records including an unbeaten streak of 17 games.",
      img: "https://assets-global.website-files.com/64a2f498d944b4e944093b84/650438dff54f6d7c2aa92714_4-p-500.png",
    },
    {
      title: " BIG MOE X FIFA WORLD CUP 2022 - TEAM CANADA",
      text: "Canada secured their spot in the 2022 World Cup as CONCACAF's top finisher setting records including an unbeaten streak of 17 games.",
      img: "https://assets-global.website-files.com/64a2f498d944b4e944093b84/650438de3af2e2bd36b135ac_5-p-500.png",
    },
    {
      title: " BIG MOE X FIFA WORLD CUP 2022 - TEAM CANADA",
      text: "Canada secured their spot in the 2022 World Cup as CONCACAF's top finisher setting records including an unbeaten streak of 17 games.",
      img: "https://assets-global.website-files.com/64a2f498d944b4e944093b84/650438dfa7b41fb901514f3c_6-p-500.png",
    },
  ];
  return (
    <div className="py-20 padding">
      <Title color="black" title="Success Stories" />
      <div className="grid mt-10 grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-2">
        {items.map((data, key) => (
          <div className="text-center cursor-pointer">
            <div className="h-[380px] relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-black after:bg-opacity-10">
              <Image
                src={data.img}
                unoptimized
                alt=""
                height={0}
                width={0}
                className="h-full w-full object-cover"
              />
              <div className="h-12 w-12 active:scale-90 border-2 border-transparent group hover:border-green-500 center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white z-30 hover:scale-110 duration-300 rounded-full shadow-md">
                <BsPlayFill className="text-xl group-hover:text-green-500 duration-100" />
              </div>
            </div>
            <p className="mt-4 text-black font-semibold">{data.title}</p>
            <p className="text-gray-500 text-13 mt-3">{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
