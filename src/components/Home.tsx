import { FC } from "react";

const Home: FC = () => {
  return (
    <section
      id="home"
      className="home-container bg-no-repeat bg-cover filter brightness-90 flex flex-col text-center px-[5%] md:px-[20%] text-white  items-center justify-center"
    >
      <h1 className="mb-10 text-2xl md:text-4xl">
        Witaj w miejscu, gdzie twoje marzenia rowerowe stają się
        rzeczywistością!
      </h1>
      <img
        className="rounded-md h-[200px] md:h-[300px]"
        src="/9.jpg"
        alt=""
        style={{ width: "clamp(300px, 70vw, 600px)" }}
      />
    </section>
  );
};

export default Home;
