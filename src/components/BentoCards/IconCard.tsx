"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function IconCard({
  imageSrc = "/Images/TechBubbleLogos/Unity.svg",
  description,
  colSize = 1,
}: {
  imageSrc: string | undefined;
  description: string;
  colSize: number | undefined;
}) {
  const [isHovering, setIsHovering] = useState(false);
  const [previousState, setPreviousState] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsHovering(previousState);
    }, 500); // Transition duration

    return () => {
      clearTimeout(timeoutId);
    };
  }, [previousState]);
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
      className={`col-span-${colSize} row-span-1 `}
      onMouseEnter={() => setPreviousState(true)}
      onMouseLeave={() => setPreviousState(false)}
    >
      <div className="rounded-3xl  w-full h-full bg-black-ligth hover:bg-matrix-normal hover:text-matrix-dark transition-all duration-500">
        <div
          className="flex h-full w-full justify-center items-center transition-opacity duration-500 "
          style={{ opacity: previousState === isHovering ? 1 : 0 }}
        >
          {isHovering ? (
            <div>
              <h1 className="text-2xl text-center">{description}</h1>
            </div>
          ) : (
            <Image src={imageSrc} width={70} height={70} alt="PhoneFrame" />
          )}
        </div>
      </div>
    </motion.div>
  );
}
