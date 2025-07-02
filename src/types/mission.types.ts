export interface ImageData {
  src?: string;
  image?: string;
  alt: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  image: ImageData;
}

export interface Step {
  step: string;
  title: string;
  description: string;
}

export interface HeroSection {
  type: 'hero';
  banner: ImageData;
}

export interface AboutSection {
  type: 'about';
  title: string;
  subtitle: string;
  description: string;
  cta: string;
}

export interface ServicesSection {
  type: 'services';
  title: string;
  items: ServiceItem[];
}

export interface HowItWorksSection {
  type: 'how_it_works';
  title: string;
  background_image: string;
  steps: Step[];
}

export type ContentSection =
  | HeroSection
  | AboutSection
  | ServicesSection
  | HowItWorksSection;

export interface PageContentData {
  name: string;
  content: {
    sections: ContentSection[];
  };
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  author: string;
  tags: string[];
  slug_url: string;
  updatedAt: string;
}
