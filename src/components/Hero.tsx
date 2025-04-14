import { useEffect, useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { HeroProps } from '../types';
import { AdvancedImage } from '@cloudinary/react';
import cld from '../config/cloudinary';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { brightness } from '@cloudinary/url-gen/actions/adjust';
import { blur } from '@cloudinary/url-gen/actions/effect';

const Hero = ({ name, subtitle, backgroundImage, blurEffect = false }: HeroProps) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Check if the backgroundImage is a local path or URL
  const isLocalImage = backgroundImage?.startsWith('/') || backgroundImage?.startsWith('http');

  // Prepare Cloudinary image only if it's not a local image
  const cloudinaryImage = !isLocalImage && backgroundImage
    ? cld.image(backgroundImage)
        .resize(fill().width(1920).height(1080))
        .adjust(brightness().level(10))
        .effect(blurEffect ? blur().strength(20) : blur().strength(0))
    : null;

  const phrases = [
    'Momentos especiales',
    'Recuerdos inolvidables',
    'Celebrando tu vida'
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with enhanced overlay */}
      <div className="absolute inset-0 z-0">
        {isLocalImage ? (
          <div 
            className={`w-full h-full bg-cover bg-center`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
            aria-label="Background image"
          ></div>
        ) : cloudinaryImage ? (
          <AdvancedImage 
            cldImg={cloudinaryImage} 
            className="w-full h-full object-cover"
            alt="Background"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600"></div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
      </div>

      {/* Hero content with improved visibility */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="transform transition-all duration-700 ease-out translate-y-0 opacity-100">
          <h1 className="text-6xl md:text-8xl font-display mb-6 text-white drop-shadow-lg">
            {name}
          </h1>
          {mounted && (
            <div className="text-2xl md:text-3xl font-light mb-8 min-h-16 text-accent drop-shadow-md">
              <ReactTypingEffect
                text={phrases}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={2000}
                cursor="_"
              />
            </div>
          )}
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 text-white/90 font-light drop-shadow-md leading-relaxed">
            {subtitle || 'Una colección de momentos especiales para celebrar este día tan importante'}
          </p>
          <a
            href="#gallery"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent/90 hover:bg-accent text-white rounded-full 
                     transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg
                     text-lg font-medium tracking-wide"
          >
            Ver galería
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 