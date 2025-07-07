import { Country, City } from "../../types/hero.types";

const BASE_URL = process.env.NEXT_PUBLIC_JOBOY;
const AUTH = process.env.NEXT_PUBLIC_API_AUTH || "Basic YWRtaW46MTIzNA==";

export const heroData = {
  heading: {
    title: "Looking for Expert Home <br />Services at Your Convenience?",
  },
  placeholders: {
    country: "Select Country",
    city: "Select City",
  },
  buttonText: "Book Now",
  downloadText: {
    desktop: "Download the Joboy App for better experience",
    mobile: "Get the app now",
  },
  clipPath:
    "M0,0 L1,0 L1,0.85 C0.83,0.93 0.65,0.96 0.5,1 C0.35,0.96 0.17,0.93 0,0.85 Z",
};

export const appDownloads = [
  {
    url: "https://play.google.com/store/apps/details?id=com.joboy.joboycustomer",
    icon: "/joboyimages/google-play.svg",
    alt: "Google Play",
    supTitle: "Download on",
    title: "Google Play",
  },
  {
    url: "https://apps.apple.com/in/app/joboy/id1247211740",
    icon: "/joboyimages/ios.png",
    alt: "App Store",
    supTitle: "Download on",
    title: "App Store",
  },
];

export async function createSession(): Promise<string> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_JOBOY}/key/createkey`, {
    method: "POST",
    headers: {
      Authorization: AUTH,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      customer_id: "1",
      device_id: "abc123",
      firebase_token: "testtoken",
      app_version: "1.0.0",
      platform: "web",
    }),
  });

  const data = await res.json();
  if (data?.data) return data.data;
  throw new Error("Failed to create session");
}

export async function fetchCountries(session: string): Promise<Country[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_JOBOY}/country/list`, {
    headers: {
      Authorization: AUTH,
      session,
    },
  });

  const data = await res.json();
  if (data.status === "success" && Array.isArray(data.data)) return data.data;
  throw new Error("Invalid countries response");
}

export async function fetchCities(
  countryId: number,
  session: string
): Promise<City[]> {
  const formData = new FormData();
  formData.append("country", countryId.toString());
  formData.append("lang", "1");

  const res = await fetch(`${process.env.NEXT_PUBLIC_JOBOY}/city/list`, {
    method: "POST",
    headers: {
      Authorization: AUTH,
      session,
    },
    body: formData,
  });

  const text = await res.text();
  try {
    const data = JSON.parse(text);
    if (data.status === "success" && Array.isArray(data.data)) {
      return data.data;
    }
    throw new Error("Invalid cities response");
  } catch (e) {
    console.error("Error parsing city response:", text);
    throw e;
  }
}
