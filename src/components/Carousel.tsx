import { useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Image, Data } from "../Types/Carousel";
const Carousel = ({ data }: Data) => {
  const [slide, setSlide] = useState<number>(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide}>
        <KeyboardArrowLeftIcon
          className="arrow arrow-left"
          aria-label="Poprzedni slajd"
        />
      </button>

      {data.map((item: Image, idx: number) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <button onClick={nextSlide}>
        <KeyboardArrowRightIcon
          className="arrow arrow-right "
          aria-label="Następny slajd"
        />
      </button>

      <span className="indicators">
        {data.map((_: null, idx: number) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
              aria-label={`Przejdź do slajdu ${idx + 1}`}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel;
