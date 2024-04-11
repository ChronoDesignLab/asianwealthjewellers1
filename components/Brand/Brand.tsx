import Image from "next/image";

export default function Brand() {


  const watches = [
    {
      name: "Rolex",
      img: "https://assets-global.website-files.com/64c794410a6c56562470f505/651abd31646aced39a35eae3_Group%2013-p-500.png",
    },
    {
      name: "Audemars Piguet",
      img: "https://assets-global.website-files.com/64c794410a6c56562470f505/6537d00217f87b4382a413e3_audbramd-p-500.png",
    },
    {
      name: "Patek Philippe",
      img: "https://assets-global.website-files.com/64c794410a6c56562470f505/651abd201d89d9c909b720cf_Group%2015-p-500.png",
    },
    {
      name: "Richard Mille",
      img: "https://assets-global.website-files.com/64c794410a6c56562470f505/651abd0b1d89d9c909b70979_Group%2016-p-500.png",
    },
  ];

  return (
    <div className="py-20 ">
      <div className="container padding">
      <div className="flex justify-between pb-7 border-b border-gray-300 items-center">
          <p className="text-[26px] font-semibold">Shop By Brand </p>
          <p className="uppercase font-semibold text-11">View More</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 mt-9 gap-5">
          {watches.map((watch, key: number) => (
            <div
              className="relative cursor-pointer group group overflow-hidden flex flex-col items-center justify-end py-4 h-96 rounded-md"
              key={key}
            >
              <Image alt="" src={watch.img} height={0} width={0} className="h-full group-hover:scale-125 duration-300 delay-100 w-full absolute top-0 left-0 z-[-1] object-cover" unoptimized/>
              <div className="flex translate-y-9 group-hover:translate-y-0 duration-300 flex-col items-center justify-center">
                <p className="text-2xl font-bold uppercase text-gray-100">{watch.name}</p>
                <div className="w-8 h-1 rounded-sm bg-gray-300 mt-5"></div>
                <p className="text-11 text-gray-100 font-semibold mt-5 delay-200 opacity-0 group-hover:opacity-100 duration-500">
                  VIEW ALL MODELS
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
