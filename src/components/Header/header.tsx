"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "../../config/site";
import { fetchCountries, buildNavigationItems } from "./header.data";
import { Country, NavigationItem } from "../../types/commom.types";

export default function Header(): React.ReactElement {
  const [countries, setCountries] = useState<Country[]>([]);
  const [navigationItems, setNavigationItems] = useState<NavigationItem[]>([]);

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

  useEffect(() => {
    fetchCountries()
      .then((data) => {
        setCountries(data);
        setNavigationItems(buildNavigationItems(data));
      })
      .catch((err) => console.error("Failed to fetch countries:", err));
  }, []);

  const renderDropdownItems = (items: any[]) =>
    items.map((item) => (
      <Link key={item.id} href={item.url} className="dropdown-item">
        {item.name}
      </Link>
    ));

  const renderNavigationDropdown = (items: any[]) =>
    items.map((item) => (
      <li key={item.id} className="drop-li">
        <Link href={item.url} className="drop-links">
          {item.name}
        </Link>
      </li>
    ));

  return (
    <>
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
                    <a className="dropdown-toggle">
                      {item.name} <i className="fa fa-chevron-circle-down drop-arrow" />
                    </a>
                    <div className="dropdown-menu">
                      {renderDropdownItems(item.dropdownItems || [])}
                    </div>
                  </>
                ) : (
                  <Link href={item.url} className="dropdown-toggle">
                    {item.name}
                  </Link>
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
              <Link href="/" className="digieized">
                <img
                  src={siteConfig.logo}
                  className="img-fluid"
                  alt={siteConfig.logoAlt}
                />
              </Link>
            </div>
            <div className="navigation">
              <ul className="navigation-ul">
                {navigationItems.map((item) => (
                  <li key={item.id} className="navigation-li">
                    {item.hasDropdown ? (
                      <>
                        <a className="links">
                          <p>{item.name}</p>
                        </a>
                        <ul className="drop-ul">
                          {renderNavigationDropdown(item.dropdownItems || [])}
                        </ul>
                      </>
                    ) : (
                      <Link href={item.url} className="links">
                        {item.name}
                      </Link>
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
