'use client'
import TempA from "./TempA";

type Props = {
  title: string;
};

export const watches = [
  {
    name: "Rolex ,GMT-Master II",
    price: "50,000 - 80,000 AED",
    img: "https://assets-global.website-files.com/64c794410a6c56562470f505/65646b9909421d2717c6b76f_126710BLRO-0001.png",
  },
  {
    name: "Rolex ,GMT-Master II",
    price: "50,000 - 80,000 AED",
    img: "https://assets-global.website-files.com/64c794410a6c56562470f505/65653b3afcb90a40f0370bc2_126610LN-0001-p-500.png",
  },
  {
    name: "Rolex ,GMT-Master II",
    price: "50,000 - 80,000 AED",
    img: "https://assets-global.website-files.com/64c794410a6c56562470f505/6565366176d16015a9dbb9bc_126334-0022-p-500.png",
  },
  {
    name: "Rolex ,GMT-Master II",
    price: "50,000 - 80,000 AED",
    img: "https://assets-global.website-files.com/64c794410a6c56562470f505/65653ce28288cf246fb4786d_126710BLNR-0002-p-500.png",
  },
];

export default function TypeA({ title }: Props) {

  
  
  return (
    <div className="py-20">
      <div className="padding container">
        <div className="flex text-black justify-between pb-7 border-b border-gray-300 items-center">
          <p className="text-xl text-center lg:text-start lg:text-[26px] font-semibold">{title} </p>
          <p className="hidden lg:block uppercase font-semibold text-11">See More</p>
        </div>
        <div className="grid mt-9 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {watches.map((watch, key) => (
            <TempA watch={watch} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
}
