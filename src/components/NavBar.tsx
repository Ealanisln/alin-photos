import { useState, useEffect } from 'react';
import { NavBarProps } from '../types';

const NavBar = ({ title }: NavBarProps) => {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-purple-800/95 backdrop-blur-md shadow-lg py-3 md:py-4' 
          : 'bg-purple-700/80 backdrop-blur-sm py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className={`text-2xl md:text-3xl font-display font-bold ${isScrolled ? 'text-white' : 'text-white'}`}>
          {title}
        </h1>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
        >
          <div className="w-7 flex flex-col items-end gap-1.5">
            <span className={`block h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'w-7 -rotate-45 translate-y-2' : 'w-7'}`}></span>
            <span className={`block h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-5'}`}></span>
            <span className={`block h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'w-7 rotate-45 -translate-y-2' : 'w-6'}`}></span>
          </div>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-10">
            <li>
              <a 
                href="#gallery" 
                className="text-lg font-medium text-white hover:text-pink-300 transition-colors border-b-2 border-transparent hover:border-pink-300 pb-1"
              >
                Galería
              </a>
            </li>
            <li>
              <a 
                href="#message" 
                className="text-lg font-medium text-white hover:text-pink-300 transition-colors border-b-2 border-transparent hover:border-pink-300 pb-1"
              >
                Mensaje
              </a>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute w-full bg-purple-800 shadow-lg transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-64 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
        }`}
      >
        <nav className="container mx-auto px-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <a 
                href="#gallery" 
                className="block py-3 text-lg font-medium text-white hover:text-pink-300 transition-colors"
                onClick={handleLinkClick}
              >
                Galería
              </a>
            </li>
            <li>
              <a 
                href="#message" 
                className="block py-3 text-lg font-medium text-white hover:text-pink-300 transition-colors"
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