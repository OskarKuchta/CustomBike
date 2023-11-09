import { FC } from "react";
import { Link } from "react-router-dom";
const PersonalizeSection: FC = () => {
  return (
    <>
      <div className="landscape-sm:h-[72px]"></div>
      <Link
        to="/personalizacja"
        className="bg-[url('/personalizeSection-background.jpg')] w-full personalize-background"
      >
        <section>
          <h2 className="absolute landscape-sm:bottom-8 bottom-16 md:bottom-8 left-1/2 transform -translate-x-1/2 bg-[#0e0d0d] w-screen text-center text-white text-4xl py-2 lg:text-7xl tracking-wide">
            Personalizacja
          </h2>
        </section>
      </Link>
    </>
  );
};

export default PersonalizeSection;
