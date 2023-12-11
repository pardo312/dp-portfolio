"use client";
import { motion } from "framer-motion";

export function Portfolio() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={"flex items-center justify-center text-center mx-96 mt-40 mb-20"}
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
    className: "rounded-md border-4 border-matrix-light col-span-2 row-span-4"
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-2 row-span-2"
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-2 row-span-1"
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-2 row-span-4"
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-1 row-span-1"
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-1 row-span-1"
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-2 row-span-2"
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-2 row-span-2"
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-2 row-span-4"
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-1 row-span-1"
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-1 row-span-1"
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-1 row-span-1"
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-1 row-span-1"
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-2 row-span-2"
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-2 row-span-2"
  },
  {
    className: "rounded-md border-4 border-matrix-light col-span-2 row-span-1"
  },
]

function PortfolioBento() {
  return (
    <div className="flex-1 h-full w-full">
      <div className="w-full h-full grid gird-cols-1 md:grid-cols-6 auto-rows-[9rem] gap-10 px-52 py-6">
        {cards2.map((item, index) => (
          <div key={index} className={item.className + " text-white"}>{index}</div>
        ))}
      </div>
    </div>
  );
}
