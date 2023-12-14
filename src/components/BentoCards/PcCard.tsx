"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function PcCard({ title, images }: { title: string; images: string[] }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) setNextImage((currentImage + 1) % images.length);
  }, [isHovering]);

  useEffect(() => {
    let intervalId: any;

    if (isHovering) {
      intervalId = setInterval(() => {
        setNextImage((currentImage + 1) % images.length);
      }, 2000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isHovering, currentImage]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentImage(nextImage);
    }, 1000); // Transition duration

    return () => {
      clearTimeout(timeoutId);
    };
  }, [nextImage]);

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
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="w-full h-full rounded-3xl bg-black-ligth text-matrix-light hover:bg-matrix-normal hover:text-matrix-dark transition-all duration-300">
        <div className="flex flex-col w-full h-full topbar justify-between items-center py-10 px-5">
          {/**pc frame */}
          <PcMockup
            images={images}
            currentImage={currentImage}
            nextImage={nextImage}
          />
          {/**Bottom bar */}
          <PcCardBottomBar />
        </div>
      </div>
    </motion.div>
  );
}

function PcMockup({
  images,
  currentImage,
  nextImage,
}: {
  images: string[];
  currentImage: number;
  nextImage: number;
}) {
  return (
    <div className="-translate-y-5 w-full h-full rounded-full flex flex-col relative">
      <div className="flex justify-center items-center w-full h-full">
        <img
          width={314}
          height={150}
          src="/Images/Portfolio/Frames/MacFrame.png"
          alt="Frame Image"
          className="z-10  pointer-events-none"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black w-[250px] h-[165px] max-w-[16rem] lg:max-h-[14vw] lg:max-w-[21vw]" />
        </div>

        <div className="absolute mb-3 inset-0 flex items-center justify-center">
          <img
            src={images[currentImage]}
            className="w-[80%] max-w-[15rem] h-auto transition-opacity duration-1000"
            style={{ opacity: nextImage === currentImage ? 0 : 0 }}
            title="Image phone"
          />
        </div>
      </div>
    </div>
  );
}

function PcCardBottomBar() {
  return (
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
      <div className="text-xl text-center ">Hachi</div>
    </div>
  );
}
