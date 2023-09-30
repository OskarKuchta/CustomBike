import { FC, useState, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const modelsListRef = useRef(null);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuHover = () => {
    setIsMenuOpen(true);
  };

  const handleMenuLeave = () => {
    setIsMenuOpen(false);
  };

  const handleLeaveList = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full fixed top-0">
      <nav className="flex justify-between items-center px-6 bg-black text-white">
        <div className="flex items-center gap-[1ch]">
          <img className="navbar-logo w-10 h-10" src="/logo.jpg" alt="logo" />

          <Link
            to="/#home"
            onClick={() => scrollTo(0, 0)}
            onFocus={handleLeaveList}
            className="font-logoFont"
          >
            CUSTOM BIKE
          </Link>
        </div>
        <div className="flex px-8">
          <div
            className="relative group"
            onMouseEnter={handleMenuHover}
            onMouseLeave={handleMenuLeave}
          >
            <button
              className="text-md transition-all duration-700 text-white py-4 px-12 focus:bg-white focus:outline-none focus:text-black hover:bg-white hover:outline-none hover:text-black active:bg-white active:outline-none active:text-black rotate-arrow"
              onClick={handleMenuClick}
              onFocus={handleMenuClick}
            >
              Modele
            </button>

            <ul
              ref={modelsListRef}
              className={`${
                isMenuOpen ? "block" : "hidden"
              } absolute left-0 right-0 text-center space-y-2 bg-white text-black border border-gray-300  z-10 models-list`}
            >
              <li>
                <Link
                  to="/#men"
                  className="block hover:text-green-500 hover:bg-black focus:outline-none focus:text-green-500 focus:bg-black"
                >
                  Mężczyźni
                </Link>
              </li>
              <li>
                <Link
                  to="/#women"
                  className="block hover:text-green-500 hover:bg-black focus:outline-none focus:text-green-500 focus:bg-black"
                >
                  Kobiety
                </Link>
              </li>
            </ul>
          </div>
          <Link
            onFocus={handleLeaveList}
            to="/#women"
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
