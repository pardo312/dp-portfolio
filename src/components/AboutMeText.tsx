"use client";

import { LocaleDataContext } from "@/context/LocaleContext";
import { LocaleEnum } from "@/context/LocaleEnum";
import { motion } from "framer-motion";
import { useContext } from "react";

export function AboutMeText() {
  let localeData = useContext(LocaleDataContext);
  if (localeData.locale == LocaleEnum.ES)
    return (
      <motion.div
        initial={{ opacity: 0.1, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={
          "flex items-center justify-center text-center my-40 mx-8 md:mx-32 text-2xl md:text-4xl "
        }
      >
        <div className="leading-tight text-matrix-light">
          5+ años creando y testeando{" "}
          <span className="text-matrix-normal">
            juegos y experiencias XR en vivo{" "}
          </span>
          para Meta Quest, iOS/Android y PC — del
          <span className="text-matrix-normal"> gameplay </span>
          a la
          <span className="text-matrix-normal"> estrategia de calidad</span>,
          con tests automatizados y CI/CD.
        </div>
      </motion.div>
    );
  else if (localeData.locale == LocaleEnum.EN)
    return (
      <motion.div
        initial={{ opacity: 0.1, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={
          "flex items-center justify-center text-center my-40 mx-8 md:mx-32 text-2xl md:text-4xl "
        }
      >
        <div className="leading-tight text-matrix-light">
          5+ years building and testing{" "}
          <span className="text-matrix-normal">
            live games and XR experiences{" "}
          </span>
          for Meta Quest, iOS/Android and PC — from
          <span className="text-matrix-normal"> gameplay code </span>
          to
          <span className="text-matrix-normal"> quality strategy</span>, with
          automated testing and CI/CD.
        </div>
      </motion.div>
    );
}
