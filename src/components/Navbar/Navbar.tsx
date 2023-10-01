import { FC, useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Photos/logo.jpg";
import ArrowDownwardSharpIcon from "@mui/icons-material/ArrowDownwardSharp";
const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const modelsListRef = useRef(null);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setShowArrow(!showArrow);
  };

  const handleMenuHover = () => {
    setIsMenuOpen(true);
    setShowArrow(true);
  };

  const handleMenuLeave = () => {
    setIsMenuOpen(false);
    setShowArrow(false);
  };

  const handleLeaveList = () => {
    setIsMenuOpen(false);
    setShowArrow(false);
  };

  return (
    <header className="w-full absolute top-0">
      <nav className="flex justify-between items-center px-6 bg-black text-white">
        <div className="flex items-center gap-[1ch]">
          <img className="navbar-logo w-10 h-10" src={logo} alt="logo" />

          <Link
            to="/#home"
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
              className="text-md transition-all duration-700 text-white py-4 px-12 focus:bg-white focus:outline-none focus:text-black hover:bg-white hover:outline-none hover:text-limo active:bg-white active:outline-none active:text-black "
              onClick={handleMenuClick}
              onFocus={handleMenuClick}
            >
              Modele{" "}
              {showArrow ? (
                <ArrowDownwardSharpIcon
                  style={{
                    fontSize: "16px",
                    marginBottom: "3px",
                  }}
                />
              ) : null}
            </button>

            <ul
              ref={modelsListRef}
              className={`${
                isMenuOpen ? "block" : "hidden"
              } absolute left-0 right-0 text-center space-y-2 bg-white text-black border border-gray-300  z-10 models-list`}
            >
              <li>
                <Link
                  to="/meskie"
                  className="block hover:text-limon hover:bg-black focus:outline-none focus:text-limon focus:bg-black"
                >
                  Mężczyźni
                </Link>
              </li>
              <li>
                <Link
                  to="/kobiety"
                  className="block hover:text-limon hover:bg-black focus:outline-none focus:text-limon focus:bg-black"
                >
                  Kobiety
                </Link>
              </li>
            </ul>
          </div>
          <Link
            onFocus={handleLeaveList}
            to="/personalizacja"
            className="text-md transition-all duration-700 text-white py-4 px-12 focus:bg-white focus:outline-none focus:text-black hover:bg-white hover:outline-none hover:text-black active:bg-white active:outline-none active:text-black"
          >
            Personalizacja
          </Link>
          <Link
            to="kontakt"
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
