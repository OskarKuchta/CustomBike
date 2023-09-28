import { FC } from "react";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <header className="w-full fixed top-0">
      <nav className="flex justify-between items-center  px-6 bg-black text-white ">
        <div className="flex items-center gap-[1ch]">
          <img className="navbar-logo w-12 h-12" src="/logo.jpg" alt="logo" />
          <button
            onClick={() => window.scrollTo(0, 0)}
            className="text-sm font-semibold tracking-widest font-logoFont"
          >
            CUSTOM BIKE
          </button>
        </div>
        <div className="lg:flex hidden gap-12 text-md text-zinc-400"></div>
        <div className="flex px-8 gap-12">
          <Link
            to="/"
            className="text-md transition-all duration-700 text-white py-6 px-4 focus:bg-white focus:outline-none focus:text-black hover:bg-white hover:outline-none hover:text-black active:bg-white active:outline-none active:text-black"
          >
            Modele
          </Link>
          <Link
            to="/"
            className="text-md transition-all duration-700 text-white py-6 px-4 focus:bg-white focus:outline-none focus:text-black hover:bg-white hover:outline-none hover:text-black active:bg-white active:outline-none active:text-black"
          >
            O nas
          </Link>
          <Link
            to="/contact"
            className="text-md transition-all duration-700 text-white py-6 px-4 focus:bg-white focus:outline-none focus:text-black hover:bg-white hover:outline-none hover:text-black active:bg-white active:outline-none active:text-black"
          >
            Kontakt
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
