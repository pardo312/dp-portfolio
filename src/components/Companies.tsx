"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export const things = [
  "GetaClub",
  "Kreis",
  "Timba",
  "Troniks",
  "GetaClub",
  "Kreis",
  "Timba",
  "Troniks",
  "GetaClub",
  "Kreis",
  "Timba",
  "Troniks",
];

export default function Companies() {
  return (
    <div
      className={
        "flex flex-col gap-y-16 items-center justify-center text-center mx-72 my-40"
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={"flex items-center "}
      >
        <div className="text-4xl leading-tight text-matrix-light ">
          Estoy orgulloso de haber
          <span className="text-matrix-normal"> colaborado</span> con
          <span className="text-matrix-normal"> increibles</span> compañias
          como:
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: .5 }}
        className={" w-full max-w-[100rem] h-44 overflow-hidden"}
      >
        <div className="flex w-full h-full items-center overflow-hidden space-x-16 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] ">
          <div className="flex  space-x-16   animate animate-infinite-scroll">
            {things.map((thing, index) => (
              <div key={"thing_" + index} className="flex flex-col w-32 item-center justify-center">
                <Image
                  src={"/Images/Companies/" + thing + ".svg"}
                  width={250}
                  height={250}
                  alt="Picture of the author"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
