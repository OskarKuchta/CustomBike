import { FC } from "react";
import { Link } from "react-router-dom";
const WomenSection: FC = () => {
  return (
    <Link to="/kobiety">
      <section
        id="women"
        className="lady-container relative  z-[-1] flex items-center justify-center"
      >
        <h2 className="absolute bottom-12 md:bottom-4 text-orange-200 text-4xl lg:text-7xl tracking-wide">
          Kobiety
        </h2>
      </section>
    </Link>
  );
};

export default WomenSection;
