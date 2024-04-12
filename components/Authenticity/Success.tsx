import Image from "next/image";
import Title from "../Global/Title";
import { BsPlayFill } from "react-icons/bs";

export default function Success() {
  const items = [
    {
      title: "Exquisite Craftsmanship",
      text: "Recognized for our exceptional craftsmanship and attention to detail in jewelry design.",
      img: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iNuuebXq81ao/v1/-1x-1.jpg",
    },
    {
      title: "Customer Satisfaction Award",
      text: "Received the Customer Satisfaction Award for consistently providing excellent service and quality products.",
      img: "https://www.frostnyc.com/cdn/shop/products/Rolex_1ct_blue_1_2_b970451f-0987-44fb-aeab-341b4f6dd40b_1970x.jpg?v=1677593430",
    },
    {
      title: " Luxury Timepieces Collection",
      text: "Curated an exclusive collection of luxury timepieces from renowned watchmakers around the world.",
      img: "https://luxurywatchesusa.com/wp-content/uploads/2021/06/patek-philippe-59801a-1200x675-cropped.jpg",
    },
  ];
  return (
    <div className="py-16 lg:py-20 padding">
      <Title color="black" title="Success Stories" />
      <div className="grid mt-10 grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-2">
        {items.map((data, key) => (
          <div className="text-center overflow-hidden group cursor-pointer">
            <div className="h-[380px] relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-black after:bg-opacity-10">
              <Image
                src={data.img}
                unoptimized
                alt=""
                height={0}
                width={0}
                className="h-full group-hover:scale-110 duration-300 w-full object-cover"
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
