import { AdvancedImage } from '@cloudinary/react';
import { scale } from '@cloudinary/url-gen/actions/resize';
import cld from '../config/cloudinary';

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  image?: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline = ({ events }: TimelineProps) => {
  return (
    <section id="memories" className="py-20 bg-gradient-to-r from-page to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display text-primary mb-4">Recuerdos especiales</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un viaje a través de momentos inolvidables
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {events.map((event, index) => (
            <div key={event.id} className={`flex flex-col md:flex-row gap-8 mb-12 ${
              index % 2 === 0 ? '' : 'md:flex-row-reverse'
            }`}>
              {/* Date circle */}
              <div className="flex-none flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-display text-lg text-primary">{event.date}</div>
                  </div>
                </div>
              </div>
              
              {/* Content Card */}
              <div className={`flex-1 bg-white p-6 rounded-lg shadow-lg ${
                index % 2 === 0 
                  ? 'transform transition-transform hover:translate-x-2' 
                  : 'transform transition-transform hover:-translate-x-2'
              }`}>
                <h3 className="font-display text-2xl text-secondary mb-3">{event.title}</h3>
                <p className="mb-4 text-gray-700">{event.description}</p>
                
                {event.image && (
                  <div className="mt-4 overflow-hidden rounded-lg">
                    <AdvancedImage
                      cldImg={cld.image(event.image).resize(scale().width(600))}
                      alt={event.title}
                      className="w-full transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline; 