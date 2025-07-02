"use client";

import React, { useEffect, useState } from "react";
import {
  PageContentData,
  HeroSection,
  AboutSection,
  ServicesSection,
  HowItWorksSection,
} from "../../types/mission.types";
import { fetchMissionPageData } from "./mission.data";

export default function MissionPage() {
  const [pageData, setPageData] = useState<PageContentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchMissionPageData().then((data) => {
      if (data) {
        setPageData(data);
      } else {
        setError(true);
      }
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="text-center pt40">Loading mission content...</div>;
  if (error || !pageData) return <div className="text-center pt40">Error loading mission data.</div>;

  const getSection = (type: string) => pageData.content.sections.find((s) => s.type === type);

  // You can still extract this if you need meta or structured data
  const hero = getSection("hero") as HeroSection;
  const about = getSection("about") as AboutSection;
  const services = getSection("services") as ServicesSection;
  const how = getSection("how_it_works") as HowItWorksSection;

  return (
    <>
      {/* Removed: banner/hero image section */}

      {about && (
        <section className="pt40 pb40">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="about">
                  <h1 className="h1-about">{about.title}</h1>
                  <h5><strong>{about.subtitle}</strong></h5>
                </div>
              </div>
              <div className="col-md-6 left-border">
                <div className="pt15 pb15">
                  <p className="pb15">{about.description}</p>
                  <button className="btn book-now-btn text-uppercase">{about.cta}</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {services && (
        <div className="services pb40">
          <div className="container">
            <div className="row">
              {services.items.map((service, i) => (
                <div key={i} className="col-lg-4 col-md-6 pd_0">
                  <div className={`iconbox3 ${['first', 'second', 'third', 'four', 'five'][i % 5]}`}>
                    <div className="iconbox_wrapper">
                      <div className="iconbox_image">
                        <div className="iconbox_icon">
                          <img src={service.image.src || service.image.image} alt={service.image.alt} />
                        </div>
                      </div>
                      <div className="iconbox_content">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {how && (
        <div
          className="fun-fact-area text-center bg-fixed shadow dark-hard pt40 pb40"
          style={{ backgroundImage: `url(${how.background_image})` }}
        >
          <div className="container">
            <h2 className="pb40 h1">{how.title}</h2>
            <div className="row">
              {how.steps.map((step, i) => (
                <div key={i} className="col-md-4 item">
                  <div className="fun-fact">
                    <div className="timer">{step.step}</div>
                    <span className="medium">{step.title}</span>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
