import { FC } from "react";

const Personalize: FC = () => {
  return (
    <>
      <div className="black-background"></div>
      <section className="flex flex-col min-h-screen text-limon">
        <h2 className=" mt-32 mb-16  text-xl md:text-2xl text-center mx-[10%]">
          Oferuję szeroką gamę personalizacji, abyś mógł / mogła dostosować moje
          produkty do swojego unikalnego stylu i preferencji.
        </h2>
        <div className="mx-[10%] my-[5%]">
          <h2></h2>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12v-2c0-1.11-.89-2-2-2s-2 .89-2 2v2c0 1.11.89 2 2 2s2-.89 2-2zm4 10c-1.11 0-2-.89-2-2s.89-2 2-2 2 .89 2 2z"
              fill="lime"
            />
          </svg>
        </div>
        <div className="mx-[10%] my-[5%]">
          <h2></h2>
        </div>
        <div className="mx-[10%] my-[5%]">
          <h2></h2>
        </div>
        <div className="mx-[10%] my-[5%]">
          <h2></h2>
        </div>
        <div className="mx-[10%] my-[5%]">
          <h2></h2>
        </div>
      </section>
    </>
  );
};

export default Personalize;
