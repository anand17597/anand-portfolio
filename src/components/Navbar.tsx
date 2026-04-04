import React, { useState, useEffect, useRef, useCallback } from 'react';
import {Menu,X} from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavLink {
  label: string;
  id: string;
}

interface NavbarProps {
  navLinks: NavLink[];
  scrollTo: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ navLinks, scrollTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const navRef = useRef<HTMLElement>(null);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);

    const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean) as HTMLElement[];
    const heroSection = document.getElementById('hero');
    const allSections = heroSection ? [heroSection, ...sections] : sections;

    let currentActive = 'hero';
    for (const section of allSections) {
      if (!section) continue;
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        currentActive = section.id;
        break;
      }
    }
    setActiveSection(currentActive);
  }, [navLinks]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = (id: string) => {
    scrollTo(id);
    setIsMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20"> {/* Changed h-16 to h-20 */}
          <div className="flex items-center">
            <button onClick={() => scrollTo("hero")} className="inline-flex items-center py-2 flex-shrink-0 text-2xl font-bold text-indigo-600 focus:outline-none">
              Anandhan <span className="text-gray-900">V</span>
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavLinkClick(link.id)}
                className={cn(
                  "inline-flex items-center py-2 text-lg font-medium hover:text-indigo-600 transition-colors focus:outline-none",
                  activeSection === link.id ? "text-indigo-600 font-semibold" : "text-gray-600"
                )}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-8 w-8" aria-hidden="true" />
              ) : (
                <Menu className="block h-8 w-8" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden bg-white transition-all duration-300 ease-out overflow-hidden",
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavLinkClick(link.id)}
              className={cn(
                "block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors",
                activeSection === link.id ? "text-indigo-600 bg-indigo-50" : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
              )}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;