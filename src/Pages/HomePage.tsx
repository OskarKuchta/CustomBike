import { FC } from "react";
import Home from "../components/Home";
import Models from "../components/Models";
import About from "../components/About";


const HomePage: FC = () => {
  return (
    <main className="pages">
      <Home />
      <Models />
      <About />
    </main>
  );
};

export default HomePage;
