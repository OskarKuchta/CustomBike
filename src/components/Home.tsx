import { FC } from "react";

const Home: FC = () => {
  return (
    <section
      id="home"
      className="home-container bg-no-repeat bg-cover filter brightness-90 z-[-1] flex flex-col text-center px-12 md:px-24 text-limon relative"
    >
      <h1 className="mt-24 mb-10 text-2xl md:text-4xl">
        Witaj w miejscu, gdzie twoje marzenia rowerowe stają się
        rzeczywistością!
      </h1>
    </section>
  );
};

export default Home;
