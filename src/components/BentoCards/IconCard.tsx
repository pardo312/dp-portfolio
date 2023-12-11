"use client";

import { motion } from "framer-motion";

export function IconCard({
  title,
  colSize = 1,
}: {
  title: string;
  colSize: number | undefined;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.3,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 1},
      }}
      className={`rounded-md border-4 border-matrix-light col-span-${colSize} row-span-1`}
    ></motion.div>
  );
}
