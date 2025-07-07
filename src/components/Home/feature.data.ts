// src/components/Feature/Feature.data.ts

import { HomePageResponse } from "../../types/feature.types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchFeaturePageData = async (): Promise<HomePageResponse | null> => {
  if (!API_BASE_URL) {
    throw new Error("API base URL is not defined");
  }

  try {
    const res = await fetch(`${API_BASE_URL}/page/get-page`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic YWRtaW46MTIzNA==",
      },
      body: JSON.stringify({ slug_url: "home" }),
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch feature page: ${res.statusText}`);
    }

    const json = await res.json();

    // ✅ Expecting the full page object directly
    if (!json || typeof json !== "object" || !json.content) {
      throw new Error("Unexpected response format");
    }

    return json as HomePageResponse;
  } catch (err) {
    console.error("Error fetching feature page:", err);
    return null;
  }
};
