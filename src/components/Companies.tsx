"use client";
import { LocaleDataContext } from "@/context/LocaleContext";
import { LocaleEnum } from "@/context/LocaleEnum";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";

const baseCompanies = ["GetaClub","Kreis", "Timba", "Troniks", "Yumebau"];
const repetitions = 4;
export const companies = Array(repetitions).fill(baseCompanies).flat();

export default function Companies() {
  let localeData = useContext(LocaleDataContext);
  return (
    <div
      className={
        "flex flex-col gap-y-16 items-center justify-center text-center my-40 mx-10 md:mx-32 md:mt-40 md:mb-20 text-2xl md:text-4xl"
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={"flex items-center "}
      >
        {localeData.locale == LocaleEnum.ES ? (
          <div className="leading-tight text-matrix-light ">
            Estoy orgulloso de haber
            <span className="text-matrix-normal"> colaborado</span> con
            <span className="text-matrix-normal"> increibles</span> compañias
            como:
          </div>
        ) : (
          <div className="leading-tight text-matrix-light">
            I am proud to have
            <span className="text-matrix-normal"> collaborated</span> with
            <span className="text-matrix-normal"> incredible</span> companies
            such as:
          </div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={" w-full max-w-[100rem] h-44 overflow-hidden xl:px-44 "}
      >
        <div className="flex  w-full h-full items-center overflow-hidden space-x-16 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] ">
          <div className="flex space-x-16 animate-infinite-scroll">
            {[...companies, ...companies, ...companies].map((company, index) => (
              <div
                key={`company_${index}`}
                className="flex flex-col w-32 items-center justify-center flex-shrink-0"
              >
                <Image
                  src={`/Images/Companies/${company}.svg`}
                  width={128}
                  height={128}
                  alt={`${company} logo`}
                  loading="lazy"
                  quality={75}
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
