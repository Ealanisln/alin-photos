const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gradient-to-t from-primary/10 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-display text-primary mb-4">Gracias por compartir este momento</h3>
          
          
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Galería de Fotos - Creado con ♥ de Emmanuel para Alin. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 