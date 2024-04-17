"use client";

import { LocaleDataContext } from "@/context/LocaleContext";
import { LocaleEnum } from "@/context/LocaleEnum";
import { motion } from "framer-motion";
import { useContext } from "react";

export function AboutMeText() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0.1, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={
          "flex flex-col space-y-10 items-center justify-center text-center my-40 mx-8 md:mx-32 text-2xl md:text-4xl "
        }
      >
        <div className="leading-tight text-matrix-light">
          Salut! <br />
          <br />I am Daniel Pardo and this is the cover letter and portfolio I
          have prepared to apply for the new {""}
          <span className="text-matrix-normal">
            GOBELINS Summer School scholarship in arts and video games.
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0.1, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={
          "flex flex-col space-y-20 items-center justify-center text-center my-40 mx-8 md:mx-32 text-2xl md:text-4xl "
        }
      >
        <div className="leading-tight text-matrix-light">
          A little bit about me and my {""}
          <span className="text-matrix-normal">
            interest on the scholarship
          </span>
          :
        </div>
        <div className="text-xl md:text-2xl leading-tight text-matrix-light">
          I have been a Unity game developer for over 4 years and have been
          involved in the industry in both Colombia and Canada. In my career, I
          have completed numerous projects, jams, and mentorships. I have
          participated in most of the creative process including {""}
          <span className="text-matrix-normal">
            programming, optimization, music, technical art, modeling,
            animation, and design
          </span>
          .
          <br />
          <br />
          My current goal is to push the boundaries of what is possible with
          the rapidly changing new technologies, specifically in the field of VR/XR.
          I have a specific project on which I would like to delve deeper. The
          idea is to use {""}
          <span className="text-matrix-normal">
            non-ecludian worlds and hand tracking
          </span>
          , to create an unprecedented experience.
          <br />
          <br />
          On the other hand, I have never left the country; I am an introverted
          person who has not had the opportunity or motivation to do so. But
          since this opportunity has arisen, I decided to apply for {""}
          <span className="text-matrix-normal">
            the chance to experience another culture, meet other people who are
            also passionate about this field, and practice my French.
          </span>
        </div>
      </motion.div>
    </div>
  );
}
