"use client";
import Collection from "@/components/Watches/Collection";
import Popular from "@/components/Watches/Popular";
import SeeMore from "@/components/Global/SeeMore";
import SortFilter from "@/components/Watches/SortFilter";
import Watch from "@/components/Watches/Watch";
import { variants } from "@/utils/framer";
import { motion } from "framer-motion";

export default function Framer() {
  return (
    <motion.div
      className="pt-20 lg:pt-[129px]"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <Watch />
      <div className="h-20"></div>
      <Popular />
      <SortFilter />
      <Collection />
      <div className="my-24">
        <SeeMore />
      </div>
    </motion.div>
  );
}
