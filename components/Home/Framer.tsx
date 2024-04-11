"use client";
import About from "@/components/Why/About";
import Brand from "@/components/Brand/Brand";
import Hero from "@/components/Home/Hero";
import TypeA from "@/components/Global/TypeA";
import Works from "@/components/Home/Works";
import { motion } from "framer-motion";
import { variants } from "@/utils/framer";
import Youtube from "@/components/Home/Youtube";
import Social from "../Global/Social";
import ClientComp from "../Global/Client";
import Client from "../Authenticity/Client";

export default async function Framer() {
  return (
    <motion.div variants={variants} initial="initial" animate="animate">
      <Hero />
      <Works dark={false} />
      <Brand />
      <TypeA title="New Arrival" />
      <TypeA title="Most Popular Watches" />
      <TypeA title="For Her" />
      <Youtube />
      <Social />
      <div className="h-10"></div>
      <Client />
      <div className="h-28"></div>
    </motion.div>
  );
}
