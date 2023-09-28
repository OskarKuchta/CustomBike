import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const navLinks: NavLink[] = [
  { title: "Główna", href: "#home" },
  { title: "O nas", href: "#about" },
  { title: "Kontakt", href: "/contact" },
];
const mobileLinkVars: MobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};
const NavLink: FC<NavLink> = ({ title, href }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-5xl uppercase text-white text-center py-6"
    >
      <Link
        className="hover:text-purple-500 focus:text-purple-500 active:text-purple-500"
        to={href}
      >
        {title}
      </Link>
    </motion.div>
  );
};
const MobileNavbar: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const menuVars: MenuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars: ContainerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <header>
      <nav className="flex justify-between items-center py-8 lg:py-4 px-6 bg-black text-white">
        <div className="flex items-center gap-[1ch]">
          <img
            className="navbar-logo w-12 h-12"
            src="/logo.jpg"
            alt="logo"
          />
          <span className="text-sm font-semibold tracking-widest font-logoFont">
            CUSTOM BIKE
          </span>
        </div>
        <div className="lg:flex hidden gap-12 text-md text-zinc-400"></div>
        <div className="lg:hidden text-md text-white" onClick={toggleMenu}>
          Menu
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-black text-white p-10"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    className="navbar-logo w-12 h-12"
                    src="/logo.jpg"
                    alt="logo"
                  />
                  <h1 className="text-lg text-white px-2 font-logoFont">Custom Bike</h1>
                </div>
                <p
                  className="cursor-pointer text-md text-white"
                  onClick={toggleMenu}
                >
                  Powrót
                </p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-4"
              >
                {navLinks.map((link, index) => {
                  return (
                    <div className="overflow-hidden">
                      <NavLink
                        key={index}
                        title={link.title}
                        href={link.href}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default MobileNavbar;
