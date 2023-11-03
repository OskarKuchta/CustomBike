import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Home = ({ onClick }) => {
  return (
    <section
      id="home"
      className="home-conatiner bg-[url('/background.avif')] bg-no-repeat bg-cover filter brightness-[0.7] flex flex-col text-center px-[5%] md:px-[20%] items-center relative"
    >
      <h1 className="my-auto text-white landscape-sm:text-xl text-4xl md:text-5xl lg:text-6xl">
        Witaj w miejscu, gdzie twoje marzenia rowerowe stają się
        rzeczywistością!
      </h1>
      <div
        className="double-scroll-arrows-container cursor-pointer absolute bottom-[10%] md:bottom-[5%] right-[10%]"
        onClick={onClick}
      >
        <div className="scroll-arrow">
          <KeyboardArrowDownIcon className="scroll-arrow-icon stroke-limon" />
        </div>
        <div className="scroll-arrow">
          <KeyboardArrowDownIcon className="scroll-arrow-icon stroke-limon" />
        </div>
      </div>
    </section>
  );
};

export default Home;
