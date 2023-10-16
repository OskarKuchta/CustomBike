import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import { Images, ImageGalleryProps } from "../Types/Gallery";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Home = ({ onClick }) => {
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
  const [playGallery, setPlayGallery] = useState<boolean>(true);
  const imageGalleryProps: ImageGalleryProps = {
    items: images,
    showThumbnails: false,
    showFullscreenButton: false,
    showPlayButton: false,
    showBullets: false,
    showIndex: false,
    showNav: false,
    autoPlay: playGallery,
    additionalClass: "main-gallery",
  };
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#home") {
        setPlayGallery(true);
      } else {
        setPlayGallery(false);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  return (
    <section
      id="home"
      className="home-container bg-[url('/background.avif')] bg-no-repeat bg-cover filter brightness-90 flex flex-col text-center px-[5%] md:px-[20%] text-white  items-center justify-center"
    >
      <h1 className="mb-10 text-2xl md:text-4xl">
        Witaj w miejscu, gdzie twoje marzenia rowerowe stają się
        rzeczywistością!
      </h1>
      <ImageGallery {...imageGalleryProps} />
      <div
        className="double-scroll-arrows-container cursor-pointer absolute bottom-5 right-[10%]"
        onClick={onClick}
      >
        <div className="scroll-arrow">
          <KeyboardArrowDownIcon className="scroll-arrow-icon stroke-limon" />
        </div>
        <div className="scroll-arrow">
          <KeyboardArrowDownIcon className="scroll-arrow-icon stroke-limon" />
        </div>
      </div>
    </section>
  );
};

export default Home;
