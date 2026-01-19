import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const options: AddEventListenerOptions = { passive: true };

    window.addEventListener('scroll', toggleVisibility, options);

    return () => window.removeEventListener('scroll', toggleVisibility, options);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-44 md:bottom-8 right-4 md:right-8 z-50 bg-[#db6e1a] hover:bg-[#c55f15] text-white p-4 rounded-full shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#db6e1a] focus:ring-offset-2 transition-transform hover:scale-110 active:scale-95"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}