import imgLogo from "../assets/images-optimized/logo 192.webp";
import imgInstagram from "../assets/images-optimized/instagram-icon.webp";
import imgLetter from "../assets/images-optimized/email-icon.webp";

interface HeaderProps {
  currentSection?: string;
  variant?: 'light' | 'dark';
}

export function Header({ currentSection = 'home', variant = 'light' }: HeaderProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const offset = 80;
    const top =
      element.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#1d3557]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Normal size fitting inside header */}
          <button
            onClick={() => scrollToSection('home')}
            className="cursor-pointer flex-shrink-0 transition-transform hover:scale-105 active:scale-95"
            aria-label="Go to home"
          >
            <img
              src={imgLogo}
              alt="Apartments Sweet Dreams Logo"
              className="h-10 w-10 rounded-2xl object-cover"
            />
          </button>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-6 md:gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`cursor-pointer text-base font-medium transition-colors text-white hover:text-[#f28c38] ${
                currentSection === 'home' ? 'text-[#f28c38]' : ''
              }`}
              aria-current={currentSection === 'home' ? 'page' : undefined}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('apartment1')}
              className={`cursor-pointer text-base font-medium transition-colors text-white hover:text-[#f28c38] ${
                currentSection === 'apartment1' ? 'text-[#f28c38]' : ''
              }`}
              aria-current={currentSection === 'apartment1' ? 'page' : undefined}
            >
              Apartment 1
            </button>
            <button
              onClick={() => scrollToSection('apartment2')}
              className={`cursor-pointer text-base font-medium transition-colors text-white hover:text-[#f28c38] ${
                currentSection === 'apartment2' ? 'text-[#f28c38]' : ''
              }`}
              aria-current={currentSection === 'apartment2' ? 'page' : undefined}
            >
              Apartment 2
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`cursor-pointer text-base font-medium transition-colors text-white hover:text-[#f28c38] ${
                currentSection === 'contact' ? 'text-[#f28c38]' : ''
              }`}
              aria-current={currentSection === 'contact' ? 'page' : undefined}
            >
              Contact
            </button>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/sweet_dreams_osijek/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#70bcce] hover:bg-[#5aa5b8] transition-colors rounded-2xl p-2 focus:outline-none focus:ring-2 focus:ring-[#f28c38] focus:ring-offset-2 transition-transform hover:scale-110 active:scale-95"
              aria-label="Visit our Instagram page"
            >
              <img src={imgInstagram} alt="" className="w-6 h-6 object-contain" />
            </a>
            <a
              href="mailto:apartmani.sdos@gmail.com"
              className="bg-[#70bcce] hover:bg-[#5aa5b8] transition-colors rounded-2xl p-2 focus:outline-none focus:ring-2 focus:ring-[#f28c38] focus:ring-offset-2 transition-transform hover:scale-110 active:scale-95"
              aria-label="Send us an email"
            >
              <img src={imgLetter} alt="" className="w-5 h-6 object-contain" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}