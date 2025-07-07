"use client";

import React, { useEffect, useState } from "react";
import { fetchWhyJoboyData } from "./content.data";
import { HomeContent } from "../../types/content.types";

const WhyJoboySection: React.FC = () => {
  const [content, setContent] = useState<HomeContent | null>(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchWhyJoboyData();
      setContent(data);
    }
    loadData();
  }, []);

  useEffect(() => {
    if (!content) return;
    const $ = (window as any).$;
    if (!$) return;

    $(".owl-2").owlCarousel?.({
      items: 4,
      autoplay: true,
      loop: true,
      dots: true,
      nav: false,
      autoplayTimeout: 3000,
      smartSpeed: 1000,
      responsive: {
        0: { items: 1 },
        576: { items: 2 },
        768: { items: 3 },
        992: { items: 4 },
      },
    });
  }, [content]);

  if (!content) return <div className="text-center pt40">Loading...</div>;

  return (
    <>
      {/* Popular Categories Section */}
      <section className="gray-bg pt40 pb40">
        <div className="container">
          <h3 className="pb40">{content.popularCategories.heading}</h3>
        </div>
        <div className="owl-carousel owl-2">
          {content.popularCategories.categories.map((service, index) => (
            <div className="media-29101" key={index}>
              <a href="#">
              <img
                src={service.image} // Prefix with `/`
                alt={service.title}
                className="img-fluid"
                onError={(e) => {
                  console.error("Failed to load image:", service.image);
                  e.currentTarget.style.display = "none";
                }}
              />   
              </a>
              <div className="service-cotent">
                <h3>
                  <a href="#">{service.title}</a>
                </h3>
                <h5>{service.subtitle}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Joboy Section */}
      <section className="pattern pt40 pb40">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-7">
              <h2 className="h2block pb15">{content.whyJoboy.title1}</h2>
              <p className="pb40">{content.whyJoboy.desc1}</p>

              <h2 className="h2block pb15">{content.whyJoboy.title2}</h2>
              <p className="pb40">{content.whyJoboy.desc2}</p>

              <div className="row">
                {[0, 1].map((col) => (
                  <div className="col-sm-6" key={col}>
                    <ul className="td-list mb-20">
                      {content.whyJoboy.features.slice(col * 4, col * 4 + 4).map((point, i) => (
                        <li key={i}>
                          <i>
                            <img
                              src="/joboyimages/tck-mark.png"
                              alt={point.toLowerCase()}
                            />
                          </i>{" "}
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-sm-12 col-md-5">
              <img
                src={content.whyJoboy.image}
                className="img-fluid"
                alt="Why Joboy"
                onError={(e) => {
                  console.error(`Failed to load Why Joboy image: ${content.whyJoboy.image}`);
                  e.currentTarget.style.display = 'none';
                }}
                onLoad={() => console.log(`Successfully loaded Why Joboy image: ${content.whyJoboy.image}`)}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyJoboySection;
