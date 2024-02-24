"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProfilePic({
  isProfilePicFocused,
  setIsProfilePicFocused,
}: {
  isProfilePicFocused: boolean;
  setIsProfilePicFocused: any;
}) {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  const addListener = () => {
    if (window) {
      let mediaQuery = window.matchMedia("(min-width: 768px)");
      setIsLargeScreen(mediaQuery.matches);
      mediaQuery.addEventListener("change", (e) => setIsLargeScreen(e.matches));
    } else {
      setTimeout(addListener, 100);
    }
  };

  useEffect(() => {
    addListener();
  }, []);

  return (
    <motion.div
      initial={{
        scale: isLargeScreen ? 1 : 0.7,
      }}
      animate={{
        scale: isLargeScreen ? 1 : 0.7,
        transition: { duration: 0.3 },
      }}
      className="absolute"
    >
      <div className="absoulte ">
        <motion.div
          whileHover={{
            scale: 1.5,
            transition: { duration: 0.2 },
          }}
          onMouseEnter={() => setIsProfilePicFocused(true)}
          onMouseLeave={() => setIsProfilePicFocused(false)}
        >
          <div className="w-[270px] h-[270px] absolute rounded-full overflow-hidden border-8 border-matrix-dark drop-shadow-2xl z-0">
            <Image
              width={996}
              height={996}
              src="/Images/profilePic.png"
              alt="Picture of the author"
              className="grayscale hover:grayscale-0 transition-all"
            />
          </div>
          <div className="w-[17rem]  h-[17rem] rounded-full bg-[rgba(0,0,0,0.1)] ml-2 mt-2"></div>
        </motion.div>
      </div>
      <TechBubbles isGithubVisible={isProfilePicFocused} />
    </motion.div>
  );
}

const bubbles = [
  {
    title: "Unity",
    src: "/Images/TechBubbleLogos/Unity.svg",
    position: "left-[-7rem] top-[-1rem]",
  },
  {
    title: "Flutter",
    src: "/Images/TechBubbleLogos/Flutter.svg",
    position: "left-[-7rem] bottom-[-1rem]",
  },
  {
    title: "Supabase",
    src: "/Images/TechBubbleLogos/Supabase.svg",
    position: "left-[4rem] bottom-[-8rem]",
  },
  {
    title: "Aws",
    src: "/Images/TechBubbleLogos/Aws.svg",
    position: "right-[-7rem] bottom-[-1rem]",
  },
  {
    title: "Azure",
    src: "/Images/TechBubbleLogos/Azure.svg",
    position: "right-[-7rem] top-[-1rem]",
  },
  {
    title: "Nextjs",
    src: "/Images/TechBubbleLogos/Nextjs.svg",
    position: "left-[4rem] top-[-8rem]",
  },
];

function TechBubbles({ isGithubVisible }: { isGithubVisible: boolean }) {
  return (
    <div>
      {bubbles.map((bubble, index) => (
        <div
          key={"tech_bubble_" + index}
          className={"absolute " + bubble.position}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isGithubVisible ? 0.99 : 0 }}
            transition={{
              delay: isGithubVisible ? index * 0.1 : 0,
              duration: isGithubVisible ? 0.2 : 0,
            }}
            className="rounded-full border-4 border-matrix-light bg-black-ligth w-32 h-32 flex flex-col justify-center items-center"
          >
            <Image
              src={bubble.src}
              width={60}
              height={60}
              alt="Github"
              className=""
            />
            <h2 className="text-matrix-light text-xl mt-2">{bubble.title}</h2>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
