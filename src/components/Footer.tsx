import { LocaleDataContext } from "@/context/LocaleContext";
import { LocaleEnum } from "@/context/LocaleEnum";
import { Cormorant_Upright } from "next/font/google";
import { useContext } from "react";

export const cormorantUpright = Cormorant_Upright({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export function Footer() {
  let localeData = useContext(LocaleDataContext);
  return (
    <div
      className={
        "flex justify-between md:mx-20 my-5 md:my-10 px-5 md:px-10 text-md md:text-2xl " +
        cormorantUpright.className
      }
    >
      {localeData.locale == LocaleEnum.ES ? (
        <h1 className="leading-tight text-matrix-light">
          Creado con <span className="text-matrix-normal">Next.js</span>
        </h1>
      ) : (
        <h1 className="leading-tight text-matrix-light">
          Created with <span className="text-matrix-normal">Next.js</span>
        </h1>
      )}
      {localeData.locale == LocaleEnum.ES ? (
        <h1 className="leading-tight text-matrix-light">
          Por <span className="text-matrix-normal">Daniel Pardo </span> con ❤️
        </h1>
      ) : (
        <h1 className="leading-tight text-matrix-light">
          By <span className="text-matrix-normal">Daniel Pardo </span>with ❤️
        </h1>
      )}
    </div>
  );
}
