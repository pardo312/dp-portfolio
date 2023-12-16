"use client";

import { motion } from "framer-motion";

export function PcMockup({
  images,
  currentImage,
  nextImage,
  showInfo,
}: {
  images: string[];
  currentImage: number;
  nextImage: number;
  showInfo: boolean;
}) {
  return (
    <motion.div
      initial={{ x: 0, y: 0, scale: 1 }}
      animate={{
        x: showInfo ? "-28%" : 0,
        y: showInfo ? "15%" : 0,
        scale: showInfo ? 0.6 : 1,
        transition: { duration: 0.5 },
      }}
      className="flex justify-center items-center w-full h-full"
    >
      <img
        width={314}
        height={150}
        src="/Images/Portfolio/Frames/MacFrame.webp"
        alt="Frame Image"
        className="z-10  pointer-events-none"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black w-[250px] h-[161px] max-w-[80%] min-h-[65%] lg:min-h-[80%] lg:max-w-[21vw]" />
      </div>

      <div className="absolute mb-3 inset-0 flex items-center justify-center">
        <img
          src={images[currentImage]}
          className="w-[15rem] max-w-[80%] lg:max-w-[80%] h-auto min-h-[65%] lg:min-h-[80%] transition-opacity duration-1000"
          style={{ opacity: nextImage === currentImage ? 1 : 0 }}
          title="Image phone"
        />
      </div>
    </motion.div>
  );
}
