"use client";
import React, { useEffect, useState } from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!API_BASE_URL) {
  throw new Error("API base URL is not defined in .env.local");
}

// You can place this inside your TSX component file

export async function fetchPageContent(slug_url: string) {
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
