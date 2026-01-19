import { Home, Building2, Phone } from 'lucide-react';

interface MobileNavProps {
  currentSection?: string;
}

export function MobileNav({ currentSection = 'home' }: MobileNavProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const offset = 80;
    const top =
      element.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'apartment1', icon: Building2, label: 'Apt 1' },
    { id: 'apartment2', icon: Building2, label: 'Apt 2' },
    { id: 'contact', icon: Phone, label: 'Contact' },
  ];

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 bg-[#1d3557] border-t border-[#2e4a6b] z-50 safe-area-bottom"
      aria-label="Mobile navigation"
    >
      <div className="flex items-center justify-around px-2 py-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-colors ${
                isActive 
                  ? 'text-[#f28c38]' 
                  : 'text-[#f5f3ef] hover:text-white'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
