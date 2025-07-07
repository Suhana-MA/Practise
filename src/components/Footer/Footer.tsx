"use client";

import React, { useEffect, useState, createContext, useContext } from "react";
import {
  companyDescription,
  footerLocations,
  aboutJoboyLinks,
  appDownloads,
  copyrightText,
  citiesData,
  fetchCountries
} from "./footer.data";
import { Country } from "../../types/commom.types";

// ---------- Context Setup ----------
const CountryContext = createContext<{ countries: Country[] }>({ countries: [] });

const CountryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    fetchCountries().then(setCountries).catch(console.error);
  }, []);

  return (
    <CountryContext.Provider value={{ countries }}>{children}</CountryContext.Provider>
  );
};

// ---------- Cities Component ----------
const Cities: React.FC = () => (
  <section className="gray-bg pb40 pt40">
    <div className="container">
      <h6 className="text-center pt15 pb40 text-uppercase">
        Our services are available in major cities, across the globe
      </h6>
      <div className="inner-demo">
        <ul className="joboy-city">
          {citiesData.map((city) => (
            <li key={city.id}>
              <a href={city.url}>
                <img src={city.img} className="img-fluid" alt={city.alt} />
                <div>{city.name}</div>
              </a>
            </li>
          ))}
        </ul>
        <div className="clearfix" />
      </div>
    </div>
  </section>
);

// ---------- Service Expert Component ----------
const ServiceExpertSection: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const { countries } = useContext(CountryContext);

  const getLink = () => {
    if (!selectedCountry) {
      alert("Please select your country.");
      return;
    }

    const selected = countries.find((c) => c.country_id === selectedCountry);
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

// ---------- Main Footer ----------
const Footer: React.FC = () => {
  return (
    <>
      {/* First: Cities */}
      <Cities />

      {/* Second: Service Expert */}
      <CountryProvider>
        <ServiceExpertSection />
      </CountryProvider>

      {/* Third: Main Footer */}
      <section className="footer-area pt40 pb15">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <a className="logo" href="/" />
                <p>{companyDescription}</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget pl-5">
                <h3>Our Locations</h3>
                <ul className="list">
                  {footerLocations.map((location) => (
                    <li key={location.id}>
                      <a href={location.url}>{location.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <h3>About Joboy</h3>
                <ul className="list">
                  {aboutJoboyLinks.map((link) => (
                    <li key={link.id}>
                      <a href={link.url}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <h3>Download App</h3>
                {appDownloads.map((app) => (
                  <div key={app.id} className="form-group">
                    <a href={app.url} className="btn btn-market btn--with-shadow">
                      <img className="utouch-icon" src={app.icon} alt={app.alt} />
                      <div className="text">
                        <span className="sup-title">{app.supTitle}</span>
                        <span className="title">{app.title}</span>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copy-right">
          <div className="container">
            <div className="copy-right-content">
              <p>{copyrightText}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
