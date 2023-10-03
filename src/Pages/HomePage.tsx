import { FC, useState } from "react";
import Home from "../components/Home";
import MenSection from "../components/MenSection";
import WomenSection from "../components/WomenSection";
import {
  FullpageContainer,
  FullpageSection,
} from "@shinyongjun/react-fullpage";

const HomePage: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <FullpageContainer
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
    >
      <FullpageSection>
        <Home />
      </FullpageSection>
      <FullpageSection>
        <MenSection />
      </FullpageSection>
      <FullpageSection>
        <WomenSection />
      </FullpageSection>
    </FullpageContainer>
  );
};

export default HomePage;
