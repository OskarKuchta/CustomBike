import { FC } from "react";
import { Link } from "react-router-dom";

const MenSection: FC = () => {
  return (
    <Link to="/meskie">
      <section
        id="men"
        className="men-container relative z-[-1] flex items-center justify-center"
      >
        <h2 className=" absolute bottom-16 md:bottom-4 text-green-500 text-4xl lg:text-7xl tracking-wide">
          Mężczyźni
        </h2>
      </section>
    </Link>
  );
};

export default MenSection;
