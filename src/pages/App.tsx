import { lazy, Suspense, useEffect, useRef, useState, type ReactNode } from "react";
import { Header } from "../components/Header";
import { MobileNav } from "../components/MobileNav";
import { ScrollToTop } from "../components/ScrollToTop";
import { useActiveSection } from "../hooks/useActiveSection";
import imgRectangle8 from "../assets/images-optimized/apartments-sweet-dreams-osijek-hero.webp";
import imgRectangle20 from "../assets/images-optimized/apartment-1-spacious-comfort-main.webp";
import imgRectangle20Small from "../assets/images-optimized/apartment-1-spacious-comfort-main-small.webp";
import imgRectangle38 from "../assets/images-optimized/apartment-1-gallery-1.webp";
import imgRectangle38Thumb from "../assets/images-optimized/apartment-1-gallery-1-thumb.webp";
import imgRectangle39 from "../assets/images-optimized/apartment-1-gallery-2.webp";
import imgRectangle39Thumb from "../assets/images-optimized/apartment-1-gallery-2-thumb.webp";
import imgRectangle40 from "../assets/images-optimized/apartment-1-gallery-3.webp";
import imgRectangle40Thumb from "../assets/images-optimized/apartment-1-gallery-3-thumb.webp";
import imgRectangle45 from "../assets/images-optimized/apartment-1-gallery-4.webp";
import imgRectangle45Thumb from "../assets/images-optimized/apartment-1-gallery-4-thumb.webp";
import imgRectangle46 from "../assets/images-optimized/apartment-1-gallery-5.webp";
import imgRectangle46Thumb from "../assets/images-optimized/apartment-1-gallery-5-thumb.webp";
import imgRectangle21 from "../assets/images-optimized/apartment-2-cozy-retreat-main.webp";
import imgRectangle21Small from "../assets/images-optimized/apartment-2-cozy-retreat-main-small.webp";
import imgRectangle41 from "../assets/images-optimized/apartment-2-gallery-1.webp";
import imgRectangle41Thumb from "../assets/images-optimized/apartment-2-gallery-1-thumb.webp";
import imgRectangle42 from "../assets/images-optimized/apartment-2-gallery-2.webp";
import imgRectangle42Thumb from "../assets/images-optimized/apartment-2-gallery-2-thumb.webp";
import imgRectangle43 from "../assets/images-optimized/apartment-2-gallery-3.webp";
import imgRectangle43Thumb from "../assets/images-optimized/apartment-2-gallery-3-thumb.webp";
import imgRectangle47 from "../assets/images-optimized/apartment-2-gallery-4.webp";
import imgRectangle47Thumb from "../assets/images-optimized/apartment-2-gallery-4-thumb.webp";
import imgRectangle48 from "../assets/images-optimized/apartment-2-gallery-5.webp";
import imgRectangle48Thumb from "../assets/images-optimized/apartment-2-gallery-5-thumb.webp";
import imgRectangle44 from "../assets/images-optimized/contact-background-sweet.webp";
import imgInstagram from "../assets/images-optimized/instagram-icon.webp";
import imgLetter from "../assets/images-optimized/email-icon.webp";

const ApartmentCard = lazy(async () => {
  const module = await import("../components/ApartmentCard");
  return { default: module.ApartmentCard };
});

const ContactForm = lazy(async () => {
  const module = await import("../components/ContactForm");
  return { default: module.ContactForm };
});

interface LazyRenderProps {
  id: string;
  minHeightClass?: string;
  rootMargin?: string;
  children: ReactNode;
}

function LazyRender({ id, minHeightClass, rootMargin = "300px 0px", children }: LazyRenderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const anchorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = anchorRef.current;
    if (!element) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div id={id} ref={anchorRef} className={minHeightClass}>
      {isVisible ? children : null}
    </div>
  );
}

