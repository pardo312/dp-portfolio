"use client";
import { motion } from "framer-motion";
import { IconCard } from "./BentoCards/IconCard";
import { PhoneCard } from "./BentoCards/PhoneCard";
import { PcCard } from "./BentoCards/PcCard";
import cards from "@/data/Cards.json";
import { useState } from "react";

export function Portfolio() {
  const [seeAll, setSeeAll] = useState(false);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={
          "flex items-center justify-center text-center mx-10 md:mx-32 md:mt-40 md:mb-20 text-2xl md:text-4xl "
        }
      >
        <div className="leading-tight text-matrix-light ">
          y de haber creado
          <span className="text-matrix-normal"> maravillosos </span>
          productos como:
        </div>
      </motion.div>
      <PortfolioBento seeAll={seeAll} setSeeAll={setSeeAll} />
      {!seeAll ? <WorkTogetherCard seeAll={seeAll} /> : <></>}
    </>
  );
}
function PortfolioBento({
  seeAll,
  setSeeAll,
}: {
  seeAll: boolean;
  setSeeAll: any;
}) {
  return (
    <div className="flex flex-col h-fit w-full">
      <div
        className="w-full h-full grid gird-cols-1 md:grid-cols-4 lg:grid-cols-6 auto-rows-[9rem] gap-10 py-6 px-10 md:px-32 lg:px-32 my-10"
        style={{ zoom: 0.8 }}
      >
        {cards.slice(0, seeAll ? cards.length : 9).map((item, index) => {
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
                  title={item.title}
                  images={item.images || []}
                />
              );
            case "pc":
              return (
                <PcCard
                  key={"bento_card_" + index}
                  title={item.title}
                  images={item.images || []}
                />
              );
            case "cta":
              return <WorkTogetherCard key={"bento_card_" + index} seeAll={true} />;
            default:
              break;
          }
        })}
      </div>
      <button
        onClick={() => setSeeAll(!seeAll)}
        className="text-matrix-light text-3xl"
      >
        {seeAll ? "Ver menos" : "Ver mas"}
      </button>
    </div>
  );
}

function WorkTogetherCard({ seeAll }: { seeAll: boolean }) {
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
      className={`rounded-3xl bg-matrix-normal drop-shadow-glow col-span-2 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2 lg:row-span-1 ${
        seeAll ? "" : "h-32 mx-6 md:mx-52 lg:mx-72 my-20"
      }`}
    >
      <div className="flex h-full w-full justify-center items-center text-2xl text-center p-10">
        🤝
        <br /> ¿Preparado para trabajar juntos?
      </div>
    </motion.div>
  );
}
