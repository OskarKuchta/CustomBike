import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
const Home = ({ onClick }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section id="home">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "transparent",
              distance: 150,
              enable: false,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "star",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />

      <h1 className="absolute top-1/2 left-1/2 transform text-center -translate-x-1/2 -translate-y-1/2 my-auto text-mainColor landscape-sm:text-xl text-3xl md:text-5xl lg:text-6xl">
        Witaj w miejscu, gdzie twoje marzenia rowerowe stają się
        rzeczywistością!
      </h1>
      <div
        className="double-scroll-arrows-container cursor-pointer absolute bottom-[10%] md:bottom-[5%] right-[10%] border-white"
        onClick={onClick}
      >
        <div className="scroll-arrow">
          <KeyboardArrowDownIcon className="scroll-arrow-icon stroke-mainColor" />
        </div>
        <div className="scroll-arrow">
          <KeyboardArrowDownIcon className="scroll-arrow-icon stroke-mainColor" />
        </div>
      </div>
    </section>
  );
};

export default Home;
