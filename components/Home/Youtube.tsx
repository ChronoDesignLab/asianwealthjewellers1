import Image from "next/image";
import Img1 from "@/assets/images/sss.jpg";
import Img2 from "@/assets/images/ddd.jpg";
import Img3 from "@/assets/images/ppp.jpg";
import Img4 from "@/assets/images/ggg.jpg";

export default function Youtube() {
  const images = [Img1, Img3, Img2, Img4];

  return (
    <div className="container my-20 padding">
      <div className="flex flex-col lg:flex-row justify-between pb-5 border-b border-gray-300 gap-4 lg:gap-0 lg:items-center">
        <p className="text-xl lg:text-3xl font-semibold text-black">
          Asian Wealth Jewellers on YouTube
        </p>
        <p className="uppercase">See More</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-10">
        {images.map((data, key) => (
          <div className="group" key={key}>
            <div
              className={`h-80 overflow-hidden cursor-pointer rounded-md relative p-4 flex items-end justify-center `}
            >
              <Image
                src={data}
                unoptimized
                alt=""
                height={0}
                width={0}
                className="h-full w-full group-hover:scale-125 duration-300 object-cover absolute top-0 left-0 z-[-1]"
              />
              <p className="px-5 py-2 font-semibold rounded-full bg-white text-black">
                WATCH ON YOUTUBE
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
