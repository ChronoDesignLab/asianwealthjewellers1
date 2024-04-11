import Image from "next/image";
import { BsChevronRight } from "react-icons/bs";

type Props = {
  watch: {
    brand: string;
    img: string;
    link: string;
  };
};

export default function WatchImg({ watch }: Props) {
  return (
    <div className="">
      <div className="container3">
        <div className="flex gap-1 font-semibold py-5 text-gray-600 items-center stroke-2 text-11">
          <p>Home</p>
          <BsChevronRight className="stroke-2" />
          <p>Watches</p>
          <BsChevronRight className="stroke-2" />
          <p className="text-black">{watch.brand}</p>
        </div>
      </div>
      <div className="h-48 w-full">
        <Image alt="" height={0} width={0} src={watch.img} unoptimized className="h-full w-full object-cover"/>
        </div>;
    </div>
  );
}
