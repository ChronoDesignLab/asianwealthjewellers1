'use client'
import Client from "@/components/Authenticity/Client";
import Main from "@/components/Authenticity/Main";
import Main2 from "@/components/Authenticity/Main2";
import Success from "@/components/Authenticity/Success";
import { variants } from "@/utils/framer";
import {motion} from 'framer-motion'
export default function Framer() {
  return (
    <motion.div className="pt-20 lg:pt-40" variants={variants} initial="initial" animate='animate'>
      <div className="xl:hidden">
        <Main />
      </div>
      <div className="hidden xl:block">
        <Main2 />
      </div>
      <div className="h-14"></div>
      <Success />
      <Client />
    </motion.div>
  );
}
