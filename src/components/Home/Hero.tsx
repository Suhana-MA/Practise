// Hero.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  heroData,
  appDownloads,
  createSession,
  fetchCountries,
  fetchCities,
} from "./hero.data";
import { AppDownload, Country, City } from "../../types/hero.types";

const AppStoreButton: React.FC<{ link: AppDownload }> = ({ link }) => (
  <div className="form-group p-1">
    <a href={link.url} className="btn btn-market btn--with-shadow">
      <img className="utouch-icon" src={link.icon} alt={link.alt} />
      <div className="text">
        <span className="sup-title">{link.supTitle}</span>
        <span className="title">{link.title}</span>
      </div>
    </a>
  </div>
);

const Hero: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [selectedCitySlug, setSelectedCitySlug] = useState("");
  const [session, setSession] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    createSession()
      .then((sess) => {
        setSession(sess);
        console.log("Session response:", sess);
      })
      .catch((err) => console.error("Failed to create session:", err));
  }, []);

  useEffect(() => {
    if (!session) return;
    fetchCountries(session)
      .then((data) => setCountries(data))
      .catch((err) => console.error("Failed to fetch countries:", err));
  }, [session]);

  const handleCountryChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = Number(e.target.value);
    const country = countries.find((c) => Number(c.country_id) === selectedId) || null;
    setSelectedCountry(null);
    setSelectedCitySlug("");

    if (!country || !session) return;

    try {
      const cities = await fetchCities(selectedId, session);
      setSelectedCountry({ ...country, cities });
    } catch (err) {
      console.error("❌ Error loading cities:", err);
    }
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCitySlug(e.target.value);
  };

  const goToCity = () => {
    if (selectedCountry && selectedCitySlug) {
      const url = `${selectedCountry.url}/home/${selectedCitySlug.toLowerCase()}`;
      window.location.href = url;
    } else {
      alert("Please select a country and city.");
    }
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="heading">
            <div className="slider-tag-outer"></div>
            <div className="slider-heading-outer">
              <h1
                className="slider-heading wow fadeInUp h1"
                data-wow-duration="1s"
                data-wow-delay=".5s"
              >
                {heroData.heading.title.split("<br />").map((line, index, arr) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < arr.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h1>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-10 offset-sm-1">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div className="form-group select">
                    <select
                      className="form-ctrl-p form-control"
                      value={selectedCountry?.country_id || ""}
                      onChange={handleCountryChange}
                    >
                      <option value="" disabled>
                        {heroData.placeholders.country}
                      </option>
                      {countries.map((country) => (
                        <option
                          key={country.country_id}
                          value={country.country_id.toString()}
                        >
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="col-sm-6 col-md-3">
                  <div className="form-group select">
                    <select
                      className="form-ctrl-p form-control"
                      value={selectedCitySlug}
                      onChange={handleCityChange}
                      disabled={!selectedCountry?.cities || selectedCountry.cities.length === 0}
                    >
                      <option value="">{heroData.placeholders.city}</option>
                      {selectedCountry?.cities?.map((city: City) => (
                        <option key={city.city_id} value={city.slug}>
                          {city.city_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="col-sm-6 col-md-3">
                  <button className="btn book-now-btn btn-block" onClick={goToCity}>
                    {heroData.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="shape">
            <svg className="svg">
              <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
                <path d={heroData.clipPath} />
              </clipPath>
            </svg>
            <div className="clipped">
              <div className="download-strip mob-none">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-6">
                      <h5 className="text-right download-text">
                        <strong>{heroData.downloadText.desktop}</strong>
                      </h5>
                    </div>
                    <div className="col-sm-6 form-inline">
                      {appDownloads.map((link, i) => (
                        <AppStoreButton key={i} link={link} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="download-strip mob mt-3 mb-3">
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <h5 className="text-right download-text">
                    {heroData.downloadText.mobile}
                  </h5>
                </div>
                <div className="col-sm-6 form-inline">
                  {appDownloads.map((link, i) => (
                    <AppStoreButton key={i} link={link} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
