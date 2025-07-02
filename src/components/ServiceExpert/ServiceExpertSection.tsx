"use client";

import React, { useEffect, useState, createContext, useContext } from "react";
import { fetchCountries } from "./ServiceExpert.data";
import { Country } from "../../types/commom.types";


// Create Context
const CountryContext = createContext<{ countries: Country[] }>({ countries: [] });

// Provider Component
const CountryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    fetchCountries().then(setCountries).catch(console.error);
  }, []);

  return (
    <CountryContext.Provider value={{ countries }}>
      {children}
    </CountryContext.Provider>
  );
};

// Main Section Component
const ServiceExpertSection: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const { countries } = useContext(CountryContext);

  const getLink = () => {
    if (!selectedCountry) {
      alert("Please select your country.");
      return;
    }

    const selected = countries.find(c => c.country_id === selectedCountry);
    if (selected) {
      window.location.href = selected.url;
    } else {
      alert("Selected country not found.");
    }
  };

  return (
    <section className="dark-gray-bg pt15">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-5">
            <h4 className="white-font">Are you a service expert?</h4>
            <p className="yellow-font">Join world's Largest Service Network!</p>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="form-group select">
              <select
                className="form-ctrl-p form-control"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                <option value="">SELECT YOUR COUNTRY</option>
                {countries.map((country) => (
                  <option key={country.country_id} value={country.country_id}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="form-group">
              <button
                className="btn book-now-btn btn-block"
                onClick={getLink}
                type="button"
              >
                Register as a Partner
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export wrapped with provider
const ServiceExpertSectionWithProvider = () => (
  <CountryProvider>
    <ServiceExpertSection />
  </CountryProvider>
);

export default ServiceExpertSectionWithProvider;
