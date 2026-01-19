import { useState } from 'react';

interface GalleryImage {
  src: string;
  srcSet?: string;
  sizes?: string;
  thumbSrc?: string;
  largeSrc?: string;
  largeMedia?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  title: string;
}

// Helper function to get thumbnail version of image path
function getThumbnailPath(imagePath: string, thumbOverride?: string): string {
  if (thumbOverride) return thumbOverride;
  if (imagePath.includes('gallery')) {
    return imagePath.replace('.webp', '-thumb.webp');
  }
  return imagePath;
}

export function ImageGallery({ images, title }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div className="rounded-2xl overflow-hidden aspect-[3/2] bg-[#f5f3ef] relative">
        {images[selectedIndex].largeSrc ? (
          <picture>
            <source
              media={images[selectedIndex].largeMedia ?? '(min-width: 1024px)'}
              srcSet={images[selectedIndex].largeSrc}
            />
            <img
              key={selectedIndex}
              src={images[selectedIndex].src}
              alt={`${title} - Main view`}
              loading={selectedIndex === 0 ? 'eager' : 'lazy'}
              decoding="async"
              className="w-full h-full object-cover transition-opacity duration-300"
            />
          </picture>
        ) : (
          <img
            key={selectedIndex}
            src={images[selectedIndex].src}
            srcSet={images[selectedIndex].srcSet}
            sizes={images[selectedIndex].sizes}
            alt={`${title} - Main view`}
            loading={selectedIndex === 0 ? 'eager' : 'lazy'}
            decoding="async"
            className="w-full h-full object-cover transition-opacity duration-300"
          />
        )}
        
        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
          {selectedIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Gallery - Flexible grid that adapts to number of images */}
      <div className={`grid gap-3 ${
        images.length <= 3 ? 'grid-cols-3' :
        images.length === 4 ? 'grid-cols-4' :
        images.length === 5 ? 'grid-cols-5' :
        'grid-cols-6'
      }`}>
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`rounded-xl overflow-hidden aspect-square transition-all hover:scale-105 active:scale-95 ${
              selectedIndex === index
                ? 'ring-4 ring-[#f28c38] scale-105'
                : 'ring-2 ring-transparent hover:ring-[#70bcce]'
            }`}
          >
            <img
              src={getThumbnailPath(image.src, image.thumbSrc)}
              alt={`${title} - Thumbnail ${index + 1}`}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}