"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PcMockup } from "./PC/PcMockup";
import { PcCardBottomBar } from "./PC/PcCardBottomBar";
import { PcDetail } from "./PC/PcDetail";
import { CustomCursor } from "./Phone/CustomCursor";

export function PcCard({
  title,
  icon,
  images,
  brief,
  url,
}: {
  title: string;
  icon: string;
  images: string[];
  brief: string;
  url: string|undefined;
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
          "rounded-3xl bg-black-ligth col-span-2 row-span-2 " +
          (showInfo ? "cursor-default" : "cursor-none")
        }
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => {
          if (!showInfo) setShowInfo(true);
        }}
      >
        <div className="w-full h-full rounded-3xl bg-black-ligth text-matrix-light hover:bg-matrix-normal hover:text-matrix-dark transition-all duration-300">
          <div className="flex flex-col w-full h-full topbar justify-between items-center py-10 px-5">
            {/**pc frame */}
            <PcContent
              showInfo={showInfo}
              setShowInfo={setShowInfo}
              images={images}
              currentImage={currentImage}
              nextImage={nextImage}
              brief={brief}
              url={url}
            />
            {/**Bottom bar */}
            <PcCardBottomBar title={title} icon={icon} />
          </div>
        </div>
      </motion.div>
      <CustomCursor showInfo={showInfo} isHovering={isHovering} />
    </>
  );
}

function PcContent({
  showInfo,
  setShowInfo,
  images,
  currentImage,
  nextImage,
  brief,
  url,
}: {
  showInfo: boolean;
  setShowInfo: any;
  images: string[];
  currentImage: number;
  nextImage: number;
  brief: string;
  url: string|undefined;
}) {
  return (
    <div className="-translate-y-5 w-full h-full rounded-full flex flex-col relative">
      <PcMockup
        images={images}
        currentImage={currentImage}
        nextImage={nextImage}
        showInfo={showInfo}
      />
      <PcDetail
        showInfo={showInfo}
        setShowInfo={setShowInfo}
        brief={brief}
        url={url}
      />
    </div>
  );
}
