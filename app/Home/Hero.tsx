"use client";
import React, { useEffect, useState } from "react";
import { heroData, appDownloads } from "./herodata";
import { AppDownload } from "../data/footer";
import { useRouter } from "next/navigation";

interface City {
  city_id: string;
  name: string;
  slug: string;
}

interface Country {
  country_id: string;
  name: string;
  url: string;
  cities: City[];
}

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
  const router = useRouter();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/country/list", {
          headers: {
            Authorization: "Basic YWRtaW46MTIzNA==",
            session: "G80C80K8",
          },
        });
        const json = await res.json();
        if (json.status === "success") {
          setCountries(json.data);
        }
      } catch (err) {
        console.error("Failed to fetch countries:", err);
      }
    };
    fetchCountries();
  }, []);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    const country = countries.find((c) => c.country_id === selectedId) || null;
    setSelectedCountry(country);
    setSelectedCitySlug(""); // reset city
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCitySlug(e.target.value);
  };

  const goToCity = () => {
    const country = countries.find((c) => c === selectedCountry);

    if (country && selectedCitySlug) {
      const url = `${country.url}/home/${selectedCitySlug.toLowerCase()}`;
      window.location.href = url;
    } else {
      alert("Please select a country and city.");
    }
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          {/* heading content */}
          <div className="heading">
            <div className="slider-tag-outer"></div>
            <div className="slider-heading-outer">
              <h1 className="slider-heading wow fadeInUp h1" data-wow-duration="1s" data-wow-delay=".5s">
                {heroData.heading.title.split("<br />").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < heroData.heading.title.split("<br />").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h1>
            </div>
          </div>

          {/* dropdown and button */}
          <div className="row">
            <div className="col-sm-10 offset-sm-1">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div className="form-group select">
                    <select className="form-ctrl-p form-control" value={selectedCountry?.country_id || ""} onChange={handleCountryChange}>
                      <option value="" disabled>
                        {heroData.placeholders.country}
                      </option>
                      {countries.map((country) => (
                        <option key={country.country_id} value={country.country_id}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="col-sm-6 col-md-3">
                  <div className="form-group select">
                    <select className="form-ctrl-p form-control" value={selectedCitySlug} onChange={handleCityChange}>
                      <option value="">{heroData.placeholders.city}</option>
                      {selectedCountry?.cities?.map((city) => (
                        <option key={city.city_id} value={city.slug}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="col-sm-6 col-md-3">
                  <button className="btn book-now-btn btn-block" type="submit" onClick={goToCity}>
                    {heroData.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* download strip */}
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
                      {appDownloads.map((link, index) => (
                        <AppStoreButton key={index} link={link} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* mobile download */}
          <div className="download-strip mob mt-3 mb-3">
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <h5 className="text-right download-text">{heroData.downloadText.mobile}</h5>
                </div>
                <div className="col-sm-6 form-inline">
                  {appDownloads.map((link, index) => (
                    <AppStoreButton key={index} link={link} />
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
