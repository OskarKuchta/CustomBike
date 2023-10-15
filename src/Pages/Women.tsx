import { FC } from "react";
import ImageGallery from "react-image-gallery";
import { Images } from "../Types/Gallery";

const images: Images[] = [
  {
    original: "/6.jpg",
    thumbnail: "/6.jpg",
  },
  {
    original: "/7.jpg",
    thumbnail: "/7.jpg",
  },
  {
    original: "/8.jpg",
    thumbnail: "/8.jpg",
  },
];

const Women: FC = () => {
  return (
    <section className="men-women-section bg-pink-100 min-h-[130vh]">
      <h2 className="pt-32 pb-16 px-8 md:px-32 md:w-4/5 lg:w-2/3 mx-auto text-center text-2xl text-red-900">
        Dla pań proponuję paletę kolorów, która jest bardziej jasna i pełna
        życia. Oferuję rowery w odcieniach, które podkreślają energię i
        indywidualność kobiet.
      </h2>
      <ImageGallery items={images} showFullscreenButton={false} />
    </section>
  );
};

export default Women;
