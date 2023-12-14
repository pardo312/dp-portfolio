"use client";
import { motion } from "framer-motion";
import { IconCard } from "./BentoCards/IconCard";
import { PhoneCard } from "./BentoCards/PhoneCard";
import { PcCard } from "./BentoCards/PcCard";

export function Portfolio() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={
          "flex items-center justify-center text-center mx-10 md:mx-96 md:mt-40 md:mb-20 text-2xl md:text-4xl "
        }
      >
        <div className="leading-tight text-matrix-light ">
          y de haber creado
          <span className="text-matrix-normal"> maravillosos </span>
          productos como:
        </div>
      </motion.div>
      <PortfolioBento />
    </>
  );
}
const cards2 = [
  {
    className: "rounded-md border-4 border-matrix-light col-span-2 row-span-4",
    type: "phone",
    images: [
      "/Images/Portfolio/menu-alchemy/menu-alchemy-0.png",
      "/Images/Portfolio/menu-alchemy/menu-alchemy-1.png",
      "/Images/Portfolio/menu-alchemy/menu-alchemy-2.png",
      "/Images/Portfolio/menu-alchemy/menu-alchemy-3.png",
      "/Images/Portfolio/menu-alchemy/menu-alchemy-4.png",
    ],
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-2 row-span-2",
    type: "pc",
    images: [
      "/Images/Portfolio/wizard-nostalgia/wizard-nostalgia-0.png",
      "/Images/Portfolio/wizard-nostalgia/wizard-nostalgia-1.png",
      "/Images/Portfolio/wizard-nostalgia/wizard-nostalgia-2.png",
      "/Images/Portfolio/wizard-nostalgia/wizard-nostalgia-3.png",
      "/Images/Portfolio/wizard-nostalgia/wizard-nostalgia-4.png",
    ],
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-2 row-span-1",
    type: "icon",
    colSize: 2,
    icon: "/Images/Portfolio/Icons/Thropy.svg",
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-2 row-span-4",
    type: "phone",
    images: [
      "/Images/Portfolio/menu-alchemy/menu-alchemy-0.png",
      "/Images/Portfolio/menu-alchemy/menu-alchemy-1.png",
      "/Images/Portfolio/menu-alchemy/menu-alchemy-2.png",
      "/Images/Portfolio/menu-alchemy/menu-alchemy-3.png",
      "/Images/Portfolio/menu-alchemy/menu-alchemy-4.png",
    ],
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-1 row-span-1",
    type: "icon",
    colSize: 1,
    icon: "/Images/Portfolio/Icons/Vim.svg",
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-1 row-span-1",
    type: "icon",
    colSize: 1,
    icon: "/Images/Portfolio/Icons/Andes.png",
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-2 row-span-2",
    type: "pc",
    images: [
      "/Images/Portfolio/wizard-nostalgia/wizard-nostalgia-0.png",
      "/Images/Portfolio/wizard-nostalgia/wizard-nostalgia-1.png",
      "/Images/Portfolio/wizard-nostalgia/wizard-nostalgia-2.png",
      "/Images/Portfolio/wizard-nostalgia/wizard-nostalgia-3.png",
      "/Images/Portfolio/wizard-nostalgia/wizard-nostalgia-4.png",
    ],
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-2 row-span-2",
    type: "pc",
    images: [
      "/Images/Portfolio/wizard-nostalgia/wizard-nostalgia-0.png",
      "/Images/Portfolio/wizard-nostalgia/wizard-nostalgia-1.png",
      "/Images/Portfolio/wizard-nostalgia/wizard-nostalgia-2.png",
      "/Images/Portfolio/wizard-nostalgia/wizard-nostalgia-3.png",
      "/Images/Portfolio/wizard-nostalgia/wizard-nostalgia-4.png",
    ],
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-2 row-span-4",
    type: "phone",
    images: [
      "/Images/Portfolio/menu-alchemy/menu-alchemy-0.png",
      "/Images/Portfolio/menu-alchemy/menu-alchemy-1.png",
      "/Images/Portfolio/menu-alchemy/menu-alchemy-2.png",
      "/Images/Portfolio/menu-alchemy/menu-alchemy-3.png",
      "/Images/Portfolio/menu-alchemy/menu-alchemy-4.png",
    ],
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-1 row-span-1",
    type: "icon",
    colSize: 1,
    icon: "/Images/Portfolio/Icons/HDV.svg",
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-1 row-span-1",
    type: "icon",
    colSize: 1,
    icon: "/Images/Portfolio/Icons/Experience.svg",
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-1 row-span-1",
    type: "icon",
    colSize: 1,
    icon: "/Images/Portfolio/Icons/Git.svg",
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-1 row-span-1",
    type: "icon",
    colSize: 1,
    icon: "/Images/Portfolio/Icons/JiufenGames.png",
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-2 row-span-2",
    type: "pc",
    images: [
      "/Images/Portfolio/wizard-nostalgia/wizard-nostalgia-0.png",
      "/Images/Portfolio/wizard-nostalgia/wizard-nostalgia-1.png",
      "/Images/Portfolio/wizard-nostalgia/wizard-nostalgia-2.png",
      "/Images/Portfolio/wizard-nostalgia/wizard-nostalgia-3.png",
      "/Images/Portfolio/wizard-nostalgia/wizard-nostalgia-4.png",
    ],
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-2 row-span-2",
    type: "pc",
    images: [
      "/Images/Portfolio/wizard-nostalgia/wizard-nostalgia-0.png",
      "/Images/Portfolio/wizard-nostalgia/wizard-nostalgia-1.png",
      "/Images/Portfolio/wizard-nostalgia/wizard-nostalgia-2.png",
      "/Images/Portfolio/wizard-nostalgia/wizard-nostalgia-3.png",
      "/Images/Portfolio/wizard-nostalgia/wizard-nostalgia-4.png",
    ],
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-2 row-span-1",
    type: "cta",
    icon: "/Images/TechBubbleLogos/Unity.svg",
  },
];

function PortfolioBento() {
  return (
    <div className="flex h-fit w-full">
      <div
        className="w-full h-full grid gird-cols-1 md:grid-cols-4 lg:grid-cols-6 auto-rows-[9rem] gap-10 py-6 px-10 md:px-60 lg:px-32 my-10"
        style={{zoom: 0.8}}
      >
        {cards2.map((item, index) => {
          switch (item.type) {
            case "icon":
              return (
                <IconCard
                  key={"bento_card_" + index}
                  colSize={item.colSize}
                  imageSrc={item.icon}
                  description={"Pending description"}
                />
              );
            case "phone":
              return (
                <PhoneCard
                  key={"bento_card_" + index}
                  title={""}
                  images={item.images || []}
                />
              );
            case "pc":
              return <PcCard key={"bento_card_" + index} title={""} images={item.images || []} />;
            case "cta":
              return <WorkTogetherCard key={"bento_card_" + index} />;
            default:
              break;
          }
        })}
      </div>
    </div>
  );
}

function WorkTogetherCard() {
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
      className={`rounded-3xl bg-matrix-normal drop-shadow-glow col-span-2 row-span-1`}
    >
      <div className="flex h-full w-full justify-center items-center text-2xl text-center p-10">
        🤝
        <br /> ¿Preparado para trabajar juntos?
      </div>
    </motion.div>
  );
}
