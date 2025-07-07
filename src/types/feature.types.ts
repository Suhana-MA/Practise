// feature.types.ts

export interface ServiceSliderItem {
  title: string;
  image: string;
  alt: string;
}

export interface HelpItem {
  title: string;
  image: string;
  description: string;
}

export interface FeatureContent {
  servicesSlider: ServiceSliderItem[];
  howWeHelp: {
    heading: string;
    items: HelpItem[];
    sideImage: string;
  };
}

export interface HomePageResponse {
  name: string;
  slug_url: string;
  content: FeatureContent;
  updatedAt: string;
}
