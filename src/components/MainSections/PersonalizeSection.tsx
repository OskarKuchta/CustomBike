import { FC } from "react";
import { Link } from "react-router-dom";
const PersonalizeSection: FC = () => {
  return (
    <Link
      to="/personalizacja"
      className="bg-[url('/personalizeSection-background.jpg')] w-full personalize-background landscape-sm:mt-[72px]"
    >
      <section>
        <h2 className="absolute landscape-sm:bottom-8 bottom-16 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white text-4xl lg:text-7xl tracking-wide">
          Personalizacja
        </h2>
      </section>
    </Link>
  );
};

export default PersonalizeSection;
