import { FC, useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import Models from "./components/Models";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";

const App: FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const isPhone: boolean = windowWidth < 769;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {isPhone ? <MobileNavbar /> : <Navbar />}
      <main className="pages">
        <Home />
        <Models />
        <About />
        <Contact />
      </main>
    </>
  );
};

export default App;
