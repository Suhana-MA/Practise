// Hero.types.ts

export interface City {
  city_id: string;
 city_name: string;
  slug: string;
}

export interface Country {
  country_id: string;
  name: string;
  url: string;
  cities: City[];
}

export interface AppDownload {
  url: string;
  icon: string;
  alt: string;
  supTitle: string;
  title: string;
}

export interface HeroData {
  heading: {
    title: string;
  };
  placeholders: {
    country: string;
    city: string;
  };
  buttonText: string;
  downloadText: {
    desktop: string;
    mobile: string;
  };
  clipPath: string;
}
