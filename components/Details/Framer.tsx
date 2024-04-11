"use client";
import Details from "@/components/Details/Details.1";
import MoreWatchDetails from "@/components/Details/MoreWatchDetails";
import Success from "@/components/Details/Success";
import TypeA from "@/components/Global/TypeA";
import SeeMore from "@/components/Global/SeeMore";
import { variants } from "@/utils/framer";
import { motion } from "framer-motion";
import Celebs from "../Global/Celebs";

export default function Framer() {
  return (
    <motion.div
      className="pt-20 lg:pt-40 "
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <Details />
      <div className="h-10"></div>
      <MoreWatchDetails />
      <div className="h-20"></div>
      <Success />
      <TypeA title="You May Also Like" />
      <div className="flex mb-10 container text-black justify-between pb-7 border-b border-gray-300 items-center">
        <p className="text-xl text-center lg:text-start lg:text-[26px] font-semibold">
          Worn By{" "}
        </p>
        <p className="hidden lg:block uppercase font-semibold text-11">
          See More
        </p>
      </div>
      <Celebs all={false} number={8} />
      <div className="h-28"></div>
      <SeeMore />
      <div className="h-28"></div>
    </motion.div>
  );
}
