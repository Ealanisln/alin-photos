import { useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import PhotoGallery from './components/PhotoGallery';
import Message from './components/Message';
import Footer from './components/Footer';
import { personalMessage, featuredPhotos, allPhotos } from './data/data';

function App() {
  useEffect(() => {
    // Set the document title
    document.title = 'Galería de Fotos - Alin Amador';
  }, []);

  // Manejar clic en botón de descarga
  const handleDownloadClick = () => {
    // Abrir el enlace de Google Drive en una nueva pestaña
    const googleDriveLink = 'https://drive.google.com/file/d/1T7OCis43u7yUexz2ajvzzuca2AbMypTi/view?usp=drive_link';
    window.open(googleDriveLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-page">
      <NavBar title="Alin Amador" />
      
      <Hero 
        name="Alin Amador" 
        subtitle="Una colección de recuerdos para celebrar tus XV años"
        backgroundImage="/hero-image.jpg"
        blurEffect={false} // Removing blur effect
      />

        {/* Download Button Section */}
        <section className="py-12 bg-gradient-to-r from-purple-50 via-white to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display text-primary mb-4">¿Quieres guardar los recuerdos?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Descarga todas las fotos en alta calidad para conservar estos momentos especiales.
          </p>
          <button 
            onClick={handleDownloadClick}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-400 to-purple-600 hover:from-pink-500 hover:to-purple-700 text-white rounded-full 
                     transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg
                     text-lg font-medium tracking-wide"
          >
            Descargar Todas las Fotos
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
        </div>
      </section>
      
      <PhotoGallery 
        title="Momentos Destacados" 
        subtitle="Recuerdos especiales seleccionados" 
        photos={featuredPhotos}
      />
      
      <PhotoGallery 
        title="Galería Completa" 
        subtitle="Todos los momentos capturados" 
        photos={allPhotos}
      />
      
    
      
      <Message 
        message={personalMessage.message}
        author={personalMessage.author}
        image="/message.png"
      />
      
      <Footer />
    </div>
  );
}

export default App;
