import { Country, City } from "../../types/commom.types";

// Company Description
export const companyDescription =
  "It is our mission to transform the unorganised services sector through the use of technology, by helping customers connect with verified professionals around them, and helping those experts find customers with minimum investment";

// Footer Locations
export const footerLocations = [
  { id: 1, name: "Dubai", url: "/home/dubai" },
  { id: 2, name: "Kochi", url: "/home/kochi" },
  { id: 3, name: "Bangalore", url: "/home/bangalore" },
];

// About Joboy Links
export const aboutJoboyLinks = [
  { id: 1, name: "Our Mission", url: "/mission" },
  { id: 2, name: "Our Team", url: "/team" },
  { id: 3, name: "Careers", url: "/careers" },
  { id: 4, name: "Contact Us", url: "/contact" },
];

// App Download Buttons
export const appDownloads = [
  {
    id: 1,
    url: "https://play.google.com/store/apps/details?id=com.joboy",
    icon: "joboyimages/google-play.svg",
    alt: "Download on Google Play",
    supTitle: "Get it on",
    title: "Google Play",
  },
  {
    id: 2,
    url: "https://apps.apple.com/app/id1488267098",
    icon: "joboyimages/ios.png",
    alt: "Download on App Store",
    supTitle: "Download on the",
    title: "App Store",
  },
];

// Copyright Text
export const copyrightText =
  "Copyright (2448/2016-CO/SW)@2022, Joboy Services Private Limited";

// Cities Data
export const citiesData: City[] = [
  {
    id: 1,
    name: "Dubai",
    url: "https://joboy.ae",
    img: "joboyimages/dubai.png", 
    alt: "Best Home Services in Dubai",
  },
  {
    id: 2,
    name: "Delhi",
    url: "https://joboy.in/home/delhi-ncr",
    img: "joboyimages/Delhi.png",
    alt: "Best Home Services in Delhi",
  },
  {
    id: 3,
    name: "Baku",
    url: "https://joboy.az/home/Baku",
    img: "joboyimages/Baku.png",
    alt: "Best Home Services in Baku",
  },
  {
    id: 4,
    name: "Sharjah",
    url: "https://joboy.ae/home/sharjah",
    img: "joboyimages/Sharjah.png",
    alt: "Best Home Services in London",
  },
  {
    id: 5,
    name: "Trivandrum",
    url: "https://joboy.in/home/trivandrum",
    img: "joboyimages/trivandrum.png",
    alt: "Best Home Services in Trivandrum",
  },
  {
    id: 6,
    name: "Chennai",
    url: "https://joboy.in/home/chennai",
    img: "joboyimages/chennai.png",
    alt: "Best Home Services in Chennai",
  },
  {
    id: 7,
    name: "Kozhikode",
    url: "https://joboy.in/home/kozhikode",
    img: "joboyimages/kozhikode.png",
    alt: "Best Home Services in Kozhikode",
  },
  {
    id: 8,
    name: "Mumbai",
    url: "https://joboy.in/home/mumbai",
    img: "joboyimages/mumbai.png",
    alt: "Best Home Services in Mumbai",
  },
  {
    id: 9,
    name: "Bangalore",
    url: "https://joboy.in/home/bengaluru",
    img: "joboyimages/bangalore.png",
    alt: "Best Home Services in Bangalore",
  },
  {
    id: 10,
    name: "Kochi",
    url: "https://joboy.in/home/kochi",
    img: "joboyimages/Kochi.png",
    alt: "Best Home Services in Kochi",
  },
  {
    id: 11,
    name: "Hyderabad",
    url: "https://joboy.in/home/hyderabad",
    img: "joboyimages/hyderabad.png",
    alt: "Best Home Services in Hyderabad",
  },
  {
    id: 12,
    name: "Abu Dhabi",
    url: "https://joboy.ae",
    img: "joboyimages/Abudhabi.png",
    alt: "Best Home Services in Abu Dhabi",
  },
];

// Fetch Countries Function

export const fetchCountries = async (): Promise<Country[]> => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_COUNTRY_API as string, {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_API_AUTH as string,
        session: process.env.NEXT_PUBLIC_API_SESSION as string,
      },
    });

    const contentType = response.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      throw new Error("Expected JSON response but received non-JSON");
    }

    const json = await response.json();
    if (json.status === "success") {
      return json.data;
    }

    console.error("Unexpected response:", json);
    return [];
  } catch (error) {
    console.error("Failed to fetch countries:", error);
    return [];
  }
};

