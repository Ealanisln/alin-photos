import { useState, useEffect } from 'react';
import { NavBarProps } from '../types';

const NavBar = ({ title = "Alin XV" }: NavBarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking on a link (for mobile)
  const handleLinkClick = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gradient-to-r from-pink-400/90 to-purple-600/90 backdrop-blur-md shadow-lg py-3 md:py-4' 
          : 'bg-gradient-to-r from-pink-400/70 to-purple-600/70 backdrop-blur-sm py-5 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-display font-bold text-white drop-shadow-sm">
          <span className="relative">
            {title}
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-pink-200 to-transparent transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
          </span>
        </h1>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden focus:outline-none group"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
        >
          <div className="w-8 flex flex-col items-end gap-1.5 p-1">
            <span className={`block h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'w-8 -rotate-45 translate-y-2' : 'w-8 group-hover:w-6'}`}></span>
            <span className={`block h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-6 group-hover:w-8'}`}></span>
            <span className={`block h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'w-8 rotate-45 -translate-y-2' : 'w-7 group-hover:w-8'}`}></span>
          </div>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-10">
            <li>
              <a 
                href="#gallery" 
                className="text-lg font-medium text-white hover:text-pink-100 transition-colors border-b-2 border-transparent hover:border-pink-200 pb-1 px-2"
              >
                Galería
              </a>
            </li>
            
            <li>
              <a 
                href="#message" 
                className="text-lg font-medium text-white hover:text-pink-100 transition-colors border-b-2 border-transparent hover:border-pink-200 pb-1 px-2"
              >
                Mensaje
              </a>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Mobile Navigation - Now positioned below the navbar */}
      <div 
        className={`md:hidden fixed left-0 right-0 top-[calc(var(--navbar-height,60px))] bg-gradient-to-b from-pink-400/95 to-purple-600/95 shadow-lg transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-80 py-5 opacity-100 z-40' : 'max-h-0 py-0 opacity-0 -z-10'
        }`}
        style={{
          '--navbar-height': isScrolled ? '60px' : '72px',
        } as React.CSSProperties}
      >
        <nav className="container mx-auto px-6">
          <ul className="flex flex-col space-y-5">
            <li>
              <a 
                href="#gallery" 
                className="block py-3.5 text-xl font-medium text-white hover:text-pink-100 transition-colors border-l-2 border-transparent hover:border-pink-200 pl-3"
                onClick={handleLinkClick}
              >
                Galería
              </a>
            </li>
            
            <li>
              <a 
                href="#message" 
                className="block py-3.5 text-xl font-medium text-white hover:text-pink-100 transition-colors border-l-2 border-transparent hover:border-pink-200 pl-3"
                onClick={handleLinkClick}
              >
                Mensaje
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar; 