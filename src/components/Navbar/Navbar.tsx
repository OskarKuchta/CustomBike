import { FC } from "react";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <header className="w-full fixed top-0">
      <nav className="flex justify-between items-center py-6 lg:py-4 px-6 bg-black text-white ">
        <div className="flex items-center gap-[1ch]">
          <img className="navbar-logo w-12 h-12" src="/logo.jpg" alt="logo" />
          <Link
            to="/"
            className="text-sm font-semibold tracking-widest font-logoFont"
          >
            CUSTOM BIKE
          </Link>
        </div>
        <div className="lg:flex hidden gap-12 text-md text-zinc-400"></div>
        <Link to="/" className="text-md text-white">
          O nas
        </Link>
        <Link to="/contact" className="text-md text-white">
          Kontakt
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
