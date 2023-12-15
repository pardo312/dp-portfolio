"use client";
import Image from "next/image";

export function PcCardBottomBar({ title }: { title: string; }) {
  return (
    <div className="flex w-full justify-between items-center pr-6 pl-3">
      <div className="flex w-full icons gap-3">
        <div className="rounded-full border-2 border-matrix-light bg-black-ligth w-14 h-14 flex justify-center items-center">
          <Image
            src={"/Images/TechBubbleLogos/Aws.svg"}
            width={35}
            height={35}
            alt="PhoneFrame" />
        </div>
        <div className="rounded-full border-2 border-matrix-light bg-black-ligth w-14 h-14 flex justify-center items-center">
          <Image
            src={"/Images/TechBubbleLogos/Unity.svg"}
            width={35}
            height={35}
            alt="PhoneFrame" />
        </div>
      </div>
      <div className="text-sm xl:text-xl text-center ">{title}</div>
    </div>
  );
}
