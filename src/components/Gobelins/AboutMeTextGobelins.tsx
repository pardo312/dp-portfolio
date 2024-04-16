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
          <br />
          Soy Daniel Pardo y esta es mi carta de presentacion y portafolio para
          aplicar a la {""}
          <span className="text-matrix-normal">
            beca de escuela de verano de GOBELINS en artes y videojuegos.
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
          Un poco sobre mi y el motivo de mi {""}
          <span className="text-matrix-normal">interes en la beca</span>:
        </div>
        <div className="text-xl md:text-2xl leading-tight text-matrix-light">
          He sido desarrollador de videojuegos en Unity por mas 4 años y he
          estado presente en la industria tanto de Colombia como de Canada. En
          mi carrera he realizado multitud de proyectos, jams y mentorias. He
          participado en la mayoria del proceso creativo desde {""}
          <span className="text-matrix-normal">
            progamacion, optimizacion, musica, arte tecnico, modelado, animacion
            y diseño
          </span>
          .
          <br />
          <br />
          Mi meta acutal es empujar los limites de que es posible con las nuevas
          tecnologias rapidamente cambiantes, en especifico en el ambito de
          VR/XR. Tengo un proyecto especifico en el cual quisiera profundizar.
          La idea es usar {""}
          <span className="text-matrix-normal">
            mundos no-euclidianos y hand tracking
          </span>
          , para realizar una experiencia nunca antes vista.
          <br />
          <br />
          Por otro lado nunca he salido del pais, soy una persona introvertida
          que no ha tenido la oportunidad o la motivacion para hacerlo. Pero ya
          que se presento esta oportunidad, decidi aplicar para {""}
          <span className="text-matrix-normal">
            conocer otra cultura, otras personas que tambien les apasiona este
            medio y practicar mi frances.
          </span>
        </div>
      </motion.div>
    </div>
  );
}
