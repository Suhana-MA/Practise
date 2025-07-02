// components/Team/team.data.ts
"use client";
import React from "react";
import { TeamPageContent } from "../../types/team.types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!API_BASE_URL) {
  throw new Error("API base URL is not defined in .env.local");
}

export const fetchTeamData = async (): Promise<TeamPageContent | null> => {
  try {
    const res = await fetch(`${API_BASE_URL}/page/get-page`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ slug_url: "team" }),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    if (data?.content) {
      return {
        heading: data.content.heading || "",
        subheading: data.content.subheading || "",
        teamMembers: data.content.teamMembers || [],
      };
    }

    return null;
  } catch (error) {
    console.error("Error fetching team data:", error);
    return null;
  }
};
