// data/footer.ts
export interface FooterLink {
  id: number;
  name: string;
  url: string;
}

export interface AppDownload {
  id: number;
  platform: string;
  url: string;
  icon: string;
  alt: string;
  supTitle: string;
  title: string;
}

// Company description
export const companyDescription = "It is our mission to transform the unorganised services sector through the use of technology, by helping customers connect with verified professionals around them, and helping those experts find customers with minimum investment";

// Footer locations
export const footerLocations: FooterLink[] = [
  {
    id: 1,
    name: 'Azerbaijan',
    url: '#',
  },
  {
    id: 2,
    name: 'Canada',
    url: '#',
  },
  {
    id: 3,
    name: 'India',
    url: '#',
  },
  {
    id: 4,
    name: 'United Arab Emirates',
    url: '#',
  },
  {
    id: 5,
    name: 'United Kingdom',
    url: '#',
  },
  {
    id: 6,
    name: 'South Africa',
    url: '#',
  },
];

// About Joboy links
export const aboutJoboyLinks: FooterLink[] = [
  {
    id: 1,
    name: 'Our Mission',
    url: '#',
  },
  {
    id: 2,
    name: 'Careers',
    url: '#',
  },
  {
    id: 3,
    name: 'Contact Us',
    url: '#',
  },
  {
    id: 4,
    name: 'Connect With Us on LinkedIn',
    url: '#',
  },
];

// App downloads
export const appDownloads: AppDownload[] = [
  {
    id: 1,
    platform: 'ios',
    url: '#',
    icon: 'joboyimages/ios.png',
    alt: 'Joboy on Apple App Store',
    supTitle: 'Download on the',
    title: 'App Store',
  },
  {
    id: 2,
    platform: 'android',
    url: '#',
    icon: 'joboyimages/google-play.svg',
    alt: 'Joboy on Google Play Store',
    supTitle: 'Download on the',
    title: 'Google Play',
  },
];

// Copyright text
export const copyrightText = "Copyright (2448/2016-CO/SW)@2022, Joboy Services Private Limited";