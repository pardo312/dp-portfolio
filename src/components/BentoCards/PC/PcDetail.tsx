"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { Component, useEffect, useState } from "react";
import { Cormorant_Upright } from "next/font/google";
export const cormorantUpright = Cormorant_Upright({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export function PcDetail({
  showInfo,
  setShowInfo,
  brief,
  url,
}: {
  showInfo: boolean;
  setShowInfo: any;
  brief: string;
  url: string|undefined;
}) {
  return (
    <motion.div
      animate={{
        opacity: showInfo ? 1 : 0,
      }}
      className={
        "text-matrix-dark text-base lg:text-base xl:text-xl justify-center items-center " +
        cormorantUpright.className
      }
    >
      <Brief brief={brief} url={url} isInfo={showInfo} />
      <CloseButton setShowInfo={setShowInfo} />
    </motion.div>
  );
}

function Brief({
  brief,
  url,
  isInfo,
}: {
  brief: string;
  url: string|undefined;
  isInfo: boolean;
}) {
  const coloredBrief = brief.replace(
    /#[^@]+@/g,
    (match) =>
      `<span style="color: black; font-weight: 900;">${match.substring(
        1,
        match.length - 1
      )} </span>`
  );
  return (
    <div className="absolute top-2 right-[-0.8rem] text-center w-[50%] h-[50%] ">
      <div className="text-base lg:text-base" dangerouslySetInnerHTML={{ __html: coloredBrief }}></div>
      <div className="flex justify-center items-center w-full my-2 h-12">
        {
          
          url != undefined?
        (<a
          style={{ pointerEvents: isInfo ? "auto" : "none" }}
          href={url}
          target="_blank"
          className="w-52 h-10 rounded-3xl flex justify-center items-center bg-black text-matrix-light "
        >
          Visit
        </a>):(<></>)
}
      </div>
    </div>
  );
}

function CloseButton({ setShowInfo }: { setShowInfo: any }) {
  return (
    <div className="absolute top-0 left-0 w-14 h-14 rounded-full ">
      <button
        onClick={() => setShowInfo(false)}
        className="w-full h-full flex justify-center items-center "
      >
        <Image
          src={"/Images/Portfolio/out2.svg"}
          width={40}
          height={40}
          alt="Close btn"
        />
      </button>
    </div>
  );
}