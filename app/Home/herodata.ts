// heroData.ts
import { countriesData } from '../data/countries';
import { appDownloads } from '../data/footer';

export interface HeroData {
  heading: {
    title: string;
  };
  downloadText: {
    desktop: string;
    mobile: string;
  };
  placeholders: {
    country: string;
    city: string;
  };
  buttonText: string;
  clipPath: string;
}

export const heroData: HeroData = {
  heading: {
    title: "Looking for Expert Home Services at Your Convenience?"
  },
  downloadText: {
    desktop: "DOWNLOAD THE JOBOY APP",
    mobile: "Download the Joboy App"
  },
  placeholders: {
    country: "SELECT YOUR COUNTRY",
    city: "SELECT YOUR CITY"
  },
  buttonText: "Book Now",
  clipPath: "M0.004,0.683 c0.012,0.08,0.048,0.145,0.09,0.154 c0.036,0.008,0.074,-0.022,0.108,0.006 c0.03,0.026,0.047,0.093,0.075,0.129 c0.026,0.033,0.06,0.035,0.089,0.017 s0.055,-0.055,0.079,-0.094 c0.015,-0.024,0.029,-0.051,0.046,-0.068 s0.038,-0.025,0.055,-0.01 c0.03,0.025,0.041,0.102,0.068,0.141 c0.03,0.044,0.072,0.029,0.104,-0.008 c0.025,-0.028,0.048,-0.069,0.076,-0.07 c0.027,-0.001,0.05,0.036,0.076,0.05 c0.051,0.028,0.099,-0.044,0.118,-0.138 c0.023,-0.118,0.005,-0.251,-0.002,-0.372 c-0.006,-0.097,-0.006,-0.2,-0.033,-0.281 c-0.025,-0.075,-0.069,-0.116,-0.113,-0.123 S0.753,0.032,0.712,0.065 C0.673,0.095,0.632,0.136,0.591,0.119 C0.556,0.106,0.529,0.054,0.496,0.025 A0.143,0.27,0,0,0,0.394,0.012 C0.35,0.038,0.31,0.105,0.263,0.099 c-0.042,-0.006,-0.078,-0.073,-0.12,-0.084 S0.058,0.057,0.042,0.137 C0.029,0.206,0.036,0.283,0.031,0.356 C0.024,0.455,-0.005,0.549,0.001,0.649 a0.112,0.211,0,0,0,0.004,0.034"
};

// Use existing data structures
export { countriesData as countries } from '../data/countries';
export { appDownloads } from '../data/footer';