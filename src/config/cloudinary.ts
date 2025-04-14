import { Cloudinary } from '@cloudinary/url-gen';

// Create a Cloudinary instance with user's cloud name
const cld = new Cloudinary({
  cloud: {
    cloudName: 'dvf2zo2ee' // User's Cloudinary cloud name
  }
});

export default cld; 