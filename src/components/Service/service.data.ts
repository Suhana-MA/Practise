// src/app/services/service.data.ts

import { ServicePageData } from "../../types/service.types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchServicePageData = async (): Promise<ServicePageData | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/page/get-page`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug_url: "services" }),
    });

    if (!response.ok) throw new Error("Failed to fetch services page data");

    const data = await response.json();
    if (!data?.content) return null;

    return {
      bannerImage: data.content.bannerImage || "",
      heading: data.content.heading || "",
      subheading: data.content.subheading || "",
      introText: data.content.introText || "",
      sections: data.content.sections || [],
    };
  } catch (error) {
    console.error("Error in fetchServicePageData:", error);
    return null;
  }
};
