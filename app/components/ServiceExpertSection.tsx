
"use client";

import { useState } from "react";
import { partnerCountriesData } from '../data/countries';

const ServiceExpertSection: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<number>(0);

  const getLink = () => {
    console.log("Selected country value:", selectedCountry);

    if (selectedCountry === 0) {
      alert("Please select your country.");
      return;
    }

    const selectedCountryData = partnerCountriesData.find(
      country => country.id === selectedCountry
    );

    if (selectedCountryData) {
      window.location.href = selectedCountryData.url;
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
                onChange={(e) => setSelectedCountry(Number(e.target.value))}
              >
                <option value={0}>SELECT YOUR COUNTRY</option>
                {partnerCountriesData.map((country) => (
                  <option key={country.id} value={country.id}>
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

export default ServiceExpertSection;