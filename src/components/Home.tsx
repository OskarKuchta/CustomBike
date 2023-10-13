import { FC } from "react";
import ImageGallery from "react-image-gallery";
import { Images, ImageGalleryProps } from "../Types/Gallery";

const images: Images[] = [
  {
    original: "/1.jpg",
  },
  {
    original: "/2.jpg",
  },
  {
    original: "/3.jpg",
  },
  {
    original: "/4.jpg",
  },
  {
    original: "/5.jpg",
  },
  {
    original: "/6.jpg",
  },
  {
    original: "/7.jpg",
  },
  {
    original: "/8.jpg",
  },
];

const imageGalleryProps: ImageGalleryProps = {
  items: images,
  showThumbnails: false,
  showFullscreenButton: false,
  showPlayButton: false,
  showBullets: false,
  showIndex: false,
  showNav: false,
  autoPlay: true,
  additionalClass: "main-gallery",
};
const Home: FC = () => {
  return (
    <section
      id="home"
      className="home-container bg-no-repeat bg-cover filter brightness-90 flex flex-col text-center px-[5%] md:px-[20%] text-white  items-center justify-center"
    >
      <h1 className="mb-10 text-2xl md:text-4xl">
        Witaj w miejscu, gdzie twoje marzenia rowerowe stają się
        rzeczywistością!
      </h1>
      <ImageGallery {...imageGalleryProps} />
    </section>
  );
};

export default Home;
