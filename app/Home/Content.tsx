"use client";

import React, { useEffect, useState } from "react";
import { fetchPageContent }  from "../../utils/api";

// Types for expected content structure
type Category = {
  title: string;
  image: string;
  subtitle: string;
};

type WhyJoboyContent = {
  title1: string;
  desc1: string;
  title2: string;
  desc2: string;
  features: string[];
  image: string;
};

type HomeContent = {
  popularCategories: {
    heading: string;
    categories: Category[];
  };
  whyJoboy: WhyJoboyContent;
};

export default function WhyJoboySection(): React.ReactElement {
  const [content, setContent] = useState<HomeContent | null>(null);

  useEffect(() => {
  async function fetchHomeContent() {
    try {
      const data = await fetchPageContent("home");
      if (data && data.content) {
        setContent({
          popularCategories: data.content.popularCategories,
          whyJoboy: data.content.whyJoboy,
        });
      }
    } catch (err) {
      console.error("Failed to fetch Home content", err);
    }
  }

  fetchHomeContent();
}, []);


  useEffect(() => {
    if (!content) return;

    const $ = (window as any).$;
    if (!$) return;


    // Owl Carousel for testimonials
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
    992: { items: 4 }
  }
});

  }, [content]);

  if (!content) return <div className="text-center pt40">Loading news & testimonials...</div>;

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
                    src={service.image}
                    alt={service.title}
                    className="img-fluid"
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
                      {content.whyJoboy.features
                        .slice(col * 4, col * 4 + 4)
                        .map((point, index) => (
                          <li key={index}>
                            <i>
                              <img
                                src="joboyimages/tck-mark.png"
                                alt={point.toLowerCase().replace(/\s+/g, "-")}
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
                alt="how does joboy help?"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
