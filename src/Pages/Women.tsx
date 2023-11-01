import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Women: FC = () => {
  const handleClick = () => {
    scroll.scrollToTop();
  };

  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  useEffect(() => {
    if (inView) {
      console.log("true");
    } else {
      console.log("false");
    }
  }, [inView]);
  return (
    <section className="pink-background flex flex-col items-center lg:items-start bg-[#E9EAEB]">
      <h2 className="pt-80 lg:pt-60 pb-12 text-center w-3/4 lg:w-1/2 text-2xl sm:text-3xl lg:ml-32 lg:text-4xl text-purple-900">
        Dla pań proponuję paletę kolorów, która jest bardziej jasna i pełna
        życia. Oferuję rowery w odcieniach, które podkreślają energię i
        indywidualność kobiet.
      </h2>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: inView ? 1 : 0,
          scale: inView ? 1 : 0,
        }}
        transition={{
          duration: 2,
        }}
        ref={inViewRef}
        className="mx-auto lg:ml-auto lg:mr-52 xl:mr-72 w-[350px] max-w-[90vw]"
      >
        <img
          src="/public/8.jpg"
          className="rounded-lg"
          alt="Dziewczyna na rowerze"
        />
      </motion.div>
      <h2 className="mt-12 text-center mx-auto text-base sm:text-2xl w-1/2 lg:text-4xl text-purple-900">
        Jeżeli jesteś zainteresowana tym jak możemy dopasować rower do Twojego
        stylu zapraszam do kontaktu.
      </h2>
      <Link
        className=" text-center mx-auto my-6 bg-purple-900 text-white	pr-6 pl-10 py-2 rounded-md text-2xl
             hover:text-[#BEF50A] focus:text-[#BEF50A]  focus:outline-none personalize-link"
        to="/kontakt"
        onClick={handleClick}
      >
        Kontakt
        <KeyboardDoubleArrowRightIcon className="arrow-icon ml-2 mb-1" />
      </Link>
    </section>
  );
};

export default Women;
