import { FC, useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Contact from "./pages/Contact";
import NotExist from "./components/NotExist";
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
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotExist />} />
        </Routes>
      </>
    </>
  );
};

export default App;
