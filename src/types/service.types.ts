// src/types/service.types.ts

export type LinkColumn = {
  label: string;
  href: string;
};

export type SectionData = {
  isGray?: boolean;
  title: string;
  image: string;
  alt: string;
  content: string;
  links: {
    column1: LinkColumn[];
    column2: LinkColumn[];
  };
};

export type ServicePageData = {
  bannerImage: string;
  heading: string;
  subheading: string;
  introText: string;
  sections: SectionData[];
};
