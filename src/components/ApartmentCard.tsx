import { StarRating } from './StarRating';
import { InfoBadge } from './InfoBadge';
import { ImageGallery } from './ImageGallery';

interface ApartmentCardProps {
  number: number;
  title: string;
  description: string;
  mainImage: {
    src: string;
    srcSet?: string;
    sizes?: string;
    thumbSrc?: string;
    largeSrc?: string;
    largeMedia?: string;
  };
  galleryImages: {
    src: string;
    srcSet?: string;
    sizes?: string;
    thumbSrc?: string;
    largeSrc?: string;
    largeMedia?: string;
  }[];
  rating: number;
  guests: number;
  size: string;
  bedType1: string;
  bedType2: string;
}

export function ApartmentCard({
  number,
  title,
  description,
  mainImage,
  galleryImages,
  rating,
  guests,
  size,
  bedType1,
  bedType2
}: ApartmentCardProps) {
  // Combine main image with gallery images for the swiper
  const allImages = [mainImage, ...galleryImages];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Details */}
          <div className="space-y-6">
            {/* Title & Rating */}
            <div className="bg-[#f5f3ef] rounded-2xl p-6 space-y-4">
              <div className="space-y-3">
                <h2 className="text-4xl md:text-5xl font-bold text-[#2e2e2e] font-['Playfair_Display',serif]">
                  APARTMENT {number}
                </h2>
                <h3 className="text-2xl font-medium text-[#2e2e2e]">{title}</h3>
              </div>
              <StarRating rating={rating} />
            </div>

            {/* Description */}
            <div className="bg-[#f5f3ef] rounded-2xl p-6">
              <p className="text-[#2e2e2e] text-lg leading-relaxed">{description}</p>
            </div>

            {/* Info Badges */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <InfoBadge label="GUEST" value={guests.toString()} />
              <InfoBadge label="SIZE" value={size} />
              <InfoBadge label="BED" value={bedType1} />
              <InfoBadge label="BED" value={bedType2} />
            </div>
          </div>

          {/* Right Column - Image Gallery */}
          <div>
            <ImageGallery images={allImages} title={title} />
          </div>
        </div>
      </div>
    </section>
  );
}