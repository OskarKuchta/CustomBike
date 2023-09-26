import { FC, useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
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
      <main>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
