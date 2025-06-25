"use client";
import React, { useEffect, useState } from "react";


interface ImageData {
  src?: string;
  image?: string;
  alt: string;
}

interface ServiceItem {
  title: string;
  description: string;
  image: ImageData;
}

interface Step {
  step: string;
  title: string;
  description: string;
}

interface HeroSection {
  type: 'hero';
  banner: ImageData;
}

interface AboutSection {
  type: 'about';
  title: string;
  subtitle: string;
  description: string;
  cta: string;
}

interface ServicesSection {
  type: 'services';
  title: string;
  items: ServiceItem[];
}

interface HowItWorksSection {
  type: 'how_it_works';
  title: string;
  background_image: string;
  steps: Step[];
}

type ContentSection = HeroSection | AboutSection | ServicesSection | HowItWorksSection;

interface PageContentData {
  name: string;
  content: {
    sections: ContentSection[];
  };
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  author: string;
  tags: string[];
  slug_url: string;
  updatedAt: string;
}

export default function MissionPage(): React.ReactElement {
  const [pageData, setPageData] = useState<PageContentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMissionData() {
      try {
        const res = await fetch("http://localhost:5000/api/page/get-page", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ slug_url: "mission" })
        });

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const data = await res.json();
        setPageData(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching mission data:", err);
        setError(true);
        setLoading(false);
      }
    }

    fetchMissionData();
  }, []);

  if (loading) {
    return <div className="text-center pt40">Loading mission content...</div>;
  }

  if (error) {
    return <div className="text-center pt40">Error loading mission data.</div>;
  }

  if (!pageData) {
    return <div className="text-center pt40">No mission data found.</div>;
  }

  return <DynamicMissionPage pageData={pageData} />;
}


interface DynamicMissionPageProps {
  pageData: PageContentData;
}

const DynamicMissionPage: React.FC<DynamicMissionPageProps> = ({ pageData }) => {
  const { content } = pageData;

  
  const getSection = (type: string) => {
    return content.sections.find(section => section.type === type);
  };

  const heroSection = getSection('hero') as HeroSection;
  const aboutSection = getSection('about') as AboutSection;
  const servicesSection = getSection('services') as ServicesSection;
  const howItWorksSection = getSection('how_it_works') as HowItWorksSection;

  return (
    <>
      
      {heroSection && (
        <section>
          <img 
            src={heroSection.banner.image || heroSection.banner.src} 
            className="img-fluid" 
            alt={heroSection.banner.alt} 
          />
        </section>
      )}

      
      {aboutSection && (
        <section className="pt40 pb40">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="about">
                  <h1 className="h1-about">
                    {aboutSection.title}
                  </h1>
                  <h5>
                    <strong>{aboutSection.subtitle}</strong>
                  </h5>
                </div>
              </div>
              <div className="col-md-6 left-border">
                <div className="pt15 pb15">
                  <p className="pb15">
                    {aboutSection.description}
                  </p>
                  <button className="btn book-now-btn text-uppercase" type="submit">
                    {aboutSection.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      
      {servicesSection && (
        <div className="services pb40">
          <div className="container">
            <div className="row">
              {servicesSection.items.map((service, index) => {
                
                const getServiceClass = (idx: number) => {
                  const classes = ['first', 'second', 'third', 'four', 'five', 'second'];
                  return classes[idx] || 'second';
                };

                return (
                  <div key={index} className="col-lg-4 col-md-6 pd_0">
                    <div className={`iconbox3 ${getServiceClass(index)}`}>
                      <div className="iconbox_wrapper">
                        <div className="iconbox_image">
                          <div className="iconbox_icon">
                            <img
                              className="first_icon"
                              src={service.image.src || service.image.image}
                              alt={service.image.alt}
                            />
                          </div>
                        </div>
                        <div className="iconbox_content">
                          <h3>{service.title}</h3>
                          <p>{service.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

     
      {howItWorksSection && (
        <div
          className="fun-fact-area text-center bg-fixed shadow dark-hard pt40 pb40"
          style={{ backgroundImage: `url(${howItWorksSection.background_image})` }}
        >
          <div className="container">
            <h2 className="pb40 h1">{howItWorksSection.title}</h2>
            <div className="row">
              {howItWorksSection.steps.map((step, index) => (
                <div key={index} className="col-md-4 item">
                  <div className="fun-fact">
                    <div className="timer" data-to={38 + index * 1000} data-speed={5000}>
                      {step.step}
                    </div>
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
};