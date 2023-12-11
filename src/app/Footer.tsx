import { Cormorant_Upright } from "next/font/google";

export const cormorantUpright = Cormorant_Upright({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export function Footer() {
  return (
    <div className={"flex justify-between mx-20 my-10 px-10 " + cormorantUpright.className}>
      <h1 className="text-2xl leading-tight text-matrix-light">
        Creado con <span className="text-matrix-normal">Next.js</span>
      </h1>
      <h1 className="text-2xl leading-tight text-matrix-light">
        By <span className="text-matrix-normal">Daniel Pardo </span>with ❤️
      </h1>
    </div>
  );
}
