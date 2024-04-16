"use client";
import { ContactButtons } from "../../../components/ContactButtons";
import { MainScreen } from "../../../components/MainScreen";
import { AboutMeText } from "../../../components/Gobelins/AboutMeTextGobelins";
import Companies from "../../../components/Companies";
import { PortfolioGobelins } from "../../../components/Gobelins/PortfolioGobelins";
import { Footer } from "../../../components/Footer";
import { ContextLocaleProvider } from "@/context/LocaleContext";
import { LocaleEnum } from "@/context/LocaleEnum";
import { useEffect, useState } from "react";

export default function HomeEnglish() {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsReady(true), 100);
  }, []);

  if (!isReady)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-matrix-normal border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        ></div>
      </div>
    );

  return (
    <ContextLocaleProvider desiredLocale={LocaleEnum.ES}>
      <MainScreen />
      <ContactButtons isTitleContact={true} />
      <AboutMeText />
      <PortfolioGobelins />
    </ContextLocaleProvider>
  );
}
