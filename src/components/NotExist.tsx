import { FC } from "react";
import { Link } from "react-router-dom";
const NotExist: FC = () => {
  return (
    <>
      <section className="flex flex-col h-screen justify-center items-center text-white text-4xl text-center">
        <h2>Podany link nie istnieje, wróć na stronę główną.</h2>
        <Link
          to="/"
          className="mt-6 border py-2 px-12 rounded-lg outline-none transition-all duration-700 focus:bg-white focus:outline-none focus:text-black hover:bg-white hover:outline-none hover:text-black active:bg-white active:outline-none active:text-black"
        >
          Powrót
        </Link>
      </section>
    </>
  );
};

export default NotExist;
