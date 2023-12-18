"use client";
import { LocaleDataContext } from "@/context/LocaleContext";
import { LocaleEnum } from "@/context/LocaleEnum";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";

export function WorkTogetherCard({ seeAll }: { seeAll: boolean }) {
  const [effect, setEffect] = useState(false);
  let localeData = useContext(LocaleDataContext);
  useEffect(() => {
    let intervalId: any;

    if (effect) {
      intervalId = setInterval(() => {
        setEffect(false);
      }, 3000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [effect]);
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.3,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 },
      }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
      className={`  col-span-2 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2 lg:row-span-1 ${
        seeAll ? "" : "h-32 mx-6 md:mx-52 lg:mx-72 my-20"
      }`}
    >
      <a
        href="mailto:pardod312@gmail.com"
        className={
          "flex h-full w-full justify-center items-center text-2xl text-center p-10 bg-matrix-normal rounded-3xl  border-[3px]  border-black drop-shadow-glow "
        }
        onClick={() => setEffect(true)}
      >
        <div className="pointer-events-none">
          {effect ? (
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          ) : localeData.locale == LocaleEnum.ES ? (
            <>
              🤝
              <br /> ¿Preparado para trabajar juntos?
            </>
          ) : (
            <>
              🤝
              <br /> Ready to work together?
            </>
          )}
        </div>
      </a>
    </motion.div>
  );
}
