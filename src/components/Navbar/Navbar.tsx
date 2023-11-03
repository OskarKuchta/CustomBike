import { FC, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [showArrow, setShowArrow] = useState<boolean>(false);
  const modelsListRef: React.MutableRefObject<HTMLUListElement> = useRef(null);

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
    <header className="w-full absolute top-0 z-10">
      <nav className="flex justify-between items-center px-6 bg-black text-white">
        <div className="flex items-center gap-[1ch]">
          <img
            className="navbar-logo w-[72px] h-[72px]"
            src="./logo.jpg"
            alt="logo"
          />

          <NavLink
            to="/#home"
            onFocus={handleLeaveList}
            className="font-logoFont text-2xl"
          >
            Projekt Rower
          </NavLink>
        </div>
        <div className="flex px-8">
          <div
            className="relative group"
            onMouseEnter={handleMenuHover}
            onMouseLeave={handleMenuLeave}
          >
            <button
              className="text-md transition-all duration-700 text-white py-6 px-12 focus:bg-white focus:outline-none focus:text-black hover:bg-white hover:outline-none hover:text-black active:bg-white active:outline-none active:text-black "
              onClick={handleMenuClick}
              onFocus={handleMenuClick}
              onTouchStart={handleMenuClick}
              style={{
                backgroundColor:
                  location.pathname.includes("/rowery-meskie") ||
                  location.pathname.includes("/rowery-damskie")
                    ? "lime"
                    : "",
              }}
            >
              Modele{" "}
              {showArrow ? (
                <KeyboardDoubleArrowDownIcon
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
                <NavLink
                  to="/rowery-meskie"
                  className="block hover:text-limon hover:bg-black focus:outline-none focus:text-limon focus:bg-black"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  Mężczyźni
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/rowery-damskie"
                  className="block hover:text-limon hover:bg-black focus:outline-none focus:text-limon focus:bg-black"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  Kobiety
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink
            onFocus={handleLeaveList}
            to="/personalizacja"
            className="text-md transition-all duration-700 text-white py-6 px-12 focus:bg-white focus:outline-none focus:text-black hover:bg-white hover:outline-none hover:text-black active:bg-white active:outline-none active:text-black"
            style={{
              backgroundColor: location.pathname.includes("/personalizacja")
                ? "lime"
                : "",
            }}
          >
            Personalizacja
          </NavLink>
          <NavLink
            to="/kontakt"
            className="text-md transition-all duration-700 text-white py-6 px-12 focus:bg-white focus:outline-none focus:text-black hover:bg-white hover:outline-none hover:text-black active:outline-none active:text-black"
            style={{
              backgroundColor: location.pathname.includes("/kontakt")
                ? "lime"
                : "",
            }}
          >
            Kontakt
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
