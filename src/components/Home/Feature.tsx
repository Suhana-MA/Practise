// Feature.tsx
"use client";

import React, { useEffect, useState, useRef } from "react";
import { fetchFeaturePageData } from "./feature.data";
import { FeatureContent, HomePageResponse } from "../../types/feature.types";

export default function Feature(): React.ReactElement {
  const [data, setData] = useState<HomePageResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const json = await fetchFeaturePageData();
        setData(json);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <div className="text-center pt40">Loading...</div>;
  if (error || !data) return <div className="text-center pt40">Error loading content.</div>;

  const { servicesSlider, howWeHelp } = data.content;

  return (
    <>
      {/* Services Slider */}
      <section className="popular-services" style={{ padding: '40px 0' }}>
        <div className="container">
          <div className="customer-logos slider" ref={sliderRef} style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
            {servicesSlider.map((item, index) => (
              <div className="slide" key={index}>
                <div className={`features bg${index} text-center mt-25 pb-20`}>
                  <div className="icon mb-20">
                    {item.image && (
                      <img
                        src={item.image.startsWith('http') ? item.image : `/${item.image}`}
                        alt={item.alt || item.title || "Service"}
                        style={{ maxWidth: '80px', height: 'auto' }}
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (!target.src.includes('joboyimages/')) {
                            target.src = `joboyimages/${item.image.split('/').pop()}`;
                          } else {
                            target.style.display = 'none';
                          }
                        }}
                        onLoad={() => console.log(`Successfully loaded:/${item.image}`)}
                      />
                    )}
                  </div>
                  <div className="content">
                    <h4 className="features-title">{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="pb40 pt40">
        <div className="container">
          <h2 className="h2block pb25">
            {howWeHelp.heading.split(" ").slice(0, 2).join(" ")} <span>{howWeHelp.heading.split(" ").slice(2).join(" ")}</span>
          </h2>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              {[0, 2, 4].map((startIndex, groupIndex) => (
                <div className="row pb15" key={groupIndex}>
                  {howWeHelp.items.slice(startIndex, startIndex + 2).map((item, index) => (
                    <div className="col-sm-6" key={index}>
                      {item.image && (
                        <img
                          src={`/${item.image}`}
                          alt={item.title}
                          onError={(e) => (e.currentTarget.style.display = 'none')}
                          onLoad={() => console.log(`Successfully loaded: /${item.image}`)}
                        />
                      )}
                      <h4 className="pt15 pb15">{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="col-sm-12 col-md-6">
              <img
                src={`/${howWeHelp.sideImage}`}
                className="img-fluid"
                alt="How Joboy helps you"
                onError={(e) => (e.currentTarget.style.display = 'none')}
                onLoad={() => console.log(`Successfully loaded: /${howWeHelp.sideImage}`)}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
