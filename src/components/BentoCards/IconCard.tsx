"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function IconCard({
  imageSrc = "/Images/TechBubbleLogos/Unity.svg",
  description,
  colSize = 1,
}: {
  imageSrc: string|undefined;
  description: string;
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
        transition: { duration: 1 },
      }}
      className={`rounded-3xl bg-black-ligth col-span-${colSize} row-span-1`}
    >
      <div className="flex h-full w-full justify-center items-center ">
          <Image
            src={imageSrc}
            width={70}
            height={70}
            alt="PhoneFrame"
          />
      </div>
    </motion.div>
  );
}
