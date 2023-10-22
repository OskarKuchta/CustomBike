import { FC } from "react";
import {
  ChainIcon,
  SteeringWheelIcon,
  WheelIcon,
  SaddleIcon,
  PedalIcon,
  DerailleurIcon,
} from "../assets/SVG";

const Personalize: FC = () => {
  return (
    <>
      <div className="black-background"></div>
      <section className="flex flex-col min-h-screen text-limon">
        <h2 className=" mt-32 mb-16  text-xl md:text-2xl text-center mx-[10%]">
          Oferuję szeroką gamę personalizacji, abyś mógł / mogła dostosować moje
          produkty do swojego unikalnego stylu i preferencji.
        </h2>
        <aside className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
          <div className="mx-auto mb-6 flex justify-center items-center bg-opacity-90 bg-gray-800 p-8 border border-opacity-30 rounded-xl w-4/5 md:w-personalize-div">
            <SteeringWheelIcon />
            <h2 className="ml-6 text-2xl sm:text-3xl">Kierownica</h2>
          </div>
          <div className="mx-auto mb-6 flex justify-center items-center bg-opacity-90 bg-gray-800 p-8 border border-opacity-30 rounded-xl w-4/5 md:w-personalize-div">
            <ChainIcon />
            <h2 className="ml-6 text-2xl sm:text-3xl">Łańcuchy</h2>
          </div>
          <div className="mx-auto mb-6 flex justify-center items-center bg-opacity-90 bg-gray-800 p-8 border border-opacity-30 rounded-xl w-4/5 md:w-personalize-div">
            <WheelIcon />

            <h2 className="ml-6 text-2xl sm:text-3xl">Koła</h2>
          </div>
          <div className="mx-auto mb-6 flex justify-center items-center bg-opacity-90 bg-gray-800 p-8 border border-opacity-30 rounded-xl w-4/5 md:w-personalize-div">
            <SaddleIcon />
            <h2 className="ml-6 text-2xl sm:text-3xl">Siodełka</h2>
          </div>
          <div className="mx-auto mb-6 flex justify-center items-center bg-opacity-90 bg-gray-800 p-8 border border-opacity-30 rounded-xl w-4/5 md:w-personalize-div">
            <PedalIcon />
            <h2 className="ml-6 text-2xl sm:text-3xl">Pedały</h2>
          </div>
          <div className="mx-auto mb-6 flex justify-center items-center bg-opacity-90 bg-gray-800 p-8 border border-opacity-30 rounded-xl w-4/5 md:w-personalize-div">
            <DerailleurIcon />
            <h2 className="ml-6 text-2xl sm:text-3xl">Przerzutki</h2>
          </div>
        </aside>
      </section>
    </>
  );
};

export default Personalize;
