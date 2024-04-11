import Image from "next/image";
import Video from "next-video";
import { BsPlayFill } from "react-icons/bs";
import Img from '@/Assets/Images/img.jpg'

export default function Main2() {
  return (
    <div className="grid w-full grid-cols-2 gap-20">
      <div className="flex z-20 flex-col justify-between">
        <div className="mt-7 text-[80px] leading-none ml-28">
          <p>Authenticity </p>
          <p className="translate-x-36 leading-none">Guaranteed</p>
        </div>
        <div className="center mt-10">
          <div className="w-96 text-sm leading-relaxed">
              <p>
              Trust us for genuine products. We source directly from trusted suppliers, conduct thorough authentication checks and offer a satisfaction guarantee. Shop with confidence at <b className="text-black">ASIAN WEALTH JEWELLERS</b>.
              </p>
          </div>
        </div>
        <div className="mt-32 pr-5">
          <div className="h-screen relative overflow-hidden">
            <video
              className="object-contain absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 min-h-full min-w-full "
              autoPlay
              muted
              loop
            >
              <source src="/vid1.mp4"></source>
            </video>
          </div>
        </div>
      </div>
      <div className="">
        <div className="h-[90vh] w-[550px] overflow-hidden relative ">
          <Image
            src={Img}
            alt=""
            height={0}
            width={0}
            unoptimized
            className="min-h-full min-w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>

        <div className="flex flex-col w-[400px] translate-x-32 mt-10 gap-5 py-10">
          <p className="text-3xl text-black font-bold">Trusted Source</p>
          <p>
            Trust in Every Purchase. We source directly from reputable
            manufacturers, conducting rigorous authentication checks to ensure
            genuine products. With our transparent supply chain and satisfaction
            guarantee, shop confidently at <b>Asian Wealth Jewellers</b>.
            Experience the peace of mind that comes with authenticity.
          </p>
          <div className="flex p-2 bg-black rounded-full w-fit pl-10 items-center gap-2">
            <p className="text-10 font-semibold text-white">
              HOW TO SPOT A FAKE
            </p>
            <div className="h-10 w-10 rounded-full bg-white center">
              <BsPlayFill className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
