"use client";
import Image from "next/image";

export function PhoneCardBottomBar({
  title,
  icon,
  techIcons,
}: {
  title: string;
  icon: string;
  techIcons: string[];
}) {
  return (
    <div className="flex flex-col w-full justify-end items-center pr-6 pl-3 gap-3 md:gap-0 ">
      <div className="flex text-md xl:text-xl text-center font-bold w-full gap-5 items-center px-5 md:px-0">
        <Image
          src={icon}
          width={50}
          height={50}
          alt="Project icon"
          className="p-1 w-12 h-12 rounded-full bg-black-ligthest border-[1px] border-matrix-light"
        />
        {title}
      </div>
      <div className="flex justify-center w-full icons gap-3 h-20 md:h-full">
        {techIcons.map((icon: any, index: any) => (
          <div
            key={"pc" + title + "_icon_" + index}
            className="rounded-full border-2 border-matrix-light bg-black-ligth w-10 h-10 flex justify-center items-center"
          >
            <Image
              src={"/Images/TechBubbleLogos/" + icon + ".svg"}
              width={25}
              height={25}
              alt="PhoneFrame"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
