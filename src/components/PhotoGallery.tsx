import { useEffect, useRef } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { thumbnail, scale } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import cld from '../config/cloudinary';
import { GalleryProps, Photo } from '../types';
import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgRotate from 'lightgallery/plugins/rotate';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';

// Import CSS
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-rotate.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';

const PhotoGallery = ({ title, subtitle, photos }: GalleryProps) => {
  const galleryContainerRef = useRef<HTMLDivElement>(null);
  const lightGalleryInstance = useRef<ReturnType<typeof lightGallery> | null>(null);

  useEffect(() => {
    if (galleryContainerRef.current) {
      lightGalleryInstance.current = lightGallery(galleryContainerRef.current, {
        plugins: [lgThumbnail, lgZoom, lgRotate, lgFullscreen, lgShare],
        speed: 500,
        download: false,
        counter: true,
        selector: '.gallery-item',
        addClass: 'lg-custom-theme',
        licenseKey: 'your_license_key',
        mobileSettings: {
          controls: true,
          showCloseIcon: true,
          download: false,
        }
      });
    }

    return () => {
      lightGalleryInstance.current?.destroy();
    };
  }, []);

  const getPhotoElement = (photo: Photo) => {
    const imgSrc = cld.image(photo.src).toURL();
    
    cld.image(photo.src).resize(thumbnail().width(200).height(200).gravity(autoGravity())).toURL();
    
    return (
      <div key={photo.id} className="photo-card">
        <a 
          href={imgSrc}
          className="gallery-item"
          data-lg-size={`${photo.width}-${photo.height}`}
          data-sub-html={`<h4>${photo.caption || ''}</h4><p>${photo.date || ''} ${photo.location || ''}</p>`}
        >
          <AdvancedImage 
            cldImg={cld.image(photo.src).resize(scale().width(400))}
            alt={photo.alt}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="photo-overlay">
            <span className="text-white text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </div>
        </a>
        {photo.caption && (
          <div className="p-2 text-center">
            <p className="text-sm truncate">{photo.caption}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="gallery" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display text-primary mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
        
        <div className="gallery-container" ref={galleryContainerRef}>
          {photos.map(photo => getPhotoElement(photo))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery; 