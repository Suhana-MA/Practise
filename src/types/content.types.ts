export type Category = {
  title: string;
  image: string;
  subtitle: string;
};

export type WhyJoboyContent = {
  title1: string;
  desc1: string;
  title2: string;
  desc2: string;
  features: string[];
  image: string;
};

export type HomeContent = {
  popularCategories: {
    heading: string;
    categories: Category[];
  };
  whyJoboy: WhyJoboyContent; 
};
