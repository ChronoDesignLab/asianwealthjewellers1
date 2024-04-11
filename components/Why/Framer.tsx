'use client'
import About from "@/components/Why/About";
import Success from "@/components/Authenticity/Success";
import Seamless from "@/components/Why/Seamless";
import TempA from "@/components/Global/TempA";
import TypeA from "@/components/Global/TypeA";
import { variants } from "@/utils/framer";
import { motion } from "framer-motion";
import Changing from "./Changing";

export default function Framer() {
  return (
    <motion.div
      className="pt-24 lg:pt-32 min-h-screen"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <About />
      <Seamless />
      <Changing />
      <Success />
      <TypeA title="Asian Wealth Jewellers" />
    </motion.div>
  );
}
