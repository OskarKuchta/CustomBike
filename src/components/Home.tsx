import { FC } from "react";

const Home: FC = () => {
  return (
    <section
      id="home"
      className="home-container bg-no-repeat bg-cover filter brightness-90 z-[-1] flex flex-col items-center text-center"
    >
      <h1 className="mt-32 text-4xl">
        Witaj w miejscu, gdzie twoje marzenia rowerowe stają się
        rzeczywistością!
      </h1>
      <p className="text-md">
        Moim zadanem jest przekształcanie standardowych rowerów w wyjątkowe
        dzieła sztuki, dostosowane do Twojego stylu i osobowości.
      </p>
    </section>
  );
};

export default Home;
