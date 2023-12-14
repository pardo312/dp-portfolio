"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function PhoneCard({
  title,
  images,
}: {
  title: string;
  images: string[];
}) {
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
      className="col-span-2 row-span-4 h-full w-full "
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="w-full h-full rounded-3xl bg-black-ligth text-matrix-light hover:bg-matrix-normal hover:text-matrix-dark transition-all duration-300">
        <div className="flex flex-col w-full h-full topbar justify-between items-center py-12 px-5">
          {/**iphone frame */}
          <PhoneMockup
            images={images}
            currentImage={currentImage}
            nextImage={nextImage}
          />
          <PhoneCardBottomBar />
        </div>
      </div>
    </motion.div>
  );
}

function PhoneMockup({
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
          width={220}
          height={450}
          src="/Images/Portfolio/Frames/IphoneFrame.png"
          alt="Frame Image"
          className="z-10 pointer-events-none "
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black w-[200px] h-[420px] md:max-h-[60vw] lg:max-h-[40vw] xl:max-h-[40vw] rounded-2xl lg:rounded-3xl"></div>
        </div>
        <div className=" absolute inset-0 flex items-center justify-center">
          <img
            src={images[currentImage]}
            className="z-[5] w-[90%] max-w-[12.1rem] h-auto rounded-[5%] transition-opacity duration-1000 "
            style={{ opacity: nextImage === currentImage ? 1 : 0 }}
            title="Image phone"
          />
        </div>
      </div>
    </div>
  );
}

function PhoneCardBottomBar() {
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
