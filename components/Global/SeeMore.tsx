import { BsPlus } from "react-icons/bs";

export default function SeeMore() {
  return (
    <div className="center cursor-pointer">
      <div className="bg-black w-fit text-base text-white font-semibold py-4 px-9 rounded-full shadow-md flex items-center gap-4">
        <BsPlus className="stroke-1 text-xl"/>
        <p>See More</p>
      </div>
    </div>
  )
}
