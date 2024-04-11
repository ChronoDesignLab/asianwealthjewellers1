import { BsTelegram } from "react-icons/bs";
import Logo from '@/Assets/Images/logo.png'
import Image from "next/image";

export default function Social() {
  return (
    <div className="padding">
      <div className="container bg-black rounded-xl overflow-hidden shadow-md text-white grid grid-cols-[1.5fr_1fr] mt-10">
        <div className="flex flex-col bg-gray-black justify-center px-12 relative overflow-hidden">
          <p className="font-semibold text-3xl">Join our exclusive watch group</p>
          <div className="flex w-fit mt-10 items-center bg-blue-500 rounded-full text-white font-semibold gap-4 justify-between p-1">
            <div className="w-8"></div>
            <p>Get Acess Now</p>
            <div className="h-12 w-12 bg-blue-500 rounded-full center">
              <BsTelegram className="text-3xl" />
            </div>
          </div>
        </div>
        <div className="bg-black px-10 center py-16">
          <Image src={Logo} alt='' height={0} width={0} className="h-56 object-cover"/>
        </div>
      </div>
    </div>
  );
}
