import { Route, Routes, useLocation } from "react-router-dom";
import { FC, useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import HomePage from "./Pages/HomePage";
import Contact from "./Pages/Contact";
import NotExist from "./Pages/NotExist";
import ScrollToHashElement from "./assets/ScrollToHashElement.tsx";
import Personalize from "./Pages/Personalize.tsx";
const App: FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const isPhone: boolean = windowWidth < 769;
  const location = useLocation();

  useEffect(() => {
    const handleHashChange = () => {
      const hash: undefined | string = location.hash;
      if (hash) {
        const targetElement: Element = document.querySelector(hash);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [location.hash]);

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
        <Route path="/personalize" element={<Personalize />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotExist />} />
      </Routes>
    </>
  );
};

export default App;
