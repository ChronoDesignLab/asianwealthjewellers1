import Image from "next/image";
import { BsPlayBtnFill, BsPlayFill } from "react-icons/bs";
import Img from '@/Assets/Images/img.jpg'

export default function Main() {
  return (
    <div className="grid grid-cols-1 gap-3 padding">
      <div className="h-96 lg:h-[500px] overflow-hidden">
        <Image
          src={Img}
          alt=""
          height={0}
          width={0}
          unoptimized
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-96 lg:h-[500px] overflow-hidden">
        <video
          className="object-contain min-h-full min-w-full "
          autoPlay
          muted
          loop
        >
          <source src="/vid1.mp4"></source>
        </video>
      </div>
      <div className="flex flex-col gap-5 py-10">
        <p className="text-2xl font-bold">Trusted Source</p>
        <p>
          When it comes to luxury watches, we trust a select group of reliable
          sources. We have strong relationships with individuals who share our
          expertise, and most important our integrity.
        </p>
        <div className="flex p-2 bg-black rounded-full w-fit pl-10 items-center gap-2">
          <p className="text-10 font-semibold text-white">HOW TO SPOT A FAKE</p>
          <div className="h-10 w-10 rounded-full bg-white center">
            <BsPlayFill className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
