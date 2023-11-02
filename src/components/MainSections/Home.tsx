import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Home = ({ onClick }) => {
  return (
    <section
      id="home"
      className="home-conatiner bg-[url('/background.avif')] bg-no-repeat bg-cover filter brightness-90 flex flex-col text-center px-[5%] md:px-[20%] text-white  items-center relative"
    >
      <h1 className="landscape-sm:mt-20 mt-32 landscape-sm:text-xl text-2xl md:text-4xl">
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
