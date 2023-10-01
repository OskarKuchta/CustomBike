import { FC } from "react";
import Home from "../components/Home";
import MenSection from "../components/MenSection";
import LadySection from "../components/WomenSection";

const HomePage: FC = () => {
  return (
    <main className="pages">
      <Home />
      <MenSection />
      <LadySection />
    </main>
  );
};

export default HomePage;
