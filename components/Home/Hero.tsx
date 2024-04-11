import {
  BsChevronDown,
  BsPlayFill,
  BsStar,
  BsWatch,
  BsWhatsapp,
} from "react-icons/bs";
import { FiWatch } from "react-icons/fi";
import { IoDiamondOutline } from "react-icons/io5";

export default function Hero() {
  const heroes = [
    ["SOURCE ME A WATCH", <FiWatch />],
    ["WELCOME VIDEO", <BsPlayFill />],
  ];
  return (
    <div className="h-screen relative overflow-hidden center">
      <div className="z-30 flex flex-col items-center gap-14">
        <p className="text-2xl lg:text-[40px] text-center font-semibold text-white">
          Watch Sourcing Reimagined.
        </p>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
          {heroes.map((data, key) => (
            <div
              className={`flex items-center cursor-pointer justify-between font-bold text-black text-base w-64 p-2 rounded-full ${
                key === 0 ? "bg-white" : "bg-gray-300"
              }`}
              key={key}
            >
              <div className=""></div>
              <div className="flex gap-2 items-center">
                <div className="h-8 w-8 rounded-full opacity-0"></div>
                <p className="mr-4 text-11 text-black font-bold">{data[0]}</p>
              </div>
              <div
                className={`h-11 w-11 ${
                  key === 0 ? "bg-gray-300 text-black" : "bg-white text-black"
                } rounded-full center`}
              >
                <span className="text-xl">{data[1]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <video
        className="absolute top-1/2 left-1/2 z-[-1] object-cover -translate-x-1/2 -translate-y-1/2 min-w-[100vw] min-h-[200vh] lg:min-h-full lg:min-w-full "
        autoPlay
        muted
        loop
      >
        <source src={"/hero.mp4"} type="video/webm" />
      </video>
      <div className="h-screen w-screen absolute top-0 left-0 grid lg:hidden grid-cols-2">
        {[1, 2, 3, 4].map((data, key) => (
          <div
            className={`${key === 0 || key === 3 ? "bgTrans1" : "bgTrans2"}`}
          ></div>
        ))}
      </div>
      <div className="h-full w-full absolute top-0 left-0 hidden lg:grid grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((data, key) => (
          <div
            className={`${
              key === 0 || key === 2 || key === 5 || key === 7
                ? "bgTrans1"
                : "bgTrans2"
            } 
            ${key === 3 && "flex items-end justify-end"}
            ${key === 7 && "flex justify-end"}
            `}
          >
            {key === 3 && (
              <div className="h-24 w-24 flex flex-col items-center justify-center bg-white">
                <div className="flex items-end justify-center">
                  {[1, 2, 3].map((data, key) => (
                    <BsStar
                      className={`${
                        key === 1 ? "text-[26px]" : ""
                      } text-amber-500`}
                    />
                  ))}
                </div>
                <p className="font-semibold mt-1">5-Star</p>
                <p>Reviews</p>
              </div>
            )}
            {key === 7 && (
              <div className="h-24 w-24 flex flex-col justify-center items-center text-white bg-black">
                <IoDiamondOutline className="text-[26px] " />
                <p className="font-semibold">Authenticity </p>
                <p>Guaranteed</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="w-12 h-12 rounded-full cursor-pointer center absolute bottom-8 left-8 bg-gray-200 text-black">
        <BsChevronDown className="text-13 stroke-2" />
      </div>
    </div>
  );
}
