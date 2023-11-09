import { FC } from "react";
import { Link } from "react-router-dom";
const WomenSection: FC = () => {
  return (
    <Link
      to="/rowery-damskie"
      className="bg-[url('/womenSection-background.avif')] w-full lady-container"
    >
      <section>
        <h2 className="absolute landscape-sm:bottom-8 bottom-16 md:bottom-8 left-1/2 transform bg-[#0e0d0d] w-full text-center  -translate-x-1/2 text-mainColor py-2 text-4xl lg:text-7xl tracking-wide">
          Kobiety
        </h2>
      </section>
    </Link>
  );
};

export default WomenSection;
