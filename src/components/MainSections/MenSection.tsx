import { FC } from "react";
import { Link } from "react-router-dom";

const MenSection: FC = () => {
  return (
    <Link
      to="/meskie"
      className="men-container bg-[url('/men-background.avif')] w-full landscape-sm:mt-[72px] "
    >
      <section>
        <h2 className=" absolute landscape-sm:bottom-8 bottom-16 left-1/2 transform -translate-x-1/2 text-limon text-4xl lg:text-7xl tracking-wide">
          Mężczyźni
        </h2>
      </section>
    </Link>
  );
};

export default MenSection;
