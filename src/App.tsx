import { Route, Routes } from "react-router-dom";
import { FC, useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import HomePage from "./Pages/HomePage";
import Contact from "./Pages/Contact";
import NotExist from "./Pages/NotExist";
import ScrollToHashElement from "./assets/ScrollToHashElement.tsx";
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
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotExist />} />
      </Routes>
    </>
  );
};

export default App;
