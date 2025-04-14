import React from 'react';

interface MessageProps {
  message: string;
  author?: string;
  image?: string;
}

const Message: React.FC<MessageProps> = ({ message, author, image }) => {
  return (
    <section id="message" className="py-20 bg-gradient-to-b from-page to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-display text-primary mb-8">Un mensaje especial para ti</h2>
          
          <div className="relative mb-8">
            <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-6 h-16 w-16 text-primary opacity-30" 
                 viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            
            <div className="bg-white shadow-xl rounded-lg p-8 mb-8">
              <p className="text-lg md:text-xl leading-relaxed mb-6 italic">
                {message}
              </p>
              
              {author && (
                <p className="text-right text-primary font-display text-xl">
                  - {author}
                </p>
              )}
            </div>
            
            <svg className="absolute bottom-0 right-0 transform translate-x-6 translate-y-6 h-16 w-16 text-primary opacity-30" 
                 viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.57-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
            </svg>
          </div>
          
          {image && (
            <div className="mt-8">
              <img 
                src={image} 
                alt="Foto especial" 
                className="w-48 h-48 object-cover rounded-full mx-auto border-4 border-primary shadow-lg"
              />
            </div>
          )}
          
          <div className="mt-12">
            <a href="#gallery" className="btn-secondary">
              Volver a la galería
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message; 