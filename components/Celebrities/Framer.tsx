"use client";
import CelebFilter from "@/components/Global/celebFIlter";
import SeeMore from "@/components/Global/SeeMore";
import { variants } from "@/utils/framer";
import { motion } from "framer-motion";
import Celebs from "../Global/Celebs";
import TypeA from "../Global/TypeA";
import Popular from "../Watches/Popular";

export default function Framer() {
  return (
    <motion.div
      className="pt-20 lg:pt-44 min-h-screen"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <div className="h-14"></div>
      <p className="text-xl lg:text-2xl xl:text-3xl text-black font-semibold text-center mb-5">
        Top 10 Watches Worn By Celebrities
      </p>
      <Popular />
      <div className="h-20"></div>
      <p className="text-xl lg:text-2xl xl:text-3xl text-black font-semibold text-center mb-14">
        Celebrities Watch Collection
      </p>
      <CelebFilter />
      <div className="h-20"></div>
      <Celebs number={0} all={true} />
      <div className="py-16">
        <SeeMore />
      </div>
    </motion.div>
  );
}
