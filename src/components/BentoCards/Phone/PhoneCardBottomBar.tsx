"use client";
import Image from "next/image";

export function PhoneCardBottomBar({
  title,
  icon,
}: {
  title: string;
  icon: string;
}) {
  return (
    <div className="flex w-full justify-start items-center pr-6 pl-3 pointer-events-none">
      <div className="flex w-full icons gap-3">
        <div className="rounded-full border-2 border-matrix-light bg-black-ligth w-14 h-14 flex justify-center items-center">
          <Image
            src={"/Images/TechBubbleLogos/Aws.svg"}
            width={35}
            height={35}
            alt="PhoneFrame"
          />
        </div>
        <div className="rounded-full border-2 border-matrix-light bg-black-ligth w-14 h-14 flex justify-center items-center">
          <Image
            src={"/Images/TechBubbleLogos/Unity.svg"}
            width={35}
            height={35}
            alt="PhoneFrame"
          />
        </div>
      </div>
      <div className="flex text-md xl:text-xl text-center font-bold w-52 gap-5 items-center h-20 mx-10">
        <Image src={icon} width={50} height={50} alt="Project icon" className="p-1 w-14 h-14 rounded-full bg-black-ligthest border-[1px] border-matrix-light" />
        {title}
      </div>
    </div>
  );
}
