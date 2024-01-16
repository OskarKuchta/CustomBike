import { FC } from "react";
import ContactSubpage from "../components/ContactSubpage";
import { motion } from "framer-motion";

const Men: FC = () => {
  return (
    <>
      <div className="bg-[url('/men-background.webp')] bg-no-repeat bg-cover fixed top-0 left-0 w-full min-h-screen z-[-1] brightness-[0.3]"></div>
      <main className="flex flex-col items-center text-white">
        <h2 className="pt-32 pb-16 px-8 md:px-32 md:w-4/5 lg:w-2/3 mx-auto text-center text-base md:text-2xl">
          Dla mężczyzn proponuję rowery w eleganckich, ciemnych odcieniach.
          Rowery, które emanują siłą i charakterem, idealne dla nowoczesnych
          mężczyzn, którzy cenią sobie styl i wyraźną prezencję.
        </h2>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 2,
          }}
          className="w-[550px] max-w-[90vw]"
        >
          <img
            src="/men-bicycle.jpg"
            className="rounded-lg w-full"
            alt="Dziewczyna na rowerze"
          />
        </motion.div>
        <ContactSubpage
          genderType="zainteresowany"
          textColor="text-white"
          textButton="text-black"
          bgButton="bg-gray-300"
        />
      </main>
    </>
  );
};

export default Men;