export default function App() {
  const activeSection = useActiveSection();

  return (
    <div className="min-h-screen bg-white pb-20 md:pb-0">
      {/* Header */}
      <Header currentSection={activeSection} variant="dark" />

      {/* Mobile Navigation */}
      <MobileNav currentSection={activeSection} />

      {/* Scroll to Top Button */}
      <ScrollToTop />

      <main id="main" className="flex-1">
      {/* Hero Section */}
      <section id="home" className="relative -mt-16">
        <div className="relative h-[calc(85vh+4rem)] md:h-[700px] lg:h-[800px]">
          <img
            src={imgRectangle8}
            alt="Beautiful view of Apartments Sweet Dreams in Osijek"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />

          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 md:pb-24 lg:pb-32 md:items-start">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-start gap-6">
              {/* Title - Outside frame on mobile, inside on desktop */}
              <h1
                className="md:hidden text-5xl font-bold text-white text-left font-['Playfair_Display',serif] drop-shadow-2xl px-4 leading-snug tracking-tight hero-title-shadow"
              >
                Welcome to
                <br />
                Apartments
                <br />
                Sweet Dreams
              </h1>

              <div className="bg-[#f5f3ef]/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-3xl space-y-4 w-full md:w-auto">
                {/* Title - Inside frame on desktop only */}
                <h1 className="hidden md:block text-3xl md:text-4xl lg:text-5xl font-bold text-[#2e2e2e] font-['Playfair_Display',serif] leading-tight tracking-tight">
                  Welcome to Apartments Sweet Dreams
                </h1>
                <p className="text-base md:text-lg text-[#2e2e2e] leading-relaxed font-light italic">
                  Apartments SWEET DREAMS in Osijek offer free
                  WiFi, a garden, and private parking. Guests
                  can enjoy darts on-site or explore the area by
                  bike. Each apartment provides a private,
                  comfortable space—ideal for both a cozy
                  getaway and a spacious retreat.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      const element =
                        document.getElementById("contact");
                      element?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className="cursor-pointer bg-[#db6e1a] hover:bg-[#c55f15] text-white text-base font-medium px-8 py-3 rounded-2xl transition-colors focus:outline-none focus:ring-2 focus:ring-[#db6e1a] focus:ring-offset-2 transition-transform hover:scale-105 active:scale-95"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={null}>
        <LazyRender id="apartment1" minHeightClass="min-h-[600px]">
          {/* Apartment 1 */}
          <ApartmentCard
          number={1}
          title="Spacious Comfort"
          description="Step into this charming apartment through your private entrance and enjoy the comfort of air conditioning throughout. The unit features a cozy living room, a separate bedroom, and a modern bathroom equipped with both a shower and a bidet. The well-appointed kitchen includes a stovetop, refrigerator, kitchenware, and an oven, making it perfect for preparing meals. The spacious apartment boasts a flat-screen TV with cable channels, a washing machine, and a tea and coffee maker. Relax in the comfortable seating area and take in the serene view of the inner courtyard. With two beds available, this apartment is ideal for a restful stay."
          mainImage={{
            src: imgRectangle20Small,
            largeSrc: imgRectangle20,
            largeMedia: '(min-width: 1024px)'
          }}
          galleryImages={[
            { src: imgRectangle38, thumbSrc: imgRectangle38Thumb },
            { src: imgRectangle39, thumbSrc: imgRectangle39Thumb },
            { src: imgRectangle40, thumbSrc: imgRectangle40Thumb },
            { src: imgRectangle45, thumbSrc: imgRectangle45Thumb },
            { src: imgRectangle46, thumbSrc: imgRectangle46Thumb },
          ]}
          rating={4}
          guests={4}
          size="65 m²"
          bedType1="1 double"
          bedType2="1 sofa"
          />
        </LazyRender>

      {/* Divider */}
      <div className="h-px bg-[#f5f3ef]" />

        <LazyRender id="apartment2" minHeightClass="min-h-[600px]">
          {/* Apartment 2 */}
          <ApartmentCard
          number={2}
          title="Cozy Retreat"
          description="Step into this inviting apartment through your private entrance and enjoy the comfort of air conditioning throughout. The unit features a cozy living room, a separate bedroom, and a modern bathroom equipped with a bath and a hairdryer. The fully equipped kitchen includes a stovetop, refrigerator, kitchenware, and an oven, perfect for preparing meals. Families will appreciate the dedicated play corner where children can enjoy a kids' kitchen set and a variety of toys. The apartment boasts a patio, a tea and coffee maker, a comfortable seating area, and a flat-screen TV with cable channels. With two beds available, this apartment is ideal for a restful stay."
          mainImage={{
            src: imgRectangle21Small,
            largeSrc: imgRectangle21,
            largeMedia: '(min-width: 1024px)'
          }}
          galleryImages={[
            { src: imgRectangle41, thumbSrc: imgRectangle41Thumb },
            { src: imgRectangle42, thumbSrc: imgRectangle42Thumb },
            { src: imgRectangle43, thumbSrc: imgRectangle43Thumb },
            { src: imgRectangle47, thumbSrc: imgRectangle47Thumb },
            { src: imgRectangle48, thumbSrc: imgRectangle48Thumb },
          ]}
          rating={3}
          guests={4}
          size="38 m²"
          bedType1="1 king"
          bedType2="1 sofa"
          />
        </LazyRender>

      {/* Contact Section */}
      <LazyRender id="contact" minHeightClass="min-h-[500px]">
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0">
            <img
              src={imgRectangle44}
              alt="Contact background"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
          </div>

          <div className="relative max-w-7xl mx-auto">
            <ContactForm />

            {/* Awards Section */}
            <div className="mt-12 max-w-2xl mx-auto">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center">
                <p className="text-base md:text-lg text-[#2e2e2e] italic leading-relaxed">
                  We are proud recipients of the Traveller Review
                  Awards 2020–2025, a reflection of our dedication
                  to exceptional hospitality. We look forward to
                  welcoming you and ensuring a memorable stay in
                  Osijek.
                </p>
              </div>
            </div>
          </div>
        </section>
      </LazyRender>
      </Suspense>

      </main>

      {/* Footer */}
      <footer className="bg-[#1d3557] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.instagram.com/sweet_dreams_osijek/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer bg-[#70bcce] hover:bg-[#5aa5b8] transition-colors rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-[#f28c38] focus:ring-offset-2 focus:ring-offset-[#1d3557] transition-transform hover:scale-110 active:scale-95"
              aria-label="Visit our Instagram page"
            >
              <img
                src={imgInstagram}
                alt=""
                className="w-6 h-6 object-contain"
              />
            </a>
            <p className="text-[#f5f3ef] text-base">
              &copy; {new Date().getFullYear()} Apartments Sweet Dreams
            </p>
            <a
              href="mailto:apartmani.sdos@gmail.com"
              className="cursor-pointer bg-[#70bcce] hover:bg-[#5aa5b8] transition-colors rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-[#f28c38] focus:ring-offset-2 focus:ring-offset-[#1d3557] transition-transform hover:scale-110 active:scale-95"
              aria-label="Send us an email"
            >
              <img
                src={imgLetter}
                alt=""
                className="w-5 h-6 object-contain"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}