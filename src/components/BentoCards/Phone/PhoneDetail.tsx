"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { cormorantUpright } from "../PhoneCard";
import React, { Component, useEffect, useState } from "react";

export function PhoneDetail({
  showInfo,
  setShowInfo,
  brief,
  url,
  description,
}: {
  showInfo: boolean;
  setShowInfo: any;
  brief: string;
  url: string;
  description: string;
}) {
  return (
    <motion.div
      animate={{
        opacity: showInfo ? 1 : 0,
      }}
      className={
        " text-matrix-dark text-2xl md:text-xl xl:text-[2vw] 2xl:text-2xl flex justify-center items-center " +
        cormorantUpright.className
      }
    >
      <Brief brief={brief} url={url} isInfo={showInfo} />
      <CloseButton setShowInfo={setShowInfo} />
      <Description description={description} />
    </motion.div>
  );
}

function Brief({
  brief,
  url,
  isInfo,
}: {
  brief: string;
  url: string;
  isInfo: boolean;
}) {
  const coloredBrief = brief.replace(
    /#.*@/,
    (match) =>
      `<span style="color: black; font-weight: 900;">${match.substring(
        1,
        match.length - 1
      )} </span>`
  );
  return (
    <div className="absolute top-16 right-5 text-center w-[50%] h-[50%] ">
      <div dangerouslySetInnerHTML={{ __html: coloredBrief }}></div>
      <div className="flex justify-center items-center w-full my-5 h-16">
        <a
          style={{ pointerEvents: isInfo ? "auto" : "none" }}
          href={url}
          target="_blank"
          className="w-52 h-full rounded-3xl flex justify-center items-center bg-black text-matrix-light text-3xl"
        >
          Visitar
        </a>
      </div>
    </div>
  );
}

function CloseButton({ setShowInfo }: { setShowInfo: any }) {
  return (
    <div className="absolute top-0 right-0 w-14 h-14 rounded-full ">
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

function Description({ description }: { description: string }) {
  const coloredDescription = description.replace(
    /#[^@]+@/g,
    (match) =>
      `<span style="color: black; font-weight: 900;">${match.substring(
        1,
        match.length - 1
      )} </span>`
  );
  return (
    <div className="absolute bottom-0 text-center w-[90%] h-[45%]">
      <div dangerouslySetInnerHTML={{ __html: coloredDescription }}></div>
    </div>
  );
}
