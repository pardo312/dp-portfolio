import { ContactButtons } from "../components/ContactButtons";
import { MainScreen } from "../components/MainScreen";
import { AboutMeText } from "../components/AboutMeText";
import Companies from "../components/Companies";
import { Portfolio } from "../components/Portfolio";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <main>
      <MainScreen />
      <ContactButtons />
      <AboutMeText />
      <Companies />
      <Portfolio />
      <Footer/>
    </main>
  );
}


