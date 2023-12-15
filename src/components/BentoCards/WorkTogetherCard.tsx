"use client";
import { motion } from "framer-motion";

export function WorkTogetherCard({ seeAll }: { seeAll: boolean; }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.3,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 },
      }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
      className={`  col-span-2 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2 lg:row-span-1 ${seeAll ? "" : "h-32 mx-6 md:mx-52 lg:mx-72 my-20"}`}
    >
      <button className="flex h-full w-full justify-center items-center text-2xl text-center p-10 bg-matrix-normal rounded-3xl  drop-shadow-glow">
        🤝
        <br /> ¿Preparado para trabajar juntos?
      </button >
    </motion.div>
  );
}
