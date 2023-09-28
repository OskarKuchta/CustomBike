import { FC } from "react";
import About from "../components/About";
import Home from "../components/Navbar/Home";
import Models from "../components/Models";

const HomePage: FC = () => {
  return (
    <main className="w-full h-screen pages">
      <Home />
      <Models />
      <About />
    </main>
  );
};

export default HomePage;
