import { FC, useState, useEffect } from "react";
import Home from "../components/Home";
import MenSection from "../components/MainSections/MenSection";
import WomenSection from "../components/MainSections/WomenSection";
import {
  FullpageContainer,
  FullpageSection,
} from "@shinyongjun/react-fullpage";
import PersonalizeSection from "../components/MainSections/PersonalizeSection";

const HomePage: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.key === "ArrowUp" && activeIndex > 0) ||
        (e.key === "ArrowLeft" && activeIndex > 0)
      ) {
        setActiveIndex(activeIndex - 1);
      } else if (
        (e.key === "ArrowDown" && activeIndex < 2) ||
        (e.key === "ArrowRight" && activeIndex < 2)
      ) {
        setActiveIndex(activeIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);
  return (
    <FullpageContainer
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
    >
      <FullpageSection>
        <Home onClick={() => setActiveIndex(1)} />
      </FullpageSection>
      <FullpageSection>
        <MenSection />
      </FullpageSection>
      <FullpageSection>
        <WomenSection />
      </FullpageSection>
      <FullpageSection>
        <PersonalizeSection />
      </FullpageSection>
    </FullpageContainer>
  );
};

export default HomePage;
