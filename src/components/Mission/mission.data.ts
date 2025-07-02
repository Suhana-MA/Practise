import { PageContentData } from "../../types/mission.types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchMissionPageData = async (): Promise<PageContentData | null> => {
  if (!API_BASE_URL) {
    throw new Error("API base URL is not defined");
  }

  try {
    const res = await fetch(`${API_BASE_URL}/page/get-page`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ slug_url: "mission" }),
    });

    if (!res.ok) throw new Error("Failed to fetch mission page");

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching mission page:", err);
    return null;
  }
};
