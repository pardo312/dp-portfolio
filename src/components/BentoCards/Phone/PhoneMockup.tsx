"use client";
import { motion } from "framer-motion";

export function PhoneMockup({
  showInfo, images, currentImage, nextImage,
}: {
  showInfo: boolean;
  images: string[];
  currentImage: number;
  nextImage: number;
}) {
  return (
    <motion.div
      initial={{ x: 0, y: 0, scale: 1 }}
      animate={{
        x: showInfo ? "-30%" : 0,
        y: showInfo ? "-25%" : 0,
        scale: showInfo ? 0.6 : 1,
        transition: { duration: 0.5 },
      }}
      className={"flex justify-center items-center w-full h-full"}
    >
      <img
        loading="lazy"
        width={220}
        height={450}
        src="/Images/Portfolio/Frames/IphoneFrame.png"
        alt="Frame Image"
        className="z-10 pointer-events-none " />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black w-[200px] h-[420px] md:max-h-[60vw] lg:max-h-[40vw] xl:max-h-[40vw] rounded-2xl lg:rounded-3xl" />
      </div>
      <div className=" absolute inset-0 flex items-center justify-center">
        <img
          loading="lazy"
          src={images[currentImage]}
          className="z-[5] w-[90%] max-w-[12.1rem] h-auto rounded-[5%] transition-opacity duration-1000 pointer-events-none"
          style={{ opacity: nextImage === currentImage ? 1 : 0 }}
          title="Image phone" />
      </div>
    </motion.div>
  );
}
