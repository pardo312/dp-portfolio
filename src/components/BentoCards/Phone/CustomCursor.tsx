"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CustomCursorProps {
  showInfo?: boolean;
  isHovering: boolean;
  imageSrc?: string;
  spin?: boolean;
  sizeCursor?: number;
  sizeIcon?: number;
}
export function CustomCursor(Props: CustomCursorProps) {
  const {
    showInfo = false,
    isHovering = false,
    imageSrc = "/Images/Portfolio/info.svg",
    spin = true,
    sizeCursor = 1,
    sizeIcon = 70,
  } = Props;

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        x: (mousePos.x - 45) * 1.35,
        y: (mousePos.y - 45) * 1.35,
        opacity: showInfo ? 0 : isHovering ? 1 : 0,
        scale: showInfo ? 1.5 : isHovering ? sizeCursor : 0.1,
      }}
      transition={{
        type: "tween",
        ease: "backOut",
        opacity: { duration: 0.3 },
        scale: { duration: 0.4 },
      }}
      className="fixed top-0 left-0 pointer-events-none w-[7rem] h-[7rem] hidden lg:block"
    >
      <div
        className={
          "flex justify-center items-center w-full h-full rounded-full bg-black " +
          (spin ? "animate-spin-slow" : "")
        }
      >
        <Image src={imageSrc} width={sizeIcon} height={sizeIcon} alt="PhoneFrame" />
      </div>
    </motion.div>
  );
}
