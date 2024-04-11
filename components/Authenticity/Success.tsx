import Image from "next/image";
import Title from "../Global/Title";
import { BsPlayFill } from "react-icons/bs";

export default function Success() {
  const items = [
    {
      title: "Exquisite Craftsmanship",
      text: "Recognized for our exceptional craftsmanship and attention to detail in jewelry design.",
      img: "https://assets-global.website-files.com/64a2f498d944b4e944093b84/650438dff54f6d7c2aa92714_4-p-500.png",
    },
    {
      title: "Customer Satisfaction Award",
      text: "Received the Customer Satisfaction Award for consistently providing excellent service and quality products.",
      img: "https://assets-global.website-files.com/64a2f498d944b4e944093b84/650438de3af2e2bd36b135ac_5-p-500.png",
    },
    {
      title: " Luxury Timepieces Collection",
      text: "Curated an exclusive collection of luxury timepieces from renowned watchmakers around the world.",
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
            <p className="mt-4 text-black text-base font-semibold">{data.title}</p>
            <p className="text-gray-500 px-5 lg:px-8 text-13 mt-3">{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
