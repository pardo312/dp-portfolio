import { ContactButtons } from "../components/ContactButtons";
import { MainScreen } from "../components/MainScreen";


export default function Home() {
  return (
    <main>
      <MainScreen />
      <ContactButtons />
      <div className="h-20 "></div>
    </main>
  );
}
