"use client";

import { motion } from "framer-motion";

export function AboutMeText() {
  return (
    <motion.div
      initial={{ opacity: 0.1, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={"flex items-center justify-center text-center my-40 mx-8 md:mx-32 text-2xl md:text-4xl "}
    >
      <div className="leading-tight text-matrix-light">
        Ingeniero de sistemas con 4+ años de experiencia que cree fervientemente
        que con{" "}
        <span className="text-matrix-normal">
          orden, pasion y persistencia{" "}
        </span>
        es posible crear cualquier producto para ayudar a las personas a tener
        <span className="text-matrix-normal"> una mejor vida</span>.
      </div>
    </motion.div>
  );
}
