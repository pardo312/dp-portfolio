"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function PhoneCard({ title }: { title: string }) {
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
      className="rounded-3xl bg-black-ligth col-span-2 row-span-4 h-full w-full"
    >
      <div className="flex flex-col w-full h-full topbar justify-between items-center py-10 px-5">
        {/**iphone frame */}
        <div className="-translate-y-5 w-full h-full rounded-full flex flex-col relative">
          <div className="flex justify-center items-center w-full h-full">
            <img
              src="/Images/Frames/IphoneFrame.png"
              alt="Frame Image"
              className="w-[220px] h-[450px] z-10 rounded-3xl pointer-events-none"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/Images/Frames/menu-alchemy.png"
                width="200px"
                height="431.8px"
                className="ml-1 2xl:ml-4 border-0 rounded-3xl"
                title="Image phone"
              />
            </div>
          </div>
        </div>

        {/**Bottom bar */}
        <div className="flex w-full justify-start items-center pr-6 pl-3">
          <div className="flex w-full icons gap-3">
            <div className="rounded-full border-2 border-matrix-light bg-black-ligth w-14 h-14 flex justify-center items-center">
              <Image
                src={"/Images/TechBubbleLogos/Aws.svg"}
                width={35}
                height={35}
                alt="PhoneFrame"
              />
            </div>
            <div className="rounded-full border-2 border-matrix-light bg-black-ligth w-14 h-14 flex justify-center items-center">
              <Image
                src={"/Images/TechBubbleLogos/Unity.svg"}
                width={35}
                height={35}
                alt="PhoneFrame"
              />
            </div>
          </div>
          <div className="text-xl text-center text-matrix-light">Hachi</div>
        </div>
      </div>
    </motion.div>
  );
}
