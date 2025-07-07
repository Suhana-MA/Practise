import { HomeContent } from "../../types/newsandtestimonials.types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchNewsAndTestimonials = async (): Promise<HomeContent | null> => {
  if (!API_BASE_URL) {
    console.error("API base URL not defined");
    return null;
  }

  try {
    const res = await fetch(`${API_BASE_URL}/page/get-page`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ slug_url: "home" })
    });

    if (!res.ok) {
      console.error("Response not OK", res.status);
      return null;
    }

    const data = await res.json();

    if (data?.content?.news && data?.content?.testimonials) {
      return {
        news: data.content.news,
        testimonials: data.content.testimonials
      };
    }

    console.error("Unexpected response format:", data);
    return null;
  } catch (err) {
    console.error("Failed to fetch home content", err);
    return null;
  }
};
