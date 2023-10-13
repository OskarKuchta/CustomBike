export type Images = {
    original: string;
    thumbnail?: string;
};

export type ImageGalleryProps = {
    items: Images[];
    showThumbnails: boolean;
    showFullscreenButton: boolean;
    showPlayButton: boolean;
    showBullets: boolean;
    showIndex: boolean;
    showNav: boolean;
    autoPlay: boolean;
    additionalClass: string;
};