export interface Photo {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  thumbnail?: string;
  caption?: string;
  date?: string;
  location?: string;
  tags?: string[];
}

export interface GalleryProps {
  title: string;
  subtitle?: string;
  photos: Photo[];
}

export interface HeroProps {
  name: string;
  subtitle?: string;
  backgroundImage?: string;
  blurEffect?: boolean;
}

export interface NavBarProps {
  title: string;
} 