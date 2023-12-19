"use client";
import { motion } from "framer-motion";
import { IconCard } from "./BentoCards/IconCard";
import { PhoneCard } from "./BentoCards/PhoneCard";
import { PcCard } from "./BentoCards/PcCard";
import spanishCards from "@/data/CardsES.json";
import englishCards from "@/data/CardsEN.json";
import { useContext, useState } from "react";
import { WorkTogetherCard } from "./BentoCards/WorkTogetherCard";
import { LocaleDataContext } from "@/context/LocaleContext";
import { LocaleEnum } from "@/context/LocaleEnum";

export function Portfolio() {
  const [seeAll, setSeeAll] = useState(false);
  let localeData = useContext(LocaleDataContext);
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
        {localeData.locale == LocaleEnum.ES ? (
          <div className="leading-tight text-matrix-light ">
            y de haber creado
            <span className="text-matrix-normal"> maravillosos </span>
            productos como:
          </div>
        ) : (
          <div className="leading-tight text-matrix-light">
            and to have created
            <span className="text-matrix-normal"> wonderful </span>
            products such as:
          </div>
        )}
      </motion.div>
      <PortfolioBento
        seeAll={seeAll}
        setSeeAll={setSeeAll}
        locale={localeData.locale}
        cards={localeData.locale == LocaleEnum.ES ? spanishCards : englishCards}
      />
      {!seeAll ? (
        <WorkTogetherCard seeAll={seeAll} />
      ) : (
        <div className="h-10 md:h-24"></div>
      )}
    </>
  );
}
function PortfolioBento({
  seeAll,
  setSeeAll,
  locale,
  cards,
}: {
  seeAll: boolean;
  setSeeAll: any;
  locale: LocaleEnum;
  cards: any;
}) {
  return (
    <div className="flex flex-col h-fit w-full ">
      <div
        className=" w-full h-full grid gird-cols-1 md:grid-cols-4 lg:grid-cols-6 auto-rows-[9rem] gap-10 py-6 px-10 md:px-20 lg:px-10 my-10"
      >
        {cards
          .slice(0, seeAll ? cards.length : 9)
          .map((item: any, index: any) => {
            switch (item.type) {
              case "icon":
                return (
                  <IconCard
                    key={"bento_card_" + index}
                    icon={item.icon}
                    colSize={item.colSize || 1}
                    image={item.image}
                    description={item.description || "Pending description"}
                    url={item.url}
                  />
                );
              case "phone":
                return (
                  <PhoneCard
                    key={"bento_card_" + index}
                    title={item.title}
                    icon={item.icon || "/Images/TechBubbleLogos/Unity.svg"}
                    images={item.images || []}
                    brief={item.brief || "Pending brief"}
                    url={item.url || "https://www.google.com"}
                    description={item.description || "Pending description"}
                    techIcons={item.techIcons || []}
                  />
                );
              case "pc":
                return (
                  <PcCard
                    key={"bento_card_" + index}
                    title={item.title}
                    icon={item.icon || "/Images/TechBubbleLogos/Unity.svg"}
                    images={item.images || []}
                    brief={item.brief || "Pending brief"}
                    url={item.url || undefined}
                    techIcons={item.techIcons || []}
                  />
                );
              case "cta":
                return (
                  <WorkTogetherCard key={"bento_card_" + index} seeAll={true} />
                );
              default:
                break;
            }
          })}
      </div>
      <button
        onClick={() => setSeeAll(!seeAll)}
        className="text-matrix-light text-3xl"
      >
        {locale == LocaleEnum.ES
          ? seeAll
            ? "Ver menos"
            : "Ver mas"
          : seeAll
          ? "See less"
          : "See more"}
      </button>
    </div>
  );
}
