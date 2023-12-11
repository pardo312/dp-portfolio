"use client";

import { motion } from "framer-motion";

export function PcCard({  title }: {  title: string }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.3,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 1 },
      }}
      className="rounded-md border-4 border-matrix-light col-span-2 row-span-2"
    ></motion.div>
  );
}
