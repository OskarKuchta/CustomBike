import { FC } from "react";
import { Link } from "react-router-dom";
const WomenSection: FC = () => {
  return (
    <Link
      to="/kobiety"
      className="bg-[url('/ladies-background.avif')] w-full lady-container landscape-sm:mt-[72px]"
    >
      <section>
        <h2 className="absolute landscape-sm:bottom-8 bottom-16 left-1/2 transform -translate-x-1/2 text-orange-200 text-4xl lg:text-7xl tracking-wide">
          Kobiety
        </h2>
      </section>
    </Link>
  );
};

export default WomenSection;
