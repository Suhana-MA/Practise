// src/app/careers/career.data.ts
import { JobData, CareerPageContent } from "../../types/career.types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!API_BASE_URL) {
  throw new Error("API base URL is not defined in .env.local");
}

async function fetchPageContent(slug_url: string): Promise<any> {
  try {
    const res = await fetch(`${API_BASE_URL}/page/get-page`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ slug_url }),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return await res.json();
  } catch (err) {
    console.error("Failed to fetch page content:", err);
    throw err;
  }
}

export async function fetchCareerData(): Promise<CareerPageContent | null> {
  try {
    const data = await fetchPageContent("careers");
    if (data?.content) {
      return {
        heading: data.content.heading || "Careers at Joboy",
        subHeading1: data.content.subHeading1 || "",
        subHeading2: data.content.subHeading2 || "",
        jobs: data.content.jobs || [],
      };
    }
    return null;
  } catch (error) {
    console.error("Error fetching career data:", error);
    return null;
  }
}
