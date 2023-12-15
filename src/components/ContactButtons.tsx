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

export function ContactButtons({
  isTitleContact,
}: {
  isTitleContact: boolean;
}) {
  return (
    <div
      className={
        "mb-[40vh] md:mb-0 md:mt-[-3rem] flex relative gap-10 items-center justify-center " +
        (isTitleContact ? " md:ml-[-1rem]" : "")
      }
    >
      {buttons.slice(0,isTitleContact?buttons.length:2).map((button, index) => (
        <motion.a
          key={"contact_button_" + index}
          className="flex relative items-center justify-center h-14 w-14 rounded-lg border-[1px]  border-matrix-light bg-black drop-shadow-glow"
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
