// src/app/contact/contact.data.ts

import { ContactPageContent } from "../../types/contact.types";

// This simulates dynamic data from backend (optional)
export async function fetchContactPageData(): Promise<ContactPageContent> {
  return {
    bannerImage: "/joboyimages/inner-banner.jpg",
    bannerAlt: "Contact Banner",
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSe17UmbVYxr2cAk2RoWFj_SL6cLbgu0PRljbfO-XL4yptdBzg/viewform?embedded=true",
    heading: "Send Us A Message",
  };
}
