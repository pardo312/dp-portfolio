'use client'
import { ContactButtons } from "../../components/ContactButtons";
import { MainScreen } from "../../components/MainScreen";
import { AboutMeText } from "../../components/AboutMeText";
import Companies from "../../components/Companies";
import { Portfolio } from "../../components/Portfolio";
import { Footer } from "../../components/Footer";
import { ContextLocaleProvider } from "@/context/LocaleContext";
import { LocaleEnum } from "@/context/LocaleEnum";

export default function HomeEnglish() {
  return (
    <ContextLocaleProvider desiredLocale={LocaleEnum.ES}>
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
