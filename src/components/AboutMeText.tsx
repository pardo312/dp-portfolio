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
          Ingeniero de sistemas con 4+ años de experiencia que cree
          fervientemente que con{" "}
          <span className="text-matrix-normal">
            orden, pasion y persistencia{" "}
          </span>
          es posible crear cualquier producto para ayudar a las personas a tener
          <span className="text-matrix-normal"> una mejor vida</span>.
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
          Systems engineer with 4+ years of experience who fervently believes
          that with{" "}
          <span className="text-matrix-normal">
            order, passion, and persistence
          </span>
          it is possible to create any product to help people have
          <span className="text-matrix-normal"> a better life</span>.
        </div>
      </motion.div>
    );
}
