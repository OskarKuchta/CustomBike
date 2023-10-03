import { FC } from "react";
import Carousel from "./Carousel";
import { slides } from "../data/carouselData.json";

const Home: FC = () => {
  return (
    <section
      id="home"
      className="home-container bg-no-repeat bg-cover filter brightness-90 flex flex-col text-center px-[5%] md:px-[10%] text-white  items-center justify-center"
    >
      <h1 className="mb-10 text-2xl md:text-4xl">
        Witaj w miejscu, gdzie twoje marzenia rowerowe stają się
        rzeczywistością!
      </h1>
      <Carousel data={slides} />
    </section>
  );
};

export default Home;
