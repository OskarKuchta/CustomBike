import { FC } from "react";
import { Link } from "react-router-dom";
const PersonalizeSection: FC = () => {
  return (
    <Link
      to="/personalizacja"
      className="bg-[url('/personalize-background.jpg')] w-full personalize-background"
    >
      <section>
        <h2 className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white text-4xl lg:text-7xl tracking-wide">
          Personalizacja
        </h2>
      </section>
    </Link>
  );
};

export default PersonalizeSection;
