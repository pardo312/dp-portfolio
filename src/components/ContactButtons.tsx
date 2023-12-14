"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const buttons = [
  {
    src: "/Images/ContactLogos/LinkedIn.svg",
    link: "https://www.linkedin.com/in/daniel-pardo-a6b404194",
  },
  {
    src: "/Images/ContactLogos/Github.svg",
    link: "https://github.com/pardo312",
  },
  {
    src: "/Images/ContactLogos/Email.svg",
    link: "mailto: pardod312@gmail.com",
    target: "",
  },
];

export function ContactButtons() {
  return (
    <div className="mb-[40vh] md:mb-0 md:mt-[-3rem] md:ml-[-2rem] flex relative gap-5 items-center justify-center">
      {buttons.map((button, index) => (
        <motion.a
          key={"contact_button_" + index}
          className="flex relative items-center justify-center h-14 w-14 rounded-lg border-[3px] border-matrix-light bg-transparent"
          href={button.link}
          target={button.target == null ? "_blank" : button.target}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
        >
          <Image
            src={button.src}
            width={35}
            height={35}
            alt="LinkedIn"
            className=""
          />
        </motion.a>
      ))}
    </div>
  );
}
