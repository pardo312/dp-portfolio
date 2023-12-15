"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Cormorant_Upright } from "next/font/google";
import { CustomCursor } from "./Phone/CustomCursor";
import { PhoneMockup } from "./Phone/PhoneMockup";
import { PhoneDetail } from "./Phone/PhoneDetail";
import { PhoneCardBottomBar } from "./Phone/PhoneCardBottomBar";

export const cormorantUpright = Cormorant_Upright({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export function PhoneCard({
  title,
  icon,
  brief,
  url,
  description,
  images,
}: {
  title: string;
  icon: string;
  brief: string;
  url: string;
  description: string;
  images: string[];
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    if (isHovering) setNextImage((currentImage + 1) % images.length);
    else if (showInfo) setShowInfo(false);
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
        className={
          "col-span-2 row-span-4 h-full w-full " +
          (showInfo ? "cursor-default" : "cursor-none")
        }
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => {
          if (!showInfo) setShowInfo(true);
        }}
      >
        <div className="w-full h-full rounded-3xl bg-black-ligth text-matrix-light hover:bg-matrix-normal hover:text-matrix-dark transition-all duration-300">
          <div className="flex flex-col w-full h-full topbar justify-between items-center py-12 px-5">
            {/**iphone frame */}
            <PhoneContent
              brief={brief}
              url={url}
              description={description}
              images={images}
              currentImage={currentImage}
              nextImage={nextImage}
              showInfo={showInfo}
              setShowInfo={setShowInfo}
            />
            <PhoneCardBottomBar title={title} icon={icon} />
          </div>
        </div>
      </motion.div>
      <CustomCursor showInfo={showInfo} isHovering={isHovering} />
    </>
  );
}

function PhoneContent({
  brief,
  url,
  description,
  images,
  currentImage,
  nextImage,
  showInfo,
  setShowInfo,
}: {
  brief: string;
  url: string;
  description: string;
  images: string[];
  currentImage: number;
  nextImage: number;
  showInfo: boolean;
  setShowInfo: any;
}) {
  return (
    <div className="-translate-y-5 w-full h-full rounded-full flex flex-col relative">
      <PhoneMockup
        showInfo={showInfo}
        images={images}
        currentImage={currentImage}
        nextImage={nextImage}
      />
      <PhoneDetail
        showInfo={showInfo}
        setShowInfo={setShowInfo}
        brief={brief}
        url={url}
        description={description}
      />
    </div>
  );
}
