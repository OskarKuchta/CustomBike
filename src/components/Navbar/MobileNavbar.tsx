import { FC, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
const navLinks: NavLink[] = [
  { title: "Główna", href: "/#home" },
  { title: "Mężczyźni", href: "/meskie" },
  { title: "Kobiety", href: "/kobiety" },
  { title: "Personalizacja", href: "/personalizacja" },
  { title: "Kontakt", href: "/kontakt" },
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
const NavLink: FC<NavLink> = ({ title, href, onClick }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-4xl uppercase text-white text-center py-4"
    >
      <Link
        to={href}
        className="hover:text-limon focus:text-limon active:text-limon"
        onClick={onClick}
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
    <header className="w-full fixed top-0 z-10">
      <nav className="flex justify-between items-center py-2 px-6 bg-black text-white">
        <div className="flex items-center gap-[1ch]">
          <img className="navbar-logo w-12 h-12" src="./logo.avif" alt="logo" />
          <p className="text-sm font-semibold tracking-widest font-logoFont">
            CUSTOM BIKE
          </p>
        </div>
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
                    className="navbar-logo w-8 h-8"
                    src="./logo.avif"
                    alt="logo"
                  />
                  <p className="text-xl font-semibold tracking-widest text-white px-2 font-logoFont">
                    Custom Bike
                  </p>
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
                    <div className="overflow-hidden" key={index}>
                      {" "}
                      <NavLink
                        key={index}
                        title={link.title}
                        href={link.href}
                        onClick={toggleMenu}
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
