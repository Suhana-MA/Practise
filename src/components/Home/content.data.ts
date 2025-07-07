import { HomeContent } from "../../types/content.types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchWhyJoboyData = async (): Promise<HomeContent | null> => {
  if (!API_BASE_URL) {
    console.error("API base URL not set.");
    return null;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/page/get-page`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ slug_url: "home" }),
    });

    const json = await response.json();

    if (json?.content?.popularCategories && json?.content?.whyJoboy) {
      return {
        popularCategories: json.content.popularCategories,
        whyJoboy: json.content.whyJoboy,
      };
    }

    console.error("Unexpected response format:", json);
    return null;
  } catch (error) {
    console.error("Failed to fetch WhyJoboy data:", error);
    return null;
  }
};
