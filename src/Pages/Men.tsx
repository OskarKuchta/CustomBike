import { FC } from "react";
import ContactSubpage from "../components/ContactSubpage";
const Men: FC = () => {
  return (
    <>
      <div className="bg-[url('/men-background.jpg')] bg-no-repeat bg-cover fixed top-0 left-0 w-full min-h-screen z-[-1] brightness-75"></div>
      <section className="flex flex-col items-center text-white">
        <h2 className="pt-32 pb-16 px-8 md:px-32 md:w-4/5 lg:w-2/3 mx-auto text-center text-base md:text-2xl">
          Dla mężczyzn proponuję rowery w eleganckich, ciemnych odcieniach.
          Rowery, które emanują siłą i charakterem, idealne dla nowoczesnych
          mężczyzn, którzy cenią sobie styl i wyraźną prezencję.
        </h2>
        <ContactSubpage
          genderType="zainteresowany"
          textColor="text-white"
          textButton="text-black"
          bgButton="bg-gray-300"
        />
      </section>
    </>
  );
};

export default Men;
