import { FC } from "react";
import About from "../components/About";
import Home from "../components/Navbar/Home";

const HomePage: FC = () => {
  return (
    <>
      <Home />
      <About />
    </>
  );
};

export default HomePage;
