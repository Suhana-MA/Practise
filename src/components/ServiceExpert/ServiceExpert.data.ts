// components/ServiceExpertSection/serviceExpert.data.ts
import { Country }from  "../../types/commom.types";


export const fetchCountries = async (): Promise<Country[]> => {
  try {
    const response = await fetch("http://localhost:5000/api/country/list", {
      headers: {
        Authorization: "Basic YWRtaW46MTIzNA==",
        session: "G80C80K8",
      },
    });

    // Handle non-JSON or invalid response
    const contentType = response.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      throw new Error("Expected JSON response but received non-JSON");
    }

    const json = await response.json();

    if (json.status === "success") {
      return json.data;
    }

    console.error("Unexpected response:", json);
    return [];
  } catch (error) {
    console.error("Failed to fetch countries:", error);
    return [];
  }
};
