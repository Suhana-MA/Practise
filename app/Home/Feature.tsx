"use client";
import React, { useEffect, useState, useRef } from "react";

interface ServiceSliderItem {
  title: string;
  image: string;
  alt: string;
}

interface HelpItem {
  title: string;
  image: string;
  description: string;
}

interface FeatureContent {
  servicesSlider: ServiceSliderItem[];
  howWeHelp: {
    heading: string;
    items: HelpItem[];
    sideImage: string;
  };
}

interface HomePageResponse {
  name: string;
  slug_url: string;
  content: FeatureContent;
  updatedAt: string;
}

export default function Feature(): React.ReactElement {
  const [data, setData] = useState<HomePageResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:5000/api/page/get-page", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ slug_url: "home" }),
        });
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
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

  // Initialize slider functionality after data loads
 

  if (loading) return <div className="text-center pt40">Loading...</div>;
  if (error || !data) return <div className="text-center pt40">Error loading content.</div>;

  const { servicesSlider, howWeHelp } = data.content;

  return (
    <>
      {/* Services Slider */}
      <section className="popular-services" style= {{ padding: '40px 0'}}>
        <div className="container">
          <div className="customer-logos slider" ref={sliderRef} style={{display: 'flex',  justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
            {servicesSlider.map((item, index) => (
              <div 
                className="slide" 
                key={index}
                
              >
                <div className={`features bg${index} text-center mt-25 pb-20`}>
                  <div className="icon mb-20">
                    {item.image && (
                      <img 
                        src={item.image.startsWith('http') ? item.image : `/${item.image}`}
                        alt={item.alt || item.title || "Service"} 
                        style={{ maxWidth: '80px', height: 'auto' }}
                        onError={(e) => {
                          console.error(`Failed to load image: /${item.image}`);
                          console.error('Full error:', item);
                           const target = e.currentTarget;

                           if (!target.src.includes('joboyimages/')) {
                            console.log('Trying alternative path with joboyimages/');
                            target.src = `joboyimages/${item.image.split('/').pop()}`;
                          } else {
                            target.style.display = 'none';
                          }

                        }}
                        onLoad={() => {
                          console.log(`Successfully loaded:/${item.image}`);
                        }}
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
            {howWeHelp.heading.split(" ").slice(0, 2).join(" ")}{" "}
            <span>{howWeHelp.heading.split(" ").slice(2).join(" ")}</span>
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
                          onError={(e) => {
                            console.error(`Failed to load image: /${item.image}`);
                            e.currentTarget.style.display = 'none';
                          }}
                          onLoad={() => {
                            console.log(`Successfully loaded: /${item.image}`);
                          }}
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
                onError={(e) => {
                  console.error(`Failed to load image: /${howWeHelp.sideImage}`);
                  e.currentTarget.style.display = 'none';
                }}
                onLoad={() => {
                  console.log(`Successfully loaded: /${howWeHelp.sideImage}`);
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}