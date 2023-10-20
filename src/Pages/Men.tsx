import { FC } from "react";
import ImageGallery from "react-image-gallery";
import { Images } from "../Types/Gallery";

const images: Images[] = [
  {
    original: "/1.jpg",
    thumbnail: "/1.jpg",
  },
  {
    original: "/2.jpg",
    thumbnail: "/2.jpg",
  },
  {
    original: "/3.jpg",
    thumbnail: "/3.jpg",
  },
];

const Men: FC = () => {
  return (
    <>
      <div className="black-background"></div>
      <section className="min-h-[120vh] text-limon flex flex-col items-center">
        <h2 className="pt-32 pb-16 px-8 md:px-32 md:w-4/5 lg:w-2/3 mx-auto text-center text-base md:text-2xl">
          Dla mężczyzn proponuję rowery w eleganckich, ciemnych odcieniach.
          Rowery, które emanują siłą i charakterem, idealne dla nowoczesnych
          mężczyzn, którzy cenią sobie styl i wyraźną prezencję.
        </h2>
        <ImageGallery items={images} showFullscreenButton={false} />
      </section>
    </>
  );
};

export default Men;
