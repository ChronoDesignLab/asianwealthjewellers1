"use client";
import Categories from "@/components/Global/Categories";
import WatchImg from "@/components/Global/WatchImg";
import SeeMore from "@/components/Global/SeeMore";
import { variants } from "@/utils/framer";
import { motion } from "framer-motion";
import Popular from "../Watches/Popular";
import Models from "../Global/Models";

type Props = {
  brand: string;
};

export default function Framer({ brand }: Props) {
  const watches = [
    {
      brand: "Rolex",
      link: "rolex",
      img: "https://assets-global.website-files.com/64c794410a6c56562470f505/651abe97eba626e1de136d05_Brand%20Banner-p-1600.png",
    },
    {
      brand: "Audemars Piguet",
      link: "audemars",
      img: "https://assets-global.website-files.com/64c794410a6c56562470f505/65324aeff530bbad5c2e9003_Brand%20Banner-p-1600.png",
    },
    {
      brand: "Philippe Patek",
      link: "patek",
      img: "https://assets-global.website-files.com/64c794410a6c56562470f505/651ac826326a855d48a19c17_Brand%20Banner-1-p-1600.png",
    },
    {
      brand: "Richard Mille",
      link: "richard",
      img: "https://assets-global.website-files.com/64c794410a6c56562470f505/651ac84060653eef0be2e0b6_Brand%20Banner-2-p-1600.png",
    },
  ];
  const watch = watches.filter((el) => el.link === brand)[0];
  return (
    <motion.div
      className="pt-20 lg:pt-32 padding min-h-screen"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <WatchImg watch={watch} />
      <p className="text-2xl lg:text-4xl mt-20 text-center text-gray-700 font-semibold">
        {watch.brand} Models
      </p>
      <div className="h-12"></div>
      <Models brand={brand}/>
      <div className="h-10"></div>
      <p className="text-2xl lg:text-3xl mt-16 text-center text-gray-700 font-semibold">
        {watch.brand} Watches
      </p>
      <div className="h-7"></div>
      <div className="py-10">
        <Categories />
      </div>
      <div className="h-4"></div>
      <Popular />
      <div className="pb-32 pt-24">
        <SeeMore />
      </div>
    </motion.div>
  );
}
