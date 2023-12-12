"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function PcCard({ title }: { title: string }) {
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
      className="rounded-3xl bg-black-ligth col-span-2 row-span-2"
    >
      <div className="flex flex-col w-full h-full topbar justify-between items-center py-10 px-5">
        {/**iphone frame */}
        <div className="-translate-y-5 w-full h-full rounded-full flex flex-col relative">
          <div className="flex justify-center items-center w-full h-full">
            <img
              width={314}
              height={150}
              src="/Images/Portfolio/Frames/MacFrame.png"
              alt="Frame Image"
              className="z-10  pointer-events-none"
            />
            <div className="absolute mb-3 inset-0 flex items-center justify-center">
              <img
                src="/Images/Portfolio/Frames/wizard-nostalgia.png"
                className="w-[80%] max-w-[15rem] h-auto"
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
