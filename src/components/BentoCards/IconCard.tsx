"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CustomCursor } from "./Phone/CustomCursor";

export function IconCard({
  icon = "/Images/TechBubbleLogos/Unity.svg",
  description,
  image,
  colSize = 1,
  url,
}: {
  icon: string | undefined;
  description: string;
  image: string | undefined;
  colSize: number;
  url: string | undefined;
}) {
  const [isHovering, setIsHovering] = useState(false);
  const [nextState, setPreviousState] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsHovering(nextState);
    }, 500); // Transition duration

    return () => {
      clearTimeout(timeoutId);
    };
  }, [nextState]);
  return (
    <>
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
        className={`col-span-${colSize} row-span-1 `}
        onMouseEnter={() => setPreviousState(true)}
        onMouseLeave={() => setPreviousState(false)}
      >
        <div className="rounded-3xl w-full h-full bg-black-ligth hover:bg-matrix-normal hover:text-matrix-dark transition-all duration-500">
          <a
            className={
              "flex h-full w-full justify-center items-center transition-opacity duration-500 " +
              (nextState ? "cursor-none" : "cursor-default")
            }
            style={{ opacity: nextState === isHovering ? 1 : 0 }}
            href={url}
            target="_blank"
          >
            {isHovering ? (
              <div className="flex justify-center items-center mx-6">
                {image != undefined ? (
                  <img
                    src={image}
                    alt="Throphy"
                    className="w-[60%] h-auto rounded-xl mr-4"
                    style={{ height: "auto" }}
                  />
                ) : (
                  <></>
                )}
                <h1 className="lg:text-[1vw]  text-center">{description}</h1>
              </div>
            ) : (
              <Image src={icon} width={70} height={70} alt="icon" />
            )}
          </a>
        </div>
      </motion.div>
      <CustomCursor
        isHovering={nextState}
        imageSrc={
          url == undefined
            ? "/Images/Portfolio/happy.svg"
            : "/Images/Portfolio/open.svg"
        }
        spin={false}
        sizeCursor={0.4}
        sizeIcon={60}
      />
    </>
  );
}
