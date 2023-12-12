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
          "flex items-center justify-center text-center mx-96 mt-40 mb-20"
        }
      >
        <div className="text-4xl leading-tight text-matrix-light ">
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
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-2 row-span-2",
    type: "pc",
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-2 row-span-1",
    type: "icon",
    colSize: 2,
    icon:"/Images/Portfolio/Icons/Thropy.svg"
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-2 row-span-4",
    type: "phone",
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-1 row-span-1",
    type: "icon",
    colSize: 1,
    icon:"/Images/Portfolio/Icons/Vim.svg"
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-1 row-span-1",
    type: "icon",
    colSize: 1,
    icon:"/Images/Portfolio/Icons/Andes.png"
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-2 row-span-2",
    type: "pc",
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-2 row-span-2",
    type: "pc",
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-2 row-span-4",
    type: "phone",
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-1 row-span-1",
    type: "icon",
    colSize: 1,
    icon:"/Images/Portfolio/Icons/HDV.svg"
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-1 row-span-1",
    type: "icon",
    colSize: 1,
    icon:"/Images/Portfolio/Icons/Experience.svg"
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-1 row-span-1",
    type: "icon",
    colSize: 1,
    icon:"/Images/Portfolio/Icons/Git.svg"
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-1 row-span-1",
    type: "icon",
    colSize: 1,
    icon:"/Images/Portfolio/Icons/JiufenGames.png"
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-2 row-span-2",
    type: "pc",
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-2 row-span-2",
    type: "pc",
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-2 row-span-1",
    type: "icon",
    colSize: 2,
    icon:"/Images/TechBubbleLogos/Unity.svg"
  },
];

function PortfolioBento() {
  return (
    <div className="flex-1 h-full w-full">
      <div className="w-full h-full grid gird-cols-1 md:grid-cols-6 auto-rows-[9rem] gap-10 px-52 py-6">
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
              return <PhoneCard key={"bento_card_" + index} title={""} />;
            case "pc":
              return <PcCard key={"bento_card_" + index} title={""} />;
            default:
              break;
          }
        })}
      </div>
    </div>
  );
}
