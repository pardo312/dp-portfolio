"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function CustomCursor({ showInfo, isHovering }: { showInfo: boolean; isHovering: boolean; }) {
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
        scale: showInfo ? 1.5 : isHovering ? 1 : 0.3,
      }}
      transition={{
        type: "tween",
        ease: "backOut",
        opacity: { duration: 0.3 },
        scale: { duration: 0.4 },
      }}
      className="fixed top-0 left-0  w-[7rem] h-[7rem] pointer-events-none "
    >
      <div className="flex justify-center items-center w-full h-full rounded-full animate-spin-slow bg-black">
        <Image
          src={"/Images/Portfolio/info.svg"}
          width={70}
          height={70}
          alt="PhoneFrame" />
      </div>
    </motion.div>
  );
}
