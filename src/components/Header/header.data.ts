import { NavigationItem } from "../../types/commom.types";
import { Country } from "../../types/commom.types";

export const buildNavigationItems = (countries: Country[]): NavigationItem[] => [
  {
    id: 1,
    name: "Home",
    url: "/home",
  },
  {
    id: 2,
    name: "About Us",
    url: "#",
    hasDropdown: true,
    dropdownItems: [
      { id: 21, name: "Our Mission", url: "/Mission" },
      { id: 22, name: "Our Team", url: "/Team" },
    ],
  },
  {
    id: 3,
    name: "Our Services",
    url: "/Service",
  },
  {
    id: 4,
    name: "Careers",
    url: "/Career",
  },
  {
    id: 5,
    name: "Contact Us",
    url: "/Contact",
  },
  {
    id: 6,
    name: "Select Country",
    url: "#",
    hasDropdown: true,
    dropdownItems: countries.map((c) => ({
      id: parseInt(c.country_id) + 100,
      name: c.name,
      url: c.url,
    })),
  },
];

// API Call
export const fetchCountries = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/country/list`, {
    headers: {
      Authorization: process.env.NEXT_PUBLIC_API_AUTH || "",
      session: process.env.NEXT_PUBLIC_API_SESSION || "",
    },
  });

  const json = await response.json();
  if (json.status === "success") {
    return json.data;
  } else {
    throw new Error("Failed to fetch countries");
  }
};
