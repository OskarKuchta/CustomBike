import { FC } from "react";
import { Link } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { animateScroll as scroll } from "react-scroll";

const Women: FC = () => {
  const handleClick = () => {
    scroll.scrollToTop();
  };
  return (
    <section className="pink-background flex flex-col items-center lg:items-start">
      <h2 className="pt-72 lg:pt-52 pb-12 text-center w-3/4 lg:w-1/2 text-base sm:text-2xl lg:ml-32 lg:text-4xl text-purple-900">
        Dla pań proponuję paletę kolorów, która jest bardziej jasna i pełna
        życia. Oferuję rowery w odcieniach, które podkreślają energię i
        indywidualność kobiet.
      </h2>
      <img
        src="/public/8.jpg"
        className="mx-auto lg:ml-auto lg:mr-52 xl:mr-72 rounded-lg w-[350px] max-w-[90vw]"
        alt="Dziewczyna na rowerze"
      />
      <h2 className="mt-12 text-center mx-auto text-base sm:text-2xl w-1/2 lg:text-4xl text-purple-900">
        Jeżeli jesteś zainteresowana tym jak możemy dopasować rower do Twojego
        stylu zapraszam do kontaktu.
      </h2>
      <Link
        className=" text-center mx-auto my-6 bg-purple-900 text-black pr-6 pl-10 py-2 rounded-md text-2xl
             hover:text-white focus:text-white  focus:outline-none personalize-link"
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
