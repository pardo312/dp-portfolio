"use client";
import ProfilePic from "@/components/ProfilePic";
import { motion } from "framer-motion";
import { Cormorant_Upright } from "next/font/google";
import { useState } from "react";

export const cormorantUpright = Cormorant_Upright({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export function MainScreen() {
  const [isProfilePicFocused, setIsProfilePicFocused] = useState(false);
  return (
    <div className="mt-[-3rem] flex relative flex-col align-middle items-center justify-center ">
      <Title isProfilePicFocused={isProfilePicFocused} />
      <BannerOfThings />
      <ProfilePic
        isProfilePicFocused={isProfilePicFocused}
        setIsProfilePicFocused={setIsProfilePicFocused}
      />
    </div>
  );
}

function Title({ isProfilePicFocused }: { isProfilePicFocused: boolean }) {
  return (
    <motion.div
      initial={{ filter: "blur(0px)" }}
      animate={{
        filter: isProfilePicFocused ? "blur(10px)" : "blur(0px)",
      }}
      transition={{
        duration: 0.3,
      }}
      className={"flex flex-col items-center justify-center"}
    >
      <motion.div
        initial={{ opacity: 0 ,y:-100}}
        whileInView={{ opacity: 1 ,y:0}}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-[18rem] leading-tight text-matrix-normal"
      >
        Daniel
      </motion.div>
      <motion.div
        initial={{ opacity: 0 ,y:100}}
        whileInView={{ opacity: 1 ,y:0}}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-[18rem] leading-tight text-matrix-normal"
      >
        Pardo
      </motion.div>
    </motion.div>
  );
}

export const things = [
  "GameDev",
  "FullStack",
  "Mobile",
  "GameDev",
  "FullStack",
  "Mobile",
  "GameDev",
  "FullStack",
  "Mobile",
];

function BannerOfThings() {
  return (
    <div
      className={
        cormorantUpright.className +
        " absolute top-[43%] bg-matrix-dark w-full max-w-[100rem] h-24 overflow-hidden"
      }
    >
      <div className="flex w-full h-full items-center overflow-hidden space-x-16 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] ">
        <div className="flex  space-x-16 text-6xl   animate animate-infinite-scroll">
          {things.map((thing, index) => (
            <div key={"thing_" + index} className="flex space-x-16">
              <div className=" leading-tight text-matrix-normal">{thing}</div>
              <div className="leading-tight text-matrix-normal">•</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
