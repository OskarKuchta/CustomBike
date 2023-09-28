import { FC } from "react";


const Navbar: FC = () => {
  return (
    <header className="w-full fixed top-0">
      <nav className="flex justify-between items-center  px-6 bg-black text-white ">
        <div className="flex items-center gap-[1ch]">
          <img className="navbar-logo w-12 h-12" src="/logo.jpg" alt="logo" />

          <a
            href="#home"
            className="text-sm font-semibold tracking-widest font-logoFont"
          >
            CUSTOM BIKE
          </a>
        </div>
        <div className="lg:flex hidden gap-12 text-md text-zinc-400"></div>
        <div className="flex px-8 gap-12">
          <a
            href="#models"
            className="text-md transition-all duration-700 text-white py-6 px-4 focus:bg-white focus:outline-none focus:text-black hover:bg-white hover:outline-none hover:text-black active:bg-white active:outline-none active:text-black"
          >
            Modele
          </a>
          <a
            href="#about"
            className="text-md transition-all duration-700 text-white py-6 px-4 focus:bg-white focus:outline-none focus:text-black hover:bg-white hover:outline-none hover:text-black active:bg-white active:outline-none active:text-black"
          >
            O nas
          </a>
          <a
            href="#contact"
            className="text-md transition-all duration-700 text-white py-6 px-4 focus:bg-white focus:outline-none focus:text-black hover:bg-white hover:outline-none hover:text-black active:bg-white active:outline-none active:text-black"
          >
            Kontakt
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
