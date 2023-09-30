import { FC } from "react";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <header className="w-full fixed top-0">
      <nav className="flex justify-between items-center  px-6 bg-black text-white ">
        <div className="flex items-center gap-[1ch]">
          <img className="navbar-logo w-10 h-10" src="/logo.jpg" alt="logo" />

          <Link
            to="/#home"
            onClick={() => scrollTo(0, 0)}
            className="font-logoFont"
          >
            CUSTOM BIKE
          </Link>
        </div>
        <div className="flex px-8">
          <Link
            to="/#models"
            className="text-md transition-all duration-700 text-white py-4 px-12 focus:bg-white focus:outline-none focus:text-black hover:bg-white hover:outline-none hover:text-black active:bg-white active:outline-none active:text-black"
          >
            Modele
          </Link>
          <Link
            to="personalize"
            className="text-md transition-all duration-700 text-white py-4 px-12 focus:bg-white focus:outline-none focus:text-black hover:bg-white hover:outline-none hover:text-black active:bg-white active:outline-none active:text-black"
          >
            Personalizacja
          </Link>
          <Link
            to="contact"
            className="text-md transition-all duration-700 text-white py-4 px-12 focus:bg-white focus:outline-none focus:text-black hover:bg-white hover:outline-none hover:text-black active:bg-white active:outline-none active:text-black"
          >
            Kontakt
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
