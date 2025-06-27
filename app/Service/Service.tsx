"use client";

import React, { useEffect, useState } from "react";
import { fetchPageContent }  from "../../utils/api";

type LinkColumn = {
  label: string;
  href: string;
};

type SectionData = {
  isGray: boolean;
  title: string;
  image: string;
  alt: string;
  content: string;
  links: {
    column1: LinkColumn[];
    column2: LinkColumn[];
  };
};

export default function JoboyServices(): React.ReactElement {
  const [bannerImage, setBannerImage] = useState("");
  const [heading, setHeading] = useState("");
  const [subheading, setSubheading] = useState("");
  const [introText, setIntroText] = useState("");
  const [sections, setSections] = useState<SectionData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
  async function fetchServicePage() {
    try {
      const data = await fetchPageContent("services");

      if (!data || !data.content) throw new Error("Invalid response");

      const { bannerImage, heading, subheading, introText, sections } = data.content;

      setBannerImage(bannerImage);
      setHeading(heading);
      setSubheading(subheading);
      setIntroText(introText);
      setSections(sections || []);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching services:", err);
      setError(true);
      setLoading(false);
    }
  }

  fetchServicePage();
}, []);

  if (loading) return <div className="text-center pt40">Loading...</div>;
  if (error) return <div className="text-center pt40">Error loading services data.</div>;

  return (
    <>
      
      {bannerImage && (
        <section>
          <img src={bannerImage} className="img-fluid" alt="Joboy Home Services" />
        </section>
      )}

      
      <section className="pb40 pt40">
        <div className="text-center service-bg">
          <h1 className="serviceh1">{heading}</h1>
          <h2 className="text-uppercase serviceh2">{subheading}</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="text-center">{introText}</div>
          </div>
        </div>
      </section>

      
      {sections.map((section, idx) => (
        <Section key={idx} {...section} isGray={idx % 2 === 0} />
        ))}

    </>
  );
}


type SectionProps = SectionData & { isGray: boolean };


function Section({ title, image, alt, content, links, isGray }: SectionProps): React.ReactElement {
  return (
    <section className={`${isGray ? "gray-bg" : ""} pt40 pb40`}>

      <div className="container">
        <div className="pb40 text-center">
          <h2 className="city-head">{title}</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p className="pb15">{content}</p>
            <div className="row">
              <div className="col-sm-6">
                <ul className="td-list mb-20">
                  {links.column1.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>
                        <i>
                          <img src="joboyimages/tck-mark.png" alt={link.label} />
                        </i>{" "}
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="td-list mb-20">
                  {links.column2.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>
                        <i>
                          <img src="joboyimages/tck-mark.png" alt={link.label} />
                        </i>{" "}
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <img src={image} className="img-fluid" alt={alt} />
          </div>
        </div>
      </div>
    </section>
  );
}
