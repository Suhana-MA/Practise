
"use client";
import { useState, useEffect } from "react";
import React from "react";

interface Country {
  country_id: string;
  name: string;
  url: string;
}

export default function Header(): React.ReactElement {
  const [countries, setCountries] = useState<Country[]>([]);

  // Scroll behavior
  useEffect(() => {
    const navbar = document.querySelector("header") as HTMLElement | null;
    let scrollPrev = window.pageYOffset;

    const handleScroll = () => {
      const scrollCur = window.pageYOffset;
      if (navbar) navbar.style.top = scrollPrev > scrollCur ? "0" : "-90px";
      scrollPrev = scrollCur;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch countries from backend
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


const navigationItems = [
  {
    id: 1,
    name: 'Home',
    url: '/Home',
  },
  {
    id: 2,
    name: 'About Us',
    url: '#',
    hasDropdown: true,
    dropdownItems: [
      {
        id: 21,
        name: 'Our Mission',
        url: '/Mission',
      },
      {
        id: 22,
        name: 'Our Team',
        url: '/Team',
      },
    ],
  },
  {
    id: 3,
    name: 'Our Services',
    url: '/Service',
  },
  {
    id: 4,
    name: 'Careers',
    url: '/Careers',
  },
  {
    id: 5,
    name: 'Contact Us',
    url: '/Contact',
  },
  {
      id: 6,
      name: "Select Country",
      url: "#",
      hasDropdown: true,
      dropdownItems: countries.map((country) => ({
        id: parseInt(country.country_id) + 60,
        name: country.name,
        url: country.url,
      })),
  },
];

const siteConfig = {
  title: "Joboy Services | People Behind the Success of Joboy",
  description: "Our mission is to help our customers find and connect with verified, experienced, service professionals around them, and to help those experts find customers near them with ease",
  favicon: "joboyimages/favicon.png",
  logo: "joboyimages/logo.png",
  logoAlt: "Joboy Home Services",
};


  const renderDropdownItems = (items: any[]) => {
    return items.map((item) => (
      <a key={item.id} className="dropdown-item" href={item.url}>
        {item.name}
      </a>
    ));
  };

  const renderNavigationDropdown = (items: any[]) => {
    return items.map((item) => (
      <li key={item.id} className="drop-li">
        <a href={item.url} className="drop-links">
          {item.name}
        </a>
      </li>
    ));
  };

  return (
    <>
     
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>{siteConfig.title}</title>
      <meta name="description" content={siteConfig.description} />
      <link rel="icon" href={siteConfig.favicon} />
      <link rel="stylesheet" href="joboycss/bootstrap.min.css" />
      <link rel="stylesheet" href="joboycss/animate.css" />
      <link rel="stylesheet" href="joboycss/all.min.css" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;800&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="joboycss/app.css" />

      
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TCZGFR9"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

     
      <div id="mySidenav" className="sidenav1">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          <i className="fal fa-times close-icon" />
        </a>
        <div className="main-menu">
          <ul className="nav">
            {navigationItems.map((item) => (
              <li key={item.id} className="dropdown">
                {item.hasDropdown ? (
                  <>
                    <a className="dropdown-toggle" data-toggle="dropdown">
                      {item.name} <i className="fa fa-chevron-circle-down drop-arrow" />
                    </a>
                    <div className="dropdown-menu">
                      {item.dropdownItems && renderDropdownItems(item.dropdownItems)}
                    </div>
                  </>
                ) : (
                  <a href={item.url} className="dropdown-toggle">
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      
      <header id="header-home2">
        <div className="container">
          <div className="nav" id="nav">
            <div className="logo">
              <div className="toggle" onClick={openNav}>
                <span className="toggle-line first" />
                <span className="toggle-line second" />
                <span className="toggle-line third" />
              </div>
              <a href="#" className="digieized">
                <img
                  src={siteConfig.logo}
                  className="img-fluid"
                  alt={siteConfig.logoAlt}
                />
              </a>
            </div>
            <div className="navigation">
              <ul className="navigation-ul">
                {navigationItems.map((item) => (
                  <li key={item.id} className="navigation-li">
                    {item.hasDropdown ? (
                      <>
                        <a href={item.url} className="links">
                          <p>{item.name}</p>
                        </a>
                        <ul className="drop-ul">
                          {item.dropdownItems && renderNavigationDropdown(item.dropdownItems)}
                        </ul>
                      </>
                    ) : (
                      <a href={item.url} className="links">
                        {item.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}


function openNav(): void {
  const sidenav = document.getElementById("mySidenav") as HTMLElement | null;
  if (sidenav) sidenav.style.width = "250px";
}

function closeNav(): void {
  const sidenav = document.getElementById("mySidenav") as HTMLElement | null;
  if (sidenav) sidenav.style.width = "0";
}