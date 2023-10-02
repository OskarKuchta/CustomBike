import { FC } from "react";
import Home from "../components/Home";
import MenSection from "../components/MenSection";
import WomenSection from "../components/WomenSection";


const HomePage: FC = () => {
  return (
    <main className="pages">
      <Home />
      <MenSection />
      <WomenSection />
    </main>
  );
};

export default HomePage;
