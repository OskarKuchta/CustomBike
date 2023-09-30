import { FC } from "react";
const LadySection: FC = () => {
  return (
    <section
      id="women"
      className="lady-container relative bg-[url('/ladies-background.jpg')] z-[-1] bg-no-repeat"
    >
      <h2 className="absolute bottom-12 text-white text-4xl lg:text-7xl tracking-wide">
        Kobiety
      </h2>
    </section>
  );
};

export default LadySection;
