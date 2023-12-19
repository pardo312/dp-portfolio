"use client";
import { ContactButtons } from "../../components/ContactButtons";
import { MainScreen } from "../../components/MainScreen";
import { AboutMeText } from "../../components/AboutMeText";
import Companies from "../../components/Companies";
import { Portfolio } from "../../components/Portfolio";
import { Footer } from "../../components/Footer";
import { ContextLocaleProvider } from "@/context/LocaleContext";
import { LocaleEnum } from "@/context/LocaleEnum";
import { useEffect, useState } from "react";

export default function HomeSpanish() {
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
    <ContextLocaleProvider desiredLocale={LocaleEnum.EN}>
      <MainScreen />
      <ContactButtons isTitleContact={true} />
      <AboutMeText />
      <Companies />
      <Portfolio />
      <ContactButtons isTitleContact={false} />
      <Footer />
    </ContextLocaleProvider>
  );
}
