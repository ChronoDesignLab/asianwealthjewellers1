import { BsGoogle, BsStar, BsStarFill } from "react-icons/bs";

export default function ClientComp() {
  return (
    <div className="h-full flex flex-col bg-white shadow-md border-2 p-4">
      <div className="flex justify-end">
        <BsGoogle className="text-xl" />
      </div>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-blue-600"></div>
        <div className="">
          <p>Eric H.</p>
          <p className="font-semibold">First Time Buyer</p>
        </div>
      </div>
      <p className="mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem sit
        magnam ea recusandae omnis commodi. Est fugit provident impedit?
      </p>
      <div className="flex flex-1 items-end gap-2">
        {[1, 2, 3, 4, 5].map(() => (
          <BsStarFill className="text-lg" />
        ))}
      </div>
    </div>
  );
}
