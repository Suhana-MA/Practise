// src/app/services/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { SectionData, ServicePageData } from "../../types/service.types";
import { fetchServicePageData } from "./service.data";
import Section from "./section";

export default function JoboyServices(): React.ReactElement {
  const [data, setData] = useState<ServicePageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchServicePageData()
      .then((res) => {
        if (res) setData(res);
        else setError(true);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Service Page Error:", err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center pt40">Loading...</div>;
  if (error || !data) return <div className="text-center pt40">Error loading services data.</div>;

  return (
    <>
      
      <section className="pb40 pt40">
        <div className="text-center service-bg">
          <h1 className="serviceh1">{data.heading}</h1>
          <h2 className="text-uppercase serviceh2">{data.subheading}</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="text-center">{data.introText}</div>
          </div>
        </div>
      </section>

      {data.sections.map((section, idx) => (
        <Section key={idx} {...section} isGray={idx % 2 === 0} />
      ))}
    </>
  );
}
