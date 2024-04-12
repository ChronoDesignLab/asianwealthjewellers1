import Image from "next/image";

export default function Changing() {
  const data = [
    [
      "Why We Do It?",
      "We envision a world where we bring rare luxury timepieces within reach, creating exceptional moments worthy to be crowned.",
    ],
    [
      "How We Do It",
      "We achieve this by reshaping the second-hand-luxury watch market, leveraging our expertise, trust, and personalized service.",
    ],
    [
      "Our Promise",
      "We offer extensive knowledge. transparent dealings, and personalized guidance to help you find the perfect watch, ensuring a smooth experience and avoiding potential pitfalls.",
    ],
  ];

  https: return (
    <div className="padding py-12 lg:py-20">
      <div className=" text-center text-xl text-gray-800 lg:text-2xl xl:text-3xl mb-8 sm:mb-12 mb:mb-16 lg:mb-32 flex flex-col gap-3 font-semibold ">
        <p className="hidden lg:block">We're changing the way people think about the</p>
        <p className="hidden lg:block"> secondary-luxury watch market.</p>
        <p className="lg:hidden">We're changing the way people think about the secondary-luxury watch market. </p>
      </div>
      <div className="flex flex-col lg:flex-row container3  gap-5">
        <div className="h-[600px] flex-1 w-full">
          <Image
            alt=""
            unoptimized
            src={
              "https://revolutionwatch.com/cdn-cgi/image/width=2560,height=1707,fit=crop,quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2021/08/01-RM-72-01-Lifestyle-Chronograph-scaled.jpg"
            }
            height={0}
            width={0}
            className="h-full w-full rounded object-cover"
          />
        </div>
        <div className="lg:pl-14 flex-[1.75] items-center lg:items-start text-center lg:text-start flex flex-col gap-5 justify-evenly">
          {data.map((item, key) => (
            <div className="">
              <p className="text-xl lg:text-[24px] font-semibold text-gray-800">
                {item[0]}
              </p>
              <p className="mt-2 w-[90%] text-sm leading-loose">{item[1]}</p>
            </div>
          ))}
          <p className="bg-black font-semibold text-white text-10 py-4 px-10 rounded-full shadow-md w-fit">
            SOURCE ME A WATCH
          </p>
        </div>
      </div>
    </div>
  );
}
